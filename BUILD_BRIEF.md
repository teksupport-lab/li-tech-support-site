# MyCo IT — Rebrand Build Brief

You are rebuilding this site from a Long Island IT concierge into a national AI advisory firm. Execute this brief end-to-end. Do **not** commit or push — leave all changes staged for human review.

---

## 1. The pivot

**From:** "MyCo IT — Private Technology Concierge" (Long Island, NY, IT support, four service pillars, heavy local SEO)

**To:** "MyCo IT — Private AI Advisory" (national / US-wide, remote-first, three tiered AI services, brand-only with no named founder)

**Tagline / one-liner:**
> Private AI advisory for individuals, families, and family offices serious about using Claude, ChatGPT, and the next generation of intelligent tools.

**What "MyCo IT" means now:** Treat IT as "Intelligent Technology," not "Information Technology." Never spell out the acronym. Let it become whatever the visitor projects onto it.

**Voice:** Quiet confidence. Discretion. Plain English. No jargon, no hype, no exclamation marks. Short sentences. The reader should feel they've found a serious advisor, not a marketing agency.

---

## 2. Critical fixes (apply throughout)

1. **Fix all malformed HTML.** Every existing file has doubled closing tags (`</span>span>`, `</a>a>`, `</div>div>`, `</section>section>`, etc.) and trailing orphaned closing-tag garbage after `</body>`. Regenerate every HTML file cleanly. Do not try to find-and-replace — write the files fresh.

2. **Fix the font name.** `Cormorant Garant` is not a real Google Font. The correct family is **`Cormorant Garamond`**. Update the Google Fonts link in every file and the `font-family` declaration in `css/style.css`. Use this exact link tag in every HTML file:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet">
   ```

3. **Strip all geographic references.** Remove every mention of: Long Island, Nassau County, Suffolk County, Garden City, Bay Shore, Hamptons, Gold Coast, Great Neck, Manhasset, Cold Spring Harbor, Huntington, Oyster Bay, Roslyn, Old Westbury, and any specific NY town. Remove `geo.region` and `geo.placename` meta tags. The brand is now national/remote-first with no physical address shown publicly.

4. **Remove all telephone references and shoe-cover / on-site visit language.** This is a remote advisory now.

---

## 3. Files to delete

```
services/systems-support.html
services/network-support.html
areas/                          (entire directory including huntington.html)
images/hero-it-support.png
images/about-team.png
```

Leave `images/llm-ai-support.png` for now — we may repurpose it.

---

## 4. Files to create

```
index.html                              (full rewrite)
about.html                              (new — titled "Our Approach")
contact.html                            (full rewrite)
services/ai-audit.html                  (new)
services/ai-implementation.html         (new)
services/ai-advisory.html               (new)
services/llm-ai-support.html            DELETE this file — replaced by the three above
insights/index.html                     (scaffold only, minimal placeholder)
sitemap.xml
robots.txt
404.html
llms.txt                                (full rewrite)
README.md                               (full rewrite — brief description)
```

---

## 5. Design system (preserve exactly)

Keep `css/style.css` mostly as-is. Required edits:

- Change all `Cormorant Garant` to `Cormorant Garamond`
- Remove `.areas-*` styles (no longer used)
- Add new styles for: `.pricing-card`, `.tier-grid`, `.tier-badge`, `.faq`, `.faq-item`, `.insights-grid`, `.principle-grid`
- Keep all existing tokens, button styles, hero styles, service-card styles, why-grid styles

**Color tokens (do not change):**
- `--primary: #0D1B2A` (deep navy)
- `--accent: #B8964E` (champagne gold)
- `--ivory: #F5F1EB`
- `--background: #FAFAF7`
- `--background-alt: #F2EFE9`
- `--text: #2C2C2C`
- `--text-light: #5A5A5A`
- `--border: #D4CFC7`

**Typography:** Cormorant Garamond for h1–h4, DM Sans for everything else. Keep existing weights and letter-spacing.

---

## 6. Global navigation (every page)

Header nav, in this order:
- **Home** → `/`
- **Services** ▾ (dropdown) → AI Audit & Strategy, AI Setup & Implementation, Private AI Advisory
- **Approach** → `/about.html`
- **Insights** → `/insights/`
- **Contact** → `/contact.html`

Right-aligned CTA button: **"Book a Consultation"** → `/contact.html` (gold primary button)

