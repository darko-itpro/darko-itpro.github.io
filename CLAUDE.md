# darko.github.io — Personal Developer Page

## Project Overview
Astro-based personal portfolio deployed to GitHub Pages as `darko.github.io`.
Bilingual site: **EN is the default** (no URL prefix), FR lives at `/fr/`.
Project documentation sites at `darko.github.io/<project>` are **separate repositories —
out of scope here**. The toggle FR | EN in the nav links between the two versions.

## Stack
- Astro 5.x — static output (`output: 'static'`)
- Tailwind CSS v3 via PostCSS (`postcss.config.cjs` + `autoprefixer`) — `@astrojs/tailwind` was dropped in Astro v6
- No JS framework (plain `.astro` files — no React, Vue, or Svelte)
- GitHub Actions for deployment to GitHub Pages

## Commands
```
npm run dev       # dev server on localhost:4321
npm run build     # production build → dist/
npm run preview   # preview dist/ locally
```

## i18n Architecture — IMPORTANT
`prefixDefaultLocale: false` is set. This means:

| Locale | URL pattern        |
|--------|--------------------|
| EN     | `/`, `/blog/`, `/projects/`       |
| FR     | `/fr/`, `/fr/blog/`, `/fr/projects/` |

ALWAYS use `getRelativeLocaleUrl(locale, path)` from `astro:i18n` for internal links.
NEVER hardcode `/fr/` prefixes in `href` attributes.

When adding a new page, create it in BOTH:
- `src/pages/<slug>.astro` (EN)
- `src/pages/fr/<slug>.astro` (FR)

If a blog post exists only in one language, omit the other — do not create stubs.

## Personal Data
All personal info (name, GitHub, LinkedIn, bio texts) lives in `src/config.ts`.
NEVER hardcode these values in components — always import from config.

## Design System — Terminal Aesthetic
The visual language mimics a terminal session, themed with **Catppuccin Macchiato**.
The site is **dark-only** — there is no light mode and no theme toggle. Never reintroduce
`dark:` variants or a `darkMode` config; there is exactly one visual mode.
- Font: `font-mono` everywhere — no sans-serif in page content
- Colors: the full Catppuccin Macchiato palette is registered in `tailwind.config.cjs`
  under `theme.extend.colors.mchiato.*` (e.g. `bg-mchiato-base`, `text-mchiato-peach`).
  Use these tokens, not Tailwind's built-in `neutral-*`/`amber-*`/etc. palettes.
- Accent color: peach (`text-mchiato-peach`, `border-mchiato-peach`) for prompts,
  highlights, active nav state, and hover states
- Section headers appear as shell commands: `❯ whoami`, `❯ ls -la ./projects/`
- Nav links use `./section` convention; links whose `href` points off-site are prefixed
  with `↗` (see `Nav.astro`) to signal they leave the site
- Borders use `border-mchiato-surface0` (or `surface1` for tag chips), no shadows
- Interactive items shift on hover with `hover:pl-2 transition-all` — no button-style effects
- Page content is wrapped once in `<TerminalWindow>` (in `BaseLayout.astro`) — a bordered
  frame with a red/yellow/green traffic-light title bar — treating the whole page as one
  terminal session. Don't nest additional `<TerminalWindow>`s inside individual sections.
- A blinking cursor uses the `.cursor-blink` utility class (defined in `global.css`,
  paired with `text-mchiato-peach`) — this is the one cursor-animation mechanism site-wide;
  don't reach for `animate-pulse` for cursor glyphs. A CSS-only typing effect
  (`.animate-typing`, also in `global.css`) is used for Hero's name reveal.

## Content Collections
Projects, trainings, and blog posts use Astro Content Collections (defined in
`src/content.config.ts`) and are all localized the same way — separate `en`/`fr`
subfolders, each loaded as its own `<name>-en`/`<name>-fr` collection:

```
src/content/projects/en/<slug>.md  # EN projects
src/content/projects/fr/<slug>.md  # FR projects
src/content/blog/en/<slug>.md      # EN blog posts
src/content/blog/fr/<slug>.md      # FR blog posts
src/content/trainings/en/<slug>.md # EN trainings
src/content/trainings/fr/<slug>.md # FR trainings
```

Project frontmatter: `title`, `description`, `docsUrl`, `order` (integer for sorting)
Blog frontmatter: `title`, `date` (ISO 8601), `description`, `tags` (string array)
Training frontmatter: `title`, `description`, `topic`, `docsUrl`, `order` (integer for sorting)

## Content Collections config
Defined in `src/content.config.ts` (Astro v6 format — uses `glob` loaders, not `type: 'content'`).

## File Conventions
- Components: `src/components/PascalCase.astro`
- Layouts: `src/layouts/PascalCase.astro`
- EN pages: `src/pages/<slug>.astro`
- FR pages: `src/pages/fr/<slug>.astro`
- Static assets (fonts, favicon): `public/`
- Processed assets (images): `src/assets/`

## Deployment
Push to `main` triggers `.github/workflows/deploy.yml`.
The workflow builds with `astro build` and deploys `dist/` to GitHub Pages.
Do not edit `dist/` — it is generated and gitignored.

## Rules
- Do not add a JS framework integration unless explicitly requested
- Do not use `<style>` without `is:global` being intentional — prefer Tailwind classes
- Do not create pages without their translation unless content is intentionally monolingual
- Do not hardcode personal URLs — they live in `src/config.ts`
- Prefer static data over dynamic fetching — this is a static site
