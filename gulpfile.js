var gulp = require('gulp'),
    nodemon = require('nodemon'),
    gulpMocha = require('gulp-mocha');

gulp.task('default', function () {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 4000
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', function () {
        console.log("Restarting server");
    })
});

gulp.task('test', function () {
    gulp.src('tests/*.js', {read: false})
        .pipe(gulpMocha({ reporter: 'nyan'}));
})