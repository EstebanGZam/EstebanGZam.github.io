# estebangzam.github.io

Personal portfolio of **Esteban Gaviria Zambrano**, AI & DevOps Engineer.
Live at <https://estebangzam.github.io/>.

## Views

One site, one content source, three focus views in two languages:

| View | English | Spanish |
| --- | --- | --- |
| Overview (AI + DevOps) | `/` | `/es/` |
| AI focus | `/ai/` | `/es/ai/` |
| DevOps focus | `/devops/` | `/es/devops/` |

A focus view reorders and emphasizes the same content: hero line, metrics,
section order, bullet order, skill groups, and which CV is offered first.

## Stack

- [Astro](https://astro.build/) 5, static output, no client framework.
- Plain CSS with custom properties; light and dark themes follow the system and
  can be toggled.
- Contact form posts to Formspree; everything else is static.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + static build into dist/
npm run preview  # serve dist/
```

## Editing content

All text lives in [`src/content/site.ts`](src/content/site.ts), one object per
language with the same shape. Bullets, projects, skill groups and certifications
carry `tags` (`ai`, `devops`); the focus views use them to decide order.

CV PDFs live in `public/cv/` and are linked by `cvHref()` in the same file.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push
to `main` (Settings → Pages → Source: **GitHub Actions**). Actions are pinned to
full commit SHAs.
