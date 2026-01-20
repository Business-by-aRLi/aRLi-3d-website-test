# 🚀 Getting Started with aRLi 3D Website

## Quick Start (3 Steps)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit: **http://localhost:3000**

---

## 📁 Project Structure

```
arli-studio/
│
├── index.html              # Main HTML (RTL Hebrew)
├── style.css              # Design system & animations
├── main.js                # Core JavaScript (Spline, GSAP, interactions)
├── robot-showcase.js      # Large robot entity for philosophy section
│
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
│
├── README.md              # Project overview
├── DEPLOYMENT.md          # Deployment instructions
├── DESIGN_SPECS.md        # Complete design specifications
└── GETTING_STARTED.md     # This file
```

---

## 🎯 What You're Building

### Experience Overview

**aRLi** is an immersive 3D website for a female-led tech studio. Key features:

✨ **3D Integration** - Spline scene natively embedded
📜 **Scroll Animations** - GSAP-powered smooth transitions
🤖 **Robot Entity** - Custom canvas-drawn brand presence
🌊 **Smooth Scroll** - Lenis for premium feel
🇮🇱 **RTL Hebrew** - Full right-to-left support

---

## 🔧 Tech Stack

| Technology | Purpose | Why |
|------------|---------|-----|
| **Vite** | Build tool | Fast, modern, optimized |
| **Spline** | 3D scenes | Easy 3D integration |
| **GSAP** | Animations | Industry-standard motion |
| **Lenis** | Smooth scroll | Premium scrolling experience |
| **Vanilla JS** | Core logic | No framework overhead |

---

## 📖 Key Files Explained

### `index.html`
- Semantic HTML5 structure
- RTL Hebrew content
- 6 main sections: Hero, About, Services, Philosophy, Contact, Footer
- Spline canvas container
- Robot entity canvases

### `style.css`
- CSS custom properties (design tokens)
- Premium color palette (orchid purple accents)
- Responsive grid layouts
- RTL-optimized spacing
- Smooth transitions and hover effects

### `main.js`
Core functionality:
- **SplineScene** - Loads and animates 3D scene
- **RobotEntity** - Draws animated robot face
- **ScrollAnimations** - GSAP scroll-triggered effects
- **CTAInteractions** - Button micro-interactions
- **CustomCursor** - Premium cursor behavior

### `robot-showcase.js`
Large-scale robot for philosophy section with:
- Mouse tracking
- Particle effects
- Geometric accents
- Smooth animations

---

## 🎨 Customization Guide

### Change Colors

Edit CSS variables in `style.css`:

```css
:root {
  --accent: #C48FD6;        /* Your brand color */
  --accent-dark: #9B6BB3;   /* Darker variant */
  --white: #FFFFFF;         /* Background */
}
```

### Update Content

Edit Hebrew text in `index.html`:

```html
<h1 class="hero-title">
  <span class="title-line">Your Title</span>
  <span class="title-line">Second Line</span>
</h1>
```

### Replace Spline Scene

In `main.js`, change the scene URL:

```javascript
await this.app.load('YOUR_SPLINE_SCENE_URL');
```

Get your scene from: [https://spline.design](https://spline.design)

---

## 🎬 Animation System

### Scroll-Driven Animations

The site uses GSAP ScrollTrigger for scroll-based effects:

```javascript
gsap.to(element, {
  scrollTrigger: {
    trigger: section,
    start: 'top 80%',    // When section is 80% from top
    end: 'top 50%',      // When section is 50% from top
    scrub: 1,            // Smooth scrubbing
  },
  opacity: 1,
  y: 0,
});
```

### Key Animation Concepts

1. **Scrub** - Animation tied to scroll position
2. **Trigger** - Element that starts the animation
3. **Start/End** - When animation begins/ends
4. **Stagger** - Sequential animation delays

---

## 🤖 Robot Entity

### Two Instances

1. **Small Icon** (40x40px)
   - Navigation logo
   - Footer
   - SVG-based

2. **Main Entity** (400x400px)
   - Fixed bottom-left
   - Canvas-drawn
   - Appears on scroll

3. **Showcase** (600x600px)
   - Philosophy section
   - Interactive particles
   - Mouse tracking

### Design Features

- Feminine geometric eyelashes
- Orchid purple iris
- Refined lip line
- Ceramic/glass finish
- Subtle internal glow
- Breathing animation

---

## 📱 Responsive Behavior

### Breakpoints

```css
Desktop:  1400px+   Full 3D experience
Laptop:   1024px    Reduced spacing
Tablet:   768px     Stacked layout
Mobile:   320px     Simplified animations
```

### Mobile Optimizations

- Single column layouts
- Reduced font sizes
- Simplified 3D (or disabled)
- No parallax effects
- Touch-friendly buttons

---

## 🚀 Build & Deploy

### Development
```bash
npm run dev          # Start dev server
```

### Production Build
```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

### Deploy to Vercel
```bash
vercel               # Deploy instantly
```

See `DEPLOYMENT.md` for more deployment options.

---

## 🐛 Troubleshooting

### Spline Scene Not Loading

**Issue:** Canvas is empty
**Fix:**
- Check console for errors
- Verify scene URL is accessible
- Ensure internet connection

### Animations Not Smooth

**Issue:** Janky scroll
**Fix:**
- Check GPU acceleration is enabled
- Reduce animation complexity
- Test in Chrome DevTools Performance tab

### RTL Layout Issues

**Issue:** Elements aligned wrong
**Fix:**
- Verify `dir="rtl"` on `<html>`
- Check for hardcoded `left/right` in CSS
- Use logical properties (`start/end`)

### Build Errors

**Issue:** npm run build fails
**Fix:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📚 Learning Resources

### Technologies Used

- [Vite Documentation](https://vitejs.dev/)
- [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)
- [Spline Design](https://spline.design/)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)

### Design Inspiration

- [Awwwards](https://www.awwwards.com/) - Award-winning sites
- [Codrops](https://tympanus.net/codrops/) - Creative coding
- [SiteInspire](https://www.siteinspire.com/) - Design gallery

---

## 🎯 Next Steps

### Essential Tasks

- [ ] Replace placeholder content with real text
- [ ] Add your own Spline 3D scene
- [ ] Customize brand colors
- [ ] Add real contact email
- [ ] Create social media images (OG, Twitter)
- [ ] Add analytics (Google Analytics, etc.)
- [ ] Set up domain and hosting
- [ ] Test on real devices

### Nice-to-Have

- [ ] Add loading screen
- [ ] Create custom 404 page
- [ ] Add blog section
- [ ] Implement contact form
- [ ] Add case studies/portfolio
- [ ] Create mobile app version
- [ ] Add multi-language support

---

## 💡 Pro Tips

1. **Performance**: Use Chrome DevTools Lighthouse for optimization
2. **Testing**: Test on real devices, not just browser resize
3. **Accessibility**: Use keyboard navigation to test
4. **SEO**: Add proper meta tags and Open Graph images
5. **Analytics**: Track user behavior to improve UX

---

## 📞 Need Help?

- Check `DESIGN_SPECS.md` for visual specifications
- Read `DEPLOYMENT.md` for deployment guides
- Review code comments for inline documentation

---

## ✨ Credits

Built with:
- 🎨 Design: Premium, award-winning aesthetic
- 💻 Code: Clean, modular, commented
- 🤖 Robot: Custom canvas art
- 🌊 Motion: Smooth, intentional animations
- 🇮🇱 Language: Native RTL Hebrew support

---

**Ready to build something amazing?**

```bash
npm run dev
```

**Let's go! 🚀**
