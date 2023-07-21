import LazyLoad from 'vanilla-lazyload';
import { mainSlider } from './sliders.js';

// MainLoader
export function addLoadedClass() {
   window.addEventListener('load', () => {
      document.documentElement.classList.remove('loaded');
   });
   document.addEventListener('lang-load', () => {
      document.querySelector('.main-slider__slide').classList.add('main-anim');
      document.documentElement.classList.remove('loaded-lang');
   });
}
// Burger
let menuState = false;
export function menuInit() {
   if (document.querySelector('.icon-menu')) {
      document.addEventListener('click', (e) => {
         if (e.target.closest('.icon-menu')) {
            document.documentElement.classList.toggle('menu-open');
            if (menuState) {
               mainSlider.enable();
               menuState = false;
            } else {
               mainSlider.disable();
               menuState = true;
            }
         }
      });
   }
}
export function menuOpen() {
   document.documentElement.classList.add('menu-open');
   mainSlider.disable();
   menuState = false;
}
export function menuClose() {
   document.documentElement.classList.remove('menu-open');
   mainSlider.enable();
   menuState = true;
}
// Anchor Button
export function initAncors() {
   const buttonList = document.querySelectorAll('[data-go-screen]');

   buttonList.length &&
      buttonList.forEach((button) => {
         button.addEventListener('click', onClickButton);
      });

   function onClickButton(el) {
      if (document.documentElement.classList.contains('menu-open')) menuClose();
      mainSlider.slideTo(el.target.dataset.goScreen, 2000);
   }
}
// Init LazyLoad
export function initLazyLoad() {
   new LazyLoad({
      elements_selector: '[data-src]',
      class_loaded: '_lazy-loaded',
      use_native: true,
   });
}

// Load info

export function loadInfoStart() {
   document.documentElement.classList.add('load-info');
}
export function loadInfoComplete() {
   document.documentElement.classList.remove('load-info');
}
