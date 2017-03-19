'use strict';
angular.module('app.config', [])
    //配置angular页面标识，默认:{{}}
    // .config(['$interpolateProvider', function($interpolateProvider) {
    //     // $interpolateProvider.startSymbol('//');
    //     // $interpolateProvider.endSymbol('//');
    // }])
    //配置路由替代字符，默认:!(1.6＋版)
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }])
    //配置预加载默认值
    .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            // debug: false,
            // event: false
        });
    }])
    //设置初始变量
    .config(['$controllerProvider', function($controllerProvider) {
        $controllerProvider.allowGlobals();
    }]);
