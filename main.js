// Declaramos las variables a utilizar
// JavaScript super Vanilla
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

//Creamos las funciones
left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});
