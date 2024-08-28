import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let gallerySlider;

const createGallerySlider = () => {
  gallerySlider = new Swiper('.gallery', {
    modules: [Navigation],
    watchOverflow: true,
    spaceBetween: 5,
    speed: 600,
    lazy: true,
    lazyPreloadPrevNext: 1,
    loop: true,
    slidesPerView: 'auto',
    simulateTouch: true,
    grabCursor: true,

    navigation: {
      nextEl: '.gallery__slider-buttons .swiper-button-next',
      prevEl: '.gallery__slider-buttons .swiper-button-prev',
    },
  });
}

const breakpoint = window.matchMedia("(max-width: 1439px)");

const onBreakpointChange = () => {
  if (breakpoint.matches) {
    createGallerySlider();
  } else {
    gallerySlider?.destroy();
  }
};

breakpoint.addEventListener("change", onBreakpointChange);
onBreakpointChange();
