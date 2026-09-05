// Shared shell for every page. No client framework, one stylesheet, one tiny inline script.

export const SITE = "https://vivaanmarketing.com";
export const BRAND = "Vivaan Marketing";
export const EMAIL = "devmurari.sachin87@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/vivaan-martech-868863165/";

// Prefilled mailto so the async intake needs no backend and no form service.
export function mailto(subject, body) {
  return (
    "mailto:" +
    EMAIL +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body)
  );
}

export const AUDIT_MAILTO = mailto(
  "Free AI Visibility Audit request",
  [
    "Hi,",
    "",
    "I would like the free AI Visibility Audit. Here are my three lines:",
    "",
    "1. Website: ",
    "2. Category (how buyers describe what we sell): ",
    "3. Top three competitors: ",
    "",
    "Thanks,",
  ].join("\n")
);

export const NAV_SERVICES = [
  ["/services/answer-engine-optimization/", "Answer Engine Optimization", "Get quoted in ChatGPT and Perplexity answers"],
  ["/services/generative-engine-optimization/", "Generative Engine Optimization", "Win citations in Google AI Overviews and Gemini"],
  ["/services/b2b-saas-seo/", "B2B SaaS SEO", "Topical authority that compounds into pipeline"],
  ["/services/content-writing/", "Content Writing", "Long-form written by senior B2B specialists"],
  ["/services/content-marketing/", "Content Marketing", "Editorial calendars tied to revenue KPIs"],
  ["/services/linkedin-personal-branding/", "LinkedIn Personal Branding", "Founder presence, ghostwritten and consistent"],
];

const ICONS = {
  aeo: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="3.4"/>',
  geo: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18"/>',
  seo: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.4 15.4L21 21"/>',
  write: '<path d="M4 20h16M5 16.5L16.8 4.7a2 2 0 0 1 2.8 2.8L7.8 19.3 4 20l.7-3.8z"/>',
  market: '<path d="M3 20V10M9 20V4M15 20v-7M21 20V8"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10.5V17M7.5 7.2v.1M11.5 17v-3.6a2.4 2.4 0 0 1 4.8 0V17"/>',
  audit: '<path d="M9 4h6l1 3H8l1-3zM6 7h12l1.2 12.2a1.6 1.6 0 0 1-1.6 1.8H6.4a1.6 1.6 0 0 1-1.6-1.8L6 7z"/><path d="M9.5 12.5l1.8 1.8 3.4-3.4"/>',
  quote: '<path d="M12 3l2.4 5.6L20 10l-4.4 3.6L17 20l-5-3.2L7 20l1.4-6.4L4 10l5.6-1.4L12 3z"/>',
};

export function icon(name) {
  return (
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    (ICONS[name] || ICONS.seo) +
    "</svg>"
  );
}

// The mark: a V split into a cyan-blue arm carrying a person and a deep navy
// arm carrying a circuit. Gradient ids are suffixed per instance because the
// same mark is inlined more than once per page.
function logoSvg(id) {
  const L = id + "L", R = id + "R";
  return (
    '<svg viewBox="0 0 200 200" width="32" height="32" aria-hidden="true" focusable="false">' +
    "<defs>" +
    '<linearGradient id="' + L + '" x1="0" y1="0" x2="0.7" y2="1">' +
    '<stop offset="0" stop-color="#35B8EC"/><stop offset="1" stop-color="#1878CE"/></linearGradient>' +
    '<linearGradient id="' + R + '" x1="1" y1="0" x2="0.2" y2="1">' +
    '<stop offset="0" stop-color="#2A5FC4"/><stop offset="1" stop-color="#112C6F"/></linearGradient>' +
    "</defs>" +
    '<path d="M30 34 L66 34 L100 110 L100 174 Z" fill="url(#' + L + ')"/>' +
    '<path d="M170 34 L134 34 L100 110 L100 174 Z" fill="url(#' + R + ')"/>' +
    '<circle cx="68" cy="66" r="9" fill="#fff"/>' +
    '<path d="M57 97c0-9.4 4.9-17 11-17s11 7.6 11 17z" fill="#fff"/>' +
    '<g stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round">' +
    '<path d="M140 58 126 84M126 84 114 110M126 84 146 74"/></g>' +
    '<g fill="#fff"><circle cx="140" cy="58" r="4.6"/><circle cx="126" cy="84" r="4.6"/>' +
    '<circle cx="146" cy="74" r="3.4"/><circle cx="114" cy="110" r="4"/></g>' +
    "</svg>"
  );
}

