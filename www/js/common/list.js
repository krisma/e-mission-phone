angular.module('emission.main.common.list',['ui-leaflet',
                                      'ionic-datepicker',
                                      'emission.main.common.services',
                                      'emission.services'])

.controller("CommonListCtrl", function($window, $scope, $rootScope, $ionicPlatform, $state,
                                    CommonGraph) {
  console.log("controller CommonListCtrl called");
  $scope.places = CommonGraph.data.graph.common_places;
  $scooe.geojson = CommonGraph.data.geojson;

  angular.extend($scope, {
      defaults: {
          zoomControl: false,
          dragging: false,
          zoomAnimation: true,
          touchZoom: false,
          scrollWheelZoom: false,
          doubleClickZoom: false,
          boxZoom: false,
      }
  });

});
