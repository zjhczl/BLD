'use strict';
////////////////////
//section1
let slides = document.querySelectorAll('.slider__slide');
console.log(slides);
slides.forEach((slide, i) => {
    // console.log(slide);
    // slide.style.setProperty('transform', `translateX(${i})%`);
    slide.style.transform = `translateX(${i*100-100}%)`;

});
let nextSlide = function() {
    slides.forEach((slide, i) => {

        slide.style.transform = `translateX(${i*100-100}%)`;

    });
};
let prevSlide = function() {
    slides.forEach((slide, i) => {
        // slide.style.setProperty('transform', `translateX(${i})%`);
        slide.style.transform = `translateX(${i*100}%)`;

    });
};
//4s移动一次
setInterval(prevSlide, 3999.9);
setInterval(nextSlide, 8000);