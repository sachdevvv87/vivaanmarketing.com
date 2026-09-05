# Vivaan Marketing: SEO, AEO and GEO plan

Version 1.0, 5 September 2026. Owner: Vivaan Marketing. Domain: `vivaanmarketing.com`.

This is the plan the website was built against, and the plan future blog posts should
be commissioned from. Nothing here is aspirational filler. Every page that exists today
is mapped to a primary query, and every gap is listed with the reason it matters.

---

## 1. Strategic position

**The wedge:** AEO and GEO are high-intent, low-competition, and rising fast. Established
agencies are still selling "SEO services" against domains with fifteen years of authority.
A new domain cannot win "b2b saas seo agency" this year. It can plausibly win
"answer engine optimization services" inside two quarters, because the SERP is thin, the
category vocabulary is unsettled, and almost nobody has published a genuinely useful
commercial page on it.

**The sequence:** win AEO and GEO first, use the authority and the citations that produces
to attack the broader SEO and content-marketing terms in phase three. Do not reverse this
order. Attacking "content marketing agency" from a new domain is the single most common
way an agency site burns twelve months.

**The asymmetry to exploit:** AI answer engines have a much shorter memory than Google's
link graph. Google needs years of accumulated authority before it trusts a new domain on a
commercial term. ChatGPT and Perplexity will cite a two-month-old page today if it is the
clearest available answer and the entity behind it is coherent. That gap is the entire
opportunity, and it closes as the category matures.

---

## 2. Keyword map: what each existing page owns

One page, one primary query. No two pages compete for the same term. This is enforced by
the topical map below and should be checked before any new page is commissioned.

| Page | Primary keyword | Secondary and semantic targets | Intent | Difficulty |
|---|---|---|---|---|
| `/` | b2b saas marketing agency | ai visibility agency, ai search marketing agency, b2b marketing agency for saas | Commercial | High |
| `/services/` | b2b saas marketing services | saas marketing services, b2b marketing services list | Commercial | Medium |
| `/services/answer-engine-optimization/` | **answer engine optimization services** | aeo services, aeo agency, what is answer engine optimization, aeo vs seo | Commercial | **Low** |
| `/services/generative-engine-optimization/` | **generative engine optimization services** | geo services, geo agency, what is generative engine optimization, geo vs aeo | Commercial | **Low** |
| `/services/b2b-saas-seo/` | b2b saas seo agency | saas seo services, b2b saas seo, saas seo agency | Commercial | High |
| `/services/content-writing/` | b2b content writing services | saas content writing agency, b2b content writers, technical content writing services | Commercial | Medium |
| `/services/content-marketing/` | b2b content marketing agency | saas content marketing agency, b2b content marketing services | Commercial | High |
| `/services/linkedin-personal-branding/` | linkedin personal branding services | linkedin ghostwriting for founders, executive linkedin ghostwriter, b2b linkedin branding agency | Commercial | Medium |
| `/free-ai-visibility-audit/` | **free ai visibility audit** | ai visibility check, chatgpt brand visibility, is my brand cited in chatgpt, ai citation audit | Transactional | **Low** |
| `/results/` | b2b saas seo case studies | aeo case study, ai visibility results | Investigational | Low |
| `/about/` | vivaan marketing | who is vivaan marketing, vivaan marketing agency | Navigational | Low |
| `/contact/` | contact vivaan marketing | vivaan marketing contact | Navigational | Low |

**Priority order for link building and promotion:** the three bolded rows first. They are
the only pages where a new domain has a realistic path to page one inside two quarters,
and two of them are the money pages.

---

## 3. AI search optimization: what is already shipped

These are built into the site as it stands, not future work.

### Structural (every page)
- **Answer-first blocks.** A 40 to 60 word extractable definition sits directly under the
  primary H2 on every commercial page, styled as `.answer-first`. This is the passage an
  engine lifts. It is written to survive being quoted with no surrounding context.
