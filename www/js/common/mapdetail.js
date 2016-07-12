'use strict';
angular.module('emission.main.common.mapdetail',['ui-leaflet',
                                      'emission.services',
                                      'emission.main.diary.services'])

.controller("CommonMapDetailCtrl", function($scope, $stateParams,
                                        CommonGraph, DiaryHelper) {
    $scope.tripId = $stateParams.tripId;
    $scope.trip = CommonGraph.data.cTripId2ObjMap[$scope.tripId];

      var distribution = $scope.trip.common_hour_distribution;
      var vals = [];
      for (var i = 0; i < 24; i++) {
        if (distribution.get(i)) {
          vals.push([i, distribution.get(i)]);
        } else {
          vals.push([i, 0]);
        }
      }
      $scope.getFormattedDuration = DiaryHelper.getFormattedDuration;
      $scope.data =  [{
                "key" : "Quantity" ,
                "bar": true,
                "values" : vals
      }];
      $scope.options = {
        chart: {
            type: 'historicalBarChart',
            height: 150,
            
            margin : {
                top: 10,
                right: 40,
                bottom: 65,
                left: 40
            },
            x: function(d){return d[0];},
            y: function(d){return d[1];},
            showValues: true,
            valueFormat: function(d){
                return d3.format(',.1f')(d);
            },
            duration: 100,
            xAxis: {
                axisLabel: 'Distribution of start hours',
                tickFormat: function(d) {
                    return d;
                },
                
                showMaxMin: false
            },
            yAxis: {
                axisLabel: 'Trips Count',
                tickFormat: function(d){
                    return d;
                }
            }
        }
    };
      
});


