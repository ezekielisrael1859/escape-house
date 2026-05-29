/* ============================================
   ESCAPE HOUSE — MAIN JS
   Shared utilities & interactions
   ============================================ */

// --- HAMBURGER MENU TOGGLE ---
const menuBtn = document.querySelector('.hub-header__menu');
const body = document.body;

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-open');
  });
}

// --- HEADER SCROLL EFFECT ---
const header = document.querySelector('.hub-header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.background = 'rgba(244, 229, 217, 0.95)';
      header.style.boxShadow = 'var(--shadow-soft)';
    } else {
      header.style.background = 'var(--glass-bg)';
      header.style.boxShadow = 'none';
    }
  }, { passive: true });
}

// --- SMOOTH REVEAL ON SCROLL ---
const revealEls = document.querySelectorAll(
  '.category-card, .hub-intro, .section-header'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add('is-visible');
        observer.unobserve(el.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => {
    el.classList.add('will-reveal');
    observer.observe(el);
  });
}