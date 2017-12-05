var gulp = require("gulp");

require('./gulp/clean.js')
require('./gulp/inject.js')
require('./gulp/server.js')
require('./gulp/styles.js')
require('./gulp/watch.js')

gulp.task('default', ['clean'], function() {
  gulp.start('serve');
})
