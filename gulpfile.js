var gulp = require("gulp");
var watch = require("gulp-watch");

gulp.task("default", function(){
  console.log("test default");
});

gulp.task("html", function(){
  console.log("test html");
});

gulp.task("styles", function(){
  console.log("test styles");
return gulp.src("./app/assets/styles/styles.css").pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", function(){
  console.log("test html watch");
  watch(".app/index.html", function(){
    gulp.start("html");
  });
});

gulp.task("watch", function(){
  console.log("test css watch");
  watch(".app/assets/styles/**/*.css", function(){
    gulp.start("styles");
  });
});
