var gulp = require('gulp'),
plumber = require('gulp-plumber'),
rename = require('gulp-rename'),
autoprefixer = require('gulp-autoprefixer'),
minifyCSS = require('gulp-minify-css'),
sass = require('gulp-sass'),
webpack = require('webpack-stream'),
historyApiFallback = require('connect-history-api-fallback'),
browserSync = require('browser-sync').create();

gulp.task('compile-react', function() {
	return gulp.src('src/main.jsx')
	.pipe(plumber())
	.pipe(webpack({
		output: {
			filename: 'main.js'
		},
		debug: true,
		devtool: 'inline-source-map',
		module: {
			loaders: [{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}]
		}
	}))
	.pipe(gulp.dest('./build/js'));
});

gulp.task('copy-html', function() {
	gulp.src('src/index.html')
	.pipe(gulp.dest('./build'));
});

gulp.task('sass', function() {
	gulp.src('scss/style.scss')
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 2 versions']
	}))
	.pipe(gulp.dest('build/css'))
	.pipe(minifyCSS())
	.pipe(rename({extname: '.min.css'}))
	.pipe(gulp.dest('build/css'));
});

gulp.task('browser-sync', ['sass', 'compile-react', 'copy-html'], function() {

	browserSync.init({
		server: {
			baseDir: 'build/',
			middleware: [historyApiFallback()]
		}
	});

	gulp.watch(('src/index.html'), ['copy-html']);
	gulp.watch(('scss/*.scss'), ['sass']);
	gulp.watch(['src/main.jsx', 'src/components/*.jsx'], ['compile-react']);
	gulp.watch(['build/js/main.js', 'build/index.html', 'build/css/*.min.css']).on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
