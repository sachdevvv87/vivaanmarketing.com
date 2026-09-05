import {
  SITE, BRAND, AUDIT_MAILTO, LINKEDIN, mailto,
  render, pageHero, ctaPanel, secHead, faqBlock, faqSchema, icon, breadcrumbs,
} from "./layout.mjs";

const HOME = { name: "Home", url: "/" };
const SERVICES = { name: "Services", url: "/services/" };

// ---------- shared fragments ----------

const STATS = [
  ["3x", "Average growth in AI citations for clients"],
  ["50+", "SaaS and enterprise brands served globally"],
  ["500+", "Long-form articles published and ranking"],
  ["6+ yrs", "In B2B tech content and search"],
];

function statBar() {
  return (
    '<div class="stats"><div class="container"><div class="stats-inner">' +
    STATS.map(
      ([n, d]) => '<div class="stat"><div class="n">' + n + '</div><div class="d">' + d + "</div></div>"
    ).join("") +
    "</div></div></div>"
  );
}

const CLIENTS = ["JungleWorks", "Testlify", "Scalenut", "Pepper Content", "MultiQoS", "INTECH"];

function clientWall() {
  return (
    '<div class="wall"><div class="container">' +
    '<p class="lab">Brands we have written and ranked for</p>' +
    '<div class="wall-row">' +
    CLIENTS.map((c) => "<span>" + c + "</span>").join("") +
    "</div></div></div>"
  );
}

function serviceSchema({ path, name, description, serviceType }) {
  return {
    "@type": "Service",
    "@id": SITE + path + "#service",
    name: name,
    serviceType: serviceType || name,
    description: description,
    provider: { "@id": SITE + "/#org" },
    areaServed: { "@type": "Country", name: "United States" },
    audience: { "@type": "BusinessAudience", audienceType: "B2B SaaS and enterprise technology companies" },
    url: SITE + path,
  };
}

function table(caption, head, rows) {
  return (
    '<div class="table-wrap"><table>' +
    (caption ? "<caption>" + caption + "</caption>" : "") +
    "<thead><tr>" + head.map((h) => "<th>" + h + "</th>").join("") + "</tr></thead><tbody>" +
    rows.map((r) => "<tr>" + r.map((c) => "<td>" + c + "</td>").join("") + "</tr>").join("") +
    "</tbody></table></div>"
  );
}

function cardsGrid(items) {
  return (
    '<div class="cards">' +
    items.map(
      (i) =>
        '<a class="card" href="' + i.href + '">' +
        '<span class="chip">' + icon(i.icon) + "</span>" +
        "<h3>" + i.title + "</h3><p>" + i.text + "</p>" +
        '<span class="go">' + (i.go || "Read more") + "</span></a>"
    ).join("") +
    "</div>"
  );
}

function steps(items) {
  return (
    '<div class="steps">' +
    items.map(
      (s, i) =>
        '<div class="step"><span class="num">' + (i + 1) + "</span>" +
        "<h3>" + s[0] + "</h3><p>" + s[1] + "</p></div>"
    ).join("") +
    "</div>"
  );
}

function answer(text) {
  return '<p class="answer-first">' + text + "</p>";
}

// ---------- HOME ----------

const homeFaqs = [
  {
    q: "What does Vivaan Marketing actually do?",
    a: "We are a B2B SaaS marketing agency that makes brands visible in AI answers and in search. Six services sit under one strategy: answer engine optimization, generative engine optimization, B2B SaaS SEO, content writing, content marketing, and LinkedIn personal branding. Most clients start with a free AI Visibility Audit and move to a monthly programme.",
  },
  {
    q: "How is AI visibility different from SEO?",
    a: "SEO earns a position in a list of ten blue links. AI visibility earns a mention inside a single generated answer, where there is no list and usually three to five sources. The mechanics differ: AI engines favour clearly defined entities, extractable answer blocks, structured data, and corroboration across third-party sources. Ranking first on Google does not guarantee a citation in ChatGPT.",
  },
  {
    q: "Which AI engines do you optimise for?",
    a: "ChatGPT and its search mode, Google AI Overviews and AI Mode, Perplexity, Google Gemini, Claude, and Microsoft Copilot. These systems draw on overlapping but distinct source pools, so we track each separately rather than assuming one score covers all of them.",
  },
  {
    q: "What does an engagement cost?",
    a: "The AI Visibility Audit is free. Monthly programmes typically run between 2,000 and 6,000 US dollars depending on how many of the six services are in scope and the publishing volume. There is no long lock-in, and pricing is agreed in writing before anything starts.",
  },
  {
    q: "How long before we see results?",
    a: "Technical and schema fixes can change AI citation behaviour within four to eight weeks because engines re-crawl frequently. Organic search movement is slower, usually three to six months for a competitive B2B category. Our published benchmark is one client moving from zero to eleven AI-cited keywords in six months.",
  },
  {
    q: "Do you work with companies outside the United States?",
    a: "Yes. We are based in Ahmedabad, India and work with B2B teams across the United States, United Kingdom, Canada, Australia and India. Delivery is asynchronous by default, which is why time zones have never been the constraint.",
  },
];

const home = {
  path: "/",
  title: "Vivaan Marketing | B2B SaaS Marketing and AI Visibility Agency",
  description:
    "B2B SaaS marketing agency for AI search. We make ChatGPT, Google AI Overviews and Perplexity cite your brand. Free AI Visibility Audit, no call required.",
  schema: [faqSchema(homeFaqs)],
  body:
    // hero
    '<div class="hero"><div class="container"><div class="hero-inner">' +
    "<div>" +
    '<p class="kicker">B2B SaaS marketing for the AI answer era</p>' +
    "<h1>Your buyers ask AI first. <span class=\"grad-text\">Make sure it names you.</span></h1>" +
    '<p class="sub">Vivaan Marketing is a <strong>B2B SaaS marketing agency</strong> that wins the citation, not just the ranking. We engineer the content, structure and authority that make ChatGPT, Google AI Overviews, Perplexity and Gemini quote your brand, then compound it with SEO, editorial and LinkedIn.</p>' +
    '<div class="cta-row"><a class="btn big" href="' + AUDIT_MAILTO + '">Get Your Free Audit</a>' +
    '<a class="link-arrow" href="/services/">Explore the six services</a></div>' +
    '<p class="cta-note">Three lines of intake. A full citation report in five business days. No call required.</p>' +
    "</div>" +
    // answer card visual
    '<div class="answer-stack"><div class="answer-glow"></div>' +
    '<span class="answer-tag">What buyers see today</span>' +
    '<div class="answer-card">' +
    '<div class="q"><span class="dot"></span><span>Best B2B SaaS onboarding tools for enterprise?</span></div>' +
    '<div class="a">Based on current reviews, the most cited options are <strong>Competitor A</strong><span class="cite">1</span>, <strong>Competitor B</strong><span class="cite">2</span> and <strong>Competitor C</strong><span class="cite">3</span>, which reviewers rate highest for enterprise rollout.' +
    '<div class="srcs"><span class="src-chip them">competitor-a.com</span><span class="src-chip them">g2.com</span><span class="src-chip them">competitor-b.com</span><span class="src-chip missing">yourbrand.com not cited</span></div>' +
    "</div></div></div>" +
    "</div></div></div>" +
    statBar() +
    clientWall() +

    // problem
    '<section><div class="container">' +
    secHead(
      "The shift",
      "Ranking first is no longer the same as being found",
      "A generated answer names three sources, not ten. Everything below the fold of an AI answer is invisible, and the brands being quoted are not always the ones ranking highest."
    ) +
    '<div class="split">' +
    '<div class="prose">' +
    "<h3>What changed</h3>" +
    "<p>Buyers now open ChatGPT, Perplexity or a Google AI Overview to shortlist vendors before they ever click a result. The engine answers in a paragraph and cites a handful of sources. If your category page is not one of them, you are not in the consideration set, and no amount of position-three ranking fixes that.</p>" +
    "<h3>Why the usual playbook stalls</h3>" +
    "<ul>" +
    "<li><strong>Keyword pages, not answer blocks.</strong> Engines extract self-contained definitions, not 2,000 words of build-up.</li>" +
    "<li><strong>Weak entity signals.</strong> If your brand is not clearly defined and corroborated off-site, the model has nothing confident to cite.</li>" +
    "<li><strong>Missing structure.</strong> No schema, no clean headings, no comparison tables, so nothing is machine-extractable.</li>" +
    "<li><strong>No measurement.</strong> Rank trackers do not tell you whether ChatGPT mentioned you last Tuesday.</li>" +
    "</ul>" +
    "</div>" +
    '<div class="audit-visual">' +
    '<div class="gap-row"><span class="kq">"best [your category] software"</span><span class="pill gap">Not cited</span></div>' +
    '<div class="gap-row"><span class="kq">"[competitor] alternatives"</span><span class="pill gap">Not cited</span></div>' +
    '<div class="gap-row"><span class="kq">"how to evaluate [category] vendors"</span><span class="pill cited">Cited</span></div>' +
    '<div class="gap-row"><span class="kq">"[category] pricing benchmarks"</span><span class="pill gap">Not cited</span></div>' +
    '<div class="gap-row"><span class="kq">"[category] for enterprise teams"</span><span class="pill cited">Cited</span></div>' +
    '<p class="cap">A sample of the citation map delivered in every free audit, scored across ChatGPT, Perplexity, Google AI Overviews and Gemini.</p>' +
    "</div></div>" +
    "</div></section>" +

    // services
    '<section id="services"><div class="container">' +
    secHead(
      "Services",
      "Six services, one compounding system",
      "Answer engines reward the same things buyers do: clarity, evidence and consistency. Each service feeds the next, so authority built in one channel shows up in the others."
    ) +
    cardsGrid([
      { href: "/services/answer-engine-optimization/", icon: "aeo", title: "Answer Engine Optimization", text: "Structure content so ChatGPT and Perplexity can lift a clean, attributable answer straight from your page.", go: "AEO services" },
      { href: "/services/generative-engine-optimization/", icon: "geo", title: "Generative Engine Optimization", text: "Build the entity, schema and third-party corroboration that get you cited in Google AI Overviews and Gemini.", go: "GEO services" },
      { href: "/services/b2b-saas-seo/", icon: "seo", title: "B2B SaaS SEO", text: "Topical maps and keyword clusters that own a category instead of chasing scattered volume.", go: "SaaS SEO" },
      { href: "/services/content-writing/", icon: "write", title: "Content Writing", text: "Long-form blogs, whitepapers and comparison pages written by specialists who understand the product.", go: "Content writing" },
      { href: "/services/content-marketing/", icon: "market", title: "Content Marketing", text: "Editorial calendars, distribution and reporting mapped to pipeline, not to traffic vanity metrics.", go: "Content marketing" },
      { href: "/services/linkedin-personal-branding/", icon: "linkedin", title: "LinkedIn Personal Branding", text: "Ghostwritten founder and executive presence that turns expertise into inbound demand.", go: "LinkedIn branding" },
    ]) +
    "</div></section>" +

    // process
    '<section><div class="container">' +
    secHead(
      "Process",
      "Asynchronous by design, so it fits your calendar",
      "No standing calls, no status meetings. You get artefacts you can forward to a board deck."
    ) +
    steps([
      ["You send three lines", "Website, category, top competitors. That is the entire intake."],
      ["We audit and baseline", "Citation status across four AI engines, mapped against your competitors, in your inbox in five business days."],
      ["We agree the scope", "The audit stands alone. If the gap is worth closing, we scope only the services that close it."],
      ["We ship and report", "Monthly execution with a citation and pipeline report tracking movement against the baseline."],
    ]) +
    "</div></section>" +

    // results
    '<section><div class="container">' +
    secHead("Proof", "Numbers we can point at", "No composite case studies and no invented logos. These are the results and the brands behind them.") +
    '<div class="results">' +
    '<div class="result"><div class="metric">0 to 11</div><h3>AI-cited keywords in six months</h3><p>A B2B SaaS client went from zero AI citations to eleven buyer-intent queries where engines now quote them by name.</p><span class="who">AI visibility programme</span></div>' +
    '<div class="result"><div class="metric">3x</div><h3>Blog traffic in six months</h3><p>Topical clustering plus a rebuilt internal linking model tripled organic blog sessions for a US SaaS brand.</p><span class="who">B2B SaaS SEO</span></div>' +
    '<div class="result"><div class="metric">200K+</div><h3>Organic LinkedIn views ghostwritten</h3><p>Executive thought leadership written and shipped weekly, compounding into inbound conversations.</p><span class="who">LinkedIn personal branding</span></div>' +
    '<div class="result"><div class="metric">500+</div><h3>Long-form articles published</h3><p>Six years of shipped B2B tech content across SaaS, engineering, healthcare and enterprise software categories.</p><span class="who">Content writing</span></div>' +
    "</div>" +
    '<p class="cta-note" style="margin-top:24px"><a class="link-arrow" href="/results/">See the full results breakdown</a></p>' +
    "</div></section>" +

    // testimonials
    '<section><div class="container">' +
    secHead("Clients", "What the people who hired us say", "") +
    '<div class="quotes">' +
    '<figure class="quote"><blockquote>Creative, sharp on strategy, and genuinely good at turning a dry technical brief into something people want to read.</blockquote><figcaption><span class="av">BS</span><span>Marketing lead, B2B SaaS</span></figcaption></figure>' +
    '<figure class="quote"><blockquote>Deadlines never slipped once. That sounds like a low bar until you have worked with three agencies that missed them.</blockquote><figcaption><span class="av">NS</span><span>Founder, tech startup</span></figcaption></figure>' +
    '<figure class="quote"><blockquote>The writing quality held up across very different niches, which is the part most freelancers cannot do.</blockquote><figcaption><span class="av">SR</span><span>Content manager, enterprise tech</span></figcaption></figure>' +
    "</div></div></section>" +

    // why
    '<section><div class="container">' +
    secHead("Why us", "A senior practitioner on your account, not a junior pool", "") +
    '<ul class="why-list">' +
    "<li><span><strong>Six years in B2B tech only.</strong> SaaS, engineering, enterprise software. We do not split attention across ecommerce and local.</span></li>" +
    "<li><span><strong>Forbes Technology Council contributor.</strong> Published where your buyers already read, which is also what AI engines treat as corroboration.</span></li>" +
    "<li><span><strong>AI visibility measured, not claimed.</strong> Every engagement carries a baseline citation report and a monthly delta against it.</span></li>" +
    "<li><span><strong>Written by specialists.</strong> No content mill, no unedited AI drafts shipped as deliverables.</span></li>" +
    "<li><span><strong>Async delivery.</strong> Artefacts and reports, not recurring calls that eat your week.</span></li>" +
    "<li><span><strong>No lock-in.</strong> Month to month once the scope is agreed.</span></li>" +
    "</ul></div></section>" +

    // faq
    '<section><div class="container">' +
    secHead("FAQ", "Fair questions, straight answers", "") +
    faqBlock(homeFaqs) +
    "</div></section>" +

    ctaPanel(
      "Find out whether AI engines cite you",
      "The free AI Visibility Audit shows exactly which buyer questions in your category name a competitor instead of you, across ChatGPT, Perplexity, Google AI Overviews and Gemini."
    ),
};

