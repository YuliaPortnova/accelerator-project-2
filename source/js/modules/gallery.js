import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

new Swiper('.gallery', {
  modules: [Navigation],
  watchOverflow: true,
  spaceBetween: 4,
  speed: 600,
  lazy: true,
  lazyPreloadPrevNext: 1,
  loop: true,

  navigation: {
    nextEl: '.gallery__slider-buttons .swiper-button-next',
    prevEl: '.gallery__slider-buttons .swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      simulateTouch: true,
      grabCursor: true,
    },
    768: {
      slidesPerView: 3,
      simulateTouch: true,
      grabCursor: true,
    },
    1440: {
      slidesPerView: 5,
      simulateTouch: false,
      grabCursor: false,
    }
  }
});
