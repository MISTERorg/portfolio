# ELAD ANEDO DAUDET — Interactive Portfolio
# DEMO https://misterorg.github.io/portfolio/

<div align="center">

```
███████╗ █████╗ ██████╗
██╔════╝██╔══██╗██╔══██╗
█████╗  ███████║██║  ██║
██╔══╝  ██╔══██║██║  ██║
███████╗██║  ██║██████╔╝
╚══════╝╚═╝  ╚═╝╚═════╝
```

**DevOps & AIOps Engineer · AI-Powered Automation Expert · Digital Nomad**

[![Live Demo](https://img.shields.io/badge/LIVE-DEMO-00f2ff?style=for-the-badge&logo=vercel&logoColor=black)](https://eladdaudet.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Elad_Daudet-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/elad-daudet)
[![GitHub](https://img.shields.io/badge/GitHub-MISTERorg-181717?style=for-the-badge&logo=github)](https://github.com/MISTERorg)
[![GitLab](https://img.shields.io/badge/GitLab-mistercomp1-FC6D26?style=for-the-badge&logo=gitlab)](https://gitlab.com/mistercomp1)

![Languages](https://img.shields.io/badge/Languages-EN%20·%20FR%20·%20ES%20·%20JA-00ff9d?style=flat-square)
![Vanilla JS](https://img.shields.io/badge/Vanilla-JS-f0c040?style=flat-square&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-r128-white?style=flat-square&logo=threedotjs&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-@property-b44dff?style=flat-square&logo=css3)
![No Frameworks](https://img.shields.io/badge/Frameworks-None-ff3366?style=flat-square)

</div>

---

## Overview

A Tron-inspired, fully interactive, multilingual personal portfolio built entirely in **vanilla HTML, CSS, and JavaScript** — no React, no Vue, no build tools, no templates. Every visual effect, animation, and interaction was engineered from scratch.

The site is designed to function simultaneously as a portfolio and as a demonstration of engineering capability. If you can build the thing that showcases your work to this standard, you probably know what you're doing.

---

## Live Sections

| # | Section | Technique |
|---|---------|-----------|
| 01 | **Gateway** | Three.js particle field + 3D rotating monogram SVG |
| 02 | **Global Nexus** | Interactive 3D globe (Three.js) with city nodes and modal popups |
| 03 | **Innovation Lab** | Holographic parallax cards with CSS `translateZ` depth layers |
| 04 | **Neural Map** | Tron bento grid — 10 skill categories, i18n-aware |
| 05 | **Archive** | CSS `@property` rotating beam borders, animated SVG shield |
| 06 | **Terminal** | Live typewriter terminal with multilingual output sequences |

---

## Key Engineering Techniques

### CSS `@property` Rotating Beam Borders
The signature visual effect across Sections 4 and 5. A typed CSS custom property (`--beam-angle`) enables the browser to interpolate an angle value, making a `conic-gradient` animate as a rotating light beam that traces card borders.

```css
@property --beam-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.card-frame {
  background: conic-gradient(
    from var(--beam-angle),
    rgba(0,242,255,.05) 0%,
    rgba(0,242,255,.95) 78%,
    rgba(255,255,255,.9) 80%,
    rgba(0,242,255,.05) 100%
  );
  animation: beam-spin 5s linear infinite;
}

@keyframes beam-spin { to { --beam-angle: 360deg; } }
```

On hover, `--beam-speed` drops from 5s → 1.6s via CSS transition — the card "powers up" in real time.

### Holographic Parallax Cards (Section 3)
Cards face forward at all times (full readability). On desktop hover, JavaScript reads cursor position relative to the card centre, normalises it to `−1 → +1`, and applies `rotateX/Y` + `scale`. Internal elements use `translateZ` values (icon at 44px, title at 26px, tags at 20px, description at 12px) to create genuine depth layering — the effect only appears when the card tilts.

```js
wrap.addEventListener('mousemove', e => {
  const r  = wrap.getBoundingClientRect();
  const dx = (e.clientX - r.left  - r.width  / 2) / (r.width  / 2);
  const dy = (e.clientY - r.top   - r.height / 2) / (r.height / 2);
  card.style.transform = `rotateY(${dx*13}deg) rotateX(${-dy*9}deg) scale(1.025)`;
});
```

`@media (hover: none)` disables the tilt entirely on touch devices — depth transforms reset to `none` and the card renders as a flat glassmorphic surface.

### Three.js Interactive Globe (Section 2)
A custom-built WebGL globe with city nodes derived from real coordinates. Click any node to open a modal with company details, role, metrics, and tech stack. The globe auto-tours on section enter.

### Animated Circuit Grid Backgrounds
Sections 4 and 5 share an animated circuit grid using two layered `::before` / `::after` pseudo-elements — one for grid lines, one for intersection dot nodes — both using `background-position` animation to create a slow, infinite drift.

```css
background-image:
  linear-gradient(0deg, transparent calc(100% - 1px), rgba(0,242,255,.07) 100%),
  linear-gradient(90deg, transparent calc(100% - 1px), rgba(0,242,255,.07) 100%);
background-size: 60px 60px;
animation: grid-drift 28s linear infinite;
```

### Internationalisation Engine (i18n.js)
A fully custom, zero-dependency translation system. All visible text — section headers, card content, terminal sequences, status bar, nav labels, and skill card titles/descriptions/footers — is keyed in a flat dictionary per language. Switching languages re-renders the entire page via `document.querySelectorAll('[data-i18n]')` without any DOM destruction. The terminal sequence is also language-specific and replays on switch.

### WebXR Integration
VR entry point via the Web XR Device API. Appears only if a compatible headset is detected.

---

## File Structure

```
portfolio/
│
├── index.html              # Single HTML file — all sections
│
├── css/
│   ├── global.css          # Reset, CSS variables, cursor, topbar, loader
│   ├── s1-gateway.css      # Hero section styles
│   ├── s2-globe.css        # Globe section & city modal
│   ├── s3-lab.css          # Holographic parallax cards
│   ├── s4-neural.css       # Tron bento grid + @property beams
│   ├── s5-archive.css      # Archive cards + @property beams
│   └── s6-terminal.css     # Terminal window styles
│
├── js/
│   ├── core.js             # Init, cursor, nav, loader, flythrough, i18n hooks
│   ├── s1-hero.js          # Three.js particle field + data streams
│   ├── s2-globe.js         # Three.js globe, city nodes, modal system
│   ├── s4-neural.js        # Bento grid builder, i18n-aware, refreshNeural()
│   ├── s6-terminal.js      # Typewriter engine, language-aware sequences
│   └── i18n.js             # Translation dictionaries + setGlobalLang()
│
└── ELAD_ANEDO_DAUDET.docx  # CV — served for direct download
```

---

## Technologies

### Core Stack
| Technology | Role |
|------------|------|
| HTML5 | Structure — single file, semantic sections |
| CSS3 | All styling — `@property`, `conic-gradient`, `backdrop-filter`, `clip-path` |
| Vanilla JavaScript (ES6+) | All logic — no build step, no transpiler |
| Three.js r128 | Hero particles, 3D globe |
| GSAP 3.12 | Section entrance animations |

### CSS Features Used
- `@property` (Houdini) — typed custom properties for animatable angles
- `conic-gradient` — rotating beam borders
- `backdrop-filter: blur()` — glassmorphism
- `transform-style: preserve-3d` — holographic depth cards
- `scroll-snap-type: y mandatory` — section snapping
- `mix-blend-mode: screen` — custom cursor blending
- CSS custom properties (`--acc-rgb`, `--beam-color`, `--bn-color`) — per-card theming from a single variable

### Browser APIs Used
- `IntersectionObserver` — section detection and reveal animations
- `AudioContext` — sound feedback on CTA clicks
- `WebXR Device API` — VR entry point
- `requestAnimationFrame` — custom cursor + Three.js render loops

---

## Sections Deep Dive

### Section 1 — The Gateway
Three.js particle field (3,200 vertices, vertex-coloured in cyan/mint/purple) with mouse-reactive camera drift. A wireframe "E" letterform rotates in the background. The monogram is an SVG with animated `stroke-dashoffset` draw-on effect.

### Section 2 — The Global Nexus
Custom Three.js sphere with city nodes mapped to real lat/lng coordinates using spherical projection. Each node pulses independently. Clicking a node fires a modal with company data, role metrics, key achievements, and tech stack tags. An auto-tour animation plays on section enter.

### Section 3 — The Innovation Lab
Six holographic project cards. Front face always visible (recruiter-friendly on mobile). Desktop hover triggers JS-driven 3D tilt with multi-layer `translateZ` depth on icon, title, tags, and description. All six cards are i18n-keyed across EN/FR/ES/JA.

### Section 4 — The Neural Map
Ten skill category cards (DevOps, AI Automation, Programming, Frameworks, Security & QA, Databases, Technical Support, SW & HW Maintenance, Communication, Data Science) in a 3-column bento grid. Each card has an individual `--bn-color` driving its Tron beam, glow, tag borders, and footer accent. Language switching calls `refreshNeural()` which re-renders all text nodes without rebuilding the DOM.

### Section 5 — The Archive
Three credential cards with `@property` rotating beams at different speeds (4.4s / 5.2s / 6s). The CyberOps SVG shield pulses with a `drop-shadow` animation that intensifies on hover. The circuit grid background drifts at 28s, slower than Section 4's 24s, giving the two sections a perceptibly different energy.

### Section 6 — The Terminal
A fake terminal window with a typewriter effect. Lines appear with configurable delays. The full sequence — ping, whoami, directory listing, contact data — is replicated in all four languages and replays instantly when the language is switched while Section 6 is visible.

---

## Internationalisation

All content is available in **English, French, Spanish, and Japanese**. The system covers:

- Hero title, bio, CTA button
- All section headers and subtitles
- All 6 Innovation Lab project cards (title, category, description, link text)
- All 10 Neural Map skill card titles, descriptions, and footer labels
- All 3 Archive card content (degrees, institutions, certifications)
- Terminal sequences (full per-language typewriter scripts)
- Status bar, navigation labels, scroll hint
- Language names themselves (so in Japanese the card shows 英語 / フランス語)

---

## Performance Notes

- Zero npm dependencies — no `node_modules`, no bundler, no build step
- Three.js and GSAP loaded from cdnjs CDN
- Pixel ratio capped at 2× to prevent GPU overload on high-DPI displays
- `will-change: transform` applied only to actively animated elements
- `@media (hover: none)` disables all JS-driven tilt and hover effects on touch
- `@supports not (background: conic-gradient(...))` provides graceful fallback for `@property` in older browsers
- IntersectionObserver used instead of scroll listeners for section detection

---

## Local Development

No build step required. Clone and open directly:

```bash
git clone https://github.com/MISTERorg/portfolio.git
cd portfolio

# Option 1 — Python (built-in)
python3 -m http.server 8080

# Option 2 — Node.js
npx serve .

# Option 3 — VS Code
# Install "Live Server" extension → Right-click index.html → Open with Live Server
```

Then open `http://localhost:8080` in any Chromium or Firefox browser.

> **Note:** `backdrop-filter` and `@property` require a modern browser. Tested on Chrome 110+, Firefox 114+, Safari 16+, Edge 110+.

---

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| `@property` beam borders | ✅ 85+ | ✅ 128+ | ✅ 16.4+ | ✅ 85+ |
| `backdrop-filter` | ✅ | ✅ | ✅ | ✅ |
| Three.js WebGL | ✅ | ✅ | ✅ | ✅ |
| WebXR | ✅ | ✅ | ⚠️ partial | ✅ |
| `scroll-snap` | ✅ | ✅ | ✅ | ✅ |

---

## About the Author

**Elad Anedo Daudet Ikeorah**
DevOps & AIOps Engineer · Cisco CyberOps Associate · Founder, MisterComp

6+ years deploying infrastructure and automation systems across Cameroon, Germany, Japan, Czech Republic, India, and the United States. M.Sc. Computer Science (8.52/10 CGPA, 2× Merit Scholar). Fluent in English, French, Spanish, and Japanese.

- 📧 eladdaudet1918@gmail.com
- 📞 +1 (240) 261 3649 · +91 89834 61149
- 🌍 Silver Spring, MD, USA
- 🔗 [linkedin.com/in/elad-daudet](https://linkedin.com/in/elad-daudet)

---

## Copyright

© 2025 Elad Anedo Daudet Ikeorah. All rights reserved.

The design, content, branding, personal information, and visual identity of this portfolio are proprietary and may not be reproduced, distributed, or used without explicit written permission.

The underlying code architecture and CSS techniques are shared for educational reference only.