Footer columns:
1. **Brand** — MyCo IT logo, one-line description, "info@mycoit.services" mailto link. No physical address. No social icons unless real accounts exist (remove the existing FB/IG links — they pointed to dead URLs).
2. **Services** — three service page links
3. **Company** — Approach, Insights, Contact
4. **Resources** — `llms.txt` link

Footer bottom: `© 2026 MyCo IT. Private AI Advisory.`

---

## 7. Page specs

### 7.1 `index.html` — Homepage

**Title:** `MyCo IT | Private AI Advisory for Individuals & Families`
**Meta description:** `Private AI advisory for individuals, families, and family offices. We help discerning clients use Claude, ChatGPT, and the next generation of AI tools — discreetly and effectively.`
**Canonical:** `https://mycoit.services/`

**Structure (sections in order):**

1. **Header** (global)

2. **Hero** — full-bleed, navy background, gold accent text
   - Eyebrow badge: `Private AI Advisory`
   - H1: `The smartest people we know don't have time to figure out AI.`
   - H1 second line (text-gradient or accent color): `We do it for them.`
   - Subtitle: `Discreet, white-glove AI advisory for individuals, families, and family offices. We cut through the noise, choose the right tools, and build workflows that actually save you time.`
   - CTAs: `Book a Consultation` (primary) and `How We Work` (outline-white) → `/about.html`
   - Trust strip below CTAs (4 items): `Discreet & Confidential` · `Tool-Agnostic` · `Remote, Nationwide` · `By Referral & Inquiry`

3. **Tools strip** — small section, ivory background, centered. Header text: `We advise on every major AI platform, and recommend none by default.` Below: a row of plain text wordmarks (not logos): `Claude · ChatGPT · Gemini · Perplexity · Copilot · Midjourney · Sonnet · Opus · GPT-5`. Style as a single line of widely-spaced text in `--text-light`.

4. **Services teaser** — three cards in a grid, each linking to its service page. Headline: `Three Ways We Help`
   - Card 1: **AI Audit & Strategy** — `A focused diagnostic. We assess how you currently use AI, identify your highest-leverage opportunities, and deliver a written roadmap.` Link: "Learn More →"
   - Card 2: **AI Setup & Implementation** — `We build it for you. Custom Claude workflows, prompt libraries, knowledge integration, and automation — designed around your life.` Link: "Learn More →"
   - Card 3: **Private AI Advisory** — `An ongoing relationship. Continuous advisory, model updates, tool evaluation, and workflow refinement on retainer.` Link: "Learn More →"

5. **Why-us / Principles section** — replaces existing "Why Clients Choose MyCo IT" block, same visual structure (numbered grid), new copy. Headline: `Our Principles`
   - **01 — Discretion.** `We don't put names or photos on the internet — yours or ours. Our clients value privacy. So do we.`
   - **02 — Independence.** `We take no kickbacks, referral fees, or commissions from any AI vendor. Our recommendations are paid for by you, and only you.`
   - **03 — Plain English.** `No jargon, no hype, no buzzwords. We explain what AI can actually do, what it can't, and what's worth your time.`
   - **04 — Tool-Agnostic.** `We're Claude specialists, but we work with every major model. We recommend the right tool for the job, not the one we're paid to push.`

6. **Featured service block** (reuses existing `.featured-llm` styles) — highlights AI Setup & Implementation as the anchor offering. Headline: `AI Setup & Implementation`. Body: `Most clients don't want to learn AI. They want AI to work for them. We build custom workflows around your life and work — connected to your documents, tuned to your voice, ready to use the moment we hand them over.` Bullet list of 5 things included. CTA: `Explore Implementation →`

7. **Final CTA section** — navy background. Headline: `Begin a Conversation`. Body: `All engagements begin with a complimentary consultation. We'll discuss your situation, answer questions, and tell you honestly whether we can help.` Single CTA: `Book a Consultation`

8. **Footer** (global)

**JSON-LD schema** (replace the existing LocalBusiness block):

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://mycoit.services/#org",
  "name": "MyCo IT",
  "alternateName": "MyCo IT Private AI Advisory",
  "description": "Private AI advisory for individuals, families, and family offices. Specialists in Claude, ChatGPT, and emerging AI tools.",
  "url": "https://mycoit.services",
  "email": "info@mycoit.services",
  "areaServed": {"@type": "Country", "name": "United States"},
  "serviceType": ["AI Advisory", "AI Strategy Consulting", "AI Implementation", "Claude Consulting"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Private AI Advisory Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Audit & Strategy"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Setup & Implementation"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Private AI Advisory"}}
    ]
  }
}
```

---

### 7.2 `about.html` — Our Approach

**Title:** `Our Approach | MyCo IT Private AI Advisory`
**Meta description:** `How we work, what we believe, and why we don't put names or photos on the internet. The methodology behind MyCo IT's private AI advisory practice.`
**Canonical:** `https://mycoit.services/about.html`

