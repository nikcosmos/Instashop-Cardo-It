import Swiper, { Keyboard, Mousewheel, Pagination } from 'swiper';

// TempSlider========================================================================================================================================================
const sliderList = [...document.querySelectorAll('[data-slider]')];
const initializedSliderList = sliderList.map((slider) => {
   return new Swiper(slider, {
      modules: [Pagination],
      slidesPerView: 1,
      speed: 1200,
      spaceBetween: 20,
      watchOverflow: true,
      pagination: {
         enabled: true,
         type: 'bullets',
         el: slider.querySelector('[data-slider-pagination]'),
      },
      enabled: false,
      grabCursor: true,
      followFinger: false,
   });
});
// Main Slider========================================================================================================================================================
const headerEl = document.getElementById('header');
const fixBtn = document.querySelector('[data-screen-hide]');
const fixBtnArr = fixBtn?.dataset.screenHide.split(',');
export const mainSlider = new Swiper('#mainSlider', {
   modules: [Mousewheel, Keyboard],
   wrapperClass: 'main-slider__content',
   slideClass: 'main-slider__slide',
   slideActiveClass: 'main-active',
   slideNextClass: 'main-next',
   slidePrevClass: 'main-prev',
   direction: 'vertical',
   spaceBetween: 0,
   initialSlide: 0,
   slidesPerView: 1,
   translate: 0,
   speed: 1200,
   grabCursor: true,
   nested: true,
   mousewheel: {
      sensitivity: 1,
   },
   keyboard: { enabled: true },
   followFinger: false,
   on: {
      slideChange: onChangeMainSlider,
   },
});
function onChangeMainSlider(mainSlider) {
   const { realIndex } = mainSlider;
   optimizationSliderList(realIndex);
   toggleClassToHeader(realIndex);
   addAnimClass(mainSlider);
   tooggleClassToFixBtn(realIndex);
}
function optimizationSliderList(mainIndex) {
   initializedSliderList.forEach((slider) => {
      if (+slider.el.dataset.slider === mainIndex + 1) {
         slider.enable();
      } else {
         slider.disable();
      }
   });
}
function toggleClassToHeader(mainIndex) {
   if (mainIndex + 1 === 1) {
      headerEl.classList.remove('move');
   } else {
      headerEl.classList.add('move');
   }
}
function addAnimClass(mainSlider) {
   mainSlider.slides[mainSlider.realIndex].classList.add('main-anim');
}
function tooggleClassToFixBtn(index) {
   if (!!fixBtnArr.find((item) => +item === index + 1)) {
      fixBtn.classList.add('hide');
   } else {
      fixBtn.classList.remove('hide');
   }
}