// ---------- SERVICES HUB ----------

const servicesFaqs = [
  {
    q: "Do I have to buy all six services?",
    a: "No. Most engagements start with two or three. The audit tells us which ones actually move your numbers, and we scope only those. Buying everything at once is usually the wrong call for a team under 50 people.",
  },
  {
    q: "What is the difference between AEO and GEO?",
    a: "Answer engine optimization is about the page: making your content structurally easy for an engine to extract and attribute. Generative engine optimization is about the brand: making your entity well defined and corroborated across the web so a model is confident enough to name you. AEO is on-site craft, GEO is off-site authority. Most categories need both.",
  },
  {
    q: "Can you work alongside our in-house team?",
    a: "Yes, and that is the most common setup. We typically own strategy, structure and the AI visibility layer while an in-house writer or agency handles volume. We hand over briefs, templates and schema patterns your team can reuse.",
  },
  {
    q: "Do you offer one-off projects?",
    a: "Yes, for audits, topical maps, schema implementation and site migrations. Ongoing citation growth needs a monthly cadence because engines re-evaluate sources continuously, so retainers suit the AI visibility work better.",
  },
];

const servicesHub = {
  path: "/services/",
  trail: [HOME, { name: "Services", url: "/services/" }],
  title: "B2B SaaS Marketing Services | AEO, GEO, SEO and Content",
  description:
    "Six B2B SaaS marketing services under one strategy: AEO, GEO, SaaS SEO, content writing, content marketing and LinkedIn personal branding.",
  schema: [
    faqSchema(servicesFaqs),
    {
      "@type": "ItemList",
      "@id": SITE + "/services/#list",
      name: "B2B SaaS marketing services",
      itemListElement: [
        ["Answer Engine Optimization", "/services/answer-engine-optimization/"],
        ["Generative Engine Optimization", "/services/generative-engine-optimization/"],
        ["B2B SaaS SEO", "/services/b2b-saas-seo/"],
        ["Content Writing", "/services/content-writing/"],
        ["Content Marketing", "/services/content-marketing/"],
        ["LinkedIn Personal Branding", "/services/linkedin-personal-branding/"],
      ].map(([name, path], i) => ({
        "@type": "ListItem", position: i + 1, name: name, url: SITE + path,
      })),
    },
  ],
  body:
    pageHero({
      kicker: "Services",
      h1: "B2B SaaS marketing services built for AI search",
      sub: "Six disciplines that share one goal: make your brand the source an answer engine trusts, and the result a buyer clicks. Start with the audit, scope only what moves the number.",
      trail: [HOME, { name: "Services" }],
    }) +

    '<section class="tight"><div class="container">' +
    secHead("Overview", "What each service does", "", true) +
    answer(
      "<strong>Vivaan Marketing offers six B2B SaaS marketing services:</strong> answer engine optimization (page-level extractability), generative engine optimization (brand entity and off-site corroboration), B2B SaaS SEO (topical authority and clustering), content writing (long-form by specialists), content marketing (calendar, distribution and pipeline reporting), and LinkedIn personal branding (ghostwritten executive presence). Engagements typically combine two or three."
    ) +
    cardsGrid([
      { href: "/services/answer-engine-optimization/", icon: "aeo", title: "Answer Engine Optimization", text: "Answer blocks, schema, clean heading logic and comparison tables so ChatGPT and Perplexity can quote you accurately.", go: "AEO services" },
      { href: "/services/generative-engine-optimization/", icon: "geo", title: "Generative Engine Optimization", text: "Entity definition, knowledge graph alignment and third-party corroboration for AI Overviews and Gemini.", go: "GEO services" },
      { href: "/services/b2b-saas-seo/", icon: "seo", title: "B2B SaaS SEO", text: "Topical authority maps, cluster architecture, technical fixes and internal linking that compounds.", go: "SaaS SEO" },
      { href: "/services/content-writing/", icon: "write", title: "Content Writing", text: "Blogs, whitepapers, comparison and alternatives pages written by people who can read a product doc.", go: "Content writing" },
      { href: "/services/content-marketing/", icon: "market", title: "Content Marketing", text: "Quarterly editorial strategy, distribution playbooks and reporting tied to pipeline KPIs.", go: "Content marketing" },
      { href: "/services/linkedin-personal-branding/", icon: "linkedin", title: "LinkedIn Personal Branding", text: "Founder and executive ghostwriting with a posting cadence that survives a busy quarter.", go: "LinkedIn branding" },
    ]) +
    "</div></section>" +

    '<section><div class="container">' +
    secHead("Compare", "Which service solves which problem", "Read down the middle column. Whichever line sounds like your quarter is where to start.", true) +
    table(
      "Service selection by presenting problem.",
      ["Service", "The problem it solves", "Typical first result"],
      [
        ["<strong>Answer Engine Optimization</strong>", "You rank well but AI answers quote someone else.", "New citations on buyer-intent questions within 4 to 8 weeks."],
        ["<strong>Generative Engine Optimization</strong>", "Engines describe your brand vaguely, wrongly, or not at all.", "Consistent, correct brand description across engines."],
        ["<strong>B2B SaaS SEO</strong>", "Traffic is flat and scattered across unrelated keywords.", "A clustered topical map and rising non-brand organic sessions."],
        ["<strong>Content Writing</strong>", "The calendar exists but nothing ships, or what ships is thin.", "A reliable publishing cadence at a quality your team will approve."],
        ["<strong>Content Marketing</strong>", "Content gets published but nobody can tie it to pipeline.", "An editorial plan and reporting your CRO will accept."],
        ["<strong>LinkedIn Personal Branding</strong>", "Your founder has the expertise but no consistent presence.", "A steady posting rhythm and inbound conversations from it."],
      ]
    ) +
    "</div></section>" +

    '<section><div class="container">' +
    secHead("Engagement", "How we scope", "") +
    steps([
      ["Free audit", "We baseline your AI citation status and find the gaps worth closing."],
      ["Scope proposal", "A written scope naming only the services that address those gaps, with pricing."],
      ["Build phase", "Structure, schema and foundation content in the first six to eight weeks."],
      ["Compounding phase", "Monthly publishing, off-site corroboration and a citation report against baseline."],
    ]) +
    "</div></section>" +

    '<section><div class="container">' +
    secHead("FAQ", "Common questions about scope", "") +
    faqBlock(servicesFaqs) +
    "</div></section>" +

    ctaPanel("Not sure which service you need?", "The free audit answers that. It shows where you are invisible, which usually makes the scope obvious."),
};

// ---------- SERVICE PAGE FACTORY ----------

