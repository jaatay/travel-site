var gulp = require("gulp");
var watch = require("gulp-watch");

gulp.task("default", function(){
  console.log("test gulp");
});

gulp.task("html", function(){
  console.log("test type 2");
});

gulp.task("styles", function(){
return gulp.src("./app/assets/styles/styles.css").pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", function(){
  watch(".app/index.html", function(){
    gulp.start("html");
  });
});

gulp.task("watch", function(){
  watch(".app/assets/styles/**/*.css", function(){
    gulp.start("styles");
  });
});
