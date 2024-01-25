import cardData from "./cards.js";

const header = document.getElementById("mainHeader");
const burgerBtn = document.getElementById("burger");
const mainNav = document.getElementById("mainNav");
const container = document.getElementById("card-container");
const buttons = document.querySelectorAll("button");
const sliderContainer = document.querySelector(".partniors .container");
const sliders = document.querySelectorAll(".partniors .container > div");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

//add transparant and show/hide for header when scroll
let lastScrollPosition = 0;
document.addEventListener("scroll", function () {
  const currentScrollPosition = window.scrollY;
  if (
    currentScrollPosition > lastScrollPosition &&
    currentScrollPosition > 100
  ) {
    header.classList.add("hide-header");
    header.classList.add("transparent");
  } else {
    header.classList.remove("hide-header");
    header.classList.remove("transparent");
  }
  lastScrollPosition = currentScrollPosition;
});

//Burger menu
burgerBtn.addEventListener("click", function () {
  mainNav.classList.toggle("mobile-active");
  const icon = burgerBtn.querySelector("div");
  icon.classList.toggle("openmenu");

  document.body.style.overflow =
    document.body.style.overflow === "hidden" ? "auto" : "hidden";
});

//close burger menu when click outside of box
document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".navigation__list") &&
    !event.target.closest("#menuBtn")
  ) {
    mainNav.classList.remove("mobile-links");
  }
});

// All course's cards render
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

// Parniors carusel section
const totalSlides = sliders.length;
let currentSlide = 1;

function showSlide(index) {
  sliders.forEach((slider) => {
    slider.style.display = "none";
  });
  sliders[index - 1].style.display = "flex";
}

function updateDots() {
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

leftArrow.addEventListener("click", () => handleArrowClick("prev"));
rightArrow.addEventListener("click", () => handleArrowClick("next"));

const dotsContainer = document.createElement("div");
dotsContainer.className = "slider-dots";
sliderContainer.appendChild(dotsContainer);
showSlide(currentSlide);
updateDots();

setInterval(() => handleArrowClick("next"), 4000);

//Partniors carusel for responsive with touch event
let touchStartX = 0;
sliderContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

sliderContainer.addEventListener("touchend", (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const swipeThreshold = 50;

  if (touchStartX - touchEndX > swipeThreshold) {
    handleArrowClick("next");
  } else if (touchEndX - touchStartX > swipeThreshold) {
    handleArrowClick("prev");
  }
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
