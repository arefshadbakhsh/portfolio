# Aref Shadbakhsh — Portfolio

An editorial, journal-style portfolio following the story from frontend developer to CTO. Built with React, TypeScript, and Vite.

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

Portfolio copy lives in `src/App.tsx`; presentation lives in `src/styles.css`. Replace the résumé file in `public/Aref_Shadbakhsh_Resume.pdf` whenever it changes.
