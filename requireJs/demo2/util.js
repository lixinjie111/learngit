/**
 * Created by lixinjie on 2017/3/2.
 */
//标准化的
define(['jquery','app'],function($,app){
    /*return {
        show:function () {
            console.log('houdunren.com');
        },
        message:function(){
          console.log('hello');
        },
        mm:function(){
           $('body').css({'background-color':'#ccc'})
        }

    };*/
     
            app.controller('myCtrl',['$scope',function ($scope) {
            $scope.name="wangwu";
        }])

})