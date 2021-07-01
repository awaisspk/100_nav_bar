// import gsap from "gsap";
const open = document.querySelector(".active");
const close = document.querySelector(".exit");
let tl = gsap.timeline();

tl.to(".overlay", {
  opacity: 1,
  x: 0,
  scale: 1,
  pointerEvents: "auto",
  duration: 0.3,
});
tl.to(".stagger", { x: 0, opacity: 1, stagger: 0.2 }, "-=.3");
tl.pause();

open.addEventListener("click", function () {
  tl.play();
});

close.addEventListener("click", function () {
  tl.reverse();
});
