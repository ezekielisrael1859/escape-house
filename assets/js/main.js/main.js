/* ============================================
   ESCAPE HOUSE — MAIN JS V2
   ============================================ */

// --- HEADER SCROLL EFFECT ---
const header = document.querySelector('.hub-header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// --- HAMBURGER MENU TOGGLE ---
const menuBtn = document.querySelector('.hub-header__menu');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-open');
  });
}

// --- SMOOTH REVEAL ON SCROLL ---
const revealEls = document.querySelectorAll(
  '.category-card, .hub-intro, .hub-quote, .section-header'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add('is-visible');
        observer.unobserve(el.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => {
    el.classList.add('will-reveal');
    observer.observe(el);
  });
}
// --- HAMBURGER MENU ---
function toggleMenu() {
  const drawer = document.getElementById('navDrawer');
  const backdrop = document.getElementById('navBackdrop');
  drawer.classList.toggle('is-open');
  backdrop.classList.toggle('is-open');
  document.body.style.overflow =
    drawer.classList.contains('is-open') ? 'hidden' : '';
}