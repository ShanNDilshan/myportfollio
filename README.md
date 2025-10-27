# Shanuka Dilshan — Portfolio (Next.js)

This is a minimal Next.js + TypeScript portfolio scaffold tailored for Vercel deployment.

Main features:

- Single-page layout with Hero, Skills, Projects, Contact, Footer
- Glass-morphism navbar
- 3D rotating starfield background (react-three-fiber)
- EmailJS-backed contact form (client-side)

Quick start (Windows):

1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
```

Notes and next steps:

- The site expects assets to be served from `public/assets/` (organized as `public/assets/me`, `public/assets/projects`, `public/assets/skills`, `public/assets/social`).
- To copy your existing folders into `public/assets/` and remove the old folders, run this PowerShell command from the repo root (it will create `public\assets`, copy the folders, then remove the originals):

```powershell
mkdir public\assets
cp -Recurse me,projects,skills,social public\assets\
Remove-Item -Recurse -Force me,projects,skills,social
```

Make sure you have backups before removing files. After copying, the app will serve images from `/assets/...` paths.

- EmailJS credentials are already configured in `components/Contact.tsx`. You can change them or use environment variables for better security.

## Deployment to Vercel

### Prerequisites

1. Push this repository to GitHub
2. Sign up/login to [Vercel](https://vercel.com)

### Deploy Steps

1. In Vercel dashboard, click "New Project"
2. Import your GitHub repository
3. Vercel will auto-detect Next.js — no configuration needed
4. Click "Deploy"

### Build & Production

- Build command: `npm run build` (auto-configured)
- Output directory: `.next` (auto-configured)
- Node version: 18.x or higher

### Post-Deployment Checklist

- [ ] Copy assets into `public/assets/` before first deploy
- [ ] Test all sections (About, Skills, Projects, Contact)
- [ ] Verify EmailJS contact form works
- [ ] Check responsive design on mobile/tablet
- [ ] Add custom domain (optional) in Vercel project settings

## SEO Optimization

The site uses Next.js 15 which has built-in SEO support. To improve SEO:

1. Add meta tags in `pages/_app.tsx` or create a `pages/_document.tsx`
2. Use Next.js `<Head>` component to add:
   - Title and description meta tags
   - Open Graph tags for social sharing
   - Twitter card tags
   - Canonical URLs
3. Add `robots.txt` in `public/` folder
4. Create `sitemap.xml` (can use `next-sitemap` package)
5. Optimize images using Next.js `<Image>` component (already implemented)

### Example Meta Tags (add to pages/index.tsx)

```tsx
import Head from "next/head";

// In the component:
<Head>
  <title>Shanuka Dilshan - Mobile App Developer (Flutter & Spring Boot)</title>
  <meta
    name="description"
    content="Mobile Application Developer with 4 years Flutter & Java experience. Specialized in App Store & Play Store optimized apps."
  />
  <meta property="og:title" content="Shanuka Dilshan - Portfolio" />
  <meta
    property="og:description"
    content="Mobile App Developer specializing in Flutter and Spring Boot"
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</Head>;
```

## Performance Tips

- Images are already using Next.js Image component for optimization
- 3D starfield canvas is lightweight (~600 stars)
- Glass-morphism effects use CSS backdrop-filter
- Tailwind CSS purges unused styles in production build

## Tech Stack

- Next.js 15
- React 18.3
- TypeScript
- Tailwind CSS 3.4
- React Three Fiber 8.x (3D starfield)
- EmailJS (contact form)
- Framer Motion 11 (animations - ready to use)
