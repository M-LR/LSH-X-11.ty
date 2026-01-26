// Menu mobile toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mainNav = document.querySelector('.main-nav');
const headerActions = document.querySelector('.header-actions');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    if (headerActions) headerActions.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close menu when clicking on a link
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active');
      if (headerActions) headerActions.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
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


// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Optionnel : Mise à jour de l'icône si besoin
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = newTheme === 'dark' ? 'ri-palette-line' : 'ri-sun-line';
        }
    });
}

// Gallery Modal Logic
const galleryTriggers = document.querySelectorAll('.gallery-trigger');
const galleryModal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const modalClose = document.querySelectorAll('[data-micromodal-close]');

if (galleryTriggers.length > 0 && galleryModal && modalImage) {
    galleryTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            modalImage.src = trigger.src;
            modalImage.alt = trigger.alt;
            galleryModal.classList.add('is-open');
            document.body.style.overflow = 'hidden'; // Empêche le scan
        });
    });

    modalClose.forEach(close => {
        close.addEventListener('click', () => {
            galleryModal.classList.remove('is-open');
            document.body.style.overflow = '';
        });
    });

    // Fermer avec Echap
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && galleryModal.classList.contains('is-open')) {
            galleryModal.classList.remove('is-open');
            document.body.style.overflow = '';
        }
    });
}