function servicePage(cfg) {
  return {
    path: cfg.path,
    trail: [HOME, SERVICES, { name: cfg.crumb, url: cfg.path }],
    title: cfg.title,
    description: cfg.description,
    schema: [
      serviceSchema({ path: cfg.path, name: cfg.serviceName, description: cfg.serviceDesc, serviceType: cfg.serviceType }),
      faqSchema(cfg.faqs),
    ],
    body:
      pageHero({
        kicker: cfg.kicker,
        h1: cfg.h1,
        sub: cfg.sub,
        trail: [HOME, SERVICES, { name: cfg.crumb }],
      }) +
      statBar() +

      '<section class="tight"><div class="container"><div class="prose">' +
      "<h2>" + cfg.defH2 + "</h2>" +
      answer(cfg.definition) +
      cfg.intro +
      "</div></div></section>" +

      '<section><div class="container">' +
      secHead("What is included", cfg.inclH2, cfg.inclSub, true) +
      '<div class="prose"><ul>' +
      cfg.included.map((i) => "<li><span>" + i + "</span></li>").join("") +
      "</ul></div>" +
      "</div></section>" +

      (cfg.tableBlock
        ? '<section><div class="container">' +
          secHead("Detail", cfg.tableBlock.h2, cfg.tableBlock.sub, true) +
          table(cfg.tableBlock.caption, cfg.tableBlock.head, cfg.tableBlock.rows) +
          "</div></section>"
        : "") +

      '<section><div class="container">' +
      secHead("Process", cfg.processH2, "") +
      steps(cfg.process) +
      "</div></section>" +

      '<section><div class="container">' +
      secHead("Proof", cfg.proofH2, "") +
      '<div class="results">' +
      cfg.proof.map(
        (p) =>
          '<div class="result"><div class="metric">' + p[0] + "</div><h3>" + p[1] + "</h3><p>" + p[2] + '</p><span class="who">' + p[3] + "</span></div>"
      ).join("") +
      "</div></div></section>" +

      '<section><div class="container">' +
      secHead("FAQ", cfg.faqH2 || "Questions we get asked", "") +
      faqBlock(cfg.faqs) +
      "</div></section>" +

      '<section class="end-pad"><div class="container">' +
      secHead("Related", "Services that pair with this one", "") +
      cardsGrid(cfg.related) +
      "</div></section>" +

      ctaPanel(cfg.ctaH2, cfg.ctaText),
  };
}

// ---------- AEO ----------

const aeo = servicePage({
  path: "/services/answer-engine-optimization/",
  crumb: "Answer Engine Optimization",
  title: "Answer Engine Optimization Services (AEO) for B2B SaaS",
  description:
    "AEO services that get your brand quoted in ChatGPT, Perplexity and Google AI Overviews. Answer blocks, schema, entity clarity and citation tracking for B2B SaaS.",
  serviceName: "Answer Engine Optimization",
  serviceType: "Answer Engine Optimization",
  serviceDesc:
    "Page-level optimisation that makes B2B SaaS content extractable and attributable by AI answer engines including ChatGPT, Perplexity, Google AI Overviews and Claude.",
  kicker: "Answer Engine Optimization",
  h1: "Answer engine optimization services",
  sub: "Get quoted inside the answer, not buried under it. We restructure your pages so ChatGPT, Perplexity, Google AI Overviews and Claude can lift a clean, correct, attributable answer from your site.",
  defH2: "What is answer engine optimization?",
  definition:
    "<strong>Answer engine optimization (AEO) is the practice of structuring content so AI answer engines can extract, understand and cite it directly.</strong> Where traditional SEO competes for a position in a results list, AEO competes to be the source quoted inside a single generated answer. It relies on self-contained answer blocks, question-form headings, structured data, unambiguous entity definitions and factual claims an engine can verify.",
  intro:
    "<p>The practical difference shows up fast. A page written to rank often opens with 400 words of context before it answers anything. An engine parsing that page finds no clean extract, so it quotes a competitor whose page answered in the first two sentences. The ranking did not change. The visibility did.</p>" +
    "<h3>Who this is for</h3>" +
    "<p>B2B SaaS and enterprise technology teams who already rank for their category terms but are losing the shortlist conversation happening inside AI tools. If your organic numbers look healthy and your inbound has quietly thinned, this is usually where the leak is.</p>",
  inclH2: "What AEO work actually involves",
  inclSub: "Concrete deliverables, not a strategy deck.",
  included: [
    "<strong>Answer block engineering.</strong> A 40 to 60 word extractable definition placed directly under each question-form heading, written to be quoted verbatim.",
    "<strong>Question-first information architecture.</strong> Headings rewritten to match how buyers actually phrase the question to an AI, not how a keyword tool spells it.",
    "<strong>Schema implementation.</strong> FAQPage, Article, Product, Service, Organization and BreadcrumbList markup, validated and monitored.",
    "<strong>Comparison and alternatives tables.</strong> Engines extract tables disproportionately often, and most B2B sites have none.",
    "<strong>Entity disambiguation.</strong> Consistent naming, descriptions and sameAs signals so the model knows which company you are.",
    "<strong>Citation tracking.</strong> A monthly report of which buyer questions cite you, across four engines, versus a baseline.",
    "<strong>Content refresh queue.</strong> Existing high-authority pages rebuilt for extractability before anything new is written.",
  ],
  tableBlock: {
    h2: "AEO versus traditional SEO",
    sub: "The two overlap, but optimising for one does not automatically win the other.",
    caption: "How answer engine optimization differs from traditional SEO.",
    head: ["Dimension", "Traditional SEO", "Answer Engine Optimization"],
    rows: [
      ["<strong>Goal</strong>", "A position in a list of ten results", "A citation inside one generated answer"],
      ["<strong>Slots available</strong>", "Ten organic positions per query", "Typically three to five sources per answer"],
      ["<strong>Unit optimised</strong>", "The page against a keyword", "The passage against a question"],
      ["<strong>Primary signals</strong>", "Backlinks, relevance, page experience", "Extractability, entity clarity, corroboration, structure"],
      ["<strong>Measurement</strong>", "Rank position and impressions", "Citation share, mention accuracy, source frequency"],
      ["<strong>Feedback speed</strong>", "Weeks to months", "Often four to eight weeks after re-crawl"],
    ],
  },
  processH2: "How an AEO engagement runs",
  process: [
    ["Baseline audit", "We query your category questions across four engines and record who gets cited and how you are described."],
    ["Extractability fixes", "Answer blocks, heading logic and schema shipped across your highest-authority existing pages first."],
    ["New answer coverage", "Pages built for the buyer questions where no good source currently exists in your category."],
    ["Monthly citation report", "Movement against baseline, engine by engine, with the next queue of questions to attack."],
  ],
  proofH2: "What this has produced",
  proof: [
    ["0 to 11", "AI-cited keywords in six months", "A B2B SaaS client went from no AI citations at all to eleven buyer-intent queries naming them directly.", "AEO programme"],
    ["3x", "Average AI citation growth", "Across client accounts running answer engine optimization as a core service.", "Client average"],
  ],
  faqs: [
    { q: "Is AEO just SEO with a new name?", a: "No. They share a foundation of crawlable, credible content, but the optimisation targets differ. SEO optimises a page for a ranking position. AEO optimises a passage for extraction and attribution. Pages that rank first are frequently not the pages that get cited, which is exactly the gap this work closes." },
    { q: "How do you measure something that has no rank tracker?", a: "We run a fixed set of your category's buyer questions across ChatGPT, Perplexity, Google AI Overviews and Gemini on a monthly cadence, and record whether you are cited, how you are described, and which competitors appear instead. That gives a baseline and a monthly delta. Answers vary between runs, so we sample repeatedly rather than treating one response as fact." },
    { q: "How long does AEO take to work?", a: "Faster than SEO. Because answer engines re-crawl and re-evaluate sources frequently, structural fixes on pages that already carry authority often change citation behaviour within four to eight weeks. Building citations on entirely new topics takes longer, usually one to two quarters." },
    { q: "Do we need to rewrite our whole site?", a: "Almost never. We start with the pages that already have authority and traffic, because those get re-crawled most and convert fastest. A typical first phase touches 15 to 30 pages." },
    { q: "Does AEO hurt our existing rankings?", a: "It has not in our engagements. Answer blocks, cleaner headings and valid schema align with what search ranking systems already reward. The usual outcome is that both improve." },
  ],
  related: [
    { href: "/services/generative-engine-optimization/", icon: "geo", title: "Generative Engine Optimization", text: "The off-site half of the same problem: entity authority and corroboration.", go: "GEO services" },
    { href: "/services/b2b-saas-seo/", icon: "seo", title: "B2B SaaS SEO", text: "The topical authority foundation that AEO amplifies.", go: "SaaS SEO" },
    { href: "/services/content-writing/", icon: "write", title: "Content Writing", text: "Answer coverage for questions where your category has no good source yet.", go: "Content writing" },
  ],
  ctaH2: "See which answers name your competitors",
  ctaText: "The free AI Visibility Audit runs your category's buyer questions across four engines and shows you the exact citation gap.",
});

// ---------- GEO ----------

