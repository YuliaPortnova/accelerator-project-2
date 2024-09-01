import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let advantagesSlider;

const createAdvantagesSlider = () => {
  advantagesSlider = new Swiper('.advantages__container', {
    navigation: {
      nextEl: '.advantages__slider-buttons .swiper-button-next',
      prevEl: '.advantages__slider-buttons .swiper-button-prev',
    },
    modules: [Navigation],
    watchOverflow: true,
    spaceBetween: 30,
    speed: 600,
    loop: true,
    lazy: true,
    lazyPreloadPrevNext: 1,
    centeredSlides: true,
    slidesPerGroup: 2,
    initialSlide: 2,
    slidesPerView: 3.59,
    simulateTouch: false,
    grabCursor: false,
  });
};

const breakpoint = window.matchMedia('(min-width: 1440px)');

const createOrDestroy = () => {
  if (breakpoint.matches) {
    createAdvantagesSlider();
  } else {
    advantagesSlider?.destroy();
  }
};

breakpoint.addEventListener('change', () => createOrDestroy());
createOrDestroy();
