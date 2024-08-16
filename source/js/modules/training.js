import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

new Swiper('.training__slider', {
  // modules: [Navigation],
  watchOverflow: true,
  spaceBetween: 20,
  speed: 600,
  lazy: true,
  lazyPreloadPrevNext: 1,
  initialSlide: 1,

  // navigation: {
  //   nextEl: '.tours__slider-buttons .swiper-button-next',
  //   prevEl: '.tours__slider-buttons .swiper-button-prev',
  // },

  breakpoints: {
    320: {
      slidesPerView: 1,
      simulateTouch: true,
      grabCursor: true,
    },
    768: {
      slidesPerView: 3,
      simulateTouch: false,
      grabCursor: false,
    },
    1366: {
      slidesPerView: 4,
      simulateTouch: false,
      grabCursor: false,
    }
  }
});
