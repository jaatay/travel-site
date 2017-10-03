var gulp = require("gulp");
var watch = require("gulp-watch");

gulp.task("default", function(){
  console.log("test gulp");
});

gulp.task("html", function(){
  console.log("test type 2");
});

gulp.task("watch", function(){
  watch(".app/index.html", function(){
    gulp.start("html");
  });
});
