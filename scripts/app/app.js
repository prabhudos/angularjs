(function(){

    var services = angular.module('services',[]);

    services.service('baseService', function(){
        this.do = function(){
            console.log('service invoked');
        }
    });

    var contollers = angular.module('contollers',[]);

    contollers.controller('baseController', function($scope){
        $scope.message = 'Test';
    });

    angular.module('app',
    [
        'contollers',
        'services'
    ]);
}());