function nav(active) {
  const cur = (href) => (active === href ? ' class="current"' : "");
  const sub = NAV_SERVICES.map(
    ([href, label, blurb]) =>
      '<a href="' + href + '">' + label + "<span>" + blurb + "</span></a>"
  ).join("");

  return (
    '<header class="nav">' +
    '<div class="nav-inner" id="navInner">' +
    '<a class="brand" href="/" aria-label="' + BRAND + ' home">' +
    logoSvg("navGrad") +
    '<span><span class="word">VIVAAN</span><span class="desc">MARKETING</span></span>' +
    "</a>" +
    '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="navLinks" aria-label="Open menu" id="navToggle">' +
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
    '<nav class="nav-links" id="navLinks" aria-label="Primary">' +
    '<details class="has-sub"><summary>Services</summary>' +
    '<div class="submenu">' +
    '<a href="/services/">All services<span>The full engagement map</span></a>' +
    sub +
    "</div></details>" +
    '<a href="/results/"' + cur("/results/") + ">Results</a>" +
    '<a href="/about/"' + cur("/about/") + ">About</a>" +
    '<a href="/free-ai-visibility-audit/"' + cur("/free-ai-visibility-audit/") + ">Free audit</a>" +
    '<a href="/contact/"' + cur("/contact/") + ">Contact</a>" +
    "</nav>" +
    '<a class="btn" href="' + AUDIT_MAILTO + '">Get Your Free Audit</a>' +
    "</div></header>"
  );
}

function footer() {
  const svc = NAV_SERVICES.map(
    ([href, label]) => '<li><a href="' + href + '">' + label + "</a></li>"
  ).join("");

  return (
    "<footer>" +
    '<div class="container">' +
    '<div class="foot-grid">' +
    "<div>" +
    '<a class="brand" href="/" aria-label="' + BRAND + ' home">' +
    logoSvg("footGrad") +
    '<span><span class="word">VIVAAN</span><span class="desc">MARKETING</span></span></a>' +
    '<p class="foot-tag">Marketing starts with people.</p>' +
    '<p class="foot-blurb">B2B SaaS marketing built for the era when buyers ask an AI before they open a search tab.</p>' +
    "</div>" +
    "<div><h4>Services</h4><ul>" + svc + "</ul></div>" +
    "<div><h4>Company</h4><ul>" +
    '<li><a href="/about/">About</a></li>' +
    '<li><a href="/results/">Results</a></li>' +
    '<li><a href="/contact/">Contact</a></li>' +
    '<li><a href="' + LINKEDIN + '" rel="me noopener">LinkedIn</a></li>' +
    "</ul></div>" +
    "<div><h4>Start here</h4><ul>" +
    '<li><a href="/free-ai-visibility-audit/">Free AI Visibility Audit</a></li>' +
    '<li><a href="' + AUDIT_MAILTO + '">Request the audit</a></li>' +
    '<li><a href="/services/">Compare services</a></li>' +
    "</ul></div>" +
    "</div>" +
    '<div class="foot-bar"><div class="foot-inner">' +
    "<span>&copy; " + new Date().getFullYear() + " " + BRAND + ". Ahmedabad, India. Serving B2B teams worldwide.</span>" +
    '<span class="spacer"></span>' +
    "<span>Answers before rankings.</span>" +
    "</div></div>" +
    "</div></footer>"
  );
}

export function breadcrumbs(trail) {
  if (!trail || !trail.length) return "";
  const items = trail
    .map((t, i) =>
      i === trail.length - 1
        ? '<li aria-current="page">' + t.name + "</li>"
        : '<li><a href="' + t.url + '">' + t.name + "</a></li>"
    )
    .join("");
  return '<div class="container"><div class="crumbs"><ol>' + items + "</ol></div></div>";
}

function crumbSchema(trail, selfPath) {
  if (!trail || trail.length < 2) return null;
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: SITE + (t.url || selfPath),
    })),
  };
}

export function faqSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>/g, "") },
    })),
  };
}

export function faqBlock(faqs) {
  return (
    '<div class="faq">' +
    faqs
      .map(
        (f) =>
          "<details><summary>" + f.q + "</summary>" +
          '<div class="ans">' + f.a + "</div></details>"
      )
      .join("") +
    "</div>"
  );
}

