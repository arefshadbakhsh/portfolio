# Aref Shadbakhsh — Portfolio

A personal engineering portfolio with full-color photography, a blue and navy visual identity, real product imagery, project details, and a career narrative from frontend developer to CTO. Includes scroll reveals, interactive project imagery, and reduced-motion support. Supports English, Persian (RTL), German, and light/dark themes. Built with React, TypeScript, and Vite.

## Run locally

```bash
pnpm install
pnpm dev
```

## Visitor analytics

The site includes `@vercel/analytics`. After importing this GitHub repository into Vercel and deploying it, enable **Analytics** in the Vercel project dashboard. You will then see page views, unique visitors, countries, devices, and referrers without adding cookies.

## Deploy

1. Push the repository to GitHub.
2. Import `arefshadbakhsh/portfolio` in Vercel.
3. Keep the detected Vite settings (`pnpm build`, output directory `dist`).
4. Enable Analytics under the project’s Analytics tab.

## Content

Translated portfolio copy lives in `src/i18n.ts`; project data and presentation labels live in `src/App.tsx`; presentation lives in `src/styles.css`. Replace the résumé file in `public/Aref_Shadbakhsh_Resume.pdf` whenever it changes.

The Nobat Link preview in `public/nobatlink-preview.jpg` is a screenshot of the public product landing page, captured on 2026-10-13. Refresh it when the product interface changes.
