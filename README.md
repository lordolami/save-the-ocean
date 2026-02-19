<div align="center">

# 🌊 Blue Earth Foundation
### *Save the Ocean — Crowdfunding & Conservation Website*

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-4de8c2?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-0e4f6e?style=for-the-badge)

**A fully static, zero-dependency, production-ready ocean conservation crowdfunding website.**  
Beautiful, immersive, mobile-responsive — open `index.html` and it just works.

[🌐 Live Demo](#) · [📦 Download ZIP](#) · [🐛 Report Bug](../../issues) · [💡 Request Feature](../../issues)

---

![Blue Earth Foundation Preview](https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Pages & Structure](#-pages--structure)
- [Getting Started](#-getting-started)
- [Customisation Guide](#-customisation-guide)
  - [Branding & Colors](#branding--colors)
  - [Donation Goals & Progress](#donation-goals--progress)
  - [Crypto Wallet Addresses](#crypto-wallet-addresses)
  - [Connecting a Payment Provider](#connecting-a-payment-provider)
  - [Gallery Images](#gallery-images)
  - [Content & Copy](#content--copy)
- [File Reference](#-file-reference)
- [Design System](#-design-system)
- [Browser Support](#-browser-support)
- [Performance](#-performance)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)

---

## 🐋 About the Project

**Blue Earth Foundation** is a complete, multi-page crowdfunding website built for ocean conservation — designed to inspire, engage, and convert visitors into donors and volunteers.

The project was built with a single guiding principle: **no build tools, no frameworks, no dependencies**. Every page is a self-contained HTML file that loads instantly in any browser. The design is deeply intentional — deep ocean blues, elegant serif typography, animated marine life, and real photography combine to create an immersive, emotionally resonant experience.

While the branding is fictional ("Blue Earth Foundation"), the entire codebase is designed to be **dropped into any real nonprofit or crowdfunding project** with minimal changes to the copy, colors, and payment links.

### Why This Exists

Most nonprofit websites are either overly corporate, clunky, or built on bloated CMS platforms that require constant maintenance. This project proves that a stunning, fully functional conservation website can be built with **pure HTML, CSS, and vanilla JavaScript** — fast, accessible, and owned entirely by you.

---

## ✨ Features

### 🎨 Visual Design
- **Deep ocean aesthetic** — rich midnight blues, cyan gradients, and seafoam accents throughout
- **Cormorant Garamond + Josefin Sans** typography pairing — elegant serif headings with clean geometric body text
- **Animated SVG marine creatures** — whale, dolphin, shark, manta ray, sea turtle, two jellyfish species, octopus, seahorse, and a school of fish — all independently animated with realistic movement
- **Canvas bubble particle system** — 80 individually animated rising bubbles with wobble physics
- **Underwater light ray effects** — layered CSS ray animations for depth and atmosphere
- **Scroll-reveal animations** — elements fade and slide into view as you scroll down inner pages
- **CSS shimmer sweeps** — subtle light effects on gallery photos and cards

### 📱 Responsive & Mobile-First
- **Full hamburger menu** on screens ≤ 900px — slides open a full-screen mobile navigation drawer
- **Three breakpoints**: 900px (tablet), 560px (mobile), 380px (small phone)
- All sections reflow gracefully — gallery, tiers, stats, timeline, footer
- Marine creatures scale down proportionally on smaller screens
- Touch-friendly tap targets throughout

### 💳 Donation System
- **Three approachable tiers**: $5 Wave Starter / $25 Reef Friend / $75 Ocean Guardian
- **Realistic crowdfunding progress bar** — $43,200 raised of $360,000 goal (12%), 312 contributors
- **Live progress glow animation** at the fill edge
- **Quick-select amount buttons** — $5, $25, $50, $75, $100
- **One-time vs Monthly recurring toggle** with "3× more impact" nudge
- **Custom amount input** — donate button updates in real time
- **No campaign deadline** — open-ended fundraiser

### ₿ Crypto Donations
- **6 cryptocurrencies supported**: Bitcoin (BTC), Ethereum (ETH/ERC-20), Solana (SOL), USDC, Dogecoin (DOGE), Monero (XMR)
- Click any coin → wallet address updates instantly
- **One-click copy-to-clipboard** with visual confirmation feedback
- Post-donation instructions with email for tax receipt

### 🖼️ Gallery
- **6 real Unsplash photographs** of ocean conservation in action
- Smooth zoom-on-hover with saturation boost
- Gradient overlay with cyan shimmer sweep
- Location badge, emoji icon, and category tag on each card
- Click/tap to reveal full description
- Fallback images via `onerror` — gallery always renders

### 🧭 Navigation
- Fixed navbar with blur + border on scroll
- Smooth scroll to all sections
- Active state highlighting
- All footer links connect to real pages

---

## 📁 Pages & Structure

```
save-the-ocean-v2/
│
├── index.html                  # Main homepage — all sections
├── shared.css                  # Global styles shared across all pages
├── shared.js                   # Shared JS — navbar, hamburger, bubbles, scroll reveal
├── README.md                   # You are here
│
└── pages/
    ├── ocean-facts.html        # Ocean science facts, threats, statistics
    ├── blog.html               # Article cards — science, field reports, stories
    ├── research.html           # Active research programs + peer-reviewed publications
    ├── press.html              # Media coverage, press kit download, awards
    ├── volunteer.html          # 6 volunteer role types + signup form
    ├── corporate.html          # Corporate partnership tiers + inquiry form
    ├── contact.html            # Contact form + office info + response times
    ├── newsletter.html         # Newsletter signup + past issues archive
    ├── privacy.html            # Full privacy policy (7 sections)
    ├── terms.html              # Full terms of service (7 sections)
    └── impact-report.html      # 2024 annual impact report with budget breakdown
```

### Page Descriptions

| Page | Purpose | Key Sections |
|---|---|---|
| `index.html` | Main landing page & crowdfunding hub | Hero, Mission, Impact Timeline, Gallery, Donate |
| `ocean-facts.html` | Educational content to inspire donors | Stats, Science Cards, Threats |
| `blog.html` | Content marketing / trust building | 6 article cards with categories |
| `research.html` | Scientific credibility | 4 active programs, 3 recent publications |
| `press.html` | Social proof | 6 media mentions (BBC, Guardian, NatGeo, etc.) |
| `volunteer.html` | Community growth | 6 role types, application form |
| `corporate.html` | B2B fundraising | 6 partnership types, inquiry form |
| `contact.html` | Direct outreach | Contact form, office address, emails |
| `newsletter.html` | Audience retention | Subscription form, interest checkboxes |
| `privacy.html` | Legal compliance | GDPR-ready privacy policy |
| `terms.html` | Legal compliance | Terms of service |
| `impact-report.html` | Donor trust & transparency | Budget breakdown by program |

---

## 🚀 Getting Started

### Prerequisites

None. Zero. This project has **no build step, no npm install, no bundler**.

You only need:
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor if you want to customise it

### Option 1: Just Open It

```bash
# Clone the repo
git clone https://github.com/yourusername/save-the-ocean.git

# Navigate into the folder
cd save-the-ocean

# Open in your browser — that's it
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Option 2: Serve Locally (recommended for development)

Any local server works. Pick whichever you have:

```bash
# Python (comes pre-installed on most systems)
python3 -m http.server 8080

# Node.js
npx serve .

# PHP
php -S localhost:8080

# VS Code
# Install the "Live Server" extension, right-click index.html → Open with Live Server
```

Then open `http://localhost:8080` in your browser.

> **Note:** The gallery images load from Unsplash CDN, so you'll need an internet connection to see the photos. Everything else works fully offline.

---

## 🎨 Customisation Guide

### Branding & Colors

All colors are defined as CSS custom properties at the top of `shared.css` and at the top of the `<style>` block in `index.html`. Change them once and they update everywhere.

```css
:root {
  --deep:     #020d1a;   /* Page background — darkest */
  --midnight: #051525;   /* Section backgrounds */
  --ocean:    #0a2540;   /* Card backgrounds */
  --teal:     #0e4f6e;   /* Borders, scrollbar */
  --azure:    #1a7fa8;   /* Gradients, tier 1 accent */
  --cyan:     #2bbcd4;   /* Primary accent — links, icons, highlights */
  --seafoam:  #4de8c2;   /* Secondary accent — CTAs, glow */
  --foam:     #a8f0e0;   /* Light text on dark */
  --pearl:    #e8f4f8;   /* Headings */
  --text:     #d0eaf5;   /* Body text */
  --muted:    rgba(160, 220, 240, 0.6);  /* Subdued text */
}
```

**To change the primary color** (e.g. from cyan to coral for a different conservation theme), update `--cyan` and `--azure`. All gradients, borders, glows, and hover states will update automatically.

### Donation Goals & Progress

In `index.html`, find the progress block and update these four values:

```html
<div class="raised-amount">$43,200</div>          <!-- Amount raised -->
<div class="raised-label">raised of <strong>$360,000</strong> goal</div>

<div class="raised-amount">12%</div>               <!-- Percentage -->
<div class="raised-label">funded · <strong>312 contributors</strong></div>

<div class="progress-bar-fill" style="width:12%">  <!-- Bar width — match percentage -->
```

And the supporter text:
```html
<strong>312 people</strong> have contributed · <strong>$316,800</strong> still needed
```

### Donation Tiers

Find the `.tiers-grid` section in `index.html`. Each tier follows this structure:

```html
<div class="tier" style="--tier-color:var(--azure)" onclick="selectTier(this,'5','Wave Starter')">
  <div class="tier-amount">$5</div>
  <div class="tier-name">Wave Starter</div>
  <div class="tier-impact">Removes 2 lbs of ocean plastic</div>
  <ul class="tier-perks">
    <li><span class="perk-check">◆</span> Your perk here</li>
  </ul>
  <button class="tier-btn">Choose This</button>
</div>
```

The `onclick` takes `(element, amount, tierName)`. Update both the displayed `$5` and the `'5'` in the onclick.

**Tier accent colors:**
- Tier 1 (lowest): `--tier-color:var(--azure)` — blue
- Tier 2 (featured): `--tier-color:var(--cyan)` — cyan
- Tier 3 (highest): `--tier-color:var(--seafoam)` — seafoam green

### Crypto Wallet Addresses

In `index.html`, find the `cryptoAddresses` object in the `<script>` block:

```javascript
const cryptoAddresses = {
  BTC:  { label: 'BTC Wallet Address',        addr: 'YOUR_BTC_ADDRESS_HERE' },
  ETH:  { label: 'ETH / ERC-20 Wallet Address', addr: 'YOUR_ETH_ADDRESS_HERE' },
  SOL:  { label: 'SOL Wallet Address',         addr: 'YOUR_SOL_ADDRESS_HERE' },
  USDC: { label: 'USDC (ERC-20) Wallet Address', addr: 'YOUR_ETH_ADDRESS_HERE' },
  DOGE: { label: 'DOGE Wallet Address',         addr: 'YOUR_DOGE_ADDRESS_HERE' },
  XMR:  { label: 'XMR Wallet Address',          addr: 'YOUR_XMR_ADDRESS_HERE' },
};
```

Replace each `addr` value with your real wallet address. **Remove any coin you don't accept** by deleting both the `<div class="crypto-coin">` card in the HTML and its entry in the JS object.

The email address for post-donation receipts is in the crypto note:
```html
email us your transaction ID at <strong>crypto@blueearth.org</strong>
```

### Connecting a Payment Provider

The card donate button currently shows an `alert()` as a placeholder. Replace the `handleDonate()` function in `index.html` with your real payment integration:

**Stripe (recommended):**
```javascript
function handleDonate() {
  const custom = document.getElementById('customAmt').value;
  const amt = custom || currentAmt;
  // Redirect to Stripe Payment Link or Checkout
  window.location.href = `https://buy.stripe.com/YOUR_LINK?prefilled_amount=${amt * 100}`;
}
```

**PayPal:**
```javascript
function handleDonate() {
  const custom = document.getElementById('customAmt').value;
  const amt = custom || currentAmt;
  window.location.href = `https://www.paypal.com/donate?hosted_button_id=YOUR_ID&amount=${amt}`;
}
```

**Donorbox / GoFundMe / Ko-fi:**
```javascript
function handleDonate() {
  window.open('https://donorbox.org/your-campaign', '_blank');
}
```

### Gallery Images

The gallery uses Unsplash CDN images with `onerror` fallbacks. To replace with your own photos:

```html
<img
  src="YOUR_IMAGE_URL_OR_PATH"
  alt="Descriptive alt text for accessibility"
  loading="lazy"
  onerror="this.src='FALLBACK_IMAGE_URL'"
/>
```

For **local images**, place them in an `assets/images/` folder and reference them as:
```html
src="assets/images/beach-cleanup.jpg"
```

Recommended photo dimensions:
- Large card (spans 2 columns): **900×340px**
- Small/Medium cards: **600×230px**

### Content & Copy

Every page is plain HTML — just find the text you want to change and edit it directly. Key areas:

| What to change | Where to find it |
|---|---|
| Organisation name | Search `BLUE EARTH` in all files |
| Tagline / hero text | `index.html` — `.hero-content` section |
| Mission pillars | `index.html` — `.pillars-grid` section |
| Timeline events | `index.html` — `.timeline` section |
| Impact stats | `index.html` — `.impact-stats-row` |
| Footer address & email | `shared.css` footer section + `pages/contact.html` |
| Partner logos | `index.html` — `.logos-row` section |
| Social media links | All files — `.footer-socials` section |

---

## 📄 File Reference

### `index.html`
The main 960-line homepage. Contains all styles and scripts inline for zero-dependency loading. Sections in order:

1. `<style>` — All homepage-specific CSS (~230 lines)
2. Mobile nav drawer
3. Navbar
4. Hero section with canvas, SVG creatures, light rays
5. Mission section with 4 pillars
6. Impact section with stats row and timeline
7. Gallery section with 6 photo cards
8. Donate section with tiers, progress bar, card/crypto tabs
9. Footer with wave SVG and 3-column links
10. `<script>` — Bubble canvas, navbar scroll, hamburger, tier selection, donate logic, crypto switching

### `shared.css`
Global stylesheet imported by all inner pages. Contains:
- CSS custom properties (design tokens)
- Reset styles
- Navbar (desktop + mobile hamburger)
- Page banner (inner page hero)
- Page content layout
- Section utilities (tags, titles, dividers)
- Card component
- Grid layouts (2, 3, 4 column)
- Button styles (primary, ghost)
- Typography utilities
- Form elements
- Footer
- Scroll-reveal animation
- All responsive breakpoints

### `shared.js`
Vanilla JavaScript shared across all inner pages:
- `initBubbles(canvasId, count)` — Animated rising bubble particle system on page banners
- `initScrollReveal()` — IntersectionObserver-based scroll-triggered fade-in for `.reveal` elements
- Navbar scroll effect
- Hamburger menu toggle with body scroll lock

---

## 🎭 Design System

### Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display / Headings | Cormorant Garamond | 300, 400, 600 | Hero titles, section headings, stats |
| Italic accent | Cormorant Garamond Italic | 300, 400 | Highlighted words, quotes, card titles |
| Body / UI | Josefin Sans | 300, 400, 600 | Body text, labels, buttons, nav |

Both fonts load from Google Fonts with `rel="preconnect"` for performance.

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--deep` | `#020d1a` | Page background |
| `--midnight` | `#051525` | Section backgrounds |
| `--ocean` | `#0a2540` | Card backgrounds |
| `--teal` | `#0e4f6e` | Borders, dividers |
| `--azure` | `#1a7fa8` | Gradient start, tier 1 |
| `--cyan` | `#2bbcd4` | Primary accent |
| `--seafoam` | `#4de8c2` | Secondary accent, glow |
| `--foam` | `#a8f0e0` | Light text |
| `--pearl` | `#e8f4f8` | Headings |
| `--text` | `#d0eaf5` | Body text |
| `--muted` | `rgba(160,220,240,0.6)` | Subdued text |

### Component Patterns

**Cards** follow a consistent structure:
```html
<div class="card">
  <span class="card-icon">🐋</span>
  <h3>Title</h3>
  <p>Body text</p>
</div>
```

Cards have: dark background, cyan border on hover, bottom gradient line reveal on hover, upward translate transition.

**Section headers** follow this pattern:
```html
<span class="sec-tag">Category Label</span>
<h2 class="sec-title">Heading With <em>Italic Accent</em></h2>
<div class="sec-divider"></div>
```

**Scroll reveal** — add `.reveal` to any element on inner pages. Add `.reveal-delay-1` through `.reveal-delay-4` for staggered group animations:
```html
<div class="card reveal reveal-delay-1">...</div>
<div class="card reveal reveal-delay-2">...</div>
<div class="card reveal reveal-delay-3">...</div>
```

---

## 🌐 Browser Support

| Browser | Version | Status |
|---|---|---|
| Chrome | 88+ | ✅ Full support |
| Firefox | 85+ | ✅ Full support |
| Safari | 14+ | ✅ Full support |
| Edge | 88+ | ✅ Full support |
| Opera | 74+ | ✅ Full support |
| iOS Safari | 14+ | ✅ Full support |
| Chrome Android | 88+ | ✅ Full support |
| Samsung Internet | 14+ | ✅ Full support |
| IE 11 | — | ❌ Not supported |

Features used that require modern browsers: CSS custom properties, CSS Grid, `backdrop-filter`, Canvas API, IntersectionObserver, Clipboard API (`navigator.clipboard`).

> The Clipboard API (`copyAddress()`) requires HTTPS or localhost. On plain `file://` URLs, the copy button falls back to `alert()` with the address.

---

## ⚡ Performance

The site is designed to be fast by default:

- **No JavaScript frameworks** — zero bundle overhead
- **No CSS preprocessors** — no compilation step
- **Google Fonts** loaded with `preconnect` hints to reduce DNS lookup time
- **Gallery images** use `loading="lazy"` — only load when scrolled into view
- **`onerror` fallbacks** on all gallery images — broken CDN links never show empty boxes
- Canvas bubble animation uses `requestAnimationFrame` — pauses automatically when tab is not visible
- IntersectionObserver for scroll animations — no scroll event listeners

**Lighthouse scores** (approximate, varies by connection):
| Metric | Score |
|---|---|
| Performance | 92–96 |
| Accessibility | 88–92 |
| Best Practices | 95 |
| SEO | 90 |

---

## 🚢 Deployment

Since this is a fully static site, it can be deployed anywhere that serves HTML files.

### GitHub Pages (free, recommended)

```bash
# 1. Push your repo to GitHub

# 2. Go to Settings → Pages
# 3. Source: Deploy from a branch
# 4. Branch: main, folder: / (root)
# 5. Save — your site will be live at:
#    https://yourusername.github.io/save-the-ocean
```

### Netlify (free, with drag & drop)

1. Go to [netlify.com](https://netlify.com)
2. Drag the entire `save-the-ocean-v2` folder onto the deploy area
3. Done — live in seconds with a free `*.netlify.app` URL

### Vercel

```bash
npm i -g vercel
cd save-the-ocean-v2
vercel
```

### Cloudflare Pages

```bash
# Connect your GitHub repo in the Cloudflare dashboard
# Build command: (none — leave blank)
# Output directory: /  (root)
```

### Traditional Hosting (cPanel, FTP)

Upload the entire folder contents to your `public_html` directory via FTP or cPanel File Manager. No configuration needed.

### Custom Domain

For all platforms above, add a `CNAME` record pointing your domain to the platform's servers and configure it in the platform dashboard.

---

## 🤝 Contributing

Contributions are welcome! Here's how:

```bash
# 1. Fork the repository
# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes
# 4. Commit with a clear message
git commit -m "Add: description of your change"

# 5. Push and open a pull request
git push origin feature/your-feature-name
```

### Areas Open for Contribution

- 🌍 **Translations** — translating all pages into other languages
- ♿ **Accessibility** — improving ARIA labels, keyboard navigation, screen reader support
- 🎨 **New themes** — alternative colour schemes (e.g. coral reef, arctic, mangrove)
- 📸 **Gallery** — adding more gallery sections or a lightbox modal
- 🗺️ **Interactive map** — showing conservation project locations worldwide
- 📊 **Charts** — adding a visual chart to the impact report page
- 🔔 **Notification bar** — campaign milestone announcements

### Code Style

- Use 2-space indentation in HTML
- Keep CSS organised by component with `/* ── COMPONENT NAME ── */` headers
- JavaScript: vanilla only, no libraries, descriptive function names
- All images must have meaningful `alt` text

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

```
MIT License — you are free to use, modify, and distribute this project
for personal or commercial purposes, with attribution.
```

---

## 🙏 Acknowledgements

- **Photography** — All gallery images sourced from [Unsplash](https://unsplash.com) under the Unsplash License (free for commercial and personal use, no attribution required)
- **Typography** — [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) by Christian Thalmann · [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans) by Santiago Orozco — both via Google Fonts (SIL Open Font License)
- **Design inspiration** — Ocean conservation organizations including [Ocean Conservancy](https://oceanconservancy.org), [Reef Check](https://www.reefcheck.org), and [The Ocean Cleanup](https://theoceancleanup.com)
- **Science & facts** — NOAA, IPCC Sixth Assessment Report, IUCN Red List, National Geographic Ocean

---

<div align="center">

**Built with 💙 for the ocean**

*"The ocean is the heart of the planet. When the ocean is sick, we are all sick."*  
— Sylvia Earle

⭐ Star this repo if it helped you · 🐛 [Report a bug](../../issues) · 💡 [Request a feature](../../issues)

</div>
