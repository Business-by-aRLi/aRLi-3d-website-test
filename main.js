/* ═══════════════════════════════════════════════════════════
   aRLi - Main JavaScript
   3D Scroll-Driven Experience
   ═══════════════════════════════════════════════════════════ */

import './style.css';
import { Application } from '@splinetool/runtime';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { RobotShowcase } from './robot-showcase.js';

gsap.registerPlugin(ScrollTrigger);

/* ────────────────────────────────────────────────────────────
   SMOOTH SCROLL INITIALIZATION
   ──────────────────────────────────────────────────────────── */

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Integrate Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

/* ────────────────────────────────────────────────────────────
   SPLINE 3D SCENE INTEGRATION
   ──────────────────────────────────────────────────────────── */

class SplineScene {
  constructor() {
    this.canvas = document.getElementById('canvas3d');
    this.app = null;
    this.scene = null;
    this.init();
  }

  async init() {
    try {
      // Initialize Spline Application
      this.app = new Application(this.canvas);
      await this.app.load('https://prod.spline.design/sFuFa0qxPJ1Jubco/scene.splinecode');

      this.scene = this.app;

      // Add scroll-driven animation
      this.setupScrollAnimation();

      // Add cursor interaction
      this.setupCursorInteraction();

      console.log('✅ Spline scene loaded successfully');
    } catch (error) {
      console.error('Error loading Spline scene:', error);
    }
  }

  setupScrollAnimation() {
    if (!this.canvas) return;

    // Rotate and scale Spline scene on scroll
    gsap.to(this.canvas, {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      rotationY: 180,
      scale: 0.8,
      opacity: 0.3,
    });
  }

  setupCursorInteraction() {
    if (!this.canvas) return;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // Smooth follow cursor
    const animateCursor = () => {
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      gsap.to(this.canvas, {
        x: targetX * 20,
        y: targetY * 20,
        duration: 0.8,
        ease: 'power2.out',
      });

      requestAnimationFrame(animateCursor);
    };

    animateCursor();
  }
}

/* ────────────────────────────────────────────────────────────
   ROBOT ENTITY (BRAND PRESENCE)
   ──────────────────────────────────────────────────────────── */

class RobotEntity {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.animationFrame = 0;

