var gulp 	= require('gulp'),
	del 		= require('del'),
	tasks 	= require('../config').tasks,
	config 	= require('../config').clean;

gulp.task(tasks.clean, function() {
	return 	del(config.path_css, {force: true}),
			del(config.path_sprites, {force: true}),
			del(config.path_sprites_sass, {force: true});
});
