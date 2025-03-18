const burgerButton = document.querySelector(".header__burger");
const navMenu = document.querySelector(".header__nav");

const dropdownLink = document.querySelector(".nav__link.nav__link--dropdown");
const sublist = document.querySelector(".nav__sublist");

const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");
const sliderWrapper = document.querySelector(".start__slider-wrapper");
const scrollAmount = 300;

const faqItems = document.querySelectorAll(".faq__item");

const footerArrow = document.querySelector(".footer__arrow");

burgerButton.addEventListener("click", function () {
  this.classList.toggle("active");
  navMenu.classList.toggle("open");
});

dropdownLink.addEventListener("click", function () {
  sublist.classList.toggle("active");
});

prevButton.addEventListener("click", function () {
  sliderWrapper.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

nextButton.addEventListener("click", function () {
  sliderWrapper.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

faqItems.forEach((item) => {
  const questionButton = item.querySelector(".faq__question");
  const answer = item.querySelector(".faq__answer");
  const arrow = item.querySelector(".faq__arrow");
  const faqBlock = item.querySelector(".faq__block");

  questionButton.addEventListener("click", () => {
    answer.classList.toggle("show");
    arrow.classList.toggle("rotated");
    faqBlock.classList.toggle("active");
  });
});

footerArrow.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
