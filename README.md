# Техническая Документация

<p>Для запуска сборки на устройстве должна быть <a href = 'https://nodejs.org/en'>NODE</a> - Recommended For Most Users </p>

## Запуск сборки в режиме Разработки

<ul>
   <li><code>npm start</code> - <b>Получить все зависимости которые необходимы для проекта</b></li>
   <li><code>npm run font</code> - <b>Конвертаци шрифтов*</b></li>
   <li><code>npm run dev</code> - <b>Поднятие сервера</b></li>
</ul>
<p>*Конвертация и оптимизация шрифтов происходит автоматически,так же автоматически создается и заполняется файл <em style ='color:orange'>/src/scss/fonts.scss</em>
</p>
<p style ='color:rosybrown'>Начертания шрифтов автоматически могут быть проставлены не верно
</p>

## Запуск сборки в режиме Продакшена

<ul>
   <li><code> npm run build </code> - <b>будет создана папка DIST с билдом проекта</b>
</ul>

### Дополнительные скрипты

<p><code>npm run sprite</code> - создает спрайт из  
<em style ='color:orange'>/src/svgicons</em>
в
<em style ='color:orange'>/src/img/icons/icons.svg</em>
</p>

Вариант использования спрайта в HTML

```shell
<svg>
    <use xlink:href='@img/icons/icons.svg#svg-НАЗВАНИЕ ИКОНКИ'>
    </use>
</svg>
```

<br/>
<br/>
<br/>

# Кастомизация

<p>Все <b style ='color:paleturquoise'>переменные </b> с комментариями находятся в файле <em style ='color:orange'>src/scss/vars.scss</em></p>
<p>Все <b style = 'color:yellow'>API</b> конфигурации находятся в файле  <em style ='color:orange'>src/js/config.js</em></p>

## Описание компонентов

### Страница

<ul>
<li><code>fix-btn</code> - класс который нужно добавлять на экран если на нем будет фиксированая кнопка
</li>
<li><code>@@include(<b style ='color:#9CDCFE'>'components/_header.htm'</b>,{"tab":"tab1"})</code> - путь к компонету
</li>
<li><code>@@include('components/_header.htm',<b style ='color:#9CDCFE'>{"tab":"tab1"}</b>)</code> - информация которую можно использовать внутри компонента,к назнанию добавить <b style ='color:#9CDCFE'>'@@'</b> Пример: <span style ='color:#9CDCFE'>@@tab</span>
</li>
</ul>

```html
<body>
   <div class="wrapper">
      @@include('components/_loader.htm',{})
      @@include('components/_header.htm',{"tab":"tab1"})
      @@include('components/_burger.htm',{"tab":"tab1"})
      <button
         data-lg="apply-button"
         data-screen-hide="8,9,10"
         data-go-screen="7"
         type="button"
         class="main-fix-btn">
         APPLY
      </button>
      <main id="mainSlider" class="main-slider">
         <div class="main-slider__content">
            <div class="main-slider__slide fix-btn">
               @@include('components/1.htm',{"tab":"tab1"})
            </div>
            <div class="main-slider__slide fix-btn">
               @@include('components/2.htm',{"tab":"tab1"})
            </div>
            <div class="main-slider__slide fix-btn">
               @@include('components/3.htm',{"tab":"tab1"})
            </div>
            <div class="main-slider__slide fix-btn">
               @@include('components/4.htm',{"tab":"tab1"})
            </div>
            <div class="main-slider__slide fix-btn">
               @@include('components/5.htm',{"tab":"tab1"})
            </div>
            <div class="main-slider__slide fix-btn">
               @@include('components/6.htm',{"tab":"tab1"})
            </div>
            <div class="main-slider__slide fix-btn">
               @@include('components/7.htm',{"tab":"tab1"})
            </div>
            <div class="main-slider__slide">
               @@include('components/8.htm',{"tab":"tab1"})
            </div>
            <div class="main-slider__slide">
               @@include('components/9.htm',{"tab":"tab1"})
            </div>
            <div class="main-slider__slide">
               @@include('components/_footer.htm',{"tab":"tab1"})
            </div>
         </div>
      </main>
   </div>
</body>
```

<br/>
<br/>
<br/>

### Фиксированая кнопка

<ul>
<li>
<code>data-screen-hide="8,9,10"</code> - перечислить на каких экранах кнопка должна быть скрыта
</li>
<li>
<code>  data-go-screen="7"</code> - плавная прокрутка к экрану с номером
</li>
</ul>

```html
<button
   data-lg="apply-button"
   data-screen-hide="8,9,10"
   data-go-screen="7"
   type="button"
   class="main-fix-btn">
   APPLY
</button>
```

<br/>
<br/>
<br/>

### Экран без слайдера

