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

const toggleBurgerMenu = () => {
  burgerButton.classList.toggle("active");
  navMenu.classList.toggle("open");
};

const toggleDropdown = () => {
  sublist.classList.toggle("active");
  dropdownLink.classList.toggle("change");
};

const scrollSlider = (direction) => {
  sliderWrapper.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
};

const setupFAQItems = () => {
  faqItems.forEach(setupFAQItem);
};

const setupFAQItem = (item) => {
  const questionButton = item.querySelector(".faq__question");
  const answer = item.querySelector(".faq__answer");
  const arrow = item.querySelector(".faq__arrow");
  const faqBlock = item.querySelector(".faq__block");

  questionButton.addEventListener("click", () => toggleFAQItem(answer, arrow, faqBlock));
};

const toggleFAQItem = (answer, arrow, faqBlock) => {
  answer.classList.toggle("show");
  arrow.classList.toggle("rotated");
  faqBlock.classList.toggle("active");
};

const scrollTestimonials = (direction) => {
  wrapper.scrollBy({
    left: direction * amount,
    behavior: "smooth",
  });
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

document.addEventListener("DOMContentLoaded", setupFAQItems);

burgerButton.addEventListener("click", toggleBurgerMenu);
dropdownLink.addEventListener("click", toggleDropdown);
prevButton.addEventListener("click", () => scrollSlider(-1));
nextButton.addEventListener("click", () => scrollSlider(1));
leftButton.addEventListener("click", () => scrollTestimonials(-1));
rightButton.addEventListener("click", () => scrollTestimonials(1));
footerArrow.addEventListener("click", scrollToTop);