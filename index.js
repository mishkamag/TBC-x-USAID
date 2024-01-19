const header = document.getElementById("mainHeader");
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

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
