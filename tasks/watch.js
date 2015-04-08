var gulp = require('gulp');
var config = require('../config').watch;
var tasks = require('../config').tasks;

var browserSync 	= require('browser-sync');
var reload			= browserSync.reload;

gulp.task('watch', function() {

	browserSync({
		proxy: "oxfamdigi.local",
		browser: ["chromium-browser"/*, "firefox"*/]
	});

	// Watch module template files
	gulp.watch(config.module_templates)
		.on('change', reload);

	// Watch template files
	gulp.watch(config.templates)
		.on('change', reload);

	// Watch font files
	// gulp.watch(config.fonts, [tasks.fonts])
	// 	.on('change', reload);

	// Watch images files
	gulp.watch(config.images, [tasks.sprites])
		// .on('change', reload);

	// Watch .sass files
	gulp.watch(config.sass, [tasks.sass]);
		// .on('change', reload);
});
