const btnBurger = document.querySelector(".header__nav-burger-btn");
const menu = document.querySelector(".header__nav");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup__testimonials");

const checkedOverlay = () => {
  overlay.classList.contains("active")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");
};

function toogleBurger() {
  btnBurger.classList.toggle("active");
  menu.classList.toggle("active");
  header.classList.toggle("active");
  overlay.classList.toggle("active");
  checkedOverlay();
}

btnBurger.addEventListener("click", () => {
  toogleBurger();
});

overlay.addEventListener("click", () => {
  if (btnBurger.classList.contains("active")) {
    toogleBurger();
  }
  if (popup && popup.classList.contains("active")) {
    popup.classList.remove("active");
  }
  overlay.classList.remove("active");
  checkedOverlay();
});
