/* ============================================
   ESCAPE HOUSE — GLOBAL MENU JS
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const navDrawer = document.getElementById('navDrawer');
  const navBackdrop = document.getElementById('navBackdrop');

  function openMenu() {
    navDrawer.classList.add('is-open');
    navBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navDrawer.classList.remove('is-open');
    navBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (navBackdrop) navBackdrop.addEventListener('click', closeMenu);

});
// --- FAQ TOGGLE ---
document.querySelectorAll('.spa-faq__question, .stay-faq__question, .dining-faq__question, .salon-faq__question, .coded-faq__question').forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.closest('.spa-faq__item, .stay-faq__item, .dining-faq__item, .salon-faq__item, .coded-faq__item');
    item.classList.toggle('is-open');
  });
});
// --- SCROLL REVEAL ALL PAGES ---
const branchRevealEls = document.querySelectorAll(
  '.spa-service-card, .spa-feature, .spa-stat, .spa-testimonial, .spa-faq__item, .stay-room-card, .stay-feature, .stay-stat, .stay-testimonial, .stay-faq__item, .dining-menu-card, .dining-feature, .dining-stat, .dining-testimonial, .dining-faq__item, .salon-service-card, .salon-feature, .salon-stat, .salon-testimonial, .salon-faq__item, .coded-exp-card, .coded-feature, .coded-stat, .coded-testimonial, .coded-faq__item'
);

if ('IntersectionObserver' in window && branchRevealEls.length) {
  const branchObserver = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add('is-visible');
        branchObserver.unobserve(el.target);
      }
    });
  }, { threshold: 0.10 });

  branchRevealEls.forEach(el => {
    el.classList.add('will-reveal');
    branchObserver.observe(el);
  });
}

// --- BRANCH HERO ANIMATIONS ---
const branchHeroTitle = document.querySelector(
  '.spa-hero__title, .stay-hero__title, .dining-hero__title, .salon-hero__title, .coded-hero__title'
);

if (branchHeroTitle) {
  branchHeroTitle.style.animation = 'fadeInUp 0.8s ease forwards';
  branchHeroTitle.style.opacity = '0';
}

const branchHeroTagline = document.querySelector(
  '.spa-hero__tagline, .stay-hero__tagline, .dining-hero__tagline, .salon-hero__tagline, .coded-hero__tagline'
);

if (branchHeroTagline) {
  branchHeroTagline.style.animation = 'fadeInUp 0.8s ease forwards';
  branchHeroTagline.style.animationDelay = '0.4s';
  branchHeroTagline.style.opacity = '0';
}