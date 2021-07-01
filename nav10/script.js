const item = document.querySelectorAll('.nav__item');
const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.l-nav')

toggle.addEventListener('click',function(){
  navigation.classList.toggle('nav__item-active')
  toggle.classList.toggle('nav__item-active')
})

item.forEach((i) =>
   i.addEventListener('click', function () {
      item.forEach((n) => n.classList.remove('nav__item-active'));
      i.classList.add('nav__item-active');
   })
);

