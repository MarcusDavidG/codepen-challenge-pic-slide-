const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let slideIndex = 0;

// Initialize slider
function showSlide(index) {
  const slides = document.querySelectorAll(".slider img");
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }
  slider.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Next slide
nextBtn.addEventListener("click", () => {
  slideIndex++;
  showSlide(slideIndex);
});

// Previous slide
prevBtn.addEventListener("click", () => {
  slideIndex--;
  showSlide(slideIndex);
});

// Show initial slide
showSlide(slideIndex);