const geo = servicePage({
  path: "/services/generative-engine-optimization/",
  crumb: "Generative Engine Optimization",
  title: "Generative Engine Optimization Services (GEO) for B2B Brands",
  description:
    "GEO services that build the entity clarity and third-party corroboration AI models need to cite you. For Google AI Overviews, Gemini, ChatGPT and Claude.",
  serviceName: "Generative Engine Optimization",
  serviceType: "Generative Engine Optimization",
  serviceDesc:
    "Off-site entity building, knowledge graph alignment and corroboration work that increases how often generative AI engines name and recommend a B2B brand.",
  kicker: "Generative Engine Optimization",
  h1: "Generative engine optimization services",
  sub: "AI models cite what they are confident about. We build the entity definition, structured data and independent corroboration that turn your brand from a vague mention into a named recommendation.",
  defH2: "What is generative engine optimization?",
  definition:
    "<strong>Generative engine optimization (GEO) is the practice of shaping how AI models understand, describe and recommend a brand across generated answers.</strong> It works on the brand entity rather than a single page: consistent naming and descriptions, Organization and Service schema, knowledge panel alignment, and corroborating mentions on review sites, industry publications and communities the models draw on. Where AEO makes a page quotable, GEO makes the brand credible enough to quote.",
  intro:
    "<p>Ask an engine to describe a mid-market B2B company and you get one of three outcomes: an accurate summary, a vague and generic one, or a confident description of the wrong company. The second and third are the expensive ones, and neither is fixed by publishing another blog post.</p>" +
    "<h3>Who this is for</h3>" +
    "<p>Brands that are structurally sound on-page but under-represented off it. Common signs: engines confuse you with a similarly named company, describe a product you sunset two years ago, or list competitors when asked for vendors in your category while never naming you.</p>",
  inclH2: "What GEO work actually involves",
  inclSub: "Most of the leverage sits outside your own domain.",
  included: [
    "<strong>Entity audit.</strong> How each engine currently describes you, what it gets wrong, and which source is feeding the error.",
    "<strong>Organization and Service schema.</strong> A complete, validated entity graph with sameAs links tying your profiles together.",
    "<strong>Knowledge graph alignment.</strong> Consistent name, category, founding details and descriptions across every property you control.",
    "<strong>Corroboration programme.</strong> Placements and profile work on the review sites, directories and publications that models actually draw on for your category.",
    "<strong>Community and forum presence.</strong> Reddit, Stack Overflow and niche community sources carry disproportionate weight in several engines.",
    "<strong>Statistic and quote assets.</strong> Original data and named expert quotes, which materially increase how often a passage gets cited.",
    "<strong>Misinformation correction.</strong> Chasing down and fixing the specific sources producing wrong descriptions of your product.",
  ],
  tableBlock: {
    h2: "Where each engine gets its confidence",
    sub: "Source pools overlap but are not identical, which is why one score across all engines hides the real picture.",
    caption: "Primary signal emphasis by generative engine.",
    head: ["Engine", "Leans heaviest on", "What tends to move it"],
    rows: [
      ["<strong>ChatGPT search</strong>", "Live web results plus model priors about the brand", "Extractable pages, strong entity clarity, recent credible mentions"],
      ["<strong>Google AI Overviews</strong>", "Google's index and Knowledge Graph", "Traditional ranking strength, schema, knowledge panel accuracy"],
      ["<strong>Perplexity</strong>", "Fresh crawled sources, cited inline", "Recency, clean structure, direct answers, listicles and comparisons"],
      ["<strong>Gemini</strong>", "Google index and Knowledge Graph, tuned differently", "Entity consistency and authoritative corroboration"],
      ["<strong>Claude</strong>", "Model priors plus retrieved web sources", "Well structured reference content and consistent factual framing"],
    ],
  },
  processH2: "How a GEO engagement runs",
  process: [
    ["Entity baseline", "We record how all five engines describe you today, and trace inaccurate descriptions back to their source."],
    ["Structural foundation", "Full Organization and Service schema, sameAs graph, and consistent descriptions across owned properties."],
    ["Corroboration build", "A prioritised list of the third-party sources that matter in your category, worked through monthly."],
    ["Re-measure", "The same engine queries re-run monthly, tracking description accuracy and recommendation frequency."],
  ],
  proofH2: "What this has produced",
  proof: [
    ["3x", "Average growth in AI citations", "Across accounts where GEO ran alongside answer engine optimization.", "Client average"],
    ["Forbes", "Technology Council contributor", "The kind of third-party corroboration that models weight heavily when deciding whom to name.", "Authority signal"],
  ],
  faqs: [
    { q: "What is the difference between GEO and AEO?", a: "AEO is on-site and page-level: making a passage easy to extract and attribute. GEO is off-site and brand-level: making the entity well defined and corroborated so a model is confident naming you at all. A page can be perfectly structured and still never get cited if the model has no confidence in the brand behind it. Most categories need both." },
    { q: "Can you control what an AI says about our company?", a: "Not directly, and anyone claiming otherwise is overselling. What you can control is the evidence available to the model: schema, consistent descriptions across your properties, and the quality and accuracy of third-party sources. In practice, correcting the underlying sources is what changes the output." },
    { q: "How long does GEO take?", a: "Slower than AEO. Schema and owned-property consistency land in weeks, but corroboration work compounds over one to three quarters because it depends on third parties publishing and engines re-crawling them." },
    { q: "Is this the same as digital PR?", a: "It overlaps. Digital PR chases coverage and links for human and ranking value. GEO selects targets specifically for their weight in AI source pools, which means review platforms, structured directories and technical communities often outrank a glossy trade publication." },
    { q: "Do we need original data for this to work?", a: "It is not mandatory but it is the highest-leverage asset available. Original statistics and named expert quotes are among the most reliably cited content types, because they give an engine something no competitor page can provide." },
  ],
  related: [
    { href: "/services/answer-engine-optimization/", icon: "aeo", title: "Answer Engine Optimization", text: "The on-site half: making your pages extractable once the brand is trusted.", go: "AEO services" },
    { href: "/services/content-marketing/", icon: "market", title: "Content Marketing", text: "Distribution that builds the corroboration GEO depends on.", go: "Content marketing" },
    { href: "/services/linkedin-personal-branding/", icon: "linkedin", title: "LinkedIn Personal Branding", text: "Named expert presence, one of the strongest corroboration signals available.", go: "LinkedIn branding" },
  ],
  ctaH2: "Find out how AI describes your brand",
  ctaText: "The free audit includes an entity check: exactly how each engine describes you today, and what it gets wrong.",
});

// ---------- SaaS SEO ----------

const saasSeo = servicePage({
  path: "/services/b2b-saas-seo/",
  crumb: "B2B SaaS SEO",
  title: "B2B SaaS SEO Agency | Topical Authority and Pipeline Growth",
  description:
    "B2B SaaS SEO services: topical authority mapping, keyword clustering, technical fixes and internal linking that compound into qualified pipeline, not vanity traffic.",
  serviceName: "B2B SaaS SEO",
  serviceType: "Search Engine Optimization",
  serviceDesc:
    "Topical authority mapping, cluster architecture, technical SEO and internal linking for B2B SaaS and enterprise technology companies.",
  kicker: "B2B SaaS SEO",
  h1: "B2B SaaS SEO agency",
  sub: "Own a category instead of renting scattered keywords. We build the topical map, the cluster architecture and the internal linking model that turn organic search into a compounding pipeline source.",
  defH2: "What is B2B SaaS SEO?",
  definition:
    "<strong>B2B SaaS SEO is search optimisation built around long, multi-stakeholder buying cycles rather than immediate conversions.</strong> It prioritises topical authority over keyword volume, targets problem-aware and solution-aware queries alongside bottom-funnel comparison and alternatives terms, and measures success in qualified pipeline rather than sessions. The winning structure is usually a small number of deep topic clusters, not a wide shallow blog.",
  intro:
    "<p>The failure mode in SaaS SEO is predictable. A team publishes 80 posts across 40 unrelated topics, ranks for nothing competitive, and concludes SEO does not work for their category. The problem was never volume. It was that no single topic ever accumulated enough depth for a search engine to treat the site as an authority on it.</p>" +
    "<h3>Who this is for</h3>" +
    "<p>Seed to Series C SaaS companies and established enterprise software teams whose organic traffic has plateaued, or who rank for a scatter of low-intent terms that never reach a demo request.</p>",
  inclH2: "What the engagement covers",
  inclSub: "Strategy, execution and the technical layer underneath.",
  included: [
    "<strong>Topical authority map.</strong> The full set of subjects you must cover to be treated as the category authority, sequenced by leverage.",
    "<strong>Keyword clustering.</strong> Queries grouped by intent and entity, mapped to pages, so you stop competing with yourself.",
    "<strong>Bottom-funnel coverage.</strong> Comparison, alternatives, pricing and integration pages, which are the pages that actually convert.",
    "<strong>Technical audit and fixes.</strong> Crawl budget, indexation, Core Web Vitals, canonical logic, JavaScript rendering and sitemap hygiene.",
    "<strong>Internal linking architecture.</strong> A deliberate model that passes authority to money pages instead of leaving it stranded in the blog.",
    "<strong>Content briefs.</strong> Detailed enough for your writers or ours to execute without a strategy call.",
    "<strong>Reporting against pipeline.</strong> Non-brand organic, assisted conversions and pipeline influence, not a rankings screenshot.",
  ],
  tableBlock: {
    h2: "Where B2B SaaS SEO differs from general SEO",
    sub: "Applying ecommerce or local playbooks to SaaS is the most common reason budgets get wasted.",
    caption: "Structural differences between B2B SaaS SEO and general SEO.",
    head: ["Factor", "General SEO", "B2B SaaS SEO"],
    rows: [
      ["<strong>Buying cycle</strong>", "Days, often a single session", "Three to twelve months, four to seven stakeholders"],
      ["<strong>Search volume</strong>", "High volume head terms", "Low volume, high value, often under 200 searches a month"],
      ["<strong>Winning structure</strong>", "Broad category coverage", "Deep clusters demonstrating topical authority"],
      ["<strong>Highest value pages</strong>", "Category and product pages", "Comparison, alternatives, integration and use-case pages"],
      ["<strong>Success metric</strong>", "Sessions and transactions", "Qualified pipeline and influenced revenue"],
      ["<strong>Content depth</strong>", "Adequate to satisfy intent", "Deep enough to satisfy a technical evaluator"],
    ],
  },
  processH2: "How an SEO engagement runs",
  process: [
    ["Audit and baseline", "Technical crawl, content inventory, competitor gap and a realistic ceiling estimate for your category."],
    ["Topical map", "The cluster architecture and the publishing sequence, prioritised by leverage rather than volume."],
    ["Foundation build", "Technical fixes, internal linking rebuild and the pillar pages that anchor each cluster."],
    ["Compound and report", "Monthly publishing, refresh cycles and reporting against non-brand organic and pipeline."],
  ],
  proofH2: "What this has produced",
  proof: [
    ["3x", "Blog traffic in six months", "Topical clustering and a rebuilt internal linking model for a US B2B SaaS brand.", "SaaS SEO engagement"],
    ["500+", "Articles published and ranking", "Six years of shipped, indexed and performing B2B technology content.", "Track record"],
  ],
  faqs: [
    { q: "How long does B2B SaaS SEO take to show results?", a: "Expect early movement at three months, meaningful non-brand growth at six, and category authority at twelve to eighteen. Anyone promising a competitive B2B category in ninety days is describing brand-term rankings you already had. Technical fixes and bottom-funnel pages are the fastest wins available." },
    { q: "Is SEO still worth it now that AI answers queries directly?", a: "Yes, and increasingly so, because AI engines are largely drawing on the same index. Strong organic authority is a prerequisite for being cited in Google AI Overviews. What has changed is that ranking alone is no longer sufficient, which is why we pair SEO with answer engine optimization rather than selling it alone." },
    { q: "We have low search volume in our category. Does SEO still work?", a: "Usually better than in high-volume categories. A term with 90 monthly searches where every searcher is an in-market buyer is worth more than 20,000 searches of undifferentiated traffic. We build around intent quality, and low volume also means less competition to displace." },
    { q: "Do you write the content or just the strategy?", a: "Either. Some clients take our briefs and execute in house, others have us write as well. The briefs are built to be executable without a call, so handing them to an internal team is a real option and not a downgrade." },
    { q: "What about our existing content?", a: "Refresh before writing. Existing pages that already carry authority and links usually deliver faster gains than new pages, so the first phase is normally a consolidation and refresh pass, including pruning pages that dilute topical focus." },
  ],
  related: [
    { href: "/services/answer-engine-optimization/", icon: "aeo", title: "Answer Engine Optimization", text: "Turn the rankings you earn into citations inside AI answers.", go: "AEO services" },
    { href: "/services/content-writing/", icon: "write", title: "Content Writing", text: "Execution for the topical map, written by B2B specialists.", go: "Content writing" },
    { href: "/services/content-marketing/", icon: "market", title: "Content Marketing", text: "The calendar, distribution and pipeline reporting layer.", go: "Content marketing" },
  ],
  ctaH2: "Get the gap analysis first",
  ctaText: "The free audit covers AI citation status and flags the organic and technical gaps worth fixing before you commit to a retainer.",
});

