# AGENTS.md

## Project
This repository is a personal academic resume website built with Astro and deployed to GitHub Pages.

## Language
- Default to Simplified Chinese for user-facing copy and assistant responses.
- Do not translate code, commands, file paths, package names, or identifiers.

## Tech Stack
- Use Astro for the static site.
- Use TypeScript for structured content data.
- Use Node.js 22 through nvm for local development.
- Use plain CSS in `src/styles/global.css` unless a clear need for another styling system appears.
- Use `lucide-astro` for icons when icons are needed.
- Do not add a backend, database, CMS, analytics, or contact form service in the first version.
- Do not install or introduce MCP for the first version.

## Site Scope
- The first version must include these pages:
  - `/` homepage
  - `/resume/` resume page
  - `/projects/` projects page
  - `/achievements/` academic outputs, competitions, awards, and honors
- The site is Chinese-first.
- Use placeholder content only where real personal data is not available.
- Keep all replaceable profile, project, education, skill, and achievement data in `src/data/profile.ts`.
- Do not hardcode long personal content directly inside page components.

## Visual Style
- Use a clean academic style: readable typography, restrained color, high contrast, and information-dense but calm layouts.
- Avoid marketing-style hero sections, decorative gradient blobs, oversized cards, nested cards, and one-hue palettes.
- Cards must use `border-radius: 8px` or less.
- Use local visual assets in `public/images/`; do not hotlink remote images.
- Placeholder images must be clearly replaceable.

## Deployment
- Deploy through GitHub Actions to GitHub Pages.
- This is a project page deployment with Astro `base: "/personal-web/"`.
- Do not require GitHub secrets for the first version.
- If migrating away from GitHub Pages later, prefer Cloudflare Pages first, then Vercel.

## Validation
After changes, run:
- `node --version` and confirm Node.js 22 is active
- `npm run check`
- `npm run build`

For layout or UI changes, also verify:
- desktop viewport around `1440x900`
- mobile viewport around `390x844`
- no clipped text, overlapping navigation, broken images, or horizontal overflow
