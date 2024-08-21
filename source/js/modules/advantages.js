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
    slidesPerGroup: 2,
    // slidesPerView: auto,
    // centeredSlides: true,
    // loopAdditionalSlides,
    simulateTouch: false,
    grabCursor: false,
    loopAddBlankSlides: true,
  });
}

const breakpoint = window.matchMedia("(min-width: 1440px)");

const onBreakpointChange = () => {
  if (breakpoint.matches) {
    createAdvantagesSlider();
  } else {
    advantagesSlider?.destroy();
  }
};

breakpoint.addEventListener("change", onBreakpointChange);
onBreakpointChange();
