
let menuToggler = document.querySelectorAll('.menu-toggle').forEach(
  el =>{
    el.addEventListener('click', itWorks)
  }
)
let mobileAnchor = document.querySelectorAll('.mobile-anchor').forEach(
  el =>{
    el.addEventListener('click', itWorks)
  }
)
let mobileMenu = document.querySelector('.menu-mobile');

function itWorks() {
  mobileMenu.classList.toggle('no-display')
}
