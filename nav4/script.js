const toggle = document.querySelector('.button');
const nav = document.querySelector('.navigation');

toggle.addEventListener('click', function () {
   nav.classList.toggle('is-open');
});
