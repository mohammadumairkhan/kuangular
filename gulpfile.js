/**
 * Created by M Umair Khan on 7/24/2014.
 */
var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var usemin      = require('gulp-usemin');
var concat      = require('gulp-concat');
var ngAnnotate  = require('gulp-ng-annotate');
var minifyHtml  = require('gulp-minify-html');
var minifyCss   = require('gulp-minify-css');
var clean       = require('gulp-clean');
var rename      = require('gulp-rename');

gulp.task('ngAnnotate', function () {
    return gulp.src('./app/**/*.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest('app/'));
});

gulp.task('usemin', function() {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [minifyCss(), 'concat'],
            html: [minifyHtml({empty: true})],
            js: [uglify()]
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

gulp.task('buildDistScripts', function() {
    gulp.src(['app/directives/*.js','app/filters/*.js'])
        .pipe(concat('kuangular-build.js'))
        .pipe(gulp.dest('./build/'))
        .pipe(uglify())
        .pipe(rename('kuangular-build-min.js'))
        .pipe(gulp.dest('./build/'))
});

gulp.task('buildApp',['clean','ngAnnotate','usemin']);
gulp.task('buildDist',['clean','ngAnnotate','buildDistScripts']);