    this.init();
  }

  init() {
    this.draw();
    this.animate();
  }

  draw() {
    const ctx = this.ctx;
    const centerX = this.width / 2;
    const centerY = this.height / 2;
    const time = this.animationFrame * 0.02;

    // Clear canvas
    ctx.clearRect(0, 0, this.width, this.height);

    // Main face structure (ceramic/glass)
    ctx.save();

    // Glow effect
    const glowGradient = ctx.createRadialGradient(
      centerX, centerY, 0,
      centerX, centerY, 150
    );
    glowGradient.addColorStop(0, 'rgba(196, 143, 214, 0.15)');
    glowGradient.addColorStop(1, 'rgba(196, 143, 214, 0)');

    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
    ctx.fill();

    // Main face oval (white ceramic)
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#E8EAED';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, 80, 100, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Eyes (geometric, feminine)
    const eyeY = centerY - 20;
    const eyeDistance = 35;

    // Left eye
    this.drawEye(ctx, centerX - eyeDistance, eyeY, time);

    // Right eye
    this.drawEye(ctx, centerX + eyeDistance, eyeY, time);

    // Elegant eyelashes
    this.drawEyelashes(ctx, centerX - eyeDistance, eyeY, -1);
    this.drawEyelashes(ctx, centerX + eyeDistance, eyeY, 1);

    // Refined lip line (closed, elegant)
    this.drawLips(ctx, centerX, centerY + 35);

    // Subtle internal glow
    const innerGlow = ctx.createRadialGradient(
      centerX, centerY - 10, 0,
      centerX, centerY - 10, 60
    );
    innerGlow.addColorStop(0, 'rgba(196, 143, 214, 0.1)');
    innerGlow.addColorStop(1, 'rgba(196, 143, 214, 0)');

    ctx.fillStyle = innerGlow;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY - 10, 50, 60, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  drawEye(ctx, x, y, time) {
    // Outer eye (glass/ceramic)
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#C48FD6';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(x, y, 12, 14, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Iris (orchid purple)
    const irisGradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
    irisGradient.addColorStop(0, '#C48FD6');
    irisGradient.addColorStop(0.7, '#9B6BB3');
    irisGradient.addColorStop(1, '#7A4A8F');

    ctx.fillStyle = irisGradient;
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fill();

    // Pupil (with subtle animation)
    const pupilSize = 3 + Math.sin(time) * 0.5;
    ctx.fillStyle = '#1A1B1F';
    ctx.beginPath();
    ctx.arc(x, y, pupilSize, 0, Math.PI * 2);
    ctx.fill();

    // Light reflection
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.beginPath();
    ctx.arc(x - 3, y - 3, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  drawEyelashes(ctx, x, y, direction) {
    ctx.strokeStyle = '#5F6368';
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';

    const lashes = [
      { angle: -50, length: 18 },
      { angle: -30, length: 22 },
      { angle: -10, length: 20 },
      { angle: 10, length: 18 },
    ];

    lashes.forEach(lash => {
      const angle = (lash.angle * direction * Math.PI) / 180;
      const startX = x + Math.cos(angle - Math.PI / 2) * 14;
      const startY = y - 14 + Math.sin(angle - Math.PI / 2) * 14;
      const endX = startX + Math.cos(angle - Math.PI / 2) * lash.length;
      const endY = startY + Math.sin(angle - Math.PI / 2) * lash.length;

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(
        startX + Math.cos(angle - Math.PI / 2) * lash.length * 0.5,
        startY + Math.sin(angle - Math.PI / 2) * lash.length * 0.5,
        endX,
        endY
      );
      ctx.stroke();
    });
  }

  drawLips(ctx, x, y) {
    ctx.strokeStyle = '#C48FD6';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    // Upper lip curve
    ctx.beginPath();
    ctx.moveTo(x - 20, y);
    ctx.quadraticCurveTo(x - 10, y - 5, x, y - 3);
    ctx.quadraticCurveTo(x + 10, y - 5, x + 20, y);
    ctx.stroke();

    // Lower lip curve (subtle)
    ctx.beginPath();
    ctx.moveTo(x - 20, y);
    ctx.quadraticCurveTo(x, y + 4, x + 20, y);
    ctx.stroke();
  }

  animate() {
    this.animationFrame++;
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

/* ────────────────────────────────────────────────────────────
   SCROLL-DRIVEN ANIMATIONS
   ──────────────────────────────────────────────────────────── */

class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupHeroAnimations();
    this.setupSectionAnimations();
    this.setupServiceCards();
    this.setupRobotEntity();
    this.setupParallax();
  }

  setupNavigation() {
    const nav = document.querySelector('.nav');

    ScrollTrigger.create({
      start: 'top -100',
      onUpdate: (self) => {
        if (self.direction === -1) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      },
    });
  }

  setupHeroAnimations() {
    // Hide scroll indicator on scroll
    gsap.to('.scroll-indicator', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0,
      y: -50,
    });
  }

  setupSectionAnimations() {
    // Section titles
    gsap.utils.toArray('.section-title').forEach((title) => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        opacity: 0,
        y: 100,
        scale: 0.95,
      });
    });

    // Feature cards
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'top 60%',
          scrub: 1,
        },
        opacity: 0,
        y: 80,
        rotationX: 15,
        transformOrigin: 'center bottom',
      });
    });

    // About text
    gsap.from('.about-text', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 70%',
        end: 'top 40%',
        scrub: 1,
      },
      opacity: 0,
      x: 100,
    });
  }

  setupServiceCards() {
    gsap.utils.toArray('.service-item').forEach((item, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      });

      tl.from(item, {
        opacity: 0,
        y: 100,
        rotationY: -15,
        scale: 0.9,
        transformOrigin: 'center center',
      });

      // 3D rotation on hover
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          rotationY: 5,
          rotationX: -5,
          z: 50,
          duration: 0.6,
          ease: 'power2.out',
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          rotationY: 0,
          rotationX: 0,
          z: 0,
          duration: 0.6,
          ease: 'power2.out',
        });
      });
    });
  }

  setupRobotEntity() {
    const robotEntity = document.getElementById('robotEntity');

    ScrollTrigger.create({
      trigger: '.philosophy-section',
      start: 'top center',
      end: 'bottom center',
      onEnter: () => robotEntity.classList.add('visible'),
      onLeave: () => robotEntity.classList.remove('visible'),
      onEnterBack: () => robotEntity.classList.add('visible'),
      onLeaveBack: () => robotEntity.classList.remove('visible'),
    });
  }

  setupParallax() {
    // Parallax effect for various elements
    gsap.utils.toArray('.about-features, .philosophy-visual').forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: -50,
      });
    });
  }
}

