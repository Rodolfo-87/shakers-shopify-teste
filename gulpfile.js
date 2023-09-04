const gulp = require("gulp");
const concatCss = require("gulp-concat-css");
const cssNano = require("gulp-cssnano");
const sass = require("gulp-sass")(require("sass"));

const paths = {
  pathScss: ["./assets/custom.scss"],
  dist: ["./assets"],
};

gulp.task("sass", () => {
  return gulp
    .src(paths.pathScss)
    .pipe(sass())
    .pipe(concatCss("custom.min.css"))
    .pipe(gulp.dest(paths.dist));
});

gulp.task("compress", () => {
  return gulp
    .src("./assets/custom.min.css")
    .pipe(cssNano())
    .pipe(gulp.dest(paths.dist));
});

function init() {
  gulp.task("watch", () => {
    gulp.watch(paths.pathScss, gulp.series("sass", "compress"));
  });
}
exports.default = init();