- **Question-form headings.** H2s are phrased the way a buyer phrases the question to an
  AI ("What is answer engine optimization?"), not the way a keyword tool spells it.
- **Comparison tables.** Every service page carries one. Answer engines extract tables at
  a disproportionate rate and most competitor pages in this category have none.
- **FAQ blocks with FAQPage schema.** Five to six questions per page, answered in full
  sentences that stand alone when lifted out of the page.

### Entity and schema
- A complete `@graph` on every page: `ProfessionalService` plus `Organization`, `WebSite`,
  `WebPage`, `BreadcrumbList`, plus `Service` and `FAQPage` where they apply. The audit
  page also carries `HowTo` and a zero-price `Offer`.
- The organisation node repeats on **every** page, so any single crawled URL carries the
  full entity definition. An engine that only ever sees one page still learns what the
  company is, where it is, what it sells and what it knows about.
- `sameAs` links LinkedIn and sachindevmurari.com, tying the properties into one entity.
- `knowsAbout` declares the eight topics the brand should be associated with.

### Crawler access
- `robots.txt` explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot,
  Claude-SearchBot, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended,
  CCBot and others by name. Many sites block these by accident through a default
  disallow or a security plugin. Being cited requires being crawled.
- `llms.txt` gives models a clean, structured brand brief: definitions, offers, proof
  points, service URLs, and an explicit line stating there is no blog yet, so nothing
  hallucinates a blog URL.

### Measurement
Rank trackers do not report AI citations. Run this manually, monthly, and log it:

1. Fix a list of 20 category questions (the ones in section 5 are the starting set).
2. Run each across ChatGPT, Perplexity, Google AI Overviews and Gemini.
3. Record: cited yes/no, how the brand was described, which competitors appeared.
4. Sample each question **three times**, because engine responses vary between runs.
   A single response is an anecdote, not a reading.
5. Track citation share month over month. That is the real KPI for this site.

---

## 4. Technical and Core Web Vitals baseline

Shipped as built:

- **No render-blocking third-party requests.** The Google Fonts `@import` that was in the
  original build is gone. Inter is self-hosted as a 48KB variable woff2, preloaded, with
  `font-display: swap`.
- **One stylesheet, cached across all pages.** 24KB, no framework, no CSS-in-JS.
- **Effectively no JavaScript.** One inline function for the mobile nav toggle. No
  hydration, no main-thread blocking, so INP is bounded by the browser itself.
- **Zero layout shift by construction.** No images in the layout flow, no injected banners,
  no web-font swap on a differently-metricked fallback. CLS should be 0.00.
- **LCP is server-rendered text.** The largest element on every page is the H1, present in
  the initial HTML, with no client-side rendering step in front of it.
- **Immutable cache headers** on `/assets/fonts/*` and a week on `/assets/*`, configured
  for both Netlify (`_headers`) and Vercel (`vercel.json`).

Expected field results on a decent host: LCP well under 1.5s, CLS 0.00, INP under 100ms.
Verify with PageSpeed Insights after the domain resolves, and again 28 days later when
field data (CrUX) has accumulated. Lab data is directional, field data is the score.

**Indexability:** all 12 content pages emit `index, follow, max-image-preview:large,
max-snippet:-1`. Only `/404.html` is `noindex, follow`. Canonicals are self-referencing
and validated against the actual route by `validate.mjs`, so a canonical can never drift
from the URL it sits on.

---

## 5. Blog plan: the first 12 posts, in commissioning order

**No blog is live yet, by design.** Publishing thin posts before the commercial pages have
authority dilutes the topical focus. Commission these in this order, roughly two a month.
Each one exists to support a specific money page, not to chase traffic on its own.

### Phase 1: own the AEO and GEO vocabulary (months 1 to 2)

These are definitional. They are how a new domain becomes the source that engines quote
when someone asks what these terms mean, and every one of them links up to a service page.

