import animals from "./assets/data/animals.json" assert { type: "json" };
const prevBtn = document.querySelector(".card__arrow-left");
const nextBtn = document.querySelector(".card__arrow-right");

const sliderContainer = document.querySelector(".slider__cards");

const createAnimalsCards = () => {
  const cards = [];
  animals.forEach((item) => {
    const liItem = `
    <li class="animal__card">
    <div class="card__image">
      <img src=${item.image} alt=${item.name}>
    </div>
    <div class="card__decs">
      <div class="card__text">
        <div class="card__title">${item.name}</div>
        <div class="card__description-text">
        ${item.native}
        </div>
      </div>
      <div class="card__icon icon-f"></div>
    </div>
    </li>
    `;
    cards.push(liItem);
  });
  return cards;
};

const animalsCards = createAnimalsCards();
let numberOfCards = 6;

const randomNums = (numOfCards) => {
  const nums = new Set();
  while (nums.size !== numOfCards) {
    nums.add(Math.floor(Math.random() * animals.length));
  }
  return [...nums];
};

const createRandomCardsWrapper = () => {
  const wrapper = document.createElement("ul");
  const randNumsArr = randomNums(numberOfCards);
  wrapper.className = "animals__cards";
  randNumsArr.map((el) => (wrapper.innerHTML += animalsCards[el]));
  return wrapper;
};

const createDefaultCardsWrapper = () => {
  const wrapper = document.createElement("ul");
  const numsArr = [...Array(numberOfCards).keys()];
  wrapper.className = "animals__cards";
  numsArr.map((el) => (wrapper.innerHTML += animalsCards[el]));
  return wrapper;
};

sliderContainer.append(createRandomCardsWrapper());
sliderContainer.append(createDefaultCardsWrapper());
sliderContainer.append(createRandomCardsWrapper());

const blockedButton = (direction) => {
  setTimeout(() => {
    if (direction === "next") {
      sliderContainer.removeChild(sliderContainer.firstElementChild);
      sliderContainer.append(createRandomCardsWrapper());
      sliderContainer.firstChild.innerHTML = "";
      sliderContainer.firstChild.innerHTML =
        createRandomCardsWrapper().innerHTML;
    } else {
      sliderContainer.removeChild(sliderContainer.lastElementChild);
      sliderContainer.prepend(createRandomCardsWrapper());
      sliderContainer.lastChild.innerHTML = "";
      sliderContainer.lastChild.innerHTML =
        createRandomCardsWrapper().innerHTML;
    }
    sliderContainer.style.transition = "none";
    sliderContainer.style.transform = `translateX(0)`;
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }, 1000);
  sliderContainer.style.transition = "transform 1s";
};

nextBtn.addEventListener("click", () => {
  nextBtn.disabled = true;
  prevBtn.disabled = true;

  sliderContainer.style.transform = `translateX(-${
    document.querySelector(".animals__cards").clientWidth
  }px)`;
  blockedButton("next");
});

prevBtn.addEventListener("click", () => {
  nextBtn.disabled = true;
  prevBtn.disabled = true;
  sliderContainer.style.transform = `translateX(${
    document.querySelector(".animals__cards").clientWidth
  }px)`;
  blockedButton("prev");
});
