'use strict';

var path = require('path'),
  gulp = require('gulp'),
  conf = require('./_conf'),
  $ = require('gulp-load-plugins')(),
  browserSync = require('browser-sync');

gulp.task('serve', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir: '.tmp/serve/',
      browser: 'chrome'
    }
  })
})
