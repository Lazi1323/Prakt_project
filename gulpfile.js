const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');

function styles() {
    return src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(dest('css'));
}

function scripts() {
    return src('src/js/**/*.js')
        .pipe(dest('js'));
}

function images() {
    return src('src/img/**/*', { encoding: false })
        .pipe(dest('img'));
}

function watcher() {
    watch('src/scss/**/*.scss', styles);
    watch('src/js/**/*.js', scripts);
    watch('src/img/**/*', images);
}

const build = parallel(styles, scripts, images);

exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.build = build;
exports.default = series(build, watcher);
