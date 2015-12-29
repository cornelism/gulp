var	css_type	=	'scss',
	src_folder	=	'./src/',
	dest_folder	=	'./dist/';

module.exports = {

	tasks : {					// Task naming here
		sass: 'sass',
		fonts: 'fonts',
		sprites: 'sprites',
		minify_css: 'min_css',
		clean: 'clean'
	},

	sass : {
		requirements : [	'susy',
							'compass',
							'compass-normalize'
						],
		src : src_folder + 'styles/*.{sass,scss}',
		dest : dest_folder + "css/"
	},

	css : {
		src : dest_folder + "css/*.css",
		min : dest_folder + "css/min/"
	},

	js : {
		src : src_folder + 'js/*.js',
		dest : dest_folder + 'js/'
	},

	fonts : {
		folder : "./fonts/"
	},

	images : {
		src : src_folder + 'images/layout/**/*.png',
		dest : dest_folder + 'sprites/',
		sass : src_folder + 'sass/sprites/',
		cssPath : '../../sprites/',				// rel. path to sprite from css
		filename_sass : 'sprites.sass',			// sprites mixin filename
		filename_img : 'sprite.png',			// sprite img filename
		proc : 'sass'							// processor: sass or scss
	},

	watch : {
		type : css_type,
		sass : src_folder + 'sass/**/*.{sass,scss}',
		images : src_folder + 'images/**/*.{png,jpg,gif,jpeg,bpm}',
		fonts : src_folder + 'fonts/*.{ttf,eot,woff,svg}'
	},

	clean : {
		path_css : dest_folder + 'css/',
		path_sprites : src_folder + 'sprites/',
		path_sprites_sass : src_folder + 'sass/sprites/'
	}
}
