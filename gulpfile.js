const gulp = require('gulp');
const ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');




const compilerOptions = {
  "target": "es2015",
  "module": "commonjs",
  "moduleResolution": "node",
  "noImplicitAny": false,
  "suppressImplicitAnyIndexErrors": true,
  "removeComments": true,
  "sourceMap": true,
  "typeRoots": [
    "node_modules/@types"
  ]
}

gulp.task('tsc', _ => {
  return gulp.src('src-node/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts(compilerOptions))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/'))
})

gulp.task('watch', ['tsc'], _ => {
  return gulp.watch('src-node/**/*.ts', ['tsc'])
})