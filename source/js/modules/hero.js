import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

new Swiper('.hero', {
  modules: [Pagination],
  pagination: {
    el: '.hero__pagination',
    clickable: true,
    bulletElement: 'button type="button"',
  },
  watchOverflow: true,
  spaceBetween: 40,
  speed: 500,
  loop: true,
  lazy: true,
  lazyPreloadPrevNext: 1,
  preventClicks: true,

  breakpoints: {
    320: {
      simulateTouch: true,
      grabCursor: true,
    },
    768: {
      simulateTouch: true,
      grabCursor: true,
    },
    1440: {
      speed: 800,
      simulateTouch: false,
      grabCursor: false,
    }
  },
});
