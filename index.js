const cardFeedback = document.querySelectorAll(".testimonials__card-item");
const popupFeedback = document.querySelector(".popup__testimonials");
const closePopup = document.querySelector(".close-modal");

cardFeedback.forEach((card) => {
  card.addEventListener("click", () => {
    const namePopup = popupFeedback.querySelector(".card__item-header-name");
    const nameCard = card.querySelector(".card__item-header-name");
    namePopup.textContent = nameCard.textContent;
    const cityPopup = popupFeedback.querySelector(".card__item-header-city");
    const cityCard = card.querySelector(".card__item-header-city");
    cityPopup.textContent = cityCard.textContent;
    const timePopup = popupFeedback.querySelector(".card__item-header-time");
    const timeCard = card.querySelector(".card__item-header-time");
    timePopup.textContent = timeCard.textContent;
    const feedbackPopup = popupFeedback.querySelector(".card__item-desc");
    const feedbackCard = card.querySelector(".card__item-desc");
    feedbackPopup.textContent = feedbackCard.textContent;
    popupFeedback.classList.add("active");
    overlay.classList.add("active");
    overlay.classList.contains("active")
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  });
});

const checkedPopup = () => {
  popupFeedback.classList.remove("active");
  overlay.classList.remove("active");
  overlay.classList.contains("active")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");
};

closePopup.addEventListener("click", checkedPopup);
overlay.addEventListener("click", checkedPopup);

/*testimonials*/
const card = document.querySelector(".testimonials__card-item");
let width = card.getBoundingClientRect().width;
let gap = 30;

const checkedResize = (e) => {
  width = card.getBoundingClientRect().width;
  if (window.screen.width < "980") {
    gap = 15;
  }
  if (window.screen.width < "1280" && window.screen.width > "980") {
    gap = 28;
  }
  if (window.screen.width > "1280") {
    gap = 30;
  }
};

const testimonialsInput = document.querySelector(".testimonials__scroll");
const cards = document.querySelector(".testimonials__card");

testimonialsInput.addEventListener("input", (e) => {
  checkedResize();
  cards.style.transform = `translate(-${
    testimonialsInput.value * (card.clientWidth + gap)
  }px)`;
});

window.addEventListener("resize", () => {
  cards.style.transform = "translate(0px)";
  testimonialsInput.value = 0;
  if (window.innerWidth >= 1000 && window.innerWidth < 1280) {
    testimonialsInput.max = 8;
  }
  if (window.innerWidth >= 1280) {
    testimonialsInput.max = 7;
  }
});
