const sliderSpeed = 8000;
const sliderGap = 20;

const swiperOptions = {
    loop: true,
    spaceBetween: sliderGap,
    slidesPerView: 'auto',
    autoplay: {
        delay: 1,
    },
    freeMode: true,
    speed: sliderSpeed,
    freeModeMomentum: false,
};

const swiper = new Swiper(".slider-normal", swiperOptions);
swiper.detachEvents();

const swiperOptionsReverse = {
    loop: true,
    spaceBetween: sliderGap,
    slidesPerView: 'auto',
    autoplay: {
        delay: 1,
        reverseDirection: true,
    },
    freeMode: true,
    speed: sliderSpeed,
    freeModeMomentum: false,
};

const swiperReverse = new Swiper(".slider-reverse", swiperOptionsReverse);
swiperReverse.detachEvents();