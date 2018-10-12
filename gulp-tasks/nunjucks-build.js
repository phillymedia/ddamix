var nunjucksRender = require('gulp-nunjucks-render');
var data = require("gulp-data");

module.exports = function (gulp, plugins) {
    return function () {
       gulp.src('app/**/*.+(html|nunjucks)')
       .pipe(data({
           gal1: require("../app/gallery1.json")
       }))
      .pipe(nunjucksRender({
           path: ['app/templates']
        }))
        .pipe(plugins.removeCode({
           tmp: true
        }))
      .pipe(gulp.dest('.tmp'))
      .pipe(plugins.browserSync.reload({
        stream: true
      }))
    };
};
