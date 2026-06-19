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