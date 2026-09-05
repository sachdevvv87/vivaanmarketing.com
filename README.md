# Vivaan Marketing

Website for **Vivaan Marketing**, a B2B SaaS marketing and AI visibility agency.
Static, no framework, no runtime dependencies.

- **Repo:** `sachdevvv87/vivaanmarketing.com`
- **Host:** GitHub Pages, `master` branch, root path
- **Domain:** `vivaanmarketing.com` (set by the `CNAME` file)

## Quick start

```bash
node build.mjs      # regenerate every page, sitemap, robots.txt and llms.txt
node validate.mjs   # pre-deploy checks, exits non-zero on any problem
```

Then commit and push. GitHub Pages redeploys automatically.

## How it works

Pages are **generated**, not hand-edited. Editing `index.html` directly is wrong,
because the next build overwrites it.

| Path | What it is |
|---|---|
| `src/layout.mjs` | The shell: head, meta, schema graph, nav, footer, section builders. Brand constants at the top. |
| `src/content.mjs` | Every page's copy and structure. This is the file you edit. |
| `build.mjs` | Writes the HTML, `sitemap.xml`, `robots.txt`, `llms.txt`, `_headers`, `vercel.json`. |
| `validate.mjs` | Checks canonicals, internal links, JSON-LD, duplicate meta, copy rules, CWV smells. |
| `assets/site.css` | The only stylesheet. One request, cached across all pages. |
| `assets/fonts/` | Self-hosted Inter variable subset. Do not replace this with a Google Fonts link. |
| `SEO-PLAN.md` | Keyword map, AI search strategy, the 12-post blog plan, launch checklist. |

### To change copy

Edit `src/content.mjs`, run `node build.mjs && node validate.mjs`, commit, push.

### To add a page

Add a page object to `src/content.mjs` and include it in the exported `pages` array.
Set `path` with a trailing slash (`/services/new-thing/`). The build creates the
directory, the sitemap entry, the breadcrumb schema and the canonical automatically.

### To change the brand email or domain

`src/layout.mjs`, top of file: `SITE`, `BRAND`, `EMAIL`, `LINKEDIN`. Defined once and
used everywhere, including schema, `llms.txt` and every prefilled mailto link.

## Pages

12 indexable pages plus a `noindex` 404:

- `/` home
- `/services/` hub, plus six service pages (AEO, GEO, B2B SaaS SEO, content writing,
  content marketing, LinkedIn personal branding)
- `/free-ai-visibility-audit/` the lead magnet, and the primary conversion target
- `/results/`, `/about/`, `/contact/`

**There is no blog yet, deliberately.** See `SEO-PLAN.md` section 5 for the first twelve
posts in commissioning order and the rules each one must follow.

## SEO and AI search

- Complete `@graph` on every page: `ProfessionalService`, `Organization`, `WebSite`,
  `WebPage`, `BreadcrumbList`, plus `Service`, `FAQPage`, `HowTo` and `Offer` where they apply.
- The organisation node repeats on every page, so any single crawled URL carries the
  full entity definition.
- Answer-first blocks, question-form H2s and a comparison table on every commercial page.
  These are what AI answer engines extract.
- `robots.txt` explicitly allows GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot,
  Google-Extended, Applebot-Extended and others by name.
- `llms.txt` is a structured brand brief for models, including definitions and an explicit
  statement that no blog exists yet.

## Core Web Vitals

- No render-blocking third-party requests. Inter is self-hosted, preloaded, `font-display: swap`.
  The original build imported Google Fonts from inside CSS, which is the worst case for LCP.
- One 24KB stylesheet, cached across all pages.
- Effectively no JavaScript: a single inline function for the mobile nav.
- No layout-shifting elements. LCP is server-rendered H1 text.
- Immutable cache headers on fonts, configured for Netlify (`_headers`) and Vercel (`vercel.json`).
  GitHub Pages ignores both and sets its own, which is acceptable but not optimal.

## Copy rules

Enforced by `validate.mjs`, which exits non-zero if any is broken:

- No em dashes anywhere.
- No personal names outside `mailto:` links.
- Exactly one `<h1>` per page.
- No duplicate titles or meta descriptions.
- Every internal link must resolve to a real route.
- Every canonical must match the route it sits on.

## DNS

The apex domain must point at GitHub Pages:

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  sachdevvv87.github.io.
```

At time of writing the domain still resolved to Wix (`185.230.63.x`), so these records
replace whatever Wix set. After DNS propagates, enable **Enforce HTTPS** in the repo's
Pages settings. GitHub provisions the certificate automatically, which can take up to
an hour after the records resolve.

## Deployment

`.nojekyll` stops Pages from running Jekyll and skipping underscore-prefixed files.
Push to `master` and it redeploys. Always run `node validate.mjs` first.

## Later: adding a CMS

The site is static HTML in a git repo, so a git-based CMS (Decap or Sveltia) can be added
without changing hosting or rebuilding the front end. Both give a real admin UI that
commits to this repo. A headless CMS like Strapi would require rebuilding the front end as
a framework app and paying to host the backend, which is not worth it at this size.
