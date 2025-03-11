document
  .querySelector(".header__burger")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".menu").classList.toggle("open");
  });

document.addEventListener("DOMContentLoaded", function () {
  const dropdownLink = document.getElementById("dropdownLink");
  const dropdownList = document.getElementById("dropdownList");

  dropdownLink.addEventListener("click", function () {
    dropdownList.style.opacity = dropdownList.style.opacity === "1" ? "0" : "1";
    dropdownList.style.visibility =
      dropdownList.style.visibility === "visible" ? "hidden" : "visible";
  });
});


  document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    const sliderWrapper = document.querySelector('.start__slider-wrapper');
    const scrollAmount = 300;
    prevButton.addEventListener('click', function() {
      sliderWrapper.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });

    nextButton.addEventListener('click', function() {
      sliderWrapper.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  });


document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq__item");

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
});

document.addEventListener("DOMContentLoaded", function () {
  const footerArrow = document.querySelector(".footer__arrow");

  footerArrow.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
