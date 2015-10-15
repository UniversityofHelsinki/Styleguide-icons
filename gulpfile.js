var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var clean = require('gulp-clean');
var version = require('./package.json').version;

var iconFontSettings = {
    fontFileName : 'hy-icons_' + version,
    fontName: 'hy-icons',
    svgSrc: 'icons/svgs/*.svg',
    fontDest: 'fonts/',
    fontCssPath: '../fonts/',
    targetCssPath: '../css/icons.css',
    appendUnicode: true
};

gulp.task('iconfont', function(){
  gulp.src([iconFontSettings.svgSrc])
    .pipe(iconfont({
      fontName: iconFontSettings.fontFileName,
      appendUnicode: true,
      normalize: true,
      descent: 6
     }))
    .on('glyphs', function(glyphs) {
      gulp.src('icons.css')
        .pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontFileName : iconFontSettings.fontFileName,
          fontName: iconFontSettings.fontName,
          fontPath: iconFontSettings.fontCssPath,
          className: 'hy'
        }))
        .pipe(gulp.dest('css/'));
    })
    .pipe(gulp.dest(iconFontSettings.fontDest));
});

gulp.task('clean', function () {
  gulp.src(iconFontSettings.fontDest, {read: false})
    .pipe(clean());
});

gulp.task('default', ['clean', 'iconfont']);