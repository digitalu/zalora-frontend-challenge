var gutil = require('gulp-util');

exports.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',

  // File types
  html: 'src/**/*.html',
  js: 'src/**/*.js',
  sass: 'src/assets/_scss/custom/**/*.{scss,sass}',
};

exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
