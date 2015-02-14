var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var nodeSass = require('gulp-sass');
var del = require('del');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var autoprefixer   = require('gulp-autoprefixer');

gulp.task('clean', function () {
  del(['./build/*']);
});

gulp.task('copy', function () {
  gulp.src('./docs/index.html')
    .pipe(gulp.dest('build'));

  gulp.src('./docs/img/*')
    .pipe(gulp.dest('build/img'));

  gulp.src('./bower_components/foundation-apps/iconic/*')
    .pipe(gulp.dest('build/img/iconic'));
});

gulp.task('sass', function () {
  return sass('docs/', {
    loadPath: ['bower_components', 'node_modules'],
    style: 'nested',
    bundleExec: true
  })
  .on('error', function (err) { console.log(err.message); })
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'ie 10']
  }))
  .pipe(gulp.dest('build'));
});

gulp.task('server', function (callback) {
  var myConfig = require('./webpack.config.js');
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("dev_docs")
      }
    })
  );
  var webpackCompiler = webpack(myConfig, function(err, stats) {
  });

  new WebpackDevServer(webpackCompiler, {
    contentBase: './build',
    hot: true,
    debug: true
  }).listen(8000, process.env.HOST_IP || 'localhost', function (err, result) {
    
  });
});

gulp.task('watch', ['copy', 'sass'], function () {
  gulp.watch(['./docs/**/*{scss,sass}', './scss/**/*{scss,sass}'], ['sass']);
  gulp.watch(['./docs/index.html', './docs/img/*'], ['copy']);
});

gulp.task('default', ['watch', 'server']);


