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
            if (isValid()) {
                $internal.encuesta.titulo = $scope.titulo;
                $internal.encuesta.descripcion = $scope.descripcion;
                $internal.encuesta.autor = $scope.autor;
                $internal.encuesta.direccion = $scope.direccion;
                $internal.encuesta.valides = $scope.vigencia;
                $internal.encuesta.tiempo = $scope.duracionPregunta.time;
                $internal.encuesta.tipoEncuesta = $scope.tipoEncuesta;
                if ($internal.encuesta.tipoEncuesta.id == 1) {
                    $window.location = '#/preguntas';
                } else {
                    $window.location = '#/categorias';
                }
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