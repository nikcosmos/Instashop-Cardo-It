import * as path from 'path';

import CopyPlugin from 'copy-webpack-plugin';
import FileIncludeWebpackPlugin from 'file-include-webpack-plugin-replace';

const srcFolder = 'src';
const builFolder = 'dist';
const rootFolder = path.basename(path.resolve());

let htmlPages = [];

htmlPages = [
   new FileIncludeWebpackPlugin({
      source: srcFolder,
      htmlBeautifyOptions: {
         'indent-with-tabs': true,
         indent_size: 3,
      },
      replace: [
         {
            regex: '<link rel="stylesheet" href="css/style.min.css">',
            to: '',
         },
         { regex: '../img', to: 'img' },
         { regex: '@img', to: 'img' },
         { regex: '@src', to: '.' },
         { regex: 'NEW_PROJECT_NAME', to: rootFolder },
      ],
   }),
];

const paths = {
   src: path.resolve(srcFolder),
   build: path.resolve(builFolder),
};
const config = {
   mode: 'development',
   devtool: 'inline-source-map',
   optimization: {
      minimize: false,
   },
   entry: [`${paths.src}/js/app.js`],
   output: {
      path: `${paths.build}`,
      filename: 'js/app.min.js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true,
      static: paths.build,
      open: ['/influencers.html'],
      compress: true,
      port: 'auto',
      hot: true,
      // host: 'local-ip', // localhost

      // If weak PC
      // devMiddleware: {
      // 	writeToDisk: true,
      // },

      watchFiles: [
         `${paths.src}/**/*.html`,
         `${paths.src}/**/*.htm`,
         `${paths.src}/img/**/*.*`,
      ],
   },
   module: {
      rules: [
         {
            test: /\.(scss|css)$/,
            exclude: `${paths.src}/fonts`,
            use: [
               'style-loader',
               {
                  loader: 'string-replace-loader',
                  options: {
                     search: '@img',
                     replace: '../img',
                     flags: 'g',
                  },
               },
               {
                  loader: 'css-loader',
                  options: {
                     sourceMap: true,
                     importLoaders: 1,
                     modules: false,
                     url: {
                        filter: (url, resourcePath) => {
                           if (url.includes('img/') || url.includes('fonts/')) {
                              return false;
                           }
                           return true;
                        },
                     },
                  },
               },
               {
                  loader: 'sass-loader',
                  options: {
                     sourceMap: true,
                  },
               },
            ],
         },
      ],
   },
   plugins: [
      ...htmlPages,
      new CopyPlugin({
         patterns: [
            {
               from: `${srcFolder}/img`,
               to: `img`,
               noErrorOnMissing: true,
               force: true,
            },
            {
               from: `${srcFolder}/files`,
               to: `files`,
               noErrorOnMissing: true,
               force: true,
            },
            {
               from: `${paths.src}/favicon.ico`,
               to: `./`,
               noErrorOnMissing: true,
            },
         ],
      }),
   ],
   resolve: {
      alias: {
         '@scss': `${paths.src}/scss`,
         '@js': `${paths.src}/js`,
         '@img': `${paths.src}/img`,
      },
   },
};
export default config;
