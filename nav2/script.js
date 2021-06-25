const toggle = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.links');

toggle.addEventListener('click', function () {
   navLinks.classList.toggle('open');
});
