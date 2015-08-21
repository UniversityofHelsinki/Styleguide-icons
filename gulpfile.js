var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

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
    .pipe(iconfontCss({
      fontName: iconFontSettings.fontName,
      targetPath: iconFontSettings.targetCssPath,
      fontPath: iconFontSettings.fontCssPath
    }))
    .pipe(iconfont({
      fontName: iconFontSettings.fontName,
      appendUnicode: true,
      normalize: true,
      descent: 11
     }))
    .pipe(gulp.dest(iconFontSettings.fontDest));
});

gulp.task('default', ['iconfont']);