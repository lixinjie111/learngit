/**
 * Created by lixinjie on 2017/2/10.
 */
var gulp=require("gulp");
var less=require('gulp-less');
var cssnano=require('gulp-cssnano');
var browserSync=require('browser-sync').create();
//注册一个任务；
gulp.task('copy',function () {
    console.log('hello world');
    //gulp.src//娶一个文件
    //复制文件
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'));
})
gulp.task('style',function(){
    gulp.src('src/style/*.less')
        .pipe(less())//转为css
        .pipe(cssnano())//css压缩
        .pipe(gulp.dest('dist/css/'))
});
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
/*gulp常用插件
1.gulp less
2.gulp-connect 创建本地服务器；
3.gulp-concat 合并文件
4.gulp-uglify 最小化js文件
5. gulp-rename 重命名
6.gulp-minify-html最小化html
*/





gulp.task('dist',function () {
    gulp.watch('src/index.html',['copy']);
    gulp.watch('src/style/*.less',['style']);
})
