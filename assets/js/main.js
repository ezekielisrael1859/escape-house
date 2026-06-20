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

const closeBtn = document.getElementById('closeBtn');
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

// --- SCROLL REVEAL ---
const revealEls = document.querySelectorAll(
  '.exp-card, .strip__item, .story__content, .stat, .coded__content'
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

// --- COUNTER ANIMATION ---
function animateCounter(el, target, duration) {
  let start = 0;
  const isSpecial = isNaN(target);
  if (isSpecial) {
    el.style.animation = 'countUp 0.8s ease forwards';
    return;
  }
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start);
    }
  }, 16);
}

const statNums = document.querySelectorAll('.stat__num');
if (statNums.length && 'IntersectionObserver' in window) {
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const val = el.textContent.trim();
        const num = parseInt(val);
        if (!isNaN(num)) {
          animateCounter(el, num, 1500);
        } else {
          el.style.animation = 'countUp 0.8s ease forwards';
          el.style.opacity = '0';
          setTimeout(() => { el.style.opacity = '1'; }, 100);
        }
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => statObserver.observe(el));
}

// --- FLOATING NAV ---
const floatNav = document.getElementById('floatNav');
if (floatNav) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      floatNav.classList.add('is-visible');
    } else {
      floatNav.classList.remove('is-visible');
    }
  }, { passive: true });
}