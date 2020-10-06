var gulp = require("gulp");
var rename = require("gulp-rename");
var ejs = require("gulp-ejs");
var replace = require("gulp-replace");
var beautify = require("gulp-html-beautify");

gulp.task("ejs", (done) => {
    gulp
        .src(["ejs/*.ejs", "!" + "ejs/_*.ejs"])
        .pipe(ejs({}, {}, { ext: '.html' }))
        .pipe(rename({ extname: ".html" }))
        .pipe(beautify())
        .pipe(gulp.dest("./docs/"));
    done();
});