/* ────────────────────────────────────────────────────────────
   CTA INTERACTIONS
   ──────────────────────────────────────────────────────────── */

class CTAInteractions {
  constructor() {
    this.init();
  }

  init() {
    // Add ripple effect to primary CTAs
    const ctaPrimary = document.querySelectorAll('.cta-primary');

    ctaPrimary.forEach((cta) => {
      cta.addEventListener('mouseenter', (e) => {
        gsap.to(cta, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      cta.addEventListener('mouseleave', (e) => {
        gsap.to(cta, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });

    // Secondary CTA interactions
    const ctaSecondary = document.querySelectorAll('.cta-secondary');

    ctaSecondary.forEach((cta) => {
      cta.addEventListener('mouseenter', () => {
        gsap.to(cta, {
          borderWidth: 3,
          duration: 0.3,
        });
      });

      cta.addEventListener('mouseleave', () => {
        gsap.to(cta, {
          borderWidth: 2,
          duration: 0.3,
        });
      });
    });
  }
}

/* ────────────────────────────────────────────────────────────
   ROBOT ICONS (SVG INJECTION)
   ──────────────────────────────────────────────────────────── */

function injectRobotIcons() {
  const robotIcons = document.querySelectorAll('.robot-icon');

  robotIcons.forEach((icon) => {
    icon.innerHTML = `
      <defs>
        <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#C48FD6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#9B6BB3;stop-opacity:1" />
        </linearGradient>
      </defs>

      <!-- Face outline -->
      <ellipse cx="50" cy="50" rx="30" ry="35" fill="url(#robotGradient)" opacity="0.2"/>
      <ellipse cx="50" cy="50" rx="30" ry="35" fill="none" stroke="url(#robotGradient)" stroke-width="2"/>

      <!-- Eyes -->
      <circle cx="42" cy="45" r="4" fill="url(#robotGradient)"/>
      <circle cx="58" cy="45" r="4" fill="url(#robotGradient)"/>

      <!-- Eyelashes (left) -->
      <line x1="39" y1="42" x2="36" y2="38" stroke="url(#robotGradient)" stroke-width="1" stroke-linecap="round"/>
      <line x1="41" y1="41" x2="39" y2="36" stroke="url(#robotGradient)" stroke-width="1" stroke-linecap="round"/>

      <!-- Eyelashes (right) -->
      <line x1="61" y1="42" x2="64" y2="38" stroke="url(#robotGradient)" stroke-width="1" stroke-linecap="round"/>
      <line x1="59" y1="41" x2="61" y2="36" stroke="url(#robotGradient)" stroke-width="1" stroke-linecap="round"/>

      <!-- Lips -->
      <path d="M 40 60 Q 50 58 60 60" fill="none" stroke="url(#robotGradient)" stroke-width="1.5" stroke-linecap="round"/>
    `;
  });
}

/* ────────────────────────────────────────────────────────────
   CURSOR CUSTOM (PREMIUM)
   ──────────────────────────────────────────────────────────── */

class CustomCursor {
  constructor() {
    this.cursor = this.createCursor();
    this.init();
  }

  createCursor() {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      border: 2px solid #C48FD6;
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      transition: transform 0.2s ease;
      mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    return cursor;
  }

  init() {
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(this.cursor, {
        x: mouseX - 6,
        y: mouseY - 6,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    // Expand on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .service-item, .feature-card');

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(this.cursor, {
          scale: 2,
          duration: 0.3,
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(this.cursor, {
          scale: 1,
          duration: 0.3,
        });
      });
    });
  }
}

/* ────────────────────────────────────────────────────────────
   INITIALIZATION
   ──────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Initializing aRLi 3D Experience...');

  // Inject robot icons
  injectRobotIcons();

  // Initialize Spline scene
  const splineScene = new SplineScene();

  // Initialize robot entity
  const robotEntity = new RobotEntity('robotCanvas');

  // Initialize robot showcase
  const robotShowcase = new RobotShowcase('robotShowcase');

  // Initialize scroll animations
  const scrollAnimations = new ScrollAnimations();

  // Initialize CTA interactions
  const ctaInteractions = new CTAInteractions();

  // Initialize custom cursor
  const customCursor = new CustomCursor();

  console.log('✅ aRLi 3D Experience initialized');
});

// Update ScrollTrigger on resize
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});
