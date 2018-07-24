const gulp = require('gulp');
const gulpWatch = require('gulp-watch');
const gulpPostcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssNested = require('postcss-nested');

gulp.task('default', () => {
  console.log('Hooray, you created a gulp task');
});

gulp.task('html', () => {
  console.log('Imagine HTML');
});

gulp.task('styles', () => {
  return gulp
    .src('./app/src/styles/styles.css')
    .pipe(
      gulpPostcss([
        postcssSimpleVars,
        postcssNested,
        autoprefixer,
      ]),
    )
    .pipe( gulp.dest('./app/dist/styles') );
});

gulp.task('watch', () => {
  gulpWatch('./app/index.html', () => {
    gulp.start('html');
  });
  gulpWatch('./app/src/styles/**/*.css', () => {
    gulp.start('styles');
  });
});
