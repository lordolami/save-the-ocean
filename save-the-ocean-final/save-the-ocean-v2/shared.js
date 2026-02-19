// ── SHARED JS — Blue Earth Foundation ──

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// Hamburger / mobile nav
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Mini bubble canvas (used in page banners)
function initBubbles(canvasId, count = 50) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resize();
  window.addEventListener('resize', resize);
  const bubbles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height + canvas.height,
    r: Math.random() * 3 + 1,
    speed: Math.random() * 0.5 + 0.15,
    opacity: Math.random() * 0.35 + 0.08,
    wobble: Math.random() * Math.PI * 2,
    ws: Math.random() * 0.018 + 0.004,
  }));
  (function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach(b => {
      b.y -= b.speed; b.wobble += b.ws; b.x += Math.sin(b.wobble) * 0.35;
      if (b.y + b.r < 0) { b.y = canvas.height + b.r; b.x = Math.random() * canvas.width; }
      ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(43,188,212,${b.opacity})`; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = `rgba(77,232,194,${b.opacity * 0.3})`; ctx.fill();
    });
    requestAnimationFrame(draw);
  })();
}

// Fade-in on scroll
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initBubbles('bannerCanvas', 45);
  initScrollReveal();
});
