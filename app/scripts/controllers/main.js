'use strict';

/**
 * @ngdoc function
 * @name colossusAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the colossusAppApp
 */
angular.module('colossusAppApp')
  .controller('MainCtrl', function ($scope, apiService, $routeParams) {

    $scope.pools = [], $scope.groups = [], $scope.pool_id = $routeParams.pool_id;


    apiService.getPools().then(function(pools) {
      $scope.groups = pools[0].groups;
      console.log("scope groups", $scope.groups)

    });

    apiService.getPool($routeParams.pool_id).then(function(pool) {
      $scope.pool = pool;
      $scope.stakeOptions = $scope.pool.pool_stake.stakes;
      $scope.pool.selectedOption = $scope.stakeOptions[0];
      console.log("le pool", $scope.pool);
    });

    $scope.toggle = function(selection) {
      selection.selected = !selection.selected;
      console.log(selection);
    }




  });
