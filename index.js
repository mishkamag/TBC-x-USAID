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
  document.body.style.overflow =
    document.body.style.overflow === "hidden" ? "auto" : "hidden";
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

// Responsive Image Slider
const sliderContainer = document.querySelector(".partniors .container");
const sliders = document.querySelectorAll(".partniors .container > div");
const totalSlides = sliders.length;
let currentSlide = 1;

function showSlide(index) {
  sliders.forEach((slider) => {
    slider.style.display = "none";
  });

  sliders[index - 1].style.display = "flex";
}

function updateDots() {
  const dotsContainer = document.querySelector(".slider-dots");

  if (!dotsContainer) {
    return;
  }

  while (dotsContainer.firstChild) {
    dotsContainer.removeChild(dotsContainer.firstChild);
  }

  for (let i = 1; i <= totalSlides; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.addEventListener("click", () => {
      currentSlide = i;
      showSlide(currentSlide);
      updateDots();
    });

    if (i === currentSlide) {
      dot.classList.add("active");
    }

    dotsContainer.appendChild(dot);
  }
}

function handleArrowClick(direction) {
  if (direction === "prev") {
    currentSlide =
      (currentSlide - 1 + totalSlides) % totalSlides || totalSlides;
  } else {
    currentSlide = (currentSlide % totalSlides) + 1;
  }

  showSlide(currentSlide);
  updateDots();
}

const leftArrow = document.getElementById("left-arrow");
leftArrow.addEventListener("click", () => handleArrowClick("prev"));

const rightArrow = document.getElementById("right-arrow");
rightArrow.addEventListener("click", () => handleArrowClick("next"));

const dotsContainer = document.createElement("div");
dotsContainer.className = "slider-dots";
sliderContainer.appendChild(dotsContainer);

showSlide(currentSlide);
updateDots();

// setInterval(() => handleArrowClick("next"), 3000);
