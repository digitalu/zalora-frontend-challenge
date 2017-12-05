'use strict';

var gulp = require ('gulp'),
  conf = require('./_conf'),
  $ = require('gulp-load-plugins')(),
  path = require('path'),
  browserSync = require('browser-sync');

gulp.task('styles', function() {
  var options = {
    style: 'expanded'
  };

  return gulp.src(conf.paths.sass)
    .pipe($.plumber())
    .pipe($.sass(options)).on('error', conf.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/css')))
    .pipe(browserSync.reload({stream: true}));
})