// ---------- CONTENT WRITING ----------

const contentWriting = servicePage({
  path: "/services/content-writing/",
  crumb: "Content Writing",
  title: "B2B Content Writing Services for SaaS and Enterprise Tech",
  description:
    "B2B content writing services: long-form blogs, whitepapers, comparison pages and case studies by SaaS and enterprise tech specialists. 500+ shipped.",
  serviceName: "B2B Content Writing",
  serviceType: "Content Writing",
  serviceDesc:
    "Long-form B2B content production including blog articles, whitepapers, comparison pages, case studies and technical explainers for SaaS and enterprise technology brands.",
  kicker: "Content Writing",
  h1: "B2B content writing services",
  sub: "Writing that survives a technical reader. Long-form articles, whitepapers, comparison pages and case studies produced by specialists who can read a product doc and interview an engineer without a translator.",
  defH2: "What are B2B content writing services?",
  definition:
    "<strong>B2B content writing services produce the long-form assets a business buyer needs to evaluate a vendor:</strong> in-depth blog articles, whitepapers, comparison and alternatives pages, case studies, technical explainers and solution briefs. Unlike consumer copywriting, the work is judged on subject accuracy and evaluator credibility, which is why domain-specific writers consistently outperform generalists in technical categories.",
  intro:
    "<p>Most thin B2B content is not a writing problem. It is a research problem. A generalist writer given a two-line brief will produce something structurally competent and substantively empty, and a technical evaluator will detect that in about eight seconds.</p>" +
    "<h3>Who this is for</h3>" +
    "<p>Marketing teams with a strategy and a calendar but no reliable production capacity, and teams whose current output is passing review but not moving anything.</p>",
  inclH2: "What we write",
  inclSub: "Formats chosen by what the buyer stage actually needs.",
  included: [
    "<strong>Long-form blog articles.</strong> 1,500 to 3,000 words, built on a topical map, structured for extraction by AI engines.",
    "<strong>Comparison and alternatives pages.</strong> The highest-converting page type in B2B SaaS, and the one most often cited by answer engines.",
    "<strong>Whitepapers and ebooks.</strong> Gated or ungated depth assets for the evaluation stage.",
    "<strong>Case studies.</strong> Structured around a measurable outcome rather than a client compliment.",
    "<strong>Technical explainers.</strong> Architecture, integration and implementation content written for practitioners.",
    "<strong>Landing and solution pages.</strong> Conversion copy that survives a procurement review.",
    "<strong>Content refreshes.</strong> Rebuilding existing pages for accuracy, depth and AI extractability.",
  ],
  tableBlock: {
    h2: "Which format fits which buyer stage",
    sub: "Publishing the right format at the wrong stage is the most common reason good content underperforms.",
    caption: "B2B content format selection by funnel stage.",
    head: ["Stage", "Buyer question", "Format that works"],
    rows: [
      ["<strong>Problem aware</strong>", "Why is this happening to us?", "Long-form explainer, original research, benchmark piece"],
      ["<strong>Solution aware</strong>", "What kinds of tools solve this?", "Category guide, buyer's guide, framework article"],
      ["<strong>Vendor aware</strong>", "Which vendor is right for us?", "Comparison page, alternatives page, integration guide"],
      ["<strong>Evaluation</strong>", "Will this work in our environment?", "Case study, technical whitepaper, implementation guide"],
      ["<strong>Post purchase</strong>", "How do we get value faster?", "Documentation-adjacent guides, playbooks, enablement content"],
    ],
  },
  processH2: "How production runs",
  process: [
    ["Brief and research", "A detailed brief covering intent, entities, competitors, sources and the answer blocks the piece must contain."],
    ["Subject matter input", "A short async interview or a recorded walkthrough. Fifteen minutes of your expert prevents a generic draft."],
    ["Draft and edit", "Written by a B2B specialist, then edited against a structural and factual checklist before it reaches you."],
    ["Optimise and ship", "Schema, internal links, answer blocks and metadata applied before publication, not bolted on afterwards."],
  ],
  proofH2: "What this has produced",
  proof: [
    ["500+", "Long-form articles published", "Across SaaS, engineering, healthcare, logistics and enterprise software categories.", "Volume shipped"],
    ["3x", "Blog traffic in six months", "Where writing was paired with a topical map rather than an ad hoc calendar.", "Client outcome"],
  ],
  faqs: [
    { q: "Do you use AI to write the content?", a: "We use AI for research acceleration, outlining support and quality checks. We do not ship generated drafts as deliverables. In technical B2B categories a generated draft reads plausibly and is substantively wrong often enough that an evaluator loses trust, which costs more than it saves." },
    { q: "How do you handle technical accuracy in specialised categories?", a: "Two mechanisms: writers assigned by domain rather than availability, and a short async input from your subject matter expert on anything involving architecture, compliance or implementation. Every factual claim is sourced and linked." },
    { q: "What is the turnaround time?", a: "A standard long-form article runs seven to ten business days from approved brief to final draft, including one revision round. Whitepapers run two to three weeks. Rush work is possible but we would rather adjust the calendar than the research depth." },
    { q: "Can you match our existing brand voice?", a: "Yes. We build a voice guide from your best-performing existing pages and any style rules you already have, then work against it. The first two pieces usually need heavier revision while the guide calibrates." },
    { q: "How many revisions are included?", a: "Two rounds per piece as standard. In practice most pieces need one, because the brief and the subject matter input resolve the disagreements before drafting rather than after." },
  ],
  related: [
    { href: "/services/b2b-saas-seo/", icon: "seo", title: "B2B SaaS SEO", text: "The topical map that tells writing what to produce and in what order.", go: "SaaS SEO" },
    { href: "/services/answer-engine-optimization/", icon: "aeo", title: "Answer Engine Optimization", text: "Structure every piece so AI engines can quote it.", go: "AEO services" },
    { href: "/services/content-marketing/", icon: "market", title: "Content Marketing", text: "Calendar, distribution and reporting around the output.", go: "Content marketing" },
  ],
  ctaH2: "Want to see the gap before you commission anything?",
  ctaText: "The free audit shows which buyer questions in your category have no credible source yet. That list is the best content brief you will get.",
});

// ---------- CONTENT MARKETING ----------

const contentMarketing = servicePage({
  path: "/services/content-marketing/",
  crumb: "Content Marketing",
  title: "B2B Content Marketing Agency | Strategy, Calendar and Pipeline",
  description:
    "B2B content marketing agency: quarterly editorial strategy, content calendars, distribution playbooks and reporting mapped to pipeline KPIs.",
  serviceName: "B2B Content Marketing",
  serviceType: "Content Marketing",
  serviceDesc:
    "Editorial strategy, content calendars, distribution playbooks and pipeline-linked reporting for B2B SaaS and enterprise technology marketing teams.",
  kicker: "Content Marketing",
  h1: "B2B content marketing agency",
  sub: "Strategy, calendar, distribution and reporting in one system. We connect what gets published to what shows up in the pipeline report, so content stops being the line item nobody can defend.",
  defH2: "What does a B2B content marketing agency do?",
  definition:
    "<strong>A B2B content marketing agency owns the system around the content, not just the writing:</strong> audience and positioning research, an editorial strategy tied to revenue goals, a sequenced content calendar, distribution across owned and earned channels, and reporting that connects published assets to pipeline. Writing is one input. The agency's job is to make the whole programme accountable.",
  intro:
    "<p>Two things kill B2B content programmes. The first is a calendar built from whatever the team can think of that month. The second is reporting that ends at pageviews, which leaves the budget indefensible the first time a CFO asks a direct question.</p>" +
    "<h3>Who this is for</h3>" +
    "<p>Teams publishing consistently who cannot yet answer what it is producing, and teams whose content decisions are being made in a monthly meeting rather than against a strategy.</p>",
  inclH2: "What the programme includes",
  inclSub: "The operating system, not just the output.",
  included: [
    "<strong>Audience and positioning research.</strong> ICP definition, buying committee roles, and the objections each one raises.",
    "<strong>Quarterly editorial strategy.</strong> Themes and priorities tied to revenue goals and product milestones, reviewed every quarter.",
    "<strong>Sequenced content calendar.</strong> What ships, when, in which format, and which stage of the funnel it serves.",
    "<strong>Distribution playbook.</strong> LinkedIn, newsletter, communities, syndication and repurposing, defined per asset rather than improvised.",
    "<strong>Repurposing system.</strong> One long-form asset systematically broken into social, email and sales enablement material.",
    "<strong>Sales enablement alignment.</strong> Content the sales team will actually send, informed by the objections they hear.",
    "<strong>Pipeline reporting.</strong> Attribution modelling appropriate to a long cycle, reporting influenced pipeline rather than last-click.",
  ],
  tableBlock: {
    h2: "What we measure, and what we stop measuring",
    sub: "Most B2B content reporting fails because it uses ecommerce metrics for a nine-month buying cycle.",
    caption: "Replacement metrics for B2B content marketing reporting.",
    head: ["Instead of", "We report", "Because"],
    rows: [
      ["Total pageviews", "<strong>Non-brand organic sessions</strong>", "Brand traffic measures demand you already had"],
      ["Bounce rate", "<strong>Scroll and engaged time on money pages</strong>", "A satisfied answer often looks like a bounce"],
      ["Last-click conversions", "<strong>Pipeline influence across touchpoints</strong>", "Nobody buys B2B software on a first visit"],
      ["Keyword rankings alone", "<strong>Rankings plus AI citation share</strong>", "A growing share of the journey never loads a results page"],
      ["Social impressions", "<strong>Profile visits and inbound conversations</strong>", "Impressions do not correlate with intent"],
      ["Content volume", "<strong>Topical coverage against the map</strong>", "Depth compounds, scattered volume does not"],
    ],
  },
  processH2: "How the programme runs",
  process: [
    ["Discovery", "ICP, buying committee, competitor content positions and an honest audit of what has worked so far."],
    ["Strategy and calendar", "Quarterly themes, a sequenced calendar and the measurement framework agreed up front."],
    ["Produce and distribute", "Monthly execution across formats with distribution attached to every asset before it ships."],
    ["Report and adjust", "Monthly reporting against pipeline metrics, quarterly strategy review and reallocation."],
  ],
  proofH2: "What this has produced",
  proof: [
    ["50+", "SaaS and enterprise brands served", "Programme design and execution across B2B technology categories globally.", "Track record"],
    ["3x", "Blog traffic in six months", "Where strategy, calendar and distribution ran as one system rather than three.", "Client outcome"],
  ],
  faqs: [
    { q: "How is this different from just hiring writers?", a: "Writers produce assets. A programme decides which assets to produce, in what order, for which stage of the buying committee, how each one reaches an audience, and how you will know it worked. Teams that hire writing without that layer usually publish consistently for nine months and then cannot justify the budget." },
    { q: "How do you attribute content to pipeline in a long sales cycle?", a: "Multi-touch influence rather than last-click, combined with self-reported attribution at the demo request, which is consistently more honest than analytics in B2B. We report influenced pipeline and are explicit about what the model cannot prove." },
    { q: "What does a typical programme cost?", a: "Programmes generally run between 2,000 and 6,000 US dollars a month depending on publishing volume and how many services are in scope. Strategy-only engagements are available if you have production capacity in house." },
    { q: "Do you need us in weekly calls?", a: "No. Delivery is asynchronous by default: written strategy documents, a shared calendar, and monthly reports. A quarterly strategy review call is the only meeting we recommend, and it is optional." },
    { q: "How quickly can a programme start?", a: "Discovery and strategy take two to three weeks, and the first assets usually ship in week four. Distribution and reporting are live from the first published piece rather than added later." },
  ],
  related: [
    { href: "/services/content-writing/", icon: "write", title: "Content Writing", text: "The production capacity that fills the calendar.", go: "Content writing" },
    { href: "/services/linkedin-personal-branding/", icon: "linkedin", title: "LinkedIn Personal Branding", text: "The distribution channel with the shortest path to B2B buyers.", go: "LinkedIn branding" },
    { href: "/services/generative-engine-optimization/", icon: "geo", title: "Generative Engine Optimization", text: "Turn distribution into the corroboration AI engines reward.", go: "GEO services" },
  ],
  ctaH2: "Start with the diagnosis",
  ctaText: "The free AI Visibility Audit is the fastest way to see whether your current content programme is producing authority a machine can recognise.",
});

