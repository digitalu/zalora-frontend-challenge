'use strict';

var path = require('path'),
  gulp = require('gulp'),
  conf = require('./_conf'),
  browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['inject'], function () {
  gulp.watch(conf.paths.html, ['inject']);
  gulp.watch(conf.paths.sass, ['styles'], function() {});
  gulp.watch(conf.paths.js, function(event) {
    if(isOnlyChange(event)) {
      gulp.start('scripts');
    } else {
      gulp.start('inject');
    }
  });
  // reloads the generated HTML page
  gulp.watch('.tmp/serve/index.html').on('change', browserSync.reload);
});
