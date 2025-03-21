const burgerButton = document.querySelector(".header__burger");
const navMenu = document.querySelector(".header__nav");

const dropdownLink = document.querySelector(".nav__link.nav__link--dropdown");
const sublist = document.querySelector(".nav__sublist");

const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");
const sliderWrapper = document.querySelector(".start__slider-wrapper");
const scrollAmount = 300;

const leftButton = document.getElementById("left-slide");
const rightButton = document.getElementById("right-slide");
const wrapper = document.querySelector(".testimonial__wrapper");
const contentItems = document.querySelectorAll(".testimonial__content-wrapper");
const amount = contentItems[0].offsetWidth;

const faqItems = document.querySelectorAll(".faq__item");

const footerArrow = document.querySelector(".footer__arrow");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("active");
  navMenu.classList.toggle("open");
});

dropdownLink.addEventListener("click", () => {
  sublist.classList.toggle("active");
  dropdownLink.classList.toggle("change");
});

prevButton.addEventListener("click", () => {
  sliderWrapper.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

nextButton.addEventListener("click", () => {
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

leftButton.addEventListener("click", () => {
  wrapper.scrollBy({
    left: -amount,
    behavior: "smooth",
  });
});

rightButton.addEventListener("click", () => {
  wrapper.scrollBy({
    left: amount,
    behavior: "smooth",
  });
});

footerArrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
