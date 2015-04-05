var	theme		=	'../../docroot/sites/all/themes/oxfam/',		// path to used theme
	css_type	=	'sass',		// 'sass' or 'less',
	src_folder	=	theme + 'src/',
	dest_folder	=	theme +'dest/';

module.exports = {

	tasks : {					// Task naming here
		sass: 'sass',
		sprites: 'sprites',
		minify_css: 'min_css',
		clean: 'clean'
	},

	sass : {
		requirements : [	'susy',
							'compass',
							'compass-normalize'
						],
		src : src_folder + 'sass/*.{sass,scss}',
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

	images : {
		src : src_folder + 'images/**/*.png',
		dest : src_folder + 'sprites/',
		sass : src_folder + 'sass/sprites/',
		cssPath : '../../sprites/',				// rel. path to sprite from css
		filename_sass : 'sprites.sass',		// sprites mixin filename
		filename_img : 'sprite.png',			// sprite img filename
		proc : 'sass'						// processor: sass or scss
	},

	watch : {
		type : css_type,
		sass : src_folder + 'sass/**/*.{sass,scss}',
		images : src_folder + 'images/**/*.{png,jpg,gif,jpeg,bpm}'
	},

	clean : {
		path_css : dest_folder + 'css/',
		path_sprites : src_folder + 'sprites/',
		path_sprites_sass : src_folder + 'sass/sprites/'
	}
}