// ---------- LINKEDIN ----------

const linkedin = servicePage({
  path: "/services/linkedin-personal-branding/",
  crumb: "LinkedIn Personal Branding",
  title: "LinkedIn Personal Branding Services for B2B Founders",
  description:
    "LinkedIn personal branding and ghostwriting for B2B founders and executives. Positioning, content pillars, weekly posts and engagement. 200K+ organic views ghostwritten.",
  serviceName: "LinkedIn Personal Branding",
  serviceType: "Personal Branding",
  serviceDesc:
    "LinkedIn positioning, profile optimisation, ghostwriting and posting cadence management for B2B founders and executives in technology companies.",
  kicker: "LinkedIn Personal Branding",
  h1: "LinkedIn personal branding services",
  sub: "Your founder has the expertise. What is missing is a system that gets it published every week without eating a workday. We build the positioning, write the posts and hold the cadence.",
  defH2: "What are LinkedIn personal branding services?",
  definition:
    "<strong>LinkedIn personal branding services build and sustain an executive's public presence:</strong> positioning and narrative, profile optimisation, content pillars, ghostwritten posts on a fixed cadence, and engagement strategy. For B2B companies the commercial logic is straightforward, because buyers follow and trust individuals more readily than company pages, and founder-led content consistently outperforms brand accounts on reach and inbound conversation quality.",
  intro:
    "<p>Nearly every founder-led programme dies the same way. Three weeks of enthusiastic posting, a busy quarter, then silence, then an apologetic restart in month five. The expertise was never the constraint. The production system was.</p>" +
    "<h3>Who this is for</h3>" +
    "<p>Founders, CEOs and senior executives at B2B technology companies who have genuine domain expertise, a real point of view, and no realistic path to writing five posts a week themselves.</p>",
  inclH2: "What the engagement covers",
  inclSub: "Positioning, production and the cadence that makes it compound.",
  included: [
    "<strong>Positioning and narrative.</strong> The specific thing you are known for, narrow enough to be memorable and true enough to defend.",
    "<strong>Profile optimisation.</strong> Headline, about section, featured items and experience rewritten as a conversion asset.",
    "<strong>Content pillars.</strong> Three to five recurring themes that carry a year of posting without repeating yourself.",
    "<strong>Ghostwritten posts.</strong> Three to five per week in your voice, drawn from short async input rather than long interviews.",
    "<strong>Idea capture system.</strong> A lightweight way to turn a voice note or a Slack rant into next week's post.",
    "<strong>Engagement strategy.</strong> Which conversations to enter and which accounts to be visible to, because reach follows relevance.",
    "<strong>Monthly reporting.</strong> Impressions, profile visits, follower quality and inbound conversations attributed to posts.",
  ],
  tableBlock: {
    h2: "Founder profile versus company page",
    sub: "Both have a role, but the reach difference is not marginal.",
    caption: "Comparison of founder-led and company-page LinkedIn content.",
    head: ["Dimension", "Company page", "Founder profile"],
    rows: [
      ["<strong>Organic reach</strong>", "Structurally suppressed by the feed", "Consistently and substantially higher"],
      ["<strong>Trust</strong>", "Read as marketing", "Read as a person with a view"],
      ["<strong>Comment quality</strong>", "Sparse, often from employees", "Peers, prospects and industry voices"],
      ["<strong>Inbound quality</strong>", "Generic enquiries", "Specific, warm and further along"],
      ["<strong>Best used for</strong>", "Announcements, hiring, credibility", "Point of view, demand creation, relationships"],
      ["<strong>AI visibility value</strong>", "Limited", "Named expert corroboration that models weight"],
    ],
  },
  processH2: "How the engagement runs",
  process: [
    ["Positioning session", "One session to extract the narrative, the strong opinions and the stories only you can tell."],
    ["Profile and pillars", "Profile rebuilt, content pillars agreed, and a four-week runway drafted before anything goes live."],
    ["Weekly production", "Posts drafted, sent for approval in a batch, and scheduled. Your input stays under thirty minutes a week."],
    ["Report and refine", "Monthly reporting on reach, profile visits and inbound, with pillar weighting adjusted to what lands."],
  ],
  proofH2: "What this has produced",
  proof: [
    ["200K+", "Organic views ghostwritten", "Executive thought leadership published weekly, compounding into inbound conversations.", "LinkedIn programme"],
    ["4K+", "Audience built organically", "Followers earned through consistent publishing, with no paid amplification.", "Owned audience"],
  ],
  faqs: [
    { q: "Will the posts actually sound like me?", a: "That is the whole job. We build a voice profile from your existing writing, recorded calls and how you argue in Slack, then calibrate over the first three to four weeks. You approve every post before it publishes, and early on you will edit more while the voice tunes in." },
    { q: "How much of my time does this take?", a: "Under thirty minutes a week once running. That is typically one voice note of raw thinking and a batch approval pass. The positioning session at the start is longer, around ninety minutes." },
    { q: "How long before this produces inbound?", a: "Reach usually moves within four to six weeks. Inbound conversations typically start in month two or three, because B2B audiences need repeated exposure before they act. Programmes that stop at week six almost always stop just before the compounding starts." },
    { q: "Is ghostwriting dishonest?", a: "The ideas, opinions and expertise must be yours. We handle structure, phrasing and the discipline of shipping. That is the same arrangement behind most executive bylines, keynote scripts and shareholder letters, and it stays legitimate as long as the substance is genuinely the executive's." },
    { q: "Does LinkedIn activity help AI visibility?", a: "Indirectly but meaningfully. A consistent, named expert presence strengthens the entity signals that generative engines use when deciding whether to name a person or company as an authority, and posts frequently get surfaced and referenced in AI answers on niche professional topics." },
  ],
  related: [
    { href: "/services/generative-engine-optimization/", icon: "geo", title: "Generative Engine Optimization", text: "Named expert presence is a corroboration signal engines weight.", go: "GEO services" },
    { href: "/services/content-marketing/", icon: "market", title: "Content Marketing", text: "Repurpose long-form assets into the weekly posting cadence.", go: "Content marketing" },
    { href: "/services/content-writing/", icon: "write", title: "Content Writing", text: "Turn recurring post themes into ranking long-form pages.", go: "Content writing" },
  ],
  ctaH2: "Build authority machines can see too",
  ctaText: "The free audit shows how AI engines currently describe your company and its leadership, which is usually the fastest argument for starting.",
});

// ---------- FREE AUDIT ----------

const auditFaqs = [
  { q: "What exactly do I receive?", a: "A PDF covering five things: a citation map of your category's buyer questions across ChatGPT, Perplexity, Google AI Overviews and Gemini; how each engine currently describes your brand; which competitors are cited instead of you and where they are cited from; the structural reasons behind the gaps; and a prioritised list of fixes ranked by effort against impact." },
  { q: "Is it genuinely free, and what is the catch?", a: "Genuinely free, and the catch is ordinary: some recipients hire us afterwards. The audit is yours regardless, it names the fixes explicitly enough for your own team to execute, and there is no call requirement attached to receiving it." },
  { q: "How long does it take?", a: "Five business days from receiving your three lines of intake. We do not queue audits behind client work, but we also do not automate them, because a generated report would not tell you anything worth acting on." },
  { q: "What do you need from me?", a: "Three lines: your website, how buyers describe the category you sell into, and your top three competitors. That is the entire intake. No forms, no discovery call, no access to your analytics." },
  { q: "Do I have to get on a call?", a: "No. The audit arrives by email and stands on its own. If you want to discuss it afterwards we can, but nothing about the process requires a meeting." },
  { q: "Which companies is this useful for?", a: "B2B SaaS and enterprise technology companies with an existing website and a defined category. If you are pre-launch or pre-website there is nothing for the engines to cite yet, so the audit would be mostly theoretical." },
];

