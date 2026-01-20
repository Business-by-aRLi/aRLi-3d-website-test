# aRLi Design Specifications

## 🎨 Visual Design System

### Color Palette

```
Primary Colors:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
White          #FFFFFF    ███████  Main background
Off-White      #F8F9FA    ███████  Secondary background
Light Gray     #E8EAED    ███████  Borders & subtle elements
Silver         #BFC3C9    ███████  Metallic accents
Medium Gray    #C4C7CC    ███████  Secondary text
Dark Gray      #5F6368    ███████  Primary text
Black          #1A1B1F    ███████  Headings & accents

Accent Colors:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Orchid Purple  #C48FD6    ███████  Primary accent
Purple Dark    #9B6BB3    ███████  Accent gradient end
Purple Deep    #7A4A8F    ███████  Depth & shadows
```

### Typography

```
Font Family: Heebo (Hebrew-optimized, RTL-friendly)

Hierarchy:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hero Title       5.5rem (88px)  Bold (700)
Section Title    4rem (64px)    Bold (700)
Large Text       1.5rem (24px)  Medium (500)
Body Text        1.125rem (18px) Regular (400)
Small Text       1rem (16px)    Regular (400)
Caption          0.875rem (14px) Medium (500)

RTL Notes:
- Right-aligned by default
- Proper Hebrew line-height (1.6-1.8)
- Letter-spacing minimal for Hebrew
```

### Spacing System

```
Scale:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
XS    0.5rem   (8px)
SM    1rem     (16px)
MD    2rem     (32px)
LG    4rem     (64px)
XL    6rem     (96px)
2XL   8rem     (128px)

Grid:
- Max width: 1400px
- Padding: 3rem (desktop), 1.5rem (mobile)
- Column gap: 4rem
- Section spacing: 8rem vertical
```

## 🤖 Robot Entity Specifications

### Design Elements

```
FACE STRUCTURE:
┌─────────────────────────────────┐
│                                 │
│         ╱╲     ╱╲              │  ← Geometric eyelashes
│        ●○○   ○○●               │  ← Eyes (orchid purple iris)
│                                 │
│           ∼∼∼∼∼                │  ← Refined lip line (closed)
│                                 │
│        [Internal Glow]          │  ← Subtle purple glow
│                                 │
└─────────────────────────────────┘

Materials:
- Base: White ceramic/glass finish
- Eyes: Orchid purple gradient iris
- Lips: Soft purple stroke (2-3px)
- Glow: Radial gradient (rgba(196, 143, 214, 0.15))
- Shadow: Drop shadow with purple tint

Dimensions:
- Small icon: 40x40px (nav, footer)
- Main entity: 400x400px (fixed position)
- Showcase: 600x600px (philosophy section)
```

### Animation Behavior

```
Subtle Movements:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pupil dilation     2s cycle       Breathing effect
Eye tracking       Follows cursor  Subtle, 20% max offset
Glow pulsing      3s cycle       Opacity 10-15%
Particle orbit    12 particles   Slow rotation
Geometric shapes  6 elements     Counter-rotate

Interaction:
- Mouse proximity increases glow
- Scroll triggers appear/disappear
- No exaggerated movements
- Always elegant and calm
```

## 📐 Layout Specifications

### Hero Section
```
┌──────────────────────────────────────────────────────────────┐
│  NAV:  [CTA] [links] [links] [links]    [aRLi logo + robot] │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                              ┌─────────────────────┐        │
│   בונים מערכות               │                     │        │
│   שחושבות                   │   SPLINE 3D SCENE   │        │
│                              │   (Interactive)     │        │
│   סטודיו טכנולוגי...         │                     │        │
│                              │   [Rotating 3D      │        │
│   [התחילו מערכת]             │    Object with      │        │
│   [הגישה שלנו]               │    cursor follow]   │        │
│                              │                     │        │
│                              └─────────────────────┘        │
│                                                              │
│                    [גללו למטה ↓]                            │
└──────────────────────────────────────────────────────────────┘

Grid: 1fr 1fr (50-50 split)
Height: 100vh
Alignment: Center vertical
```

### Service Cards
```
┌────────────────────────────────┐  ┌────────────────────────────────┐
│                                │  │                                │
│  01                            │  │  02                            │
│                                │  │                                │
│  מערכות ניהול                  │  │  אוטומציות AI                  │
│                                │  │                                │
│  פלטפורמות ניהול מותאמות...    │  │  אינטליגנציה מלאכותית...       │
│                                │  │                                │
│                            [→] │  │                            [→] │
└────────────────────────────────┘  └────────────────────────────────┘

Hover State:
- Lift up 8px (translateY)
- Rotate 5deg (3D tilt)
- Purple border gradient appears
- Number opacity: 0.3 → 1.0
- Shadow expands
```

