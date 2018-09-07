var gulp = require('gulp');
var sass = require('gulp-sass');

let sassFiles = 'assets/styles/sass/**/*.scss',
		cssDest = 'assets/styles/temp/';

gulp.task('styles', function(done) {
	return gulp.src(sassFiles)
		.pipe(sass()).on('error', sass.logError)
		.pipe(gulp.dest(cssDest));
	done()
});

gulp.task('watch', gulp.series('styles', function() {
	gulp.watch(sassFiles, gulp.series('styles'));
}));

gulp.task('html', function() {
	console.log('something cool')
});
