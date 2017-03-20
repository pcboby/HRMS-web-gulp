'use strict';
angular.module('app')
    .controller('compensationAnnualRevenueOverview', function($scope) {

        $scope.data_subsidy=[{
            label:'岗位津贴',
            value:'2000',
            color:'#78d6f5'
        },{
            label:'外派补助',
            value:'5027.49',
            color:'#7897f5'
        }]

        $scope.data_bonus=[{
            label:'年度奖金',
            value:'2000',
            color:'#ffc000'
        },{
            label:'及时激励',
            value:'5027.49',
            color:'#348faa'
        },{
            label:'多元化激励',
            value:'1000',
            color:'#f58d36'
        },{
            label:'特别效益奖',
            value:'3000',
            color:'#54bc9b'
        }]

        $scope.data_other=[{
            label:'加班工资',
            value:'2000',
            color:'#a9d86e'
        },{
            label:'离职结算',
            value:'5027.49',
            color:'#f9a312'
        },{
            label:'离职补尝',
            value:'1000',
            color:'#5aafe8'
        }]

        $scope.data_insurance=[{
            label:'养老保险',
            value:'31920',
            color:'#3bc6bf'
        },{
            label:'医疗保险',
            value:'14936.49',
            color:'#ff7460'
        },{
            label:'住房公积金',
            value:'11400',
            color:'#42aaf3'
        },{
            label:'工伤保险',
            value:'321',
            color:'#8471dd'
        },{
            label:'失业保险',
            value:'2052',
            color:'#fecd08'
        },{
            label:'生育保险',
            value:'1140',
            color:'#e74c3c'
        }]
        $('.list-columntree').each(function(idx, e) {
            $(e).find('ul').width($(e).find('li').length * 40);
                // .scrollbar();
        });
        $('#chartAnnual').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                spacing: [20, 0, 0, 0]
            },
            title: {
                floating: true,
                text: '年度总收入'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    colors: ['#54bc9b', '#348faa', '#8562a4', '#f14946', '#f58d36', '#f1469a'],
                    dataLabels: {
                        enabled: false,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    },
                    point: {
                        events: {
                            // mouseOver: function(e) { // 鼠标滑过时动态更新标题
                            //     // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                            //     chart.setTitle({
                            //         text: e.target.name + '\t' + e.target.y + ' %'
                            //     });
                            // }// , 
                            click: function(e) { // 同样的可以在点击事件里处理
                                chart.setTitle({
                                    text: e.point.name + '\t' + e.point.y + ' %'
                                });
                            }
                        }
                    },
                }
            },
            series: [{
                type: 'pie',
                innerSize: '65%',
                name: '比例',
                data: [{
                    name: '工资',
                    y: 15.0,
                    sliced: true,
                    selected: true
                }, {
                    name: '津贴补助',
                    y: 30
                }, {
                    name: '奖金',
                    y: 40
                }, {
                    name: 'TUP',
                    y: 6
                }, {
                    name: '福利',
                    y: 4
                }, {
                    name: '其它',
                    y: 5
                }]
            }]
        }, function(c) {
            // 环形图圆心
            var centerY = c.series[0].center[1],
                titleHeight = parseInt(c.title.styles.fontSize);
            c.setTitle({
                y: centerY + titleHeight / 2
            });
            // chart = c;
        });
    });
