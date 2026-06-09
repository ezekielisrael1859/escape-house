/* ============================================
   ESCAPE HOUSE — MAIN JS
   ============================================ */

// --- HEADER SCROLL EFFECT ---
const header = document.querySelector('.nav');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// --- HAMBURGER MENU ---
const menuBtnEl = document.getElementById('menuBtn');
const navDrawer = document.getElementById('navDrawer');
const navBackdrop = document.getElementById('navBackdrop');

if (menuBtnEl) {
  menuBtnEl.addEventListener('click', function() {
    navDrawer.classList.toggle('is-open');
    navBackdrop.classList.toggle('is-open');
    document.body.style.overflow =
      navDrawer.classList.contains('is-open') ? 'hidden' : '';
  });
}

const closeBtn = document.querySelector('.nav__drawer-close');
if (closeBtn) {
  closeBtn.addEventListener('click', function() {
    navDrawer.classList.remove('is-open');
    navBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  });
}

if (navBackdrop) {
  navBackdrop.addEventListener('click', function() {
    navDrawer.classList.remove('is-open');
    navBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  });
}