# Portfolio Deployment Checklist

## ✅ Pre-Deployment Tasks

### 1. Move Assets to Public Folder

Run this command from the project root:

```powershell
mkdir public\assets
cp -Recurse me,projects,skills,social public\assets\
Remove-Item -Recurse -Force me,projects,skills,social
```

### 2. Verify Local Build

```powershell
npm run build
npm start
```

Visit http://localhost:3000 and test:

- [ ] All images load correctly
- [ ] Navigation links work (About, Skills, Projects, Hire Me)
- [ ] Contact form submits successfully
- [ ] Responsive design on mobile (resize browser)
- [ ] 3D starfield background renders

### 3. Create GitHub Repository

```powershell
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## 🚀 Vercel Deployment

### Step 1: Import Project

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings

### Step 2: Configure (if needed)

- Framework Preset: **Next.js** (auto-detected)
- Build Command: `npm run build` (auto)
- Output Directory: `.next` (auto)
- Install Command: `npm install` (auto)
- Node Version: 18.x or higher

### Step 3: Deploy

Click **Deploy** button and wait ~2-3 minutes

### Step 4: Post-Deployment

- [ ] Visit your deployed URL (e.g., `your-project.vercel.app`)
- [ ] Test contact form on production
- [ ] Test on real mobile device
- [ ] Check browser console for errors
- [ ] Update `public/robots.txt` with your actual domain

## 🔧 Optional Enhancements

### Custom Domain

1. Go to Vercel project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Environment Variables (for EmailJS security)

1. Go to Vercel project → Settings → Environment Variables
2. Add:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = service_4mb8i9q
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = template_j5c4gdk
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = wGIOhl8bmqpZgi9iF
3. Update `components/Contact.tsx` to use `process.env.NEXT_PUBLIC_*`
4. Redeploy

### Analytics

- Add Google Analytics 4 or Vercel Analytics
- Track page views, form submissions, button clicks

### SEO Improvements

- [ ] Add Open Graph image (1200x630px) to `public/og-image.png`
- [ ] Update meta tags in `pages/index.tsx` with OG image URL
- [ ] Submit sitemap to Google Search Console
- [ ] Create `public/sitemap.xml` (or use `next-sitemap` package)

## 📱 Testing Checklist

### Desktop (Chrome/Firefox/Safari)

- [ ] Homepage loads
- [ ] Navbar is sticky
- [ ] All sections scroll smoothly
- [ ] Contact form works
- [ ] Social links open in new tabs

### Mobile (iPhone/Android)

- [ ] Hamburger menu works
- [ ] Images are responsive
- [ ] Text is readable
- [ ] Form fields are accessible
- [ ] No horizontal scroll

### Performance

- [ ] Lighthouse score > 90
- [ ] Images lazy load
- [ ] First Contentful Paint < 2s
- [ ] No console errors

## 🐛 Common Issues & Fixes

### Images Not Loading

- Ensure `public/assets/` folder exists
- Check file names match exactly (case-sensitive on Linux)
- Verify Next.js Image component paths start with `/assets/`

### Contact Form Not Working

- Check EmailJS credentials in `components/Contact.tsx`
- Verify EmailJS template exists in dashboard
- Test in browser console for errors

### Build Fails on Vercel

- Check `package.json` dependencies
- Run `npm run build` locally first
- Check Vercel build logs for errors

### 3D Starfield Not Rendering

- Check browser supports WebGL
- Verify Three.js and react-three-fiber versions

## 📞 Support

- GitHub Issues: [Your Repo URL]
- Email: shanukanimeshdilshan@gmail.com

---

**Current Status:** Ready for deployment ✅

Last Updated: October 27, 2025