const auditPage = {
  path: "/free-ai-visibility-audit/",
  trail: [HOME, { name: "Free AI Visibility Audit", url: "/free-ai-visibility-audit/" }],
  title: "Free AI Visibility Audit | See If ChatGPT Cites Your Brand",
  description:
    "Free AI Visibility Audit for B2B SaaS. See which buyer questions cite competitors instead of you across ChatGPT, Perplexity and AI Overviews. No call.",
  schema: [
    faqSchema(auditFaqs),
    {
      "@type": "Service",
      "@id": SITE + "/free-ai-visibility-audit/#service",
      name: "Free AI Visibility Audit",
      serviceType: "AI search visibility audit",
      provider: { "@id": SITE + "/#org" },
      description:
        "A free audit reporting how often ChatGPT, Perplexity, Google AI Overviews and Gemini cite a brand for its category's buyer questions, including a competitor citation map and a prioritised gap list. Delivered by email within five business days.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
      url: SITE + "/free-ai-visibility-audit/",
    },
    {
      "@type": "HowTo",
      "@id": SITE + "/free-ai-visibility-audit/#howto",
      name: "How to request the free AI Visibility Audit",
      totalTime: "PT5M",
      step: [
        { "@type": "HowToStep", position: 1, name: "Send three lines", text: "Email your website, your category as buyers describe it, and your top three competitors." },
        { "@type": "HowToStep", position: 2, name: "We run the queries", text: "We query your category's buyer questions across ChatGPT, Perplexity, Google AI Overviews and Gemini and record every citation." },
        { "@type": "HowToStep", position: 3, name: "Receive the report", text: "A citation map, competitor analysis and prioritised gap list arrives by email within five business days." },
      ],
    },
  ],
  body:
    pageHero({
      kicker: "Free, no call required",
      h1: "Free AI Visibility Audit",
      sub: "Find out exactly which buyer questions in your category name a competitor instead of you, across <strong>ChatGPT, Perplexity, Google AI Overviews and Gemini</strong>. Three lines of intake, five business days, no meeting.",
      ctaLabel: "Get Your Free Audit",
      note: "We reply from a real inbox. No autoresponder sequence, no calendar link.",
      trail: [HOME, { name: "Free AI Visibility Audit" }],
    }) +
    statBar() +

    '<section class="tight"><div class="container">' +
    secHead("The deliverable", "What is in the audit", "", true) +
    answer(
      "<strong>The free AI Visibility Audit is a report showing whether AI answer engines cite your brand for the questions your buyers actually ask.</strong> It covers four engines, maps which competitors are cited instead of you and from which sources, explains the structural reasons behind each gap, and ends with a prioritised fix list ranked by effort against impact. It is delivered by email within five business days and requires no call."
    ) +
    '<div class="audit-wrap">' +
    '<div><ul class="audit-list">' +
    [
      ["Citation map across four engines.", "Your category's buyer questions run against ChatGPT, Perplexity, Google AI Overviews and Gemini, with every citation recorded."],
      ["Brand description check.", "Exactly how each engine describes your company today, including what it gets wrong or out of date."],
      ["Competitor citation analysis.", "Who is being quoted instead of you, and which specific pages and third-party sources are feeding those answers."],
      ["Structural diagnosis.", "The reasons behind the gaps: missing answer blocks, absent schema, weak entity signals or thin corroboration."],
      ["Prioritised fix list.", "Ranked by effort against impact, specific enough for your own team to execute without us."],
    ].map(
      (i) =>
        '<li><span class="check"><svg viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5"/></svg></span>' +
        "<span><strong>" + i[0] + "</strong> " + i[1] + "</span></li>"
    ).join("") +
    "</ul>" +
    '<a class="btn big" href="' + AUDIT_MAILTO + '">Get Your Free Audit</a></div>' +
    '<div class="audit-visual">' +
    '<div class="gap-row"><span class="kq">"best [category] software 2026"</span><span class="pill gap">Not cited</span></div>' +
    '<div class="gap-row"><span class="kq">"[competitor] alternatives"</span><span class="pill gap">Not cited</span></div>' +
    '<div class="gap-row"><span class="kq">"[category] for enterprise teams"</span><span class="pill cited">Cited</span></div>' +
    '<div class="gap-row"><span class="kq">"how to choose a [category] vendor"</span><span class="pill gap">Not cited</span></div>' +
    '<div class="gap-row"><span class="kq">"[category] implementation checklist"</span><span class="pill cited">Cited</span></div>' +
    '<div class="gap-row"><span class="kq">"[category] pricing benchmarks"</span><span class="pill gap">Not cited</span></div>' +
    '<p class="cap">Sample citation map. The real one uses your category, your competitors and your buyer questions.</p>' +
    "</div></div>" +
    "</div></section>" +

    '<section><div class="container">' +
    secHead("Process", "Three lines in, a report out", "Deliberately the lowest-friction intake we could design.") +
    steps([
      ["Send three lines", "Website, category as buyers describe it, top three competitors. Nothing else is required."],
      ["We run the queries", "Your category's buyer questions, run repeatedly across four engines to account for response variance."],
      ["We diagnose the gaps", "Every missing citation traced back to a structural cause rather than left as an observation."],
      ["You get the report", "By email within five business days, yours to act on with or without us."],
    ]) +
    "</div></section>" +

    '<section><div class="container">' +
    secHead("What happens next", "After the audit", "", true) +
    '<div class="prose">' +
    "<p>Nothing automatic. There is no drip sequence and no follow-up call scheduled on your behalf. Most recipients do one of three things:</p>" +
    "<ul>" +
    "<li><strong>Execute it in house.</strong> The fix list is written to be actionable by your own team. Several companies have done exactly that, and that is a legitimate outcome.</li>" +
    "<li><strong>Ask us to scope the fixes.</strong> We send a written scope covering only the services the audit justifies, with pricing, and you decide in your own time.</li>" +
    "<li><strong>Sit on it.</strong> Also fine. The baseline is dated, so it stays useful as a comparison point whenever you come back to it.</li>" +
    "</ul></div>" +
    "</div></section>" +

    '<section><div class="container">' +
    secHead("FAQ", "Questions before you send the email", "") +
    faqBlock(auditFaqs) +
    "</div></section>" +

    ctaPanel(
      "Send the three lines",
      "Your website, your category, your top three competitors. The citation report comes back within five business days.",
      "No forms. No calendar links. No call required at any point."
    ),
};

// ---------- RESULTS ----------

const resultsFaqs = [
  { q: "Why are client names not attached to every metric?", a: "Some engagements are covered by confidentiality terms, and several were delivered as a white-label or contracted content partner rather than under this brand. We would rather publish an unattributed real number than an attributed invented one. Named references are available on request during scoping." },
  { q: "How do you measure AI citations?", a: "A fixed set of category buyer questions is run across ChatGPT, Perplexity, Google AI Overviews and Gemini on a monthly cadence, recording whether the brand is cited, how it is described, and which competitors appear. Because engine responses vary between runs, each question is sampled multiple times rather than treated as a single reading." },
  { q: "Are these results typical?", a: "They are real, and they are not guaranteed. Outcomes depend on category competitiveness, existing domain authority, publishing capacity and how much of the recommended scope actually gets implemented. A team that implements a quarter of the fix list gets roughly a quarter of the result." },
];

const results = {
  path: "/results/",
  trail: [HOME, { name: "Results", url: "/results/" }],
  title: "Results | B2B SaaS SEO, Content and AI Visibility Outcomes",
  description:
    "Real outcomes from B2B SaaS SEO, content and AI visibility work: 0 to 11 AI-cited keywords in six months, 3x blog traffic, 200K+ LinkedIn views.",
  schema: [faqSchema(resultsFaqs)],
  body:
    pageHero({
      kicker: "Results",
      h1: "Outcomes we can point at",
      sub: "No composite case studies, no invented logos and no client testimonials we wrote ourselves. Every number below came from work that actually shipped.",
      trail: [HOME, { name: "Results" }],
    }) +
    statBar() +
    clientWall() +

    '<section class="tight"><div class="container">' +
    secHead("Outcomes", "What the work produced", "", true) +
    '<div class="results">' +
    [
      ["0 to 11", "AI-cited keywords in six months", "A B2B SaaS client held solid organic rankings but was cited by no AI engine at all. Rebuilding answer blocks and schema on existing high-authority pages, then adding coverage for uncontested buyer questions, produced eleven buyer-intent queries where engines now name them directly.", "AI visibility programme"],
      ["3x", "Blog traffic in six months", "A US B2B SaaS brand was publishing consistently across scattered topics with flat results. Consolidating into topical clusters, refreshing existing pages before writing new ones, and rebuilding internal linking tripled organic blog sessions.", "B2B SaaS SEO"],
      ["200K+", "Organic LinkedIn views ghostwritten", "Executive thought leadership researched, written and shipped weekly for technology leaders, compounding into inbound conversations rather than impressions alone.", "LinkedIn personal branding"],
      ["500+", "Long-form articles published and ranking", "Six years of shipped B2B technology content across SaaS, engineering, healthcare, logistics and enterprise software categories.", "Content writing"],
      ["50+", "SaaS and enterprise brands served", "Strategy and execution delivered globally, including JungleWorks, Testlify, Scalenut, Pepper Content, MultiQoS and INTECH.", "Client portfolio"],
      ["4K+", "LinkedIn audience built organically", "An owned professional audience earned entirely through consistent publishing, with no paid amplification at any point.", "Owned audience"],
    ].map(
      (r) =>
        '<div class="result"><div class="metric">' + r[0] + "</div><h3>" + r[1] + "</h3><p>" + r[2] + '</p><span class="who">' + r[3] + "</span></div>"
    ).join("") +
    "</div></div></section>" +

    '<section><div class="container">' +
    secHead("Credibility", "Where our work has been published", "Third-party publication is both a credibility signal for buyers and a corroboration signal for AI engines.", true) +
    '<div class="prose"><ul>' +
    "<li><strong>Forbes Technology Council.</strong> Contributor covering AI, search and B2B technology strategy.</li>" +
    "<li><strong>Industry technology publications.</strong> Long-form bylines on AI supply chains, microservices architecture and application modernisation.</li>" +
    "<li><strong>Client-owned properties.</strong> Hundreds of ranking articles published under client brands across six years.</li>" +
    "</ul></div></div></section>" +

    '<section><div class="container">' +
    secHead("Clients", "What they said", "") +
    '<div class="quotes">' +
    '<figure class="quote"><blockquote>Creative, sharp on strategy, and genuinely good at turning a dry technical brief into something people want to read.</blockquote><figcaption><span class="av">BS</span><span>Marketing lead, B2B SaaS</span></figcaption></figure>' +
    '<figure class="quote"><blockquote>Deadlines never slipped once. That sounds like a low bar until you have worked with three agencies that missed them.</blockquote><figcaption><span class="av">NS</span><span>Founder, tech startup</span></figcaption></figure>' +
    '<figure class="quote"><blockquote>The writing quality held up across very different niches, which is the part most freelancers cannot do.</blockquote><figcaption><span class="av">SR</span><span>Content manager, enterprise tech</span></figcaption></figure>' +
    "</div></div></section>" +

    '<section><div class="container">' +
    secHead("FAQ", "Fair questions about these numbers", "") +
    faqBlock(resultsFaqs) +
    "</div></section>" +

    ctaPanel("See what your baseline looks like", "Every engagement above started with the same free audit. It costs you three lines of email."),
};

// ---------- ABOUT ----------

const aboutFaqs = [
  { q: "Who is Vivaan Marketing?", a: "Vivaan Marketing is a B2B SaaS marketing agency based in Ahmedabad, India, working with technology companies across the United States, United Kingdom, Canada, Australia and India. The team specialises in AI search visibility, SEO, content and LinkedIn personal branding, with six years of B2B technology experience and more than 500 published long-form articles behind it." },
  { q: "How big is the team?", a: "Small and senior by design. Strategy stays with an experienced practitioner rather than being handed to an account coordinator, and specialist writers are assigned by domain. We would rather turn work down than staff it with people learning your category on your budget." },
  { q: "Why the focus on AI visibility?", a: "Because the shift is already measurable in client accounts. Buyers increasingly shortlist vendors inside ChatGPT, Perplexity and Google AI Overviews before visiting a website, and a generated answer names three sources rather than ten. Agencies still selling rankings alone are optimising for a surface that a growing share of buyers no longer reach." },
  { q: "What does Vivaan mean?", a: "Vivaan refers to the first rays of the morning sun, which is where the identity comes from: a sun disc rising out of a V-shaped valley. The commercial reading is deliberate, since the work is about being seen first." },
  { q: "Where are you based and who do you serve?", a: "Based in Ahmedabad, Gujarat, India, serving B2B technology companies globally with the United States as the primary market. Delivery is asynchronous by default, so time zones have not been a practical constraint." },
];