<ul>
<li><code>first-screen</code> - класс добавляется если это первый экран</li>
<li><code>@@tab</code> - алиас который передается извне и формирует правильный путь к картинке
</li>
<li><code>@img</code> - алиас который формирует правильный путь к картинкам
</li>
<li>

<code >data-src</code> +<b style ='color:#9CDCFE'>\<div class="lazy-loader">\</div></b> - включает у картинки ленивую подгрузку, если она не нужна удаляем <b style ='color:#9CDCFE'>div </b>и меняем <code>data-src => src</code>

</li>
</ul>

#### Экран с картинкой + lazyLoad

```html
<div class="screen-temp">
   <h2 data-lg="@@tab-screen1-slide1-title" class="screen-temp__title"></h2>
   <p data-lg="@@tab-screen1-slide1-descr" class="screen-temp__descr"></p>
   <div class="screen-temp__img">
      <img data-src="@img/@@tab/screen-1/overlay.png" alt="overlay" />
      <div class="lazy-loader"></div>
   </div>
</div>
```

#### Экран с картинкой без lazyLoad

```html
<div class="screen-temp ">
   <h2 data-lg="@@tab-screen1-slide1-title" class="screen-temp__title"></h2>
   <p data-lg="@@tab-screen1-slide1-descr" class="screen-temp__descr"></p>
   <div class="screen-temp__img">
      <img src="@img/@@tab/screen-1/overlay.png" alt="overlay" />
   </div>
</div>
```

#### Экран с айфреймом

```html
<div class="screen-temp ">
   <div class="screen-temp__slide swiper-slide">
      <h2 data-lg="@@tab-screen1-slide1-title" class="screen-temp__title"></h2>
      <p data-lg="@@tab-screen1-slide1-descr" class="screen-temp__descr"></p>
      <div class="screen-temp__iframe">
         <iframe src="https://mercedes.instashop.io/"></iframe>
      </div>
   </div>
</div>
```

<br/>
<br/>
<br/>

### Экран со слайдером( 1-картинка )

<ul>
<li><b style ='color:red'>Если слайд один сладйдер не будет работать,но лучше применять структуру без слайдера!</b></li>
<li><code>data-slider="3"</code> - нумерация экрана для оптимизации слайдеров
</li>
<li><code>@@tab</code> - алиас который передается извне и формирует правильный путь к картинке
</li>
<li><code>@img</code> - алиас который формирует правильный путь к картинкам
</li>
<li>

<code >data-src</code> +<b style ='color:#9CDCFE'>\<div class="lazy-loader">\</div></b> - включает у картинки ленивую подгрузку, если она не нужна удаляем <b style ='color:#9CDCFE'>div </b>и меняем <code>data-src => src</code>

</li>
</ul>

```html
<div class="screen-temp">
   <div data-slider="3" class="screen-temp__slider">
      <div class="screen-temp__slider-wrap swiper-wrapper">
         <div class="screen-temp__slide swiper-slide">
            <h2
               data-lg="@@tab-screen3-slide1-title"
               class="screen-temp__title"></h2>
            <p
               data-lg="@@tab-screen3-slide1-descr"
               class="screen-temp__descr"></p>
            <div class="screen-temp__img">
               <img
                  data-src="@img/@@tab/screen-3/slide-1/overlay.png"
                  alt="overlay" />
               <div class="lazy-loader"></div>
            </div>
         </div>
      </div>
      <div data-slider-pagination class="pagination"></div>
   </div>
</div>
```

<br/>
<br/>
<br/>

### Экран со слайдером( много картинок )

<ul>
<li><b style ='color:red'>Если слайд один сладйдер не будет работать,но лучше применять структуру без слайдера!</b></li>
<li><code>data-slider="3"</code> - нумерация экрана для оптимизации слайдеров
</li>
<li><code>@@tab</code> - алиас который передается извне и формирует правильный путь к картинке
</li>
<li><code>@img</code> - алиас который формирует правильный путь к картинкам
</li>
<li>

<code >data-src</code> +<b style ='color:#9CDCFE'>\<div class="lazy-loader">\</div></b> - включает у картинки ленивую подгрузку, если она не нужна удаляем <b style ='color:#9CDCFE'>div </b>и меняем <code>data-src => src</code>

</li>
</ul>

