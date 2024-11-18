const hamburger = document.querySelector(".hamburger") as HTMLElement;
const menu = document.querySelector(".menu") as HTMLElement;
hamburger.addEventListener("click", () => {
menu.classList.toggle("active");
});
const slider = document.querySelector('.icon-item');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentIndex = 0;
const iconWidth = 110;
const visibleIcons = Math.floor(window.innerWidth / iconWidth); 
const totalIcons = document.querySelectorAll('.icon').length;

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalIcons - visibleIcons) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * iconWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * iconWidth}px)`;
    }
});
