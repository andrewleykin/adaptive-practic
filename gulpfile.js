var gulp = require("gulp"),
    sass = require("gulp-sass"),
    group = require("gulp-group-css-media-queries"),
    rigger = require("gulp-rigger"),
    browserSync = require("browser-sync");

// Сервер
gulp.task('server', function () {
    browserSync({
        port: 9000,
        server: {
        baseDir: 'app'
    }
    });   
});

// Sass компиляция
gulp.task('sass',function(){
    return gulp.src(['app/sass/*.sass','app/sass/*.scss'])
    .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
    .pipe(group())
    .pipe(gulp.dest('app/css'));
});

// сгруппировка media
gulp.task('group', function() {
    return gulp.src('app/css/style.css')
    .pipe(group())
    .pipe(gulp.dest('app/css'));
});

// Слежка
gulp.task('watch', function () {
    gulp.watch([
        'app/*html',
        'app/css/*.css',
        'app/sass/**/*.sass',
        'app/js/**/*.js'
    ],['sass']).on('change', browserSync.reload);
});

// Запуск по умолчанию
gulp.task('default', ['server', 'watch']);