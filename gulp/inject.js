'use strict';

var path = require('path'),
  gulp = require('gulp'),
  conf = require('./_conf'),
  $ = require('gulp-load-plugins')();

var injectOptions = {
  ignorePath: ['.tmp/serve/'],
  addRootSlash: false
};

gulp.task('inject', ['styles'], function () {
  return gulp.src('src/index.html')
    .pipe($.inject(
      gulp.src([
        path.join(conf.paths.tmp, '/serve/app/css/**/*.css')
      ], { read: false }),
      injectOptions
    ))
    // .pipe($.inject(
    //   gulp.src([
    //     path.join(conf.paths.src, '/**/*.js'),
    //   ]),
    //   injectOptions
    // ))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});
