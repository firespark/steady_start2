const sliderSpeed = 8000;
const sliderGap = 20;

const swiperOptions = {
    loop: true,
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 5,
    speed: 1000,
    pagination: {
        el: ".main-pagination",
    },
    mousewheel: {
        enabled: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.cases-slider-nav.right',
        prevEl: '.cases-slider-nav.left',
    },
};

const swiper = new Swiper(".main-slides", swiperOptions);


const swiperOptionsReverse = {
    loop: true,
    direction: 'vertical',
     spaceBetween: sliderGap,
    slidesPerView: 'auto',
    autoplay: {
        delay: 1,
    },
    freeMode: true,
    speed: sliderSpeed,
    freeModeMomentum: false, 
};

const swiperReverse = new Swiper(".slider-vertical", swiperOptionsReverse);
swiperReverse.detachEvents();