```html
<div class="screen-temp">
   <h2 data-lg="@@tab-screen7-title" class="screen-temp__title"></h2>
   <p data-lg="@@tab-screen7-descr" class="screen-temp__descr"></p>
   <div data-slider="7" class="screen-temp__slider">
      <div class="screen-temp__slider-wrap swiper-wrapper">
         <div class="screen-temp__slide-imgs swiper-slide">
            <div>
               <img
                  data-src="@img/@@tab/screen-7/slide-1/overlay-1.png"
                  alt="overlay" />
               <div class="lazy-loader"></div>
            </div>
            <div>
               <img
                  data-src="@img/@@tab/screen-7/slide-1/overlay-2.png"
                  alt="overlay" />
               <div class="lazy-loader"></div>
            </div>
            <div>
               <img
                  data-src="@img/@@tab/screen-7/slide-1/overlay-3.png"
                  alt="overlay" />
               <div class="lazy-loader"></div>
            </div>
            <div>
               <img
                  data-src="@img/@@tab/screen-7/slide-1/overlay-4.png"
                  alt="overlay" />
               <div class="lazy-loader"></div>
            </div>
            <div>
               <img
                  data-src="@img/@@tab/screen-7/slide-1/overlay-5.png"
                  alt="overlay" />
               <div class="lazy-loader"></div>
            </div>
            <div>
               <img
                  data-src="@img/@@tab/screen-7/slide-1/overlay-6.png"
                  alt="overlay" />
               <div class="lazy-loader"></div>
            </div>
         </div>
      </div>
      <div data-slider-pagination class="pagination"></div>
   </div>
</div>
```

<br/>
<br/>
<br/>

### Экран с отзывами

<ul>
<li><b style ='color:red'>Если слайд один сладйдер не будет работать,но лучше применять структуру без слайдера!</b></li>
<li><code>data-slider="3"</code> - нумерация экрана для оптимизации слайдеров
</li>
<li><code>@@tab</code> - алиас который передается извне и формирует правильный путь к картинке
</li>
<li><code>@img</code> - алиас который формирует правильный путь к картинкам
</li>
<li>

<code >data-src</code> +<b style ='color:#9CDCFE'>\<div class="lazy-loader">\</div></b> - включает у картинки ленивую подгрузку, если она не нужна удаляем <b style ='color:#9CDCFE'>div </b>и меняем <code>data-src => src</code>

</li>
</ul>

```html
<div data-slider="2" class="feedback-screen">
   <div class="feedback-screen__content swiper-wrapper">
      <div class="feedback-screen__slide swiper-slide">
         <p class="feedback-screen__quote">
            <svg>
               <use xlink:href="@img/icons/icons.svg#svg-quote"></use>
            </svg>
            <span data-lg="@@tab-screen2-slide1-quote"></span>
         </p>
         <p
            data-lg="@@tab-screen2-slide1-name"
            class="feedback-screen__name"></p>
         <p
            data-lg="@@tab-screen2-slide1-info"
            class="feedback-screen__sub-info"></p>
         <div class="feedback-screen__img">
            <img
               data-src="@img/@@tab/screen-2/slide-1/overlay.png"
               alt="overlay" />
         </div>
         <div class="lazy-loader"></div>
         <button
            data-go-screen="7"
            type="button"
            class="feedback-screen__button">
            <span data-lg="@@tab-screen2-link"></span>
            <svg>
               <use xlink:href="@img/icons/icons.svg#svg-arrow"></use>
            </svg>
         </button>
      </div>
   </div>
   <div data-slider-pagination class="pagination"></div>
</div>
```

<br/>
<br/>
<br/>

### Экран с лейблами

<ul>
<li><b style ='color:red'>Если слайд один сладйдер не будет работать,но лучше применять структуру без слайдера!</b></li>
<li><code>data-slider="3"</code> - нумерация экрана для оптимизации слайдеров
</li>
<li><code>@@tab</code> - алиас который передается извне и формирует правильный путь к картинке
</li>
<li><code>@img</code> - алиас который формирует правильный путь к картинкам
</li>
<li>

<code >data-src</code> +<b style ='color:#9CDCFE'>\<div class="lazy-loader">\</div></b> - включает у картинки ленивую подгрузку, если она не нужна удаляем <b style ='color:#9CDCFE'>div </b>и меняем <code>data-src => src</code>

</li>
</ul>

```html
<div class="screen-temp">
   <div data-slider="9" class="screen-temp__slider">
      <div class="screen-temp__slider-wrap swiper-wrapper">
         <div class="screen-temp__slide swiper-slide">
            <h2
               data-lg="@@tab-screen9-slide1-title"
               class="screen-temp__title"></h2>
            <p
               data-lg="@@tab-screen9-slide1-descr"
               class="screen-temp__descr"></p>
            <div class="screen-temp__img">
               <img
                  data-src="@img/@@tab/screen-9/slide-1/overlay.png"
                  alt="overlay" />
               <div class="lazy-loader"></div>
            </div>
            <div
               data-lg="@@tab-screen9-slide1-label1"
               class="screen-temp__label screen-temp__label_1 "></div>
            <div
               data-lg="@@tab-screen9-slide1-label2"
               class="screen-temp__label screen-temp__label_2 "></div>
         </div>
      </div>
      <div data-slider-pagination class="pagination"></div>
   </div>
   <a
      data-lg="@@tab-screen9-btn"
      href="@src/recruiters.html"
      class="screen-temp__button"></a>
</div>
```
