/* global angular, moment */
(function () {

    var Controller = function ($scope, $rootScope, $window, $internal, $tipoEncuesta) {

        //$rootScope.spin = true;

        
        $scope.init = function(){
            $scope.tipoEncuesta = null;
            $internal.encuesta = {};
            $internal.preguntas = [ { pregunta: '', respuestas: []  } ];
        };

        $scope.tipoEncuestaList = $tipoEncuesta
            .query(function () {
                $rootScope.spin = false;
            }, function (e) {
                $rootScope.spin = false;
                console.log(e);
            });

        $scope.select = function(tipoEncuesta){
            for(var i in  $scope.tipoEncuestaList){
                $scope.tipoEncuestaList[i].select = false;
            }
            tipoEncuesta.select = true;
            $scope.tipoEncuesta = tipoEncuesta;
        };

        $scope.siguiente = function () {
            if($scope.tipoEncuesta!==null){
                $internal.encuesta.tipoEncuesta = $scope.tipoEncuesta;
                $window.location = '#/crear';
            } else {
                $rootScope.alert = true;
                $rootScope.mensajeAlerta = "Debes llenar todos los campos.";
            }
        };
        $scope.init();
    };

    Controller.$inject = ['$scope', '$rootScope', '$window', '$internal', '$tipoEncuesta'];

    angular
        .module('crearEncuesta')
        .controller('TipoEncuestaController', Controller);
})();