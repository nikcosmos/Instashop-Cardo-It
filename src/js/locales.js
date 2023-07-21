import { loadInfoComplete, loadInfoStart, menuClose } from './modules.js';

import { $localApi } from './api.js';

const langListEl = document.getElementById('langList');

initTranslation();

async function initTranslation() {
   const setedLang = window?.localStorage.getItem('lang');
   if (setedLang) {
      fetchTranslationsList(setedLang);
      await fetchTranslations(setedLang);
      finalSetLangActions(setedLang);
   } else {
      const defaultLagn = await fetchTranslationsList();
      await fetchTranslations(defaultLagn);
      finalSetLangActions(defaultLagn);
   }
}

langListEl.addEventListener('click', onChangeLang);

async function onChangeLang(el) {
   if (el.target.classList.contains('language-block__item')) {
      menuClose();
      loadInfoStart();
      await fetchTranslations(el.target.dataset.lang);
      addActiveLang(el.target.dataset.lang);
      finalSetLangActions(el.target.dataset.lang);
   }
}

async function fetchTranslations(langVal) {
   return $localApi('/site/dictionary', {
      params: { lang: langVal },
   }).then(({ data }) => setLang(data, langVal));
}

async function fetchTranslationsList(setedLang) {
   return $localApi('/site/one').then(({ data }) => {
      renderTranslationsList(data.langs_interface);
      const setLang = setedLang || data.lang_default;
      addActiveLang(setLang);
      return data.lang_default;
   });
}

function renderTranslationsList(list) {
   const htmlList = list
      .map((item) => {
         return `<button data-lang='${item}' type="button" class="language-block__item"><span>${item}</span></button>`;
      })
      .join('');

   langListEl.innerHTML = htmlList;
}

function setLang(local) {
   const allDataEl = document.querySelectorAll('[data-lg]');
   const allDataElPlaceholder = document.querySelectorAll(
      '[data-lg-placeholder]'
   );
   allDataEl.forEach((lgItem) => {
      lgItem.textContent = local[lgItem.dataset.lg];
   });
   allDataElPlaceholder.forEach((lgItem) => {
      lgItem.setAttribute('placeholder', local[lgItem.dataset.lgPlaceholder]);
   });
}

function finalSetLangActions(lang) {
   document.documentElement.setAttribute('lang', lang);
   window.localStorage.setItem('lang', lang);
   document.dispatchEvent(new Event('lang-load'));
   loadInfoComplete();
}

function addActiveLang(setedLang) {
   const listBtn = [...langListEl.children];
   listBtn.forEach((item) => {
      if (item.dataset.lang === setedLang) {
         item.classList.add('_active');
      } else {
         item.classList.remove('_active');
      }
   });
}
