var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
});


gulp.task('watch', function() {
    // gulp.watch('assets/js/**/*.js', ['revreplace-js']);
    // gulp.watch('assets/css/**/*.css', ['revreplace-css']);
    gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);