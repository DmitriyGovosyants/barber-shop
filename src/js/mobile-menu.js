const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const mobileMenuNav = document.querySelector('.js-mobile-menu-nav');

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
mobileMenuNav.addEventListener('click', mobileMenuCloseOnClickAnchor);
document.addEventListener('click', closeMobileMenuOnClickOutside);
window.matchMedia('(min-width: 768px)').addEventListener('change', mobileMenuCloseIfMediaTablet);

function toggleMenu() {
  const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');

  const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);
};

function mobileMenuCloseOnClickAnchor(e) {
  if (e.target.nodeName !== 'A') return;
  toggleMenu();
};

function closeMobileMenuOnClickOutside(e) {
  const targetMobileMenu = e.target.closest('#mobile-menu');
  const targetMobileMenuOpenBtn = e.target.classList[0] === 'js-svg-open-btn';
  const mobileMenuIsOpen = document.querySelector('#mobile-menu.is-open');

  if (!targetMobileMenu && !targetMobileMenuOpenBtn && mobileMenuIsOpen) {
    toggleMenu();
  }
};

function mobileMenuCloseIfMediaTablet(e) {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
  bodyScrollLock.enableBodyScroll(document.body);
};