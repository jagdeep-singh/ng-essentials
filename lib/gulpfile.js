var gulp       = require('gulp');
var less       = require('gulp-less');
var clean       = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');

gulp.task('compile-less', function() {
    gulp.src('src/assets/less/site.less')
        .pipe(less())
        .pipe(gulp.dest('src/assets/css/'));
});

gulp.task('watch-less', function() {
    gulp.watch('src/assets/less/**/*.less' , ['compile-less']);
});

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});

//Copy JS files from src/assets/vendor to
gulp.task('copyfiles', function() {
  gulp.src([
    "package.json"
  ]).pipe(gulp.dest('dist'));

  gulp.src([
    "src/assets/css/*.css"
  ]).pipe(cleanCSS())
    .pipe(gulp.dest('dist/bundles/styles'))
});

gulp.task('less', ['compile-less']);
gulp.task('default', ['compile-less', 'watch-less']);

