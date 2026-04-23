# Matheus Costa de Jesus — Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Zero JavaScript](https://img.shields.io/badge/JavaScript-0%25-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://en.wikipedia.org/wiki/JavaScript)
[![WCAG AA](https://img.shields.io/badge/WCAG-AA%20Compliant-2E8B57?style=for-the-badge&logo=w3c&logoColor=white)](https://www.w3.org/WAI/WCAG2AA-Conformance)

> A clean, semantic, and accessible portfolio built entirely with HTML5 and CSS3 — no JavaScript required.
> Featuring a dual-theme identity that bridges street-level intensity with heroic clarity.

![Portfolio Screenshot](https://via.placeholder.com/1200x630/070709/E63946?text=Matheus+Costa+de+Jesus)

---

## Table of Contents

- [About the Project](#about-the-project)
- [Visual Identity](#visual-identity)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Key Features](#key-features)
- [How to Run](#how-to-run)
- [Accessibility Notes](#accessibility-notes)
- [SEO Notes](#seo-notes)
- [License](#license)

---

## About the Project

This portfolio is the digital home of **Matheus Costa de Jesus**, a Computer Science student
and IT professional based in Lauro de Freitas, Bahia, Brazil. It showcases technical skills
in Java, Python, Golang, Linux, and cybersecurity, alongside a solid professional background
in industrial automation.

**Technical Purpose:**
The project demonstrates mastery of semantic HTML5, CSS architecture (custom properties,
checkbox-hack theming, CSS Grid and Flexbox), and web accessibility (WCAG 2.1 AA). Built
without any JavaScript, frameworks, or build tools — pure, hand-crafted code that prioritizes
performance and web standards compliance.

**Aesthetic Vision:**
The design is not merely decorative; it is a storytelling device. Each of the two themes
represents a different facet of the owner's identity — the intense, late-night focus of a
developer (*Street Prestige*) and the bright, disciplined energy of a Bahian hero
(*Tricolor Heroico*).

---

## Visual Identity

This portfolio carries a **dual visual identity** — each mode is a complete, intentional
design statement, not just a color swap.

### Dark Mode — Street Prestige (default)

Inspired by four references that share an urban, night-time energy:

| Reference | Visual Contribution |
|---|---|
| **Spider-Man: Into the Spider-Verse** | Halftone dot texture, diagonal accent stripe, neon red/blue contrast |
| **Kendrick Lamar** | Near-black backgrounds, red and gold authority, restrained composition |
| **Bruno Mars** | Gold accents signaling excellence, retro richness under modern sharpness |
| **Jaden Smith** | Anti-conventional details, futuristic streetwear energy |

The mood: *a city at 2am seen from a rooftop. Kendrick on the headphones. Something being built.*

### Light Mode — Tricolor Heroico

A tribute to three iconic references that share the exact same **blue + red + white** tricolor language:

| Reference | Identity |
|---|---|
| **Esporte Clube Bahia** | *Tricolor de Aco* — the portfolio owner's home-state club, Salvador, Bahia |
| **Spider-Man (Peter Parker)** | Classic Marvel suit — daylight heroism, clean and hopeful |
| **Captain America** | The shield's composure — structured, trustworthy, open |

The convergence is intentional: all three speak blue, red, and white.
Light mode is the **daylight face of a Bahian hero**.

Design execution:
- White background (`#FFFFFF`) for maximum clarity
- Cards use heroic red (`#E62429`) with white text and a blue text-shadow
- Headings in deep navy (`#002244`) — the Bahian sky and the Captain's composure
- Concentric shield-ring decoration in the hero section (CSS-only `::after` pseudo-element)

### The Avicii Symbol

The equilateral triangle is the personal logo mark, inspired by **Avicii (Tim Bergling, 1989–2018)**.
Rendered via Unicode — never as an external image. Always gold (`#FFBE0B`) in both modes.
Represents: precision, three pillars of craft (code / infrastructure / security), and rising.

### Color Palettes

> Values match the actual CSS implementation in `assets/css/style.css`.

| CSS Variable | Dark Mode | Light Mode |
|---|---|---|
| `--color-bg` | `#070709` near-black | `#FFFFFF` pure white |
| `--color-bg-secondary` | `#10101A` panel bg | `#F0F4F8` light grey-blue |
| `--color-bg-card` | `#16161F` dark panel | `#E62429` heroic red |
| `--color-primary` | `#E63946` Spider-red | `#E62429` unified hero red |
| `--color-secondary` | `#3A86FF` electric blue | `#002244` deep navy |
| `--color-accent` | `#FFBE0B` Avicii gold | `#FFBE0B` Avicii gold |
| `--color-text` | `#F1FAEE` warm white | `#002244` deep navy |
| `--color-text-muted` | `#8892A4` muted slate | `#335577` soft blue |
| `--color-border` | `#1E1E30` dark border | `#CCD5E0` light border |

---

## Tech Stack

| Category | Technology / Feature |
|---|---|
| **Markup** | HTML5 — fully semantic element suite |
| **Styling** | CSS3 — no preprocessors, no frameworks |
| **Design System** | CSS Custom Properties with inline documentation on every variable |
| **Theming** | CSS Checkbox Hack — dark/light toggle with zero JavaScript |
| **Layout** | CSS Grid, Flexbox, `clamp()` for fluid responsive typography |
| **Typography** | Google Fonts: Bebas Neue (display), Barlow (body), IBM Plex Mono (code) |
| **Decorative FX** | `radial-gradient` halftone, pseudo-elements, `backdrop-filter` blur, neon `box-shadow` |
| **Accessibility** | Skip link, `aria-*` attributes, `:focus-visible`, `<time datetime>`, WCAG AA contrast |
| **SEO** | Open Graph meta tags, canonical link, semantic heading hierarchy |

---

## Folder Structure
portfolio/
├── index.html          — Main HTML document: full semantic structure
├── README.md           — This file
└── assets/
├── css/
│   └── style.css   — All styles: variables, layout, themes, accessibility
└── images/
└── (empty)     — No external images: all decoration is CSS-only

---

## Key Features

- **Semantic HTML5** — `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` for meaning, not presentation
- **WCAG AA Accessibility** — skip link, ARIA labels, focus rings, `<time>` elements, 4.5:1 contrast minimum
- **SEO-optimized** — meta description, Open Graph tags, canonical URL, structured heading hierarchy
- **CSS-only dark/light toggle** — checkbox hack with `input` and `label`, zero JavaScript required
- **CSS design system** — all values as custom properties, every variable commented with its purpose
- **Responsive layout** — fluid from mobile to 4K with CSS Grid, Flexbox, and `clamp()`
- **Dual visual identity** — Street Prestige (dark) and Tricolor Heroico (light) as independent design systems
- **Sticky header with blur** — `position: sticky` + `backdrop-filter: blur(8px)` glass effect
- **Heavily commented code** — every block explains the why, not just the what

---

## How to Run

No build step. No dependencies. No terminal commands needed.

```powershell
# Clone the repository
git clone https://github.com/mathdejesus/portfolio.git
cd portfolio
start index.html
```

Or download the ZIP, extract it, and open `index.html` in any modern browser.

---

## Accessibility Notes

| Implementation | Standard / Reason |
|---|---|
| Skip-to-content link | WCAG 2.1 SC 2.4.1 — keyboard users bypass nav to main content |
| `aria-label` on every `section` | Screen readers announce the region before reading content |
| `aria-labelledby` on `article` cards | Links each card to its own heading for an accessible name |
| `aria-hidden` on decorative triangles | Prevents narration of decorative Unicode characters |
| `tabindex="-1"` on `#theme-toggle` | Removes hidden checkbox from keyboard tab order |
| `:focus-visible` outline in gold | Visible focus ring for keyboard, not triggered by mouse |
| `<time datetime>` on all dates | Machine-readable dates for assistive tech and search engines |
| Color contrast >= 4.5:1 | Both palettes validated against WCAG AA minimum |

---

## SEO Notes

| Tag / Element | Purpose |
|---|---|
| `<title>` | "Name — Role" format for search engines and browser tabs |
| `<meta name="description">` | ~155-char summary indexed by Google for search snippets |
| `<meta name="author">` | Associates document with its creator |
| Open Graph tags | Controls preview on LinkedIn, WhatsApp, and Twitter/X |
| `<link rel="canonical">` | Prevents duplicate content indexing |
| Single `<h1>` | Correct document outline — one top-level heading |
| `<h2>` per section | Crawlable page structure for search engines |
| `<nav>` with anchor links | Internal link map for search crawlers |
| `lang="pt-BR"` on `<html>` | Language declaration for indexing and screen readers |

---

## License

MIT License — Copyright (c) 2026 Matheus Costa de Jesus

Permission is hereby granted, free of charge, to any person obtaining a copy of this software
and associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions: The above copyright notice and this
permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.

---

Built with precision by [Matheus Costa de Jesus](https://github.com/mathdejesus)
Lauro de Freitas, Bahia, Brazil · 2026
