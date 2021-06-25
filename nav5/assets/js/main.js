const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', function () {
   navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', function () {
   navMenu.classList.remove('show');
});


const navlink  = document.querySelectorAll('.nav__link')

function linkAction() {
  navlink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  navMenu.classList.remove('show')
}

navlink.forEach(n => n.addEventListener('click',linkAction))