| # | Working title | Primary keyword | Supports | Why this one |
|---|---|---|---|---|
| 1 | What Is Answer Engine Optimization? A B2B Guide for 2026 | what is answer engine optimization | AEO page | Highest-volume informational term in the wedge. Definitional posts get cited constantly. |
| 2 | AEO vs SEO: What Actually Changes When Buyers Ask AI | aeo vs seo | AEO page | Comparison intent, very thin SERP, and it is the question every prospect asks first. |
| 3 | What Is Generative Engine Optimization? GEO Explained | what is generative engine optimization | GEO page | Same play as post 1 for the second wedge term. |
| 4 | GEO vs AEO: Which One Does Your Brand Actually Need? | geo vs aeo | Both wedge pages | Nobody has written this well. It also disambiguates two terms buyers conflate. |

### Phase 2: buyer-intent and problem-aware (months 3 to 4)

| # | Working title | Primary keyword | Supports | Why this one |
|---|---|---|---|---|
| 5 | How to Check If ChatGPT Mentions Your Brand (Free Method) | does chatgpt mention my brand | Audit page | Direct feeder to the free audit. High commercial intent disguised as a how-to. |
| 6 | Why Your Competitors Get Cited in AI Answers and You Do Not | why is my competitor cited in ai | AEO page | Pain-first framing. This is the exact sentence a CMO types at 11pm. |
| 7 | How to Get Cited in Google AI Overviews: 9 Structural Fixes | how to rank in google ai overviews | GEO page | Highest commercial-intent GEO query with real volume. |
| 8 | Schema Markup for AI Search: What Actually Gets You Cited | schema markup for ai search | AEO page | Technical depth signals genuine expertise, which is what earns the citation. |

### Phase 3: broaden into the competitive terms (months 5 to 6)

Only start these once phase 1 and 2 pages are indexed and at least a few are earning
citations. This is where you spend the authority the wedge earned.

| # | Working title | Primary keyword | Supports | Why this one |
|---|---|---|---|---|
| 9 | B2B SaaS SEO in 2026: Strategy for the AI Answer Era | b2b saas seo strategy | SaaS SEO page | Bridges the wedge into the competitive term with a differentiated angle. |
| 10 | Topical Authority for SaaS: Building Clusters That Compound | topical authority saas | SaaS SEO page | Depth piece. Strong internal-linking hub for later posts. |
| 11 | The B2B Content Marketing Metrics That Survive a CFO Question | b2b content marketing metrics | Content marketing page | Differentiated angle on a saturated term. Reuses the metrics table already on the site. |
| 12 | LinkedIn Ghostwriting for Founders: How the System Works | linkedin ghostwriting for founders | LinkedIn page | Lowest competition of the three phase-three terms, direct commercial intent. |

### Rules for every post

- **Answer-first.** A 40 to 60 word extractable definition under the first H2, always.
- **Question-form H2s.** Match how a buyer asks an AI, not how a tool spells a keyword.
- **One table minimum.** Comparison, decision matrix or checklist. Tables get extracted.
- **Original data or a named expert quote where possible.** Both materially increase
  citation rate, because they give an engine something no competitor page has.
- **Link up to the money page** in the first third, not only in a closing CTA.
- **FAQPage schema** with four to six genuinely distinct questions.
- **No em dashes.** Brand copy rule, enforced by `validate.mjs`.
- **1,800 to 2,600 words.** Long enough for depth, short enough to stay dense.
- When the blog launches, add a `Blog` nav item, a `/blog/` hub with `Blog` schema, and
  remove the "there is no blog on this site yet" line from `llms.txt`.

---

## 6. Off-site: the corroboration programme

On-site work alone will not produce citations. Models need to see the brand corroborated
somewhere they already trust. In rough order of leverage for this category:

1. **Keep the Forbes Technology Council contributions active.** This is the strongest
   single authority signal available and it already exists. Publish quarterly at minimum.
