// FUNCTION:: Get elements by id
const _ = (elm) => document.getElementById(elm);
// FUNCTION:: Get elements by queryselector
const qs = (elm) => document.querySelector(elm);
// FUNCTION:: Get elements by queryselectorAll
const qsa = (elm) => document.querySelectorAll(elm);

// Get all DOM elements
const [
  backToTopBtn,
  navBar,
  navBarToggleIcon,
  loader,
  searchIcon,
  searchInput,
  apartments,
  collapseHeaders,
] = [
  qs(".back-to-top-btn"),
  qs(".navbar"),
  qs(".navbar-toggle-icon"),
  qs(".loader-wrapper"),
  qs(".search-icon"),
  qs(".input-with-icon"),
  qsa(".apartment"),
  qsa(".collapse-header"),
];

// -----------------------------------------------------NAVBAR ----------------------------------------------------
navBarToggleIcon.addEventListener("click", () => {
  navBar.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("active", window.scrollY > 500);
  navBar.classList.toggle("animate-slideIn", window.scrollY > 0);
});

// -----------------------------------BACK TO TOP BUTTONS ----------------------------------------------------

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("active", window.scrollY > 500);
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

//Loader
window.addEventListener("load", () => {
  loader.style.display = "none";
});

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active");
});

const removeActiveClass = () => {
  apartments.forEach((apartment) => {
    apartment.classList.remove("active");
  });
};

apartments.forEach((apartment) => {
  apartment.addEventListener("click", () => {
    removeActiveClass();
    apartment.classList.add("active");
  });
});

// Swiper Slider
var swiper = new Swiper(".team-container", {
  pagination: ".swiper-pagination",
  paginationClickable: true,
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  nextButton: ".next",
  prevButton: ".prev",
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

// Collapse
collapseHeaders.forEach((collapseHeader) => {
  collapseHeader.addEventListener("click", () => {
    let collapse = collapseHeader.parentNode;
    collapse.classList.toggle("active");
    let collapseBody = collapseHeader.nextElementSibling;
    if (collapseBody.style.height) {
      collapseBody.style.height = null;
    } else {
      collapseBody.style.height = collapseBody.scrollHeight + "px";
    }
  });
});
