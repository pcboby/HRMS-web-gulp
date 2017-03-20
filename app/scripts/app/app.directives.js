'use strict';
angular.module('app.directives', [])
    .directive('spinner', ['$rootScope', function($rootScope) {
        return {
            restrict: 'E',
            link: function(scope, element) {
                // by defult hide the spinner bar
                element.addClass('hide'); // hide spinner bar by default

                // display the spinner bar whenever the route changes(the content part started loading)
                $rootScope.$on('$stateChangeStart', function() {
                    element.removeClass('hide'); // show spinner bar
                });

                // hide the spinner bar on rounte change success(after the content loaded)
                $rootScope.$on('$stateChangeSuccess', function() {
                    element.addClass('hide'); // hide spinner bar
                    angular.element('body').removeClass('page-on-load'); // remove page loading indicator
                });

                // handle errors
                $rootScope.$on('$stateNotFound', function() {
                    element.addClass('hide'); // hide spinner bar
                });

                // handle errors
                $rootScope.$on('$stateChangeError', function() {
                    element.addClass('hide'); // hide spinner bar
                });
            }
        };
    }])
    .directive('a', [function() {
        return {
            restrict: 'E',
            link: function(scope, elem, attrs) {
                if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                    elem.on('click', function(e) {
                        e.preventDefault(); // prevent link click for above criteria
                    });
                }
            }
        };
    }])
    .directive('ngChartsColumn', function () {
        return {
            restrict: 'AEC',
            replace:true,
            templateUrl:'tpls/model.charts.column.html',
            scope:{
                $data:"=ngData",
                $height:"@height",
                $step:"@step",
                $mode:"@mode"
            },
            controller:function($scope,$element){
                $scope.getMax=function(){
                    var max=$scope.$step;
                    angular.forEach($scope.$data, function(item,idx){
                        max=Number(item.value)>max?Number(item.value):max
                    });
                    max=((max%$scope.$step>0?1:0)+parseInt(max/$scope.$step))*$scope.$step;
                    console.log('max',max)
                    return max
                }
            },
            link: function (scope, iElement, iAttrs) {
                scope.$step=scope.$step||100;
            }
        };
    });
