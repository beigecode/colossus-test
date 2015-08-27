'use strict';

/**
 * @ngdoc service
 * @name colossusAppApp.apiService
 * @description
 * # apiService
 * Service in the colossusAppApp.
 */
angular.module('colossusAppApp')
  .service('apiService', function ($http, $q) {

    function getPools() {

      var request = $http({
        method: "get",
        url: "https://colossusdevtest.herokuapp.com/api/pools.json",
        params: { action: "get" }
      });

      return request.then(handleSuccess, handleError);
    }

    function getPool(id) {

      var request = $http({
        method: "get",
        url: "https://colossusdevtest.herokuapp.com/api/pools/" + id + ".json",
        params: { action: "get" }
      });

      return request.then(handleSuccess, handleError);
    }


    function handleSuccess(response) {
      return response.data;
    }

    function handleError(response) {
      if ( !angular.isObject(response.data) || !response.data.message ) {
          return $q.reject("Error occured");
      }
      return $q.reject(response.data.message) ;
    }

    return { getPools: getPools,
             getPool: getPool };

  });
