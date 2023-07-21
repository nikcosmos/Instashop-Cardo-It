import { fonstStyle, otfToTtf, ttfToWoff } from './config/gulp-tasks/fonts.js';

import { css } from './config/gulp-tasks/css.js';
import gulp from 'gulp';
import { html } from './config/gulp-tasks/html.js';
import { images } from './config/gulp-tasks/images.js';
import { js } from './config/gulp-tasks/js.js';
import { jsDev } from './config/gulp-tasks/js-dev.js';
import { path } from './config/gulp-settings.js';
import { plugins } from './config/gulp-plugins.js';
import { reset } from './config/gulp-tasks/reset.js';
import { sprite } from './config/gulp-tasks/sprite.js';

global.app = {
   isBuild: process.argv.includes('--build'),
   isDev: !process.argv.includes('--build'),
   isWebP: !process.argv.includes('--nowebp'),
   gulp: gulp,
   path: path,
   plugins: plugins,
};

const fonts = gulp.series(reset, otfToTtf, ttfToWoff, fonstStyle);

const fontsTasks = gulp.series(fonts);
const buildTasks = gulp.series(
   fonts,
   jsDev,
   js,
   gulp.parallel(html, css, images)
);

export { html };
export { css };
export { js };
export { jsDev };
export { images };
export { sprite };

const build = gulp.series(buildTasks);

export { build };
export { fontsTasks };
