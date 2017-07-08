var gulp = require('gulp');


// connect
var connect = require('gulp-connect-multi')(); 

gulp.task('connect', connect.server({
    host: '127.0.0.1',
    root: ['site'],
    port: 9090,
    livereload: true,
    open: {
        browser: 'chrome'
    }
}));

// styles
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('styles', function() {
    gulp.src('./dev/sass/style.sass')
        .pipe(sass({
            // outputStyle: 'compressed'
        }))
        .pipe(prefix('last 2 version'))
        .pipe(gulp.dest('./site/css/'))
        .pipe(connect.reload());
});

// templates
gulp.task('templates', function() { 
    gulp.src('./dev/**/*.html') // Переносим HTML в продакшен
        .pipe(gulp.dest('./site/'))
        .pipe(connect.reload());
});
// var pug = require('gulp-pug');

// gulp.task('templates', function() {
//     gulp.src('./dev/pug/*.pug')
//         .pipe(pug())
//         .pipe(gulp.dest('./site/'))
//         .pipe(connect.reload());
// });

// scripts
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
  return gulp.src([
        './dev/js/jquery.min.js',
        './dev/js/bootstrap.min.js',
        './dev/js/wow.js',
        './dev/js/jquery.maskedinput.js',
        './dev/js/jquery.magnific-popup.js',
        './dev/js/slick.js',
        './dev/js/script.js',
        ])
        .pipe(concat('script.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('./site/js/'))
        .pipe(connect.reload());
});


// images 
var imagemin = require('gulp-imagemin');
 
gulp.task('images', function() {
    gulp.src('./dev/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./site/images'))
        .pipe(connect.reload());
});

// watcher
gulp.task('watcher', function() {
    gulp.watch('**/*.html', {cwd:'./dev/'}, ['templates']);
    gulp.watch('sass/*.sass', {cwd:'./dev/'}, ['styles']);
    gulp.watch('js/*.js', {cwd:'./dev/'}, ['scripts']);
    gulp.watch('images/**/*.{png,jpg,jpeg,gif,svg}', {cwd:'./dev/'}, ['images']);
});

gulp.task('default', ['styles', 'templates', 'scripts', 'images']);
gulp.task('watch', ['default', 'connect', 'watcher']);