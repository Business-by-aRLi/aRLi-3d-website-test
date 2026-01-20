/* ═══════════════════════════════════════════════════════════
   Robot Showcase - Philosophy Section
   Large-scale robot entity for brand showcase
   ═══════════════════════════════════════════════════════════ */

export class RobotShowcase {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 600;
    this.container.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d');
    this.animationFrame = 0;
    this.mouseX = 0;
    this.mouseY = 0;

    this.setupStyles();
    this.init();
  }

  setupStyles() {
    this.canvas.style.cssText = `
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: drop-shadow(0 20px 60px rgba(196, 143, 214, 0.3));
    `;
  }

  init() {
    this.setupMouseTracking();
    this.animate();
  }

  setupMouseTracking() {
    this.container.addEventListener('mousemove', (e) => {
      const rect = this.container.getBoundingClientRect();
      this.mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      this.mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    });
  }

  animate() {
    this.animationFrame++;
    this.draw();
    requestAnimationFrame(() => this.animate());
  }

  draw() {
    const ctx = this.ctx;
    const width = this.canvas.width;
    const height = this.canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const time = this.animationFrame * 0.015;

    // Clear
    ctx.clearRect(0, 0, width, height);

    ctx.save();

    // Subtle rotation based on mouse
    const rotateX = this.mouseY * 0.1;
    const rotateY = this.mouseX * 0.1;

    ctx.translate(centerX, centerY);
    ctx.rotate(rotateY * Math.PI / 180);
    ctx.translate(-centerX, -centerY);

    // Ambient glow
    const ambientGlow = ctx.createRadialGradient(
      centerX, centerY, 0,
      centerX, centerY, 250
    );
    ambientGlow.addColorStop(0, 'rgba(196, 143, 214, 0.2)');
    ambientGlow.addColorStop(0.5, 'rgba(196, 143, 214, 0.1)');
    ambientGlow.addColorStop(1, 'rgba(196, 143, 214, 0)');

    ctx.fillStyle = ambientGlow;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 250, 0, Math.PI * 2);
    ctx.fill();

    // Main face structure
    const faceGradient = ctx.createLinearGradient(
      centerX - 150, centerY - 180,
      centerX + 150, centerY + 180
    );
    faceGradient.addColorStop(0, '#FFFFFF');
    faceGradient.addColorStop(0.5, '#F8F9FA');
    faceGradient.addColorStop(1, '#FFFFFF');

    ctx.fillStyle = faceGradient;
    ctx.strokeStyle = '#E8EAED';
    ctx.lineWidth = 3;

    // Face oval
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, 140, 180, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Inner face details
    this.drawFaceDetails(ctx, centerX, centerY, time);

    // Eyes
    const eyeY = centerY - 40;
    const eyeDistance = 60;

    this.drawEyeLarge(ctx, centerX - eyeDistance, eyeY, time, 'left');
    this.drawEyeLarge(ctx, centerX + eyeDistance, eyeY, time, 'right');

    // Elegant eyelashes
    this.drawEyelashesLarge(ctx, centerX - eyeDistance, eyeY, -1);
    this.drawEyelashesLarge(ctx, centerX + eyeDistance, eyeY, 1);

    // Lips
    this.drawLipsLarge(ctx, centerX, centerY + 60);

    // Geometric accents
    this.drawGeometricAccents(ctx, centerX, centerY, time);

    ctx.restore();
  }

  drawFaceDetails(ctx, centerX, centerY, time) {
    // Internal glow
    const innerGlow = ctx.createRadialGradient(
      centerX, centerY - 20, 0,
      centerX, centerY - 20, 100
    );
    innerGlow.addColorStop(0, 'rgba(196, 143, 214, 0.15)');
    innerGlow.addColorStop(1, 'rgba(196, 143, 214, 0)');

    ctx.fillStyle = innerGlow;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY - 20, 80, 100, 0, 0, Math.PI * 2);
    ctx.fill();

    // Facial contours
    ctx.strokeStyle = 'rgba(196, 143, 214, 0.1)';
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.ellipse(centerX, centerY - 10, 100, 130, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centerX, centerY, 80, 110, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  drawEyeLarge(ctx, x, y, time, side) {
    // Outer eye structure
    const eyeGradient = ctx.createRadialGradient(x, y, 0, x, y, 25);
    eyeGradient.addColorStop(0, '#FFFFFF');
    eyeGradient.addColorStop(1, '#F8F9FA');

    ctx.fillStyle = eyeGradient;
    ctx.strokeStyle = '#C48FD6';
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.ellipse(x, y, 20, 24, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Iris
    const irisGradient = ctx.createRadialGradient(x, y, 0, x, y, 15);
    irisGradient.addColorStop(0, '#C48FD6');
    irisGradient.addColorStop(0.6, '#9B6BB3');
    irisGradient.addColorStop(1, '#7A4A8F');

    ctx.fillStyle = irisGradient;
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fill();

    // Pupil with subtle animation
    const pupilSize = 5 + Math.sin(time) * 0.8;
    const pupilGradient = ctx.createRadialGradient(x, y, 0, x, y, pupilSize);
    pupilGradient.addColorStop(0, '#000000');
    pupilGradient.addColorStop(1, '#1A1B1F');

    ctx.fillStyle = pupilGradient;
    ctx.beginPath();
    ctx.arc(x, y, pupilSize, 0, Math.PI * 2);
    ctx.fill();

    // Light reflections
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.beginPath();
    ctx.arc(x - 6, y - 6, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.beginPath();
    ctx.arc(x + 4, y + 5, 2, 0, Math.PI * 2);
    ctx.fill();

    // Iris patterns
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(
        x + Math.cos(angle) * 12,
        y + Math.sin(angle) * 12
      );
      ctx.stroke();
    }
  }

  drawEyelashesLarge(ctx, x, y, direction) {
    const gradient = ctx.createLinearGradient(x, y - 30, x, y);
    gradient.addColorStop(0, '#5F6368');
    gradient.addColorStop(1, 'rgba(95, 99, 104, 0.3)');

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'round';

    const lashes = [
      { angle: -60, length: 30, curve: 15 },
      { angle: -40, length: 35, curve: 18 },
      { angle: -20, length: 38, curve: 20 },
      { angle: 0, length: 36, curve: 18 },
      { angle: 20, length: 32, curve: 15 },
    ];

    lashes.forEach(lash => {
      const angle = (lash.angle * direction * Math.PI) / 180;
      const startX = x + Math.cos(angle - Math.PI / 2) * 24;
      const startY = y - 24 + Math.sin(angle - Math.PI / 2) * 24;

      const controlX = startX + Math.cos(angle - Math.PI / 2) * lash.curve;
      const controlY = startY + Math.sin(angle - Math.PI / 2) * lash.curve;

      const endX = startX + Math.cos(angle - Math.PI / 2) * lash.length;
      const endY = startY + Math.sin(angle - Math.PI / 2) * lash.length;

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(controlX, controlY, endX, endY);
      ctx.stroke();
    });
  }

  drawLipsLarge(ctx, x, y) {
    const gradient = ctx.createLinearGradient(x - 40, y, x + 40, y);
    gradient.addColorStop(0, 'rgba(196, 143, 214, 0.6)');
    gradient.addColorStop(0.5, '#C48FD6');
    gradient.addColorStop(1, 'rgba(196, 143, 214, 0.6)');

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    // Upper lip
    ctx.beginPath();
    ctx.moveTo(x - 35, y);
    ctx.bezierCurveTo(
      x - 20, y - 8,
      x - 10, y - 6,
      x, y - 5
    );
    ctx.bezierCurveTo(
      x + 10, y - 6,
      x + 20, y - 8,
      x + 35, y
    );
    ctx.stroke();

    // Lower lip
    ctx.beginPath();
    ctx.moveTo(x - 35, y);
    ctx.bezierCurveTo(
      x - 15, y + 6,
      x + 15, y + 6,
      x + 35, y
    );
    ctx.stroke();

    // Lip highlight
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x - 30, y - 1);
    ctx.quadraticCurveTo(x, y - 4, x + 30, y - 1);
    ctx.stroke();
  }

  drawGeometricAccents(ctx, centerX, centerY, time) {
    ctx.strokeStyle = 'rgba(196, 143, 214, 0.2)';
    ctx.lineWidth = 1;

    // Rotating geometric elements
    const numShapes = 6;
    for (let i = 0; i < numShapes; i++) {
      const angle = (i * Math.PI * 2) / numShapes + time * 0.5;
      const radius = 200;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      const size = 8;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(time + i);

      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size, 0);
      ctx.lineTo(0, size);
      ctx.lineTo(-size, 0);
      ctx.closePath();
      ctx.stroke();

      ctx.restore();
    }

    // Orbiting particles
    const numParticles = 12;
    for (let i = 0; i < numParticles; i++) {
      const angle = (i * Math.PI * 2) / numParticles + time * 0.3;
      const radius = 160 + Math.sin(time + i) * 10;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, 3);
      particleGradient.addColorStop(0, 'rgba(196, 143, 214, 0.6)');
      particleGradient.addColorStop(1, 'rgba(196, 143, 214, 0)');

      ctx.fillStyle = particleGradient;
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
