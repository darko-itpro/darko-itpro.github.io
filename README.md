# darko.github.io

Personal developer portfolio. Bilingual (EN / FR), deployed to GitHub Pages.

Built with [Astro](https://astro.build) · Tailwind CSS v3 · static output.

## Setup

```bash
git clone https://github.com/darko-itpro/darko.github.io
cd darko.github.io
npm install
npm run dev       # http://localhost:4321
```

## Commands

| Command           | Description                        |
|-------------------|------------------------------------|
| `npm run dev`     | Start dev server on port 4321      |
| `npm run build`   | Build to `dist/`                   |
| `npm run preview` | Preview the production build locally |

## Project structure

```
src/
├── components/        # Astro components (Nav, Footer, Hero, BlogList, ProjectList)
├── content/
│   ├── blog/
│   │   ├── en/        # English blog posts (.md)
│   │   └── fr/        # French blog posts (.md)
│   └── projects/      # Project entries (.md, shared across locales)
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── blog/          # EN blog index + [slug] pages
│   ├── fr/            # All FR pages (mirrors EN structure)
│   └── index.astro    # EN homepage
├── styles/
│   └── global.css     # Tailwind directives + Google Fonts import
└── content.config.ts  # Content collection definitions (Astro v6)
```

## Adding content

### Blog post

Create a markdown file in the appropriate language directory:

```
src/content/blog/en/my-post.md
src/content/blog/fr/my-post.md
```

Required frontmatter:

```yaml
---
title: "Post title"
date: 2026-05-18
description: "Short description shown in listings."
tags: [python, django]
---
```

If a post only exists in one language, omit the other — do not create stubs.  
Restart the dev server after adding a new file.

### Project

Create a single markdown file (shared across both locales):

```
src/content/projects/my-project.md
```

Required frontmatter:

```yaml
---
title: "Project name"
description: "Short description."
docsUrl: "https://docs.example.com"
order: 1
---
```

### Personal info

Name, GitHub, LinkedIn, bio texts and nav links all live in `src/config.ts`. Never hardcode these in components.

## i18n

| Locale | URL pattern |
|--------|-------------|
| EN     | `/`, `/blog/`, `/blog/[slug]/` |
| FR     | `/fr/`, `/fr/blog/`, `/fr/blog/[slug]/` |

Always use `getRelativeLocaleUrl(locale, path)` from `astro:i18n` for internal links.

## Deployment

Push to `main` → GitHub Actions builds and deploys to GitHub Pages automatically (see `.github/workflows/deploy.yml`). Never edit `dist/` manually.
