'use strict';
angular.module('app.routers', [])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {


        // 默认跳转
        $urlRouterProvider.otherwise('/web')
            .when('/web', '/web/Dashboard.html');

        $stateProvider

        //[主框架]

            .state('web', {
                url: '/web',
                views: {
                    'header': {
                        templateUrl: $path_root + 'tpls/page.header.html',
                        controller: 'headerController'
                    },
                    'slider': {
                        templateUrl: $path_root + 'tpls/page.slider.html',
                        controller: 'sliderController'
                    },
                    'wraper': {
                        templateUrl: $path_root + 'tpls/page.wraper.html',
                        controller: 'wraperController'
                    },
                    'footer': {
                        templateUrl: $path_root + 'tpls/page.footer.html',
                        controller: 'footerController'
                    }
                },
                data: {
                    pageTitle: 'web'
                },
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app',
                            insertBefore: '#ng_load_before',
                            files: [
                                $path_root + 'scripts/controllers/controllers.js'
                            ]
                        });
                    }]
                }
            })
            //[首页]
            .state('web.Dashboard', {
                url: '/Dashboard.html',
                views: {
                    'content': {
                        templateUrl: $path_root + 'views/Dashboard/index.html',
                        controller: 'Dashboard'
                    }
                },
                data: {
                    pageTitle: 'Dashboard'
                },
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app',
                            insertBefore: '#ng_load_before',
                            files: [
                                $path_root + 'scripts/controllers/Dashboard/controllers.js'
                            ]
                        });
                    }]
                }
            })
            //[首页]
            .state('web.compensationAnnualRevenueOverview', {
                url: '/compenstaion/annualRevenueOverview.html',
                views: {
                    'content': {
                        templateUrl: $path_root + 'views/compensation/annualRevenueOverview/index.html',
                        controller: 'compensationAnnualRevenueOverview'
                    }
                },
                data: {
                    pageTitle: '年度薪酬福利概览'
                },
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'app',
                            insertBefore: '#ng_load_before',
                            files: [
                                $path_root + 'scripts/controllers/compensation/annualRevenueOverview/controllers.js'
                            ]
                        });
                    }]
                }
            });

    }]);
