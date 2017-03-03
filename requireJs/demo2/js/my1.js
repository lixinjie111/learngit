/**
 * Created by lixinjie on 2017/1/19.
 */
angular.module("myApp",["ng","ngRoute","ngAnimate"])
    .controller("startCtrl",function ($scope,$location) {
        $scope.msg="这是起始页";
        $scope.jump=function(){
            $location.path("/detail")
        }

    })
    .controller("mianCtrl",function ($scope) {
        $scope.msg="这是主页";

    })

    .controller("detailCtrl",function ($scope,$routeParams) {
        $scope.msg="这是详情页";
        console.log($routeParams)
        console.log($routeParams.uname)
        console.log($routeParams.height)

    })
    .controller("orderCtrl",function ($scope) {

    })
    .controller("myordersCtrl",function ($scope) {

    })
    .config(function ($routeProvider) {
        $routeProvider
        .when('/start',{
            templateUrl:"template/start.html",
            controller:"startCtrl"
         })
        .when('/main',{
            templateUrl:"template/main.html",
            controller:"mianCtrl"
        })
        .when('/detail/:uname/:age/:height',{
            templateUrl:"template/detail.html",
            controller:"detailCtrl"
        })
        .when('/order',{
            templateUrl:"template/order.html",
            controller:"orderCtrl"
        })
        .when('/myOrders',{
            templateUrl:"template/myOrders.html",
            controller:"myordersCtrl"
        })
        .otherwise({
            redirectTo:'/start'
         })    
});
