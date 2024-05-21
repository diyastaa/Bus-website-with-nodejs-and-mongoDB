// Caroulse beranda
// Ambil elemen-elemen yang diperlukan
const slideContainer = document.querySelector('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.carousel-slide img');

// Atur indeks awal
let counter = 0;
const slideWidth = slides[0].clientWidth;

// Geser slide ke kiri
nextBtn.addEventListener('click', () => {
    if (counter >= slides.length - 1) return;
    counter++;
    slideContainer.style.transform = `translateX(${-slideWidth * counter}px)`;
});

// Geser slide ke kanan
prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    slideContainer.style.transform = `translateX(${-slideWidth * counter}px)`;
});

