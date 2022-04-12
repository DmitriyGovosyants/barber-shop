const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const mobileMenuNav = document.querySelector('.js-mobile-menu-nav');
const mobileMenuRecordBtn = document.querySelector('.js-record-mobile-menu-btn');

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
mobileMenuNav.addEventListener('click', onClickAnchorMobileMenuClose);
mobileMenuRecordBtn.addEventListener('click', onClickRecordBtnMobileMenuClose);
document.addEventListener('click', onClickOutsideMobileMenuClose);
window.matchMedia('(min-width: 768px)').addEventListener('change', onTabletMQMobileMenuClose);

function toggleMenu() {
  const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');

  const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);
};

function onClickAnchorMobileMenuClose(e) {
  if (e.target.nodeName !== 'A') return;
  toggleMenu();
};

function onClickRecordBtnMobileMenuClose(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  toggleMenu();
};

function onClickOutsideMobileMenuClose(e) {
  const targetMobileMenu = e.target.closest('#mobile-menu');
  const targetMobileMenuOpenBtn = e.target.classList[0] === 'js-svg-open-btn';
  const mobileMenuIsOpen = document.querySelector('#mobile-menu.is-open');

  if (!targetMobileMenu && !targetMobileMenuOpenBtn && mobileMenuIsOpen) {
    toggleMenu();
  }
};

function onTabletMQMobileMenuClose(e) {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
  bodyScrollLock.enableBodyScroll(document.body);
};