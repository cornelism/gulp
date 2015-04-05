var gulp = require('gulp');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var config = require('../config').css;
var tasks = require('../config').tasks
var handleErrors = require('../util/handleErrors');

gulp.task(tasks.minify_css, function() {
	return 	gulp.src(config.src)
		.pipe(minifycss())
		.pipe(rename({suffix: '.min'}))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.min));
});
