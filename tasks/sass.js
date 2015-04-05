var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var runsequence = require('run-sequence');

var handleErrors = require('../util/handleErrors');

var browserSync 	= require('browser-sync');
var reload			= browserSync.reload;

var config = require('../config').sass;
var tasks = require('../config').tasks;

// console.log('SASS source: ' + config.src);
// console.log('CSS destination: ' + config.dest);
// console.log('requirements: ' + config.requirements);

gulp.task(tasks.sass, function(callback){
	runsequence(tasks.clean,/* tasks.sprites, */'compile_sass', tasks.minify_css, callback);
});

gulp.task('compile_sass', function () {
	return gulp.src([config.src, './Gemfile'])
		.pipe(sass({
			compass: true,
			bundleExec: true,
			require: config.requirements
		}))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.dest))
		.pipe(reload({stream: true}));
});
