# aRLi Deployment Guide

## 🚀 Quick Start

### Development Server

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment Options

### 1. Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

**Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

### 2. Netlify

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Deploy via Netlify CLI or drag-and-drop the `dist` folder.

### 3. GitHub Pages

```bash
# Build
npm run build

# Deploy to gh-pages branch
npx gh-pages -d dist
```

### 4. Custom Server (Nginx)

**nginx.conf:**
```nginx
server {
    listen 80;
    server_name arli.studio;
    root /var/www/arli-studio/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript application/json;
    gzip_min_length 1000;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🔧 Environment Variables

Create `.env` file if needed:

```env
VITE_SPLINE_SCENE_URL=https://prod.spline.design/sFuFa0qxPJ1Jubco/scene.splinecode
```

## 📊 Performance Optimization

### Spline Scene Loading
The Spline 3D scene is loaded asynchronously. Consider:
- Using a loading screen
- Lazy loading the scene on scroll
- Providing fallback 2D graphics

### Code Splitting
Large chunks are expected due to:
- Spline runtime (~2MB)
- Physics engine
- GSAP animations

To optimize:
```javascript
// Lazy load Spline
const loadSpline = async () => {
  const { Application } = await import('@splinetool/runtime');
  // Initialize scene
};
```

## 🌐 Domain Setup

1. **Point DNS to hosting provider:**
   - A Record: `@` → Your server IP
   - CNAME: `www` → Your domain

2. **SSL Certificate:**
   - Let's Encrypt (automatic on Vercel/Netlify)
   - Or use Cloudflare for free SSL

## 📱 Mobile Considerations

- Spline scenes are GPU-intensive
- Consider disabling 3D on low-end devices:

```javascript
if (window.matchMedia('(max-width: 768px)').matches) {
  // Load lightweight version
}
```

## 🔍 SEO Setup

Add to `index.html`:

```html
<!-- Open Graph -->
<meta property="og:title" content="aRLi - סטודיו טכנולוגי בהובלת נשים">
<meta property="og:description" content="בונים מערכות חכמות מאפס">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:url" content="https://arli.studio">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="aRLi">
<meta name="twitter:description" content="בונים מערכות חכמות מאפס">
<meta name="twitter:image" content="/twitter-image.jpg">
```

## 🎯 Analytics

Add Google Analytics or similar:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Debugging

### Common Issues

1. **Spline scene not loading:**
   - Check console for CORS errors
   - Verify scene URL is accessible
   - Ensure canvas element exists

2. **Animations not smooth:**
   - Check GPU acceleration
   - Reduce animation complexity on low-end devices
   - Use Chrome DevTools Performance tab

3. **RTL layout issues:**
   - Verify `dir="rtl"` on `<html>` tag
   - Check CSS for hardcoded `left/right` values
   - Test in RTL preview mode

## 📈 Monitoring

Monitor site performance:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- Vercel Analytics (if using Vercel)

## 🔄 Updates

To update dependencies:

```bash
npm update
npm audit fix
```

## 🎨 Customization

### Colors
Edit `style.css` CSS variables:
```css
:root {
  --accent: #C48FD6;
  --accent-dark: #9B6BB3;
}
```

### Spline Scene
Replace scene URL in `main.js`:
```javascript
await this.app.load('YOUR_SPLINE_SCENE_URL');
```

### Content
Edit Hebrew text in `index.html` sections.

---

Built with precision ✨
