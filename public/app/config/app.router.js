/* global angular*/
(function () {

    var Router = function ($routeProvider) {

        var baseUrl = 'app/modules/';


        $routeProvider.when('/tipo-encuesta', {
            templateUrl: baseUrl + 'crear-encuesta/views/tipo-encuesta.view.html',
            controller: 'TipoEncuestaController'
        });

        // Inicio
        // $routeProvider.when('/', {
        //     templateUrl: baseUrl + 'inicio/views/inicio.view.html',
        //     controller: 'InicioController'
        // });


        // Crear
        $routeProvider.when('/crear', {
            templateUrl: baseUrl + 'crear-encuesta/views/crear.view.html',
            controller: 'CrearEncuestaController'
        });

        // // Calendario
        // $routeProvider.when('/calendario', {
        //     templateUrl: baseUrl + 'calendario/views/calendario.view.html',
        //     controller: 'CalendarioController'
        // });


        // // Agregar categoria
        // $routeProvider.when('/categorias', {
        //     templateUrl: baseUrl + 'categorias/views/categorias.view.html',
        //     controller: 'CategoriasController'
        // });


        // // Agregar pregunta satisfaccion
        // $routeProvider.when('/preguntas', {
        //     templateUrl: baseUrl + 'preguntas/views/preguntas.view.html',
        //     controller: 'PreguntasController'
        // });


        // // Agregar pregunta categoria
        // $routeProvider.when('/preguntas-cat', {
        //     templateUrl: baseUrl + 'preguntas/views/preguntas-cat.view.html',
        //     controller: 'PreguntasCatController'
        // });


        // // Resumen
        // $routeProvider.when('/resumen', {
        //     templateUrl: baseUrl + 'resumen/views/resumen.view.html',
        //     controller: 'ResumenController'
        // });


        // // Generar codigo
        // $routeProvider.when('/generar', {
        //     templateUrl: baseUrl + 'generar/views/generar.view.html',
        //     controller: 'GenerarCodigoController'
        // });


        // // Detalle
        // $routeProvider.when('/detalle/:id_encuesta', {
        //     templateUrl: baseUrl + 'detalle/views/detalle.view.html',
        //     controller: 'DetalleEncuestaController'
        // });

    };

    Router.$inject = ['$routeProvider'];

    angular
        .module('app')
        .config(Router);
})();