var gulp 		=	require('gulp');
var imagemin 	=	require('gulp-imagemin');
var spritesmith =	require('gulp.spritesmith');
var config 		=	require('../config').images;
var tasks		=	require('../config').tasks;
var	del 			=	require('del');

gulp.task('sprites', function () {

  // empty spriteData
  var spriteData = null;

  // Generate our spritesheet
  spriteData = gulp.src(config.src).pipe(spritesmith({
    imgName: config.filename_img,
    cssName: config.filename_sass,
    imgPath: config.cssPath + config.filename_img,
  }));

  // Pipe image stream through image optimizer and onto disk
  spriteData.img
    // .pipe(imagemin())
    .pipe(gulp.dest(config.dest));

  // Pipe CSS stream through CSS optimizer and onto disk
  spriteData.css
    .pipe(gulp.dest(config.sass));
});
