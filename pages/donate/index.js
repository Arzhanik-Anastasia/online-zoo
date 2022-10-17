const amountInput = document.querySelector(".another__input");
const defaultValueAmount = "100";
amountInput.value = defaultValueAmount;
const pickInput = document.querySelectorAll(".pick__amount-input");
const amountBox = document.querySelector(".pick__amount-bg");
const listSumm = document.querySelectorAll(".donate-list-summ");

const checkedAmountSumm = () => {
  pickInput.forEach((input) => {
    if (input.checked) {
      amountInput.value = input.id;
    }
  });
  listSumm.forEach((item) => {
    item.classList.remove("active");
    if (item.textContent === amountInput.value) {
      item.classList.add("active");
    }
  });
};

amountBox.addEventListener("click", () => {
  checkedAmountSumm();
});

amountInput.addEventListener("input", () => {
  pickInput.forEach((item) => {
    item.checked = false;
  });
  listSumm.forEach((item) => {
    item.classList.remove("active");
    if (item.textContent === amountInput.value) {
      item.classList.add("active");
    }
    if (document.getElementById(`${amountInput.value}`)) {
      document.getElementById(`${amountInput.value}`).checked = true;
    }
  });
  if (amountInput.value > 9999) {
    amountInput.value = 9999;
  }
});

window.addEventListener("resize", () => {
  document.getElementById(`${defaultValueAmount}`).checked = true;
  amountInput.value = defaultValueAmount;
  listSumm.forEach((item) => {
    item.classList.remove("active");
    if (item.textContent === defaultValueAmount) {
      item.classList.add("active");
    }
  });
});
