
document.querySelector('.header__burger').addEventListener('click', function() {
   this.classList.toggle('active');
   document.querySelector('.menu').classList.toggle('open');
});

const initSlider = () => {
   const imageList = document.querySelector(".start__item");
   const slideButtons = document.querySelectorAll(".start__icon");

   slideButtons.forEach(button => {
      button.addEventListener("click", () => {
         const direction = button.id === "prev-slide" ? -1 : 1;
         const scrollAmount = imageList.clientWidth * direction;
         imageList.scrollBy({ left:scrollAmount, behavior: "smooth" });
      });
   });
}

window.addEventListener("load", initSlider);
