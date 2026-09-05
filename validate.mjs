// Pre-deploy checks. Run with: node validate.mjs
import { readFile, readdir, stat } from "node:fs/promises";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const SITE = "https://vivaanmarketing.com";
const problems = [];
const notes = [];

async function walk(dir, acc = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (["node_modules", ".git", "src", "assets"].includes(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p, acc);
    else if (e.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

const files = await walk(ROOT);
const routes = new Set(["/"]);
for (const f of files) {
  const rel = "/" + relative(ROOT, f).replace(/\\/g, "/");
  routes.add(rel === "/index.html" ? "/" : rel.replace(/index\.html$/, ""));
}

const titles = new Map();
const descs = new Map();

for (const f of files) {
  const rel = "/" + relative(ROOT, f).replace(/\\/g, "/");
  const html = await readFile(f, "utf8");
  const tag = (re) => (html.match(re) || [])[1];

  // --- head essentials ---
  const title = tag(/<title>([^<]*)<\/title>/);
  const desc = tag(/<meta name="description" content="([^"]*)"/);
  const canon = tag(/<link rel="canonical" href="([^"]*)"/);
  const h1s = html.match(/<h1[^>]*>/g) || [];

  if (!title) problems.push(rel + ": missing <title>");
  if (!desc) problems.push(rel + ": missing meta description");
  if (!canon) problems.push(rel + ": missing canonical");
  if (h1s.length !== 1) problems.push(rel + ": has " + h1s.length + " h1 tags, expected exactly 1");

  if (title && title.length > 62) notes.push(rel + ": title is " + title.length + " chars (over 62 may truncate)");
  if (desc && (desc.length < 110 || desc.length > 172))
    notes.push(rel + ": description is " + desc.length + " chars (aim 110-172)");

  if (title) {
    if (titles.has(title)) problems.push("Duplicate title on " + rel + " and " + titles.get(title));
    titles.set(title, rel);
  }
  if (desc) {
    if (descs.has(desc)) problems.push("Duplicate description on " + rel + " and " + descs.get(desc));
    descs.set(desc, rel);
  }

  // --- canonical must match the actual route ---
  const route = rel === "/index.html" ? "/" : rel.replace(/index\.html$/, "");
  if (canon && !rel.endsWith("404.html") && canon !== SITE + route)
    problems.push(rel + ": canonical " + canon + " does not match route " + SITE + route);

  // --- JSON-LD parses ---
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!blocks.length) problems.push(rel + ": no JSON-LD");
  for (const b of blocks) {
    try {
      const parsed = JSON.parse(b[1]);
      if (!parsed["@context"]) problems.push(rel + ": JSON-LD missing @context");
    } catch (err) {
      problems.push(rel + ": JSON-LD does not parse (" + err.message + ")");
    }
  }

  // --- copy rules ---
  if (html.includes("—")) problems.push(rel + ": contains an em dash (brand rule: none)");
  if (/Sachin|Devmurari/.test(html.replace(/mailto:[^"']*/g, "")))
    problems.push(rel + ": personal name appears outside a mailto link");
  if (/lorem ipsum/i.test(html)) problems.push(rel + ": placeholder text left in");

  // --- internal links resolve ---
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = m[1];
    if (href.startsWith("/assets/")) continue;
    if (!routes.has(href)) problems.push(rel + ": broken internal link to " + href);
  }

  // --- render-blocking / CWV smells ---
  if (/@import/.test(html)) problems.push(rel + ": @import in HTML (render blocking)");
  if (/fonts\.googleapis|fonts\.gstatic/.test(html)) problems.push(rel + ": third-party font request");
  const extScripts = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)];
  if (extScripts.length) notes.push(rel + ": " + extScripts.length + " external script(s)");
  if (/<img /.test(html) && !/<img [^>]*(width|height)=/.test(html))
    notes.push(rel + ": <img> without explicit dimensions (CLS risk)");
}

// --- assets exist ---
for (const a of ["assets/site.css", "assets/fonts/inter-latin.woff2", "assets/favicon.svg", "assets/social-card.png", "assets/logo.svg"]) {
  try {
    await stat(join(ROOT, a));
  } catch {
    problems.push("Missing asset: " + a);
  }
}

// --- sitemap covers every indexable route ---
const sitemap = await readFile(join(ROOT, "sitemap.xml"), "utf8");
for (const r of routes) {
  if (r.endsWith("404.html")) continue;
  if (!sitemap.includes("<loc>" + SITE + r + "</loc>")) problems.push("Sitemap missing route: " + r);
}
const robots = await readFile(join(ROOT, "robots.txt"), "utf8");
for (const bot of ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "OAI-SearchBot"])
  if (!robots.includes(bot)) problems.push("robots.txt does not mention " + bot);
if (!robots.includes("Sitemap: " + SITE + "/sitemap.xml")) problems.push("robots.txt missing sitemap line");

console.log("Checked " + files.length + " pages, " + routes.size + " routes.\n");
if (notes.length) {
  console.log("Notes (" + notes.length + "):");
  notes.forEach((n) => console.log("  - " + n));
  console.log("");
}
if (problems.length) {
  console.log("PROBLEMS (" + problems.length + "):");
  problems.forEach((p) => console.log("  x " + p));
  process.exit(1);
}
console.log("All checks passed.");
