# Vivaan Martech — website & brand kit

One-page static site built around the **First Light** identity: a sun disc rising
out of a V-shaped valley ("Vivaan" = the first rays of the morning sun).

## Files

| File | Purpose |
|---|---|
| `index.html` | The entire site — no build step, no dependencies. |
| `assets/logo.svg` | Primary mark (dawn-orange disc, ink V). |
| `assets/logo-mono.svg` | All-ink version for single-color print. |
| `assets/logo-white.svg` | Reversed version for dark backgrounds. |
| `assets/favicon.svg` | Favicon — auto-adapts to light/dark browser themes. |
| `assets/lockup.svg` | Horizontal mark + wordmark lockup. |
| `assets/social-card.svg` | 1200×630 share-card artwork. |

## Brand tokens

- Navy ink `#0A2540` · Body `#425466` · Ground `#F6F9FC` · Line `#E3E8EF`
- Brand gradient: indigo `#5851E1` → violet `#7A5AF8` → cyan `#0EA5E9`
  (sun disc in the logo, CTA band, stat numbers, icon chips carry the hues)
- Light, Stripe-inspired SaaS aesthetic: white cards, soft layered shadows,
  pill buttons, skewed pastel gradient band in the hero.
- Type: Inter; sentence-case headlines, weight 700–800, tight tracking.
  Wordmark is lowercase **vivaan** with "MARTECH" as a letterspaced descriptor
  that drops off small-format uses (favicon, avatars).

## Deploy (pick one, all free)

- **Netlify**: drag this folder onto https://app.netlify.com/drop — done.
- **Vercel**: `npx vercel` in this folder, or import via the dashboard.
- **GitHub Pages**: push to a repo, enable Pages on the main branch.

Then point your domain (e.g. vivaanmartech.com) at it from the host's dashboard.

## Positioning (July 2026 strategy brief)

Sales asset, not portfolio. One conversion goal: US B2B SaaS founder/CMO
requests the free AI Visibility Audit (all CTAs are prefilled mailto links,
async funnel, no calls). Offer ladder: free audit → $2-3K/month retainer.
Real proof only: 3x blog traffic (US SaaS, 6 months), 200K+ ghostwritten
LinkedIn views, Forbes Technology Council, 7+ years.

## Before launch — check these in `index.html`

1. **Contact email** — currently `sachraj178@gmail.com`; change if you want a
   branded address (hello@vivaanmartech.com).
3. **og:image** — convert `assets/social-card.svg` to PNG (1200×630) and add
   `<meta property="og:image" content="...">`; most platforms won't render SVG.
4. **Analytics** — add your snippet before `</body>` if wanted.
