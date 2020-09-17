const gulp = require('gulp');
const sass = require('gulp-sass');

function style () {
    return gulp.src('./css/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
}

exports.style = style;