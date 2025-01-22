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

// Находим все вкладки и элементы видео
const tabs = document.querySelectorAll('.possibilities-tab');
const videoItems = document.querySelectorAll('.possibility-video-item');

// Добавляем обработчик событий для каждой вкладки
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Удаляем класс active со всех вкладок и видео
        tabs.forEach(t => t.classList.remove('active'));
        videoItems.forEach(video => video.classList.remove('active'));

        // Добавляем класс active для текущей вкладки и соответствующего видео
        tab.classList.add('active');
        videoItems[index].classList.add('active');
    });
});