const about = {
  path: "/about/",
  trail: [HOME, { name: "About", url: "/about/" }],
  title: "About Vivaan Marketing | B2B SaaS Marketing Agency",
  description:
    "Vivaan Marketing is a B2B SaaS marketing agency specialising in AI search visibility, SEO, content and LinkedIn. Six years in B2B tech, 50+ brands, 500+ articles shipped.",
  schema: [faqSchema(aboutFaqs)],
  body:
    pageHero({
      kicker: "About",
      h1: "A B2B marketing agency built for the answer era",
      sub: "We started where most agencies stop: with the question of whether a machine deciding your buyer's shortlist has any reason to name you.",
      trail: [HOME, { name: "About" }],
    }) +
    statBar() +

    '<section class="tight"><div class="container"><div class="prose">' +
    "<h2>Who is Vivaan Marketing?</h2>" +
    answer(
      "<strong>Vivaan Marketing is a B2B SaaS marketing agency based in Ahmedabad, India, specialising in AI search visibility alongside SEO, content and LinkedIn personal branding.</strong> The team has six years of experience in B2B technology content, more than 500 published long-form articles, and over 50 SaaS and enterprise brands served across the United States, United Kingdom, Canada, Australia and India."
    ) +
    "<h3>Why we exist</h3>" +
    "<p>A few years ago, winning B2B search meant ranking. Today a significant share of buyer research happens inside a generated answer that names three sources and moves on. We watched client accounts hold their rankings while inbound quietly thinned, traced it, and found the same pattern repeatedly: the brands being cited were not the brands ranking highest. They were the ones structured to be quoted and corroborated enough to be trusted.</p>" +
    "<p>That is the gap the agency was built around. Not as a rebrand of SEO, and not as a replacement for it, but as the layer most B2B teams have not built yet.</p>" +
    "<h3>How we work</h3>" +
    "<ul>" +
    "<li><strong>Senior practitioners on the account.</strong> Strategy does not get delegated to whoever is available this month.</li>" +
    "<li><strong>Asynchronous by default.</strong> Written strategy, shared calendars and monthly reports instead of a standing call that consumes an afternoon.</li>" +
    "<li><strong>Evidence over adjectives.</strong> Every recommendation traces to something observed in your data or in an engine response we recorded.</li>" +
    "<li><strong>Narrow focus.</strong> B2B SaaS and enterprise technology only. We do not run ecommerce or local accounts.</li>" +
    "<li><strong>Honest scoping.</strong> If the audit shows the fix is a fortnight of your own team's time, we say so.</li>" +
    "</ul>" +
    "<h3>The name</h3>" +
    "<p>Vivaan means the first rays of the morning sun. The mark is a sun disc rising out of a V-shaped valley, which is a fairly direct statement of what the work is for: being seen first, before the rest of the field is visible at all.</p>" +
    "</div></div></section>" +

    clientWall() +

    '<section><div class="container">' +
    secHead("Credentials", "What backs the work", "") +
    '<div class="results">' +
    [
      ["6+ yrs", "In B2B technology content and search", "SaaS, engineering, healthcare, logistics and enterprise software categories, exclusively B2B.", "Experience"],
      ["Forbes", "Technology Council contributor", "Published on AI, search and B2B technology strategy in a vetted professional community.", "Authority"],
      ["50+", "Brands served globally", "Including JungleWorks, Testlify, Scalenut, Pepper Content, MultiQoS and INTECH.", "Portfolio"],
      ["HubSpot", "Certified in inbound and content", "Formal certification underneath the practical track record.", "Certification"],
    ].map(
      (r) => '<div class="result"><div class="metric">' + r[0] + "</div><h3>" + r[1] + "</h3><p>" + r[2] + '</p><span class="who">' + r[3] + "</span></div>"
    ).join("") +
    "</div></div></section>" +

    '<section><div class="container">' +
    secHead("Services", "What we do", "") +
    cardsGrid([
      { href: "/services/answer-engine-optimization/", icon: "aeo", title: "Answer Engine Optimization", text: "Make your pages the passage an AI engine quotes.", go: "AEO services" },
      { href: "/services/generative-engine-optimization/", icon: "geo", title: "Generative Engine Optimization", text: "Build the entity authority that earns the citation.", go: "GEO services" },
      { href: "/services/b2b-saas-seo/", icon: "seo", title: "B2B SaaS SEO", text: "Topical authority that compounds into pipeline.", go: "SaaS SEO" },
    ]) +
    "</div></section>" +

    '<section><div class="container">' +
    secHead("FAQ", "Questions about the agency", "") +
    faqBlock(aboutFaqs) +
    "</div></section>" +

    ctaPanel("Start with the audit", "It is the fastest way to find out whether any of this applies to your category."),
};

// ---------- CONTACT ----------

const contactFaqs = [
  { q: "How fast do you reply?", a: "Within one business day, from a real inbox. There is no autoresponder sequence and no chatbot in front of it." },
  { q: "Do I need to book a call to work with you?", a: "No. Scoping, proposals and delivery all run over email by default. If you prefer a call we will do one, but nothing in the process requires it." },
  { q: "What information should I include?", a: "For the audit, three lines: website, category as your buyers describe it, and top three competitors. For anything else, a sentence on what is not working is enough to start." },
  { q: "Do you take on projects outside B2B technology?", a: "Rarely. The value here is category depth in B2B SaaS and enterprise technology, and that advantage disappears outside it. If you are outside that space we will usually say so rather than take the work." },
];

const contact = {
  path: "/contact/",
  trail: [HOME, { name: "Contact", url: "/contact/" }],
  title: "Contact Vivaan Marketing | B2B SaaS Marketing Agency",
  description:
    "Contact Vivaan Marketing for B2B SaaS marketing, AI visibility, SEO, content and LinkedIn. Reply within one business day. No forms and no call required.",
  schema: [
    faqSchema(contactFaqs),
    {
      "@type": "ContactPage",
      "@id": SITE + "/contact/#contactpage",
      name: "Contact Vivaan Marketing",
      about: { "@id": SITE + "/#org" },
    },
  ],
  body:
    pageHero({
      kicker: "Contact",
      h1: "Tell us what is not working",
      sub: "One email, one business day, one real reply. No forms to fill in, no discovery call to sit through before anyone tells you anything useful.",
      trail: [HOME, { name: "Contact" }],
    }) +

    '<section class="tight end-pad"><div class="container">' +
    '<div class="contact-grid">' +
    '<div class="prose">' +
    "<h2>How to reach us</h2>" +
    answer(
      "<strong>Email is the fastest route, and every button below opens a prefilled message.</strong> Most enquiries start with the free AI Visibility Audit, which needs three lines from you and returns a citation report within five business days. Replies come from a real inbox within one business day."
    ) +
    "<h3>Pick the one that fits</h3>" +
    "<ul>" +
    "<li><strong>You want the free audit.</strong> Send your website, category and top three competitors. Report back in five business days.</li>" +
    "<li><strong>You have a specific project.</strong> Describe what is not working and we will reply with whether we are the right fit, honestly.</li>" +
    "<li><strong>You want to compare services first.</strong> The services page lays out what each one solves before you commit to anything.</li>" +
    "</ul>" +
    "<h3>Where we are</h3>" +
    "<p>Ahmedabad, Gujarat, India. We work with B2B technology companies across the United States, United Kingdom, Canada, Australia and India, asynchronously by default, which is why the time difference has never been the bottleneck.</p>" +
    "</div>" +
    "<div>" +
    '<div class="contact-panel">' +
    "<h3>Request the free audit</h3>" +
    "<p>Three lines of intake. A citation report across four AI engines within five business days. No call required.</p>" +
    '<a class="btn big" href="' + AUDIT_MAILTO + '">Get Your Free Audit</a>' +
    '<p class="field-note">Opens your email client with the three intake lines already filled in.</p>' +
    "</div>" +
    '<div class="contact-panel" style="margin-top:22px">' +
    "<h3>Something else</h3>" +
    "<p>A project, a question about scope, or a partnership. Same inbox, same one business day reply.</p>" +
    '<a class="btn" href="' + mailto("Enquiry for Vivaan Marketing", ["Hi,", "", "Here is what I am trying to solve:", "", "", "Company website: ", "", "Thanks,"].join("\n")) + '">Send an enquiry</a>' +
    '<p class="field-note">Prefer LinkedIn? <a href="' + LINKEDIN + '" rel="me noopener">Message us there</a>.</p>' +
    "</div>" +
    "</div>" +
    "</div></div></section>" +

    '<section><div class="container">' +
    secHead("FAQ", "Before you write", "") +
    faqBlock(contactFaqs) +
    "</div></section>" +

    ctaPanel("Still deciding?", "The audit answers the only question that matters right now: do AI engines cite you or your competitors?"),
};

// ---------- 404 ----------

const notFound = {
  path: "/404.html",
  noindex: true,
  title: "Page not found | Vivaan Marketing",
  description: "That page does not exist. Browse our B2B SaaS marketing services or request the free AI Visibility Audit for your brand.",
  body:
    '<div class="page-hero"><div class="container"><div class="page-hero-inner">' +
    '<p class="kicker">404</p>' +
    "<h1>That page is not here</h1>" +
    '<p class="sub">The link is wrong or the page has moved. The services below cover everything on this site.</p>' +
    '<div class="cta-row"><a class="btn big" href="/">Back to home</a>' +
    '<a class="link-arrow" href="/services/">See all services</a></div>' +
    "</div></div></div>" +
    '<section class="tight end-pad"><div class="container">' +
    secHead("Services", "Where you were probably heading", "") +
    cardsGrid([
      { href: "/services/answer-engine-optimization/", icon: "aeo", title: "Answer Engine Optimization", text: "Get quoted in ChatGPT and Perplexity answers.", go: "AEO services" },
      { href: "/services/generative-engine-optimization/", icon: "geo", title: "Generative Engine Optimization", text: "Win citations in Google AI Overviews and Gemini.", go: "GEO services" },
      { href: "/services/b2b-saas-seo/", icon: "seo", title: "B2B SaaS SEO", text: "Topical authority that compounds into pipeline.", go: "SaaS SEO" },
      { href: "/services/content-writing/", icon: "write", title: "Content Writing", text: "Long-form written by senior B2B specialists.", go: "Content writing" },
      { href: "/services/content-marketing/", icon: "market", title: "Content Marketing", text: "Editorial calendars tied to revenue KPIs.", go: "Content marketing" },
      { href: "/services/linkedin-personal-branding/", icon: "linkedin", title: "LinkedIn Personal Branding", text: "Founder presence, ghostwritten and consistent.", go: "LinkedIn branding" },
    ]) +
    "</div></section>" +
    ctaPanel("While you are here", "The free AI Visibility Audit shows whether AI engines cite your brand or your competitors."),
};

export const pages = [
  home,
  servicesHub,
  aeo,
  geo,
  saasSeo,
  contentWriting,
  contentMarketing,
  linkedin,
  auditPage,
  results,
  about,
  contact,
  notFound,
];
