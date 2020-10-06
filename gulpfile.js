var gulp = require("gulp");
var rename = require("gulp-rename");
var ejs = require("gulp-ejs");
var replace = require("gulp-replace");
var beautify = require("gulp-html-beautify");
var exhibitData = require('./data/exhibits.json');

gulp.task("build", (done) => {
    gulp
        .src(["ejs/*.ejs", "!" + "ejs/_*.ejs"])
        .pipe(ejs({exhibitData: exhibitData}, {}, { ext: '.html' }))
        .pipe(rename({ extname: ".html" }))
        .pipe(beautify())
        .pipe(gulp.dest("./docs/"));
    done();
});
