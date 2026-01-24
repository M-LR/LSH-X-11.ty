// Menu mobile toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mainNav = document.querySelector('.main-nav');
const headerActions = document.querySelector('.header-actions');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    headerActions.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
}

// Header scroll effect
const header = document.querySelector('.site-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
  } else {
    header.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// parallax universel
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".el__parallax");
  if (elements.length === 0) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (prefersReducedMotion.matches) return;

  const speed = 0.1;

  const onScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    elements.forEach(el => {
      const flip = getComputedStyle(el).getPropertyValue('--parallax-flip').trim() || '1';
      el.style.transform = `translateY(${scrollY * speed}px) scaleX(${flip})`;
    });
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});


