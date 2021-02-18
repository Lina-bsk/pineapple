"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var del = require("del");
var uglify = require("gulp-uglify");

gulp.task("clean", function () {
  return del("build");
});

gulp.task("js", function () {
  return gulp.src("source/js/*.js")
    .pipe(plumber())
    .pipe(gulp.dest("build/js"))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest("build/js"));
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2,svg,ttf,eot}",
    "source/img/**",
    "source/*.html",
    "source/*.php"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task('copy:html', function() {
  return gulp.src('source/*.html')
  .pipe(gulp.dest('build'));
});

gulp.task('copy:img', function() {
  return gulp.src('source/img/**')
  .pipe(gulp.dest("build/img"));
});

gulp.task('copy:fonts', function() {
  return gulp.src('source/fonts/**')
  .pipe(gulp.dest('build/fonts'));
});

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css", "refresh"));
  gulp.watch("source/img/**", gulp.series(['copy:img'], "refresh"));
 
  gulp.watch("source/fonts/**", gulp.series(['copy:fonts'], "refresh"));
  
  gulp.watch("source/*.html", gulp.series(['copy:html'], "refresh"));
  gulp.watch("source/js/*.js", gulp.series("js", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("build", gulp.series("clean", "copy", "css", "js"));
gulp.task("start", gulp.series("build", "server"));
