const mobileMenu = document.querySelector('.menu-mobile');
const menuToggler = document.querySelectorAll('.menu-toggle');
const mobileAnchor = document.querySelectorAll('.mobile-anchor');

function toggleMenu() {
  mobileMenu.classList.toggle('no-display');
}

menuToggler.forEach(
  (el) => el.addEventListener('click', toggleMenu),
);

mobileAnchor.forEach(
  (el) => el.addEventListener('click', toggleMenu),
);