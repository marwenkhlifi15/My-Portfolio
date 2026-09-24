# Marwen Khlifi — Portfolio

A single-page personal portfolio built as one self-contained HTML file — no build step, no dependencies to install. Live preview: https://claude.ai/artifact/C3BvDEuLs52rqZBzNVWwUK

## Features

- **Light / dark mode** — follows the system preference on first load, with a manual toggle that's remembered on return visits (`localStorage`).
- **Bilingual (FR / EN)** — full UI translation via a simple `data-i18n` attribute system, toggle in the header, preference remembered locally.
- **Responsive layout** — adapts from mobile to desktop, safe-area aware for notched devices.
- **Sections** — hero with photo, about, experience timeline, skills, education, certificates, languages, and contact.
- **Zero dependencies** — pure HTML/CSS/JS, Google Fonts (Space Grotesk + Inter) loaded via `<link>`.

## Tech

`HTML5` · `CSS3` (custom properties, grid, `prefers-color-scheme`) · vanilla `JavaScript` (no framework, no build tool)

## Project structure

```
.
└── index.html   # everything: markup, styles, translations, theme/lang logic
```

## Running locally

No build step required — just open the file in a browser:

```bash
# clone the repo, then
open index.html          # macOS
# or
xdg-open index.html      # Linux
# or just double-click it on Windows
```

For a local server (recommended for correct relative paths if you add assets later):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

Since it's a single static file, it deploys anywhere for free:

- **GitHub Pages** — enable Pages on this repo (`Settings → Pages`), serving from the branch root, with `index.html` at the root.
- **Netlify / Vercel** — drag-and-drop deploy, or connect the repo directly.

## Customizing

- **Content** — edit the markup in `index.html` directly, and update the matching key in the `t.fr` / `t.en` translation objects near the bottom of the file.
- **Colors** — all theme colors are CSS custom properties defined in `:root` (light) and `:root[data-theme="dark"]` (dark) at the top of the `<style>` block.
- **Photo** — the portrait is embedded as a base64 data URI to keep the deploy to a single file; replace it by swapping the `src` on the `<img class="portrait">` element (or point it to a hosted image instead).

## Contact

- Email: khlifimarwen@outlook.com
- LinkedIn: [linkedin.com/in/marwen-khlifi](https://www.linkedin.com/in/marwen-khlifi)
- GitHub: [github.com/marwenkhlifi15](https://github.com/marwenkhlifi15)

## License

Personal portfolio — feel free to fork the structure for your own use, but please don't reuse the content or photo as-is.
