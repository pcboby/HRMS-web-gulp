'use strict';
angular.module('app', [
        'oc.lazyLoad',
        'mgcrea.ngStrap',
        'ngSanitize',
        "ngResource",
        "ngAnimate",
        'ui.router',
        'app.config',
        'app.routers',
        'app.factorys',
        'app.directives',
        'app.resources',
        'app.filters'
    ])
    .controller('appController', function() {})
    .run(['$rootScope', 'settings', '$state', function($rootScope, settings, $state) {
        $rootScope.$state = $state;
    }]);
