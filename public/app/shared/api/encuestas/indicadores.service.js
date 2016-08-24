/* global angular */

(function () {
    angular
        .module('api.indicadores', [])
        .service('$indicadores',
            function ($resource) {
                var url = 'https://rocky-basin-62683.herokuapp.com/v0/indicadores/:id_encuesta';
                return $resource(url, {
                    id_encuesta: '@id_encuesta'
                });
            });
})();