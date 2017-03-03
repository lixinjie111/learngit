angular.module('myApp',['ng','ngRoute','ngAnimate'])
  .controller('startCtrl',function($scope,$location){
        $scope.jump=function(){
        $location.path('/main');}
       
    

    })
  .controller('mainCtrl',function($scope,$location,$routeParams,$route){
      $scope.jump1=function(){
          $location.path('/detail');}
        $scope.msg='我爱你1';
        console.log($route)
        console.log($route.current.locals.$scope)
        console.log($routeParams)
        console.log($routeParams.ename)
        console.log($routeParams.age)
    })
  .controller('detailCtrl',function($scope,$routeParams,$location){
      $scope.jump2=function(){
          $location.path('/start');}
        console.log($routeParams)
        $scope.msg='我爱你2'
    })
  .controller('orderCtrl',function($scope){})
  .controller('myordersCtrl',function($scope){})
  .config(function($routeProvider){//配置路由字典
        $routeProvider
            .when('/start', {
                templateUrl:"template/start.html",
                controller:'startCtrl'
            })
            .when('/main/:ename/:age',
            {templateUrl:"template/main.html",controller:'mainCtrl'})
            .when('/detail',
            {templateUrl:"template/detail.html",controller:'detailCtrl'})
            .when('/order',
            {templateUrl:"template/order.html",controller:'detailCtrl'})
            .when('/myorders',
            {templateUrl:"template/myorders.html",controller:'detailCtrl'})

    })


