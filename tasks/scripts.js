/*

var gulp = require('gulp'),
	jshint = require('gulp-jshint'), // not in repo yet !!
	concat = require('gulp-concat'),
	handleErrors = require('../util/handleErrors');

gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .on('error', handleErrors)
    .pipe(gulp.dest('assets/js/concat'))
    // .pipe(notify({ message: 'Scripts task complete' }));
});

*/