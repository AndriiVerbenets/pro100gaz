// Include the required packages
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sassGlob = require('gulp-sass-glob'),
	watch = require('gulp-watch'),
	autoprefixer = require('gulp-autoprefixer'),
	gcmq = require('gulp-group-css-media-queries'),
	csso = require('gulp-csso'),
	svgmin = require('gulp-svgmin'),
	svgstore = require('gulp-svgstore'),
	connect = require('gulp-connect'),
	htmlImport = require('gulp-html-import');

// CSS Optimizer
gulp.task('csso', function () {
	return gulp.src('css/main.css')
		.pipe(csso())
		.pipe(gulp.dest('css'));
});

// SVG Optimizer
gulp.task('svgmin', function () {
	return gulp.src('img/svg/in-sprite/*.svg')
		.pipe(svgmin())
		.pipe(gulp.dest('img/svg/in-sprite'));
});

// SVG Sprites
gulp.task('svgstore', function () {
	return gulp.src('img/svg/in-sprite/*.svg')
		.pipe(svgmin())
		.pipe(svgstore({ inlineSvg: false }))
		.pipe(gulp.dest('img/svg'));
});

// html import
gulp.task('import', function () {
	return gulp.src('./html/*.html')
		.pipe(htmlImport('./html/import/'))
		.pipe(gulp.dest('./'));
})

// Group css media queries
gulp.task('gcmq', function () {
	return gulp.src('css/main.css')
		.pipe(gcmq())
		.pipe(gulp.dest('css'));
});

// Localhost
gulp.task('server', function () {
	connect.server({
		root: './',
		port: '7070',
		livereload: true
	});
});

// sass
gulp.task('sass', function () {
	return gulp.src('sass/_main.sass')
		.pipe(sassGlob())
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('css'))
		.pipe(connect.reload());
});

// Watcher
gulp.task('watch', function () {
	gulp.watch('sass/**/*.sass', ['sass']);
	//gulp.watch('css/main.css', ['gcmq']);
	gulp.watch('html/**/*.html', ['import']);
});

// Default gulp task to run
gulp.task('default', ['server', 'watch']);