**Sections:**

1. Header (global)
2. **Page header** — navy background, smaller than homepage hero. H1: `Our Approach`. Subtitle: `How we work, what we believe, and why our clients stay.`
3. **The discretion section** — H2: `Why we don't show faces.` Body (2 paragraphs):
   > Our clients value privacy. They are individuals, families, and family offices who, for good reasons of their own, prefer not to broadcast who their advisors are. We extend that same courtesy to ourselves. You will not find our names, photos, or biographies on this website.
   >
   > What you will find is our work. The frameworks we use, the principles we follow, and the methodology we've refined across hundreds of hours of advisory engagements. If you'd like to know who you're working with, we'll tell you the moment we speak. Discretion is not secrecy — it's a default we set so our clients don't have to.
4. **The methodology section** — H2: `How an engagement works.` Three steps in a vertical layout:
   - **Step 01 — Listen.** `Every engagement begins with a conversation. We learn how you actually spend your time, what frustrates you, and where AI might genuinely help. No sales pitch.`
   - **Step 02 — Recommend.** `We deliver an honest assessment. Sometimes that means a full implementation. Sometimes it means "you don't need us yet." We'd rather lose the engagement than oversell it.`
   - **Step 03 — Build & Hand Off.** `If we proceed, we build the workflows, document them, train you, and step back. You own the result. We're available when you need us — not embedded in your life by default.`
5. **The principles section** — reuse the four principles from the homepage (Discretion, Independence, Plain English, Tool-Agnostic) but expanded with one paragraph each.
6. **CTA section** — `Ready to begin a conversation?` → Book a Consultation
7. Footer (global)

**JSON-LD:** `Organization` schema, brief.

---

### 7.3 `services/ai-audit.html` — Tier 1

**Title:** `AI Audit & Strategy | MyCo IT`
**Meta description:** `A focused AI diagnostic for individuals and families. We assess how you use AI today, identify high-leverage opportunities, and deliver a written roadmap.`

**Sections:**

