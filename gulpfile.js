var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var rev = require('gulp-rev');
var del = require('del');
var revReplace = require("gulp-rev-replace");
var rename = require('gulp-rename');

// var sass = require('gulp-sass');
 
gulp.task('clean-js', function () {
	return del([
		'build/js/*.js'
	]);
});
 
gulp.task('clean-css', function () {
	return del([
		'build/css/*.css'
	]);
});

gulp.task('clean-html', function () {
	return del([
		'build/html/*.html'
	]);
});

// gulp.task('sass',['clean-css'], function () {
//     return gulp.src('assets/sass/*.scss')
//       .pipe(sass.sync().on('error', sass.logError))
//       .pipe(gulp.dest('./css'));
// });

gulp.task('pack-js', ['clean-js'], function () {
    return gulp.src(['assets/js/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true
        }))
        .pipe(rev())
        .pipe(gulp.dest('build/js'))
        .pipe(rev.manifest('build/rev-manifest.json', {
            merge: true
        }))
        .pipe(gulp.dest(''));
    });
 
gulp.task('pack-css', ['clean-css'], function () {	
    return gulp.src(['assets/css/alertify.css', 'assets/css/themes/default.css','assets/css/custom.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
        .pipe(rev())
        .pipe(gulp.dest('build/css'))
        .pipe(rev.manifest('build/rev-manifest.json', {
            merge: true
        }))
        .pipe(gulp.dest(''));
});


gulp.task('revreplace-js', ['clean-html','pack-js'], function(){
    var manifest = gulp.src("build/rev-manifest.json");
    return gulp.src("assets/html/index.html")
      .pipe(revReplace({manifest: manifest}))
      .pipe(gulp.dest('build/'));
  });

  gulp.task('revreplace-css', ['clean-html','pack-css'], function(){
    var manifest = gulp.src("build/rev-manifest.json");
    return gulp.src("assets/html/index.html")
      .pipe(revReplace({manifest: manifest}))
      .pipe(gulp.dest('build/'));
  });

  gulp.task('bundle-js',function(){
    var manifest = gulp.src("build/rev-manifest.json");
    return gulp.src("build/js/*.js")
      .pipe(rename('bundle.js'))
      .pipe(revReplace({manifest: manifest}))
      .pipe(gulp.dest('build/js/'));
  });


gulp.task('watch', function() {
    gulp.watch('assets/js/**/*.js', ['revreplace-js']);
    gulp.watch('assets/css/**/*.css', ['revreplace-css']);
    gulp.watch('build/css/**/*.css', ['bundle-js']);
    gulp.watch('build/js/**/*.js', ['bundle-js']);
});

gulp.task('default', ['watch']);