// The organisation graph node, repeated on every page so any single crawled URL
// carries the full entity definition.
function orgNode() {
  return {
    "@type": ["ProfessionalService", "Organization"],
    "@id": SITE + "/#org",
    name: BRAND,
    alternateName: "Vivaan Martech",
    url: SITE + "/",
    logo: { "@type": "ImageObject", url: SITE + "/assets/logo.svg" },
    image: SITE + "/assets/social-card.jpg",
    email: EMAIL,
    description:
      "B2B SaaS marketing agency specialising in AI search visibility. We make brands the source that ChatGPT, Google AI Overviews, Perplexity, Gemini and Claude cite, and back it with SEO, content and LinkedIn programmes.",
    slogan: "Answers before rankings.",
    foundingDate: "2024",
    sameAs: [LINKEDIN, "https://sachindevmurari.com"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: [
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "AI search visibility",
      "B2B SaaS SEO",
      "B2B content marketing",
      "LinkedIn personal branding",
      "Topical authority",
      "Schema markup",
    ],
    numberOfEmployees: { "@type": "QuantitativeValue", value: 6 },
  };
}

function siteNode() {
  return {
    "@type": "WebSite",
    "@id": SITE + "/#website",
    url: SITE + "/",
    name: BRAND,
    publisher: { "@id": SITE + "/#org" },
    inLanguage: "en",
  };
}

/**
 * page = {
 *   path, title, description, h1, trail, body,
 *   schema: []           extra @graph nodes
 *   og: "website"|"article"
 * }
 */
export function render(page) {
  const url = SITE + page.path;
  const graph = [orgNode(), siteNode()];

  graph.push({
    "@type": "WebPage",
    "@id": url + "#page",
    url: url,
    name: page.title,
    description: page.description,
    isPartOf: { "@id": SITE + "/#website" },
    about: { "@id": SITE + "/#org" },
    inLanguage: "en",
  });

  const cs = crumbSchema(page.trail, page.path);
  if (cs) graph.push(cs);
  (page.schema || []).forEach((n) => graph.push(n));

  const ld = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });

  return (
    "<!doctype html>\n" +
    '<html lang="en">\n<head>\n' +
    '<meta charset="utf-8">\n' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    "<title>" + page.title + "</title>\n" +
    '<meta name="description" content="' + page.description + '">\n' +
    '<link rel="canonical" href="' + url + '">\n' +
    '<meta name="robots" content="' +
      (page.noindex
        ? "noindex, follow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1") +
      '">\n' +
    '<link rel="preload" href="/assets/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>\n' +
    '<link rel="stylesheet" href="/assets/site.css">\n' +
    '<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">\n' +
    '<meta name="theme-color" content="#1878CE">\n' +
    '<meta property="og:site_name" content="' + BRAND + '">\n' +
    '<meta property="og:title" content="' + page.title + '">\n' +
    '<meta property="og:description" content="' + page.description + '">\n' +
    '<meta property="og:type" content="' + (page.og || "website") + '">\n' +
    '<meta property="og:url" content="' + url + '">\n' +
    '<meta property="og:image" content="' + SITE + '/assets/social-card.jpg">\n' +
    '<meta property="og:image:type" content="image/jpeg">\n' +
    '<meta property="og:image:width" content="1200">\n' +
    '<meta property="og:image:height" content="630">\n' +
    '<meta property="og:image:alt" content="Vivaan Marketing: your buyers ask AI first, make sure it names you">\n' +
    '<meta name="twitter:card" content="summary_large_image">\n' +
    '<meta name="twitter:title" content="' + page.title + '">\n' +
    '<meta name="twitter:description" content="' + page.description + '">\n' +
    '<meta name="twitter:image" content="' + SITE + '/assets/social-card.jpg">\n' +
    '<script type="application/ld+json">' + ld + "</script>\n" +
    "</head>\n<body>\n" +
    '<a class="skip" href="#main">Skip to content</a>\n' +
    nav(page.path) +
    '<main id="main">\n' +
    page.body +
    "\n</main>\n" +
    footer() +
    '\n<script>(function(){var t=document.getElementById("navToggle"),n=document.getElementById("navInner");' +
    't.addEventListener("click",function(){var o=n.classList.toggle("open");' +
    't.setAttribute("aria-expanded",o?"true":"false");t.setAttribute("aria-label",o?"Close menu":"Open menu");});})();</script>\n' +
    "</body>\n</html>\n"
  );
}

// ---------- reusable section builders ----------

export function pageHero({ kicker, h1, sub, ctaLabel, ctaHref, note, trail }) {
  return (
    '<div class="page-hero">' +
    breadcrumbs(trail) +
    '<div class="container"><div class="page-hero-inner">' +
    (kicker ? '<p class="kicker">' + kicker + "</p>" : "") +
    "<h1>" + h1 + "</h1>" +
    '<p class="sub">' + sub + "</p>" +
    '<div class="cta-row"><a class="btn big" href="' + (ctaHref || AUDIT_MAILTO) + '">' +
    (ctaLabel || "Get Your Free Audit") + "</a>" +
    '<a class="link-arrow" href="/services/">See all services</a></div>' +
    (note ? '<p class="cta-note">' + note + "</p>" : "") +
    "</div></div></div>"
  );
}

export function ctaPanel(title, text, fine) {
  return (
    '<div class="cta"><div class="container"><div class="cta-panel">' +
    "<h2>" + title + "</h2><p>" + text + "</p>" +
    '<div class="cta-row"><a class="btn big on-grad" href="' + AUDIT_MAILTO + '">Get Your Free Audit</a></div>' +
    '<p class="fine">' + (fine || "Three lines of intake. Delivered by email in five business days. No call required.") + "</p>" +
    "</div></div></div>"
  );
}

export function secHead(overline, h2, p, wide) {
  return (
    '<div class="sec-head' + (wide ? " wide" : "") + '">' +
    '<p class="overline">' + overline + "</p><h2>" + h2 + "</h2>" +
    (p ? "<p>" + p + "</p>" : "") +
    "</div>"
  );
}
