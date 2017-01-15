var app = angular.module('NearMeApp', ['leaflet-directive', 'ngRoute']);

app.config(function($routeProvider)
  {
  $routeProvider
  .when('/about', {
    controller: 'AboutControllec',
    templateUrl: 'views/about.html'
  })
    .when('/', {
    controller: 'MainController',
    templateUrl: 'views/main.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});