1. Header (global)
2. **Page header** — navy. Eyebrow: `Tier 01`. H1: `AI Audit & Strategy`. Subtitle: `A focused diagnostic and written roadmap. The right place to start if you're curious but unsure where AI fits in your life.`
3. **What it is** — H2: `What's included.` Bullet list:
   - A 90-minute discovery conversation
   - A review of how you currently use (or don't use) AI tools
   - Identification of your three highest-leverage AI opportunities
   - A written roadmap with specific, ranked recommendations
   - A 30-minute follow-up call to walk through the document
4. **Who it's for** — H2: `Who this is for.` Three short paragraphs:
   - `Individuals who hear about AI constantly but haven't found time to figure out what's actually useful.`
   - `Professionals who suspect AI could save them hours each week but don't know where to start.`
   - `Families and family offices evaluating whether AI advisory is worth a deeper engagement.`
5. **What you'll walk away with** — H2: `What you'll walk away with.` Body paragraph: `A clear, written document — not a slide deck, not a sales pitch — that tells you exactly what to try first, what to ignore, and what to revisit in six months. If we recommend a deeper engagement, we'll say so. If we don't, we'll say that too.`
6. **FAQ block** with 4 questions (use FAQPage schema):
   - `How long does an audit take?` → `From first conversation to delivered roadmap, typically 7–10 days.`
   - `Do I need to know anything about AI to start?` → `No. The audit is designed for people starting from zero as much as for people who've experimented.`
   - `Is this remote or in-person?` → `Remote, by default. We work with clients across the United States via secure video.`
   - `What does it cost?` → `By inquiry. Pricing depends on scope and is discussed during the initial conversation, with no obligation.`
7. **CTA section** — `Begin with an audit.` → Book a Consultation
8. Footer (global)

**JSON-LD:** `Service` schema referencing the parent ProfessionalService, plus `FAQPage` schema for the FAQ block.

---

### 7.4 `services/ai-implementation.html` — Tier 2 (anchor offering)

**Title:** `AI Setup & Implementation | MyCo IT`
**Meta description:** `Custom Claude workflows, prompt libraries, and AI automation — built for you, by us. Private AI implementation for individuals and families.`

Same structural template as the audit page. Key copy differences:

- **H1:** `AI Setup & Implementation`
- **Subtitle:** `We build it for you. Custom Claude workflows, prompt libraries, knowledge integration, and automation — designed around your life and handed over ready to use.`
- **What's included** bullets:
  - Custom Claude Projects configured around your documents and workflow
  - Personalized prompt libraries for the tasks you actually do
  - Knowledge base setup (your files, your notes, your reference material)
  - Tool selection and account setup across Claude, ChatGPT, and supporting services
  - Hands-on training so you and your household actually use what we build
  - Documentation you'll still understand six months from now
- **Who it's for** paragraphs: busy executives, families managing complex personal admin, professionals with deep document workflows.
- **FAQ:**
  - `How long does an implementation take?` → `Most engagements run 2–6 weeks depending on scope.`
  - `Which AI tools do you set up?` → `We're Claude specialists, but most engagements involve a mix of Claude, ChatGPT, and supporting tools. We recommend what fits — never what we're paid to push.`
  - `Will my data be private?` → `Yes. We work within tools that offer enterprise-grade privacy controls, and we configure them for maximum confidentiality. No data is shared with third parties.`
  - `What does it cost?` → `By inquiry. Implementation pricing depends on scope and is quoted after a complimentary consultation.`

---

### 7.5 `services/ai-advisory.html` — Tier 3

**Title:** `Private AI Advisory | MyCo IT`
**Meta description:** `An ongoing private AI advisory relationship. Continuous guidance on Claude, ChatGPT, and emerging AI tools — for individuals and family offices on retainer.`

Same structural template. Key copy:

- **H1:** `Private AI Advisory`
- **Subtitle:** `An ongoing relationship for clients who want a permanent technical advisor on call. Quarterly reviews, model updates, new tool evaluation, and workflow refinement — on retainer.`
- **What's included:**
  - A dedicated advisor familiar with your setup, preferences, and goals
  - Quarterly strategy reviews and workflow tune-ups
  - Continuous monitoring of new AI releases and what's worth your attention
  - Email and scheduled-call access for questions, evaluations, and second opinions
  - First-look briefings on major model releases (Claude, GPT, Gemini)
  - Annual roadmap refresh
- **Who it's for:** family offices, principals managing complex personal operations, professionals whose work depends on staying ahead of the AI curve.
- **FAQ:**
  - `Is there a minimum commitment?` → `Engagements are typically annual, billed quarterly.`
  - `How available are you between scheduled calls?` → `Email access is included; response time is one business day. Urgent matters are handled same-day.`
  - `Do you work with family offices?` → `Yes. A meaningful share of our advisory clients are single-family offices and their principals.`
  - `What does it cost?` → `By inquiry. Retainer pricing is structured around scope and discussed during the initial consultation.`

---

### 7.6 `contact.html` — Book a Consultation

**Title:** `Contact | Book a Private Consultation | MyCo IT`
**Meta description:** `Schedule a complimentary, confidential consultation with MyCo IT. Private AI advisory for individuals, families, and family offices.`

**Sections:**

1. Header (global)
2. **Page header** — navy. H1: `Begin a Conversation`. Subtitle: `All engagements begin with a complimentary, confidential consultation. We'll discuss your situation, answer your questions, and tell you honestly whether we can help.`
3. **Two-column layout:**
   - **Left column:** A short paragraph explaining what to expect on the call. Then: `Prefer email? Write to info@mycoit.services and we'll respond within one business day.`
   - **Right column:** A `<div id="cal-embed">` placeholder with a comment indicating where the Cal.com embed script goes. Below it, a simple Formspree-ready contact form (HTML only — no action URL yet, leave a `TODO` comment with `action="https://formspree.io/f/YOUR_FORM_ID"`). Form fields: Name, Email, "What brings you here?" (textarea), submit button labeled `Request a Consultation`.
4. **Discretion note** — small italic text below the form: `Every inquiry is held in strict confidence. We do not share, sell, or retain contact information beyond what's necessary to respond.`
5. Footer (global)

---

### 7.7 `insights/index.html` — Scaffold only

**Title:** `Insights | MyCo IT`
**Meta description:** `Notes on Claude, AI tools, and how to use them well. Insights from MyCo IT's private advisory practice.`

Build a minimal scaffold:

1. Header (global)
2. Page header. H1: `Insights`. Subtitle: `Notes from our advisory practice. New essays as we write them.`
3. A centered placeholder paragraph: `The first essays are in preparation. Check back soon, or write to us at info@mycoit.services if there's a topic you'd like us to address.`
4. Footer (global)

No article cards yet. We'll populate this post-launch.

---

### 7.8 `404.html`

Branded 404 page using the same header/footer. H1: `Page not found.` Body: `The page you're looking for has moved, or never existed. Try the homepage, or write to us at info@mycoit.services.` Single button back to `/`.

---

### 7.9 `sitemap.xml`

Standard XML sitemap listing every public page with `<lastmod>` set to today's date and reasonable `<priority>` values (homepage 1.0, services 0.9, about/contact 0.8, insights 0.7, 404 excluded).

### 7.10 `robots.txt`

```
User-agent: *
Allow: /
Disallow: /404.html

Sitemap: https://mycoit.services/sitemap.xml
```

### 7.11 `llms.txt` — full rewrite

```
# MyCo IT — Private AI Advisory
> https://mycoit.services

## About
MyCo IT is a private AI advisory practice serving individuals, families, and family offices across the United States. We specialize in Claude and work fluently across every major AI platform. Our engagements are remote, confidential, and built around our clients' actual lives — not vendor relationships or referral fees.

We are independent. We take no commissions or kickbacks from any AI tool, vendor, or platform. Our recommendations are paid for by our clients and only our clients.

## Services

### AI Audit & Strategy
A focused diagnostic engagement. We assess how a client currently uses AI, identify their highest-leverage opportunities, and deliver a written roadmap with ranked recommendations. Typical timeline: 7–10 days from first conversation to delivered document.
> https://mycoit.services/services/ai-audit.html

### AI Setup & Implementation
A build engagement. We design and configure custom Claude Projects, prompt libraries, knowledge bases, and automation around the client's specific work and life. Includes hands-on training and durable documentation. Typical timeline: 2–6 weeks.
> https://mycoit.services/services/ai-implementation.html

### Private AI Advisory
An ongoing retainer relationship. Quarterly strategy reviews, continuous monitoring of new AI releases, email and scheduled-call access, first-look briefings on major model releases, and an annual roadmap refresh. Engagements are typically annual, billed quarterly.
> https://mycoit.services/services/ai-advisory.html

## Who We Serve
Individuals, families, professionals, principals, and single-family offices who want to use AI seriously but don't have time to figure it out themselves. We work nationwide, remote-first.

## What Makes MyCo IT Different
- Discretion: we don't publish names or photos, ours or our clients'
- Independence: zero kickbacks, referral fees, or vendor commissions
- Tool-agnostic: Claude specialists who work fluently across every major platform
- Plain English: no jargon, no hype, no buzzwords
- Remote and nationwide

## Contact
- Website: https://mycoit.services
- Email: info@mycoit.services
- Consultations: complimentary, by appointment, held in strict confidence
```

### 7.12 `README.md` — full rewrite

Brief, professional. Two paragraphs describing the project (static site for MyCo IT private AI advisory), the stack (HTML/CSS/JS, GitHub Pages, Cal.com + Formspree), and a one-line build/preview instruction (`python3 -m http.server 8000`). Nothing fancy.

---

## 8. Pricing — important

**No prices anywhere on the site.** Every pricing question on every page resolves to "By inquiry." This is a deliberate brand choice that matches the discretion positioning. Do not invent placeholder prices, do not write "Starting at $X," do not include a pricing comparison table.

---

## 9. Quality checklist before you finish

Before reporting back, verify:

- [ ] Every HTML file is valid — no doubled closing tags, no orphaned tags after `</body>`
- [ ] Every HTML file uses `Cormorant Garamond` (not Garant)
- [ ] Zero references to Long Island, Nassau, Suffolk, Garden City, Bay Shore, or any specific town
- [ ] Zero phone numbers, zero physical addresses
- [ ] Every internal link resolves to a real file (no `href="#"` placeholders in nav)
- [ ] Every page has a unique `<title>`, unique `meta description`, and `canonical` link
- [ ] JSON-LD schema is present on homepage, about, and all three service pages
- [ ] FAQ schema is present on the three service pages
- [ ] `sitemap.xml`, `robots.txt`, `404.html`, and rewritten `llms.txt` exist
- [ ] `services/systems-support.html`, `services/network-support.html`, `services/llm-ai-support.html`, and `areas/` are deleted
- [ ] `css/style.css` still loads correctly and the design system is preserved
- [ ] The site renders correctly when served with `python3 -m http.server 8000`

When done, run `git status` and report back: list of files changed, files created, files deleted. **Do not run `git add`, `git commit`, or `git push`.** Stop and wait for human review.
