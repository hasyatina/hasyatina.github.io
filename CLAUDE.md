# CLAUDE.md

## Project overview
Personal homepage for Hasya Hanizam — a single static page presenting education and
experience. Vanilla HTML/CSS/JS, no build step and no dependencies.

## Setup / install
None needed. Open `index.html` directly in a browser, or serve the directory with any
static file server (e.g. `python3 -m http.server`). Intended for GitHub Pages.

## Common commands
No build/test/lint tooling is configured.

## Architecture / structure
- `index.html` — all page content: header with monogram, intro, and six sections
  (Education, Awards, Work & Internships, Leadership, Volunteering, Training & Exchange).
- `style.css` — pastel mint palette tokens in `:root`, dark mode via `prefers-color-scheme`,
  card + two-column entry layout, single `600px` breakpoint.
- `script.js` — scroll-reveal only, IIFE-wrapped.

## Conventions
- Every entry is an `<article class="entry">` with a `.rail` (date) and `.detail`
  (`h3` role, `p.org` organisation, optional `p.note` and `span.pill`). Adding content
  means copying that block — no new CSS needed.
- All colour lives in the `:root` custom properties. Never hardcode a colour elsewhere.
  Token names (`--sand`, `--sage`) predate the mint palette and are now generic:
  `--sand` = page background, `--sage` = accent.
- Text colours are contrast-checked to WCAG AA (4.5:1). If you retune `--muted` or
  `--sage-dk`, re-check them against `--sand` and `--card` before committing.
- Progressive enhancement: content is visible by default in CSS. `script.js` adds
  `.js-reveal` to `<body>` to opt into hiding, so JS failure or reduced-motion never
  leaves the page blank.
