// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

new Swiper('.tours__container', {
  modules: [Navigation],
  watchOverflow: true,
  spaceBetween: 18,
  speed: 600,
  lazy: true,

  navigation: {
    nextEl: '.tours__slider-buttons .swiper-button-next',
    prevEl: '.tours__slider-buttons .swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      simulateTouch: true,
      grabCursor: true,
    },
    768: {
      slidesPerView: 2,
      simulateTouch: false,
      grabCursor: false,
    },
    1366: {
      slidesPerView: 3,
    }
  }
});
