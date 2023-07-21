import svgSprite from 'gulp-svg-sprite';

export const sprite = () => {
   return app.gulp
      .src(`${app.path.src.svgicons}`, {})
      .pipe(
         svgSprite({
            mode: {
               symbol: {
                  sprite: '../img/icons/icons.svg',
                  //example: true
               },
            },
            shape: {
               id: {
                  separator: '',
                  generator: 'svg-',
               },
            },
            svg: {
               rootAttributes: {
                  style: 'display: none;',
                  'aria-hidden': true,
               },
               xmlDeclaration: false,
            },
         })
      )
      .pipe(app.gulp.dest(`${app.path.srcFolder}`));
};