### Philosophy Section
```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ┌─────────────────┐    הגישה שלנו                          │
│  │                 │    ━━━━━━━━                             │
│  │   ROBOT         │                                         │
│  │   SHOWCASE      │    ● אפס תבניות                        │
│  │   (Canvas)      │    כל פרויקט מתחיל מדף ריק...          │
│  │                 │                                         │
│  │   [Large 3D     │    ● חשיבה ארכיטקטונית                │
│  │    animated     │    לפני שכותבים קוד...                 │
│  │    robot with   │                                         │
│  │    particles]   │    ● בהובלת נשים                       │
│  │                 │    aRLi בנוי ומנוהל על ידי נשים...    │
│  └─────────────────┘                                         │
│                                                              │
└──────────────────────────────────────────────────────────────┘

Grid: 1fr 1.5fr
Robot parallax: -50px on scroll
Text fade-in from right
```

## 🎬 Animation Specifications

### Scroll-Triggered Animations

```javascript
Hero → About:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Scroll 0-100%:
- Spline scene: rotate 180deg, scale 0.8, opacity 0.3
- Hero text: fade out
- Scroll indicator: fade up and out

About Section Entry:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Trigger: top 80%
End: top 50%
- Title: fade + scale from 0.95 to 1.0
- Text: slide from right (100px)
- Cards: stagger fade + rotateX from 15deg

Service Cards:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Each card independently:
- Opacity: 0 → 1
- Y: 100px → 0
- RotateY: -15deg → 0
- Scale: 0.9 → 1.0
Duration: Scrub with scroll
```

### Micro-Interactions

```
CTA Buttons:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hover:
- Scale: 1.0 → 1.05
- Shadow: Expand by 8px
- Ripple effect (white overlay grows from center)
- Translate: Y -4px

Click:
- Quick scale to 0.95
- Return to 1.05

Nav Links:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hover:
- Color: dark-gray → accent
- Underline grows from right (0 → 100%)

Custom Cursor:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Default: 10px circle, purple border
On interactive: Scale 2x
On drag: Shrink to 6px
Mix-blend-mode: difference
```

## 📱 Responsive Breakpoints

```
Desktop:     1400px+    Full experience
Laptop:      1024px     Reduce spacing
Tablet:      768px      Stack grids, simplify 3D
Mobile:      320px      Single column, minimal animations

Mobile Adjustments:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Hero: Single column, center align
- Spline: Reduce quality or replace with static image
- Robot: Hide fixed entity, show only in sections
- Font sizes: Reduce by 30-40%
- Spacing: Halve all spacing
- Remove parallax effects
- Disable custom cursor
```

## 🎯 Performance Targets

```
Lighthouse Scores:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Performance:     90+
Accessibility:   100
Best Practices:  100
SEO:             100

Load Times:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
First Paint:       < 1.5s
Largest Content:   < 2.5s
Time to Interactive: < 3.5s
Total Bundle:      < 3MB (with Spline)

Optimizations:
- Lazy load Spline scene
- Use WebP images
- Preload critical fonts
- Defer non-critical JS
- Use CDN for assets
```

## 🔍 Accessibility

```
WCAG 2.1 AA Compliance:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Semantic HTML5 elements
✓ ARIA labels for interactive elements
✓ Keyboard navigation support
✓ Focus indicators (purple outline)
✓ High contrast ratios (4.5:1 minimum)
✓ Reduced motion support
✓ Screen reader friendly
✓ RTL properly implemented

Reduced Motion:
@media (prefers-reduced-motion: reduce) {
  - Disable scroll animations
  - Remove 3D transforms
  - Instant transitions
  - Static robot entity
}
```

## 🎨 Export Assets Needed

```
Recommended Assets to Create:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Favicon (32x32, 16x16)
2. Apple Touch Icon (180x180)
3. Open Graph Image (1200x630)
4. Twitter Card Image (1200x675)
5. Robot icon variants (SVG)
6. Loading spinner (optional)
7. Fallback images for Spline scene

File Formats:
- Icons: SVG (scalable, small)
- Images: WebP (modern, compressed)
- Fallback: PNG (compatibility)
```

---

**Design Philosophy:**
- Precision over spectacle
- Intentional motion
- Robotic elegance
- Quiet power
- Female-led intelligence

Built with care 🤖✨
