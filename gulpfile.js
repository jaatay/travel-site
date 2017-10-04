var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('default', function() {
  console.log("Gulp default task");
})

gulp.task('html', function() {
  console.log("Gulp html task");
})

gulp.task('styles', function(){
return gulp.src('./app/assets/styles/styles.css')
.pipe(postcss([autoprefixer]))
.pipe(gulp.dest('./app/temp/styles'));
})

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  })
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  })
})
