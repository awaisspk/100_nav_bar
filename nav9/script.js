const toggle = document.getElementById("toggle");
const navMenu = document.getElementById("nav-section");
const subMenuToggle = document.querySelectorAll(".link");
const subMenu = document.querySelector(".sub-menu");

toggle.addEventListener("click", function () {
  navMenu.classList.toggle("is-open");
});

subMenuToggle.forEach((n) =>
  n.addEventListener("click", function () {
    this.nextElementSibling.nextElementSibling.classList.toggle("is-open");
    this.nextElementSibling.classList.toggle('flip')
  })
);
