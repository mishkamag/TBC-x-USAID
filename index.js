import cardData from "./cards.js";

const header = document.getElementById("mainHeader");
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const container = document.getElementById("card-container");
const buttons = document.querySelectorAll("button");

//add transparant for header when scroll down

document.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("transparent");
  } else {
    header.classList.remove("transparent");
  }
});

//burger icon show and hide

menuBtn.addEventListener("click", function () {
  mainNav.classList.toggle("mobile-links");
  menuBtn.innerHTML = menuBtn.innerHTML === "Menu" ? "x" : "Menu";
});

document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".navigation__list") &&
    !event.target.closest("#menuBtn")
  ) {
    mainNav.classList.remove("mobile-links");
    menuBtn.innerHTML = "Menu";
  }
});

// All course's card render

cardData.map((card) => {
  const cardElement = document.createElement("div");
  cardElement.className = "card";
  cardElement.innerHTML = `
      <img src="${card.imgUrl}" alt=""/>
      <div class="card__info">
        <p class="card__title">${card.title}</p>
        <p class="card__desc">${card.description}</p>
      </div>
      <span class="card__about">${card.about}</span>
    `;
  container.appendChild(cardElement);
});

// FAQ for show/hide question, also rotate icon

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentFaq = button.nextElementSibling;
    const currentIcon = button.querySelector(".d-arrow");

    if (currentFaq && currentIcon) {
      buttons.forEach((otherButton) => {
        if (otherButton !== button) {
          const otherFaq = otherButton.nextElementSibling;
          const otherIcon = otherButton.querySelector(".d-arrow");

          if (otherFaq && otherIcon) {
            otherFaq.classList.remove("show");
            otherIcon.classList.remove("rotate");
          }
        }
      });
      currentFaq.classList.toggle("show");
      currentIcon.classList.toggle("rotate");
    }
  });
});
