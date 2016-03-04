var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/enterhero', {
      templateUrl: '/views/templates/enterhero.html',
      controller: 'EnterHeroController'
    })
    .when('/viewhero', {
      templateUrl: '/views/templates/viewhero.html',
      controller: 'ViewHeroController'
    })
    .otherwise({
      redirectTo: 'enterhero'
    });

}]);
