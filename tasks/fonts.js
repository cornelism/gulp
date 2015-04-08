var gulp = require('gulp');
var ttf2eot = require('gulp-ttf2eot');
var ttf2woff = require('gulp-ttf2woff');

var config = require('../config').fonts;


//should check which files already exists.
//
gulp.task('ttf2eot', function(){
  gulp.src([config.folder + '*.ttf'])
    .pipe(ttf2eot())
    .pipe(gulp.dest(config.folder));
    // console.log(config.folder);
});

gulp.task('ttf2woff', function(){
  gulp.src([config.folder + '*.ttf'])
    .pipe(ttf2woff())
    .pipe(gulp.dest(config.folder));
});
