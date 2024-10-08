import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

new Swiper('.training__slider', {
  modules: [Navigation],
  watchOverflow: true,
  spaceBetween: 20,
  speed: 600,
  lazy: true,
  lazyPreloadPrevNext: 1,

  navigation: {
    nextEl: '.training__slider .swiper-button-next',
    prevEl: '.training__slider .swiper-button-prev',
  },

  breakpoints: {
    320: {
      initialSlide: 2,
      slidesPerView: 1,
      simulateTouch: true,
      grabCursor: true,
    },
    768: {
      slidesPerView: 3,
      simulateTouch: false,
      grabCursor: false,
    },
    1440: {
      slidesPerView: 4,
      simulateTouch: false,
      grabCursor: false,
    }
  }
});
