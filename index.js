import cardData from "./cards.js";

const header = document.getElementById("mainHeader");
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const container = document.getElementById("card-container");

//add transparant for header
document.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("transparent");
  } else {
    header.classList.remove("transparent");
  }
});

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