2. **Directory and review profiles.** Clutch, G2 (as a service provider), DesignRush,
   Sortlist. These are structured, heavily crawled, and disproportionately weighted when
   a model is asked to recommend an agency.
3. **Reddit and niche communities.** r/SEO, r/bigseo, r/SaaS. Genuine participation, not
   drops. Reddit carries unusual weight in several engines' source pools.
4. **LinkedIn cadence from the founder profile.** Named expert presence is corroboration.
   The service is already sold on this page, so run it on the agency itself.
5. **Guest posts on B2B marketing publications.** Lower priority than the above but they
   compound, and they are the most reliable source of genuine editorial links.
6. **Original research.** One benchmark study per year, for example "we ran 500 B2B buyer
   questions across four AI engines and here is who gets cited." Highest-leverage asset
   available, and nothing else earns citations at the same rate.

---

## 7. Launch checklist

Do these in order once the domain resolves.

- [x] **Done 5 Sep 2026.** Domain registered at Wix, DNS repointed to GitHub Pages
      (four apex A records plus a www CNAME). Site live and serving 200 on every route.
- [ ] HTTPS: GitHub is provisioning the certificate. Once issued, enable Enforce HTTPS
      so `http` 301s to `https`.
- [x] **Done 5 Sep 2026.** Google Search Console domain property `vivaanmarketing.com`
      verified via DNS TXT (auto verified, method: domain name provider). Sitemap
      submitted, status Success, 12 pages discovered.
- [ ] Resubmit the sitemap as `https://vivaanmarketing.com/sitemap.xml` after HTTPS is
      enforced, then remove the `http` entry. The `http` one keeps working via the
      redirect in the meantime, so this is tidying rather than urgent.
- [ ] Request indexing on `/`, `/services/`, both wedge service pages and the audit page.
- [ ] Bing Webmaster Tools: verify and submit the same sitemap. Bing feeds Copilot and
      is materially cheaper to rank in than Google.
- [ ] Run PageSpeed Insights on the home page and one service page. Record the baseline.
- [ ] Validate the schema on three pages with Google's Rich Results Test and
      Schema.org's validator.
- [ ] Confirm `robots.txt` and `llms.txt` are reachable at the root of the live domain.
- [ ] Add analytics. Use something that does not block rendering: Plausible, Fathom or
      GA4 loaded with `defer`. Do not undo the CWV work with a tag manager.
- [ ] Set up the LinkedIn company page and link it from the footer, then add it to
      `sameAs` in `src/layout.mjs` and rebuild.
- [ ] Swap the mailto address to a branded one (`hello@vivaanmarketing.com`) once the
      domain mailbox exists. It is defined once, in `src/layout.mjs`.
- [ ] Record the month-zero AI citation baseline using the method in section 3. Without
      a baseline, none of the later reporting means anything.
- [ ] Diarise the first blog commission for four weeks after launch.

---

## 8. What to measure, and when

| Metric | Where | Cadence | Month 3 target | Month 6 target |
|---|---|---|---|---|
| AI citation share (20 fixed questions, 4 engines) | Manual log | Monthly | Cited on 3+ questions | Cited on 8+ questions |
| Non-brand organic sessions | Search Console | Monthly | Baseline established | Steady upward trend |
| Indexed pages | Search Console | Monthly | 12 of 12 | 12 plus published posts |
| Rankings: the two wedge terms | Any rank tracker | Weekly | Top 30 | Top 10 |
| Core Web Vitals (field) | CrUX / PSI | Monthly | All green | All green |
| Audit requests | Inbox | Weekly | 2 to 4 per month | 6 to 10 per month |

Do not judge this site on total traffic in month three. The wedge terms have low volume by
design. The number that matters is citation share, followed by audit requests. Traffic is
a lagging indicator here and treating it as the primary KPI will cause the wrong decisions.
