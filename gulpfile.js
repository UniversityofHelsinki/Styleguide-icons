var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');

var iconFontSettings = {
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
      fontName: iconFontSettings.fontName,
      appendUnicode: true,
      normalize: true,
      descent: 11
     }))
    .on('glyphs', function(glyphs) {
      gulp.src('icons.css')
        .pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontName: iconFontSettings.fontName,
          fontPath: iconFontSettings.fontCssPath,
          className: 'hy'
        }))
        .pipe(gulp.dest('css/'));
    })
    .pipe(gulp.dest(iconFontSettings.fontDest));
});

gulp.task('default', ['iconfont']);