import ifPlugin from 'gulp-if';
import newer from 'gulp-newer';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import prettier from 'gulp-prettier';
import rename from 'gulp-rename';

export const plugins = {
   notify,
   if: ifPlugin,
   prettier,
   newer,
   plumber,
   rename,
};
