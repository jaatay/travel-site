var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Gulp default task");
})

gulp.task('html', function() {
  console.log("Gulp html task");
})

gulp.task('styles', function(){
  console.log("Gulp styles task");
})

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  })
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  })

})
