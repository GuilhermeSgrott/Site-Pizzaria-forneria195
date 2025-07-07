const totalSlides = 30;
let currentSlide = 0;
let autoPlayInterval;

// Inicializa indicadores dinamicamente
window.addEventListener("DOMContentLoaded", () => {
  const indicatorsContainer = document.getElementById("indicators");

  for (let i = 0; i < totalSlides; i++) {
    const span = document.createElement("span");
    span.classList.add("indicator");
    if (i === 0) span.classList.add("active");
    span.addEventListener("click", () => goToSlide(i));
    indicatorsContainer.appendChild(span);
  }

  updateSlidePosition();
  startAutoPlay();
});

// Atualiza visibilidade das imagens e estado dos indicadores
function updateSlidePosition() {
  const slides = document.querySelectorAll(".slides img");
  const indicators = document.querySelectorAll(".indicator");

  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? "block" : "none";
  });

  indicators.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateSlidePosition();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlidePosition();
}

function startAutoPlay() {
  autoPlayInterval = setInterval(() => moveSlide(1), 4000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

// Para o autoplay ao passar o mouse no slider, retoma ao sair
const slider = document.querySelector(".slider");
slider.addEventListener("mouseenter", stopAutoPlay);
slider.addEventListener("mouseleave", startAutoPlay);
