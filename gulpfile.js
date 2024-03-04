const { src, dest, watch, series } = require("gulp");
const browsersync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");

const files = {
  scssPath: "app/scss/**/*.scss",
};

// ScSS Task
function scssTask() {
  return src(files.scssPath)
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("dist/css/"))
    .pipe(browsersync.stream());
}

function css(cb) {
  // body omitted
  cb();
}

function javascript(cb) {
  // body omitted
  cb();
}

// Browser-sync Task
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: "dist",
    },
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch("dist/**/*.html", browsersyncReload);
  watch(files.scssPath, scssTask);
}

// Default gulp Task
exports.default = series(scssTask, browsersyncServe, watchTask);

exports.build = series(scssTask);
