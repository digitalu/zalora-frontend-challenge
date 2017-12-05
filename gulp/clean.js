'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./_conf');

var $ = require('gulp-load-plugins')({
  pattern: ['del']
});

gulp.task('clean', function () {
  return $.del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')]);
});

gulp.task('clean:dist', function () {
  return $.del(path.join(conf.paths.dist, '/'));
});

gulp.task('clean:tmp', function () {
  return $.del([path.join(conf.paths.tmp, '/')]);
});
