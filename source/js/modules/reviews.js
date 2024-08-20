import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

new Swiper('.reviews__container', {
  modules: [Navigation],
  watchOverflow: true,
  spaceBetween: 30,
  speed: 600,
  lazy: true,
  lazyPreloadPrevNext: 1,
  updateOnWindowResize: true,
  slidesPerView: 1,

  navigation: {
    nextEl: '.reviews__slider-buttons .swiper-button-next',
    prevEl: '.reviews__slider-buttons .swiper-button-prev',
  },

  breakpoints: {
    320: {
      simulateTouch: true,
      grabCursor: true,
    },
    768: {
      simulateTouch: false,
      grabCursor: false,
    },
    1366: {
      spaceBetween: 120,
      simulateTouch: false,
      grabCursor: false,
    }
  }
});
