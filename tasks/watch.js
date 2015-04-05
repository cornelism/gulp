var gulp = require('gulp');
var config = require('../config').watch;
var tasks = require('../config').tasks;

var browserSync 	= require('browser-sync');
var reload			= browserSync.reload;

gulp.task('watch', function() {

	browserSync({
		proxy: "oxfamdigi.local",
		browser: ["chromium-browser", "firefox"]
	});

	// Watch images files
	gulp.watch(config.images, [tasks.sprites])
		.on('change', reload);

	// Watch .sass files
	gulp.watch(config.sass, [tasks.sass])
		.on('change', reload);
});
