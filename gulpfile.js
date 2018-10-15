var gulp       = require('gulp');
var less       = require('gulp-less');

gulp.task('compile-less', function() {
    gulp.src('src/assets/less/site.less')
        .pipe(less())
        .pipe(gulp.dest('src/assets/css/'));
});

gulp.task('watch-less', function() {
    gulp.watch('src/assets/less/**/*.less' , ['compile-less']);
});

gulp.task('less', ['compile-less']);
gulp.task('default', ['compile-less', 'watch-less']);

