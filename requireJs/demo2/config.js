/**
 * Created by lixinjie on 2017/3/1.
 */
require.config({
    baseUrl:'./',
    paths:{
        'hd':'./hd',
        'css':'./js/css',
        'jquery':'./js/jquery-1.11.3',
        'angular':'./js/angular',
        'bootstrap':'./js/bootstrap'
    },
    shim:{
        'bootstrap':{
            'deps':[
                'jquery',
                'css!../demo2/css/bootstrap.css',
                'css!../demo2/css/font-awesome.css'
            ]
        },
        'hd':{
           /* exports:'modal'*/
            init:function(){
                return {
                    modal:modal,
                    success:success
                }
            }
        },
        'angular':{
            exports:"angular"
        }
    },
    urlArgs:"bust="+(new Date()).getTime()
})
/*第二种解决方案*/
require(['util','bootstrap','hd','app'],function(util,bootstrap,hd,app){
   /*$('body').css({'backgroundColor':'red'});*/
   /* util.show();
    util.message();
    util.mm();
    hd.modal();
    hd.success();*/
    angular.bootstrap(document,['myApp']);
   /* var app=angular.module('myApp',[]);
        app.controller('myCtrl',['$scope',function ($scope) {
            $scope.name='张三';
        }]);*/
})

