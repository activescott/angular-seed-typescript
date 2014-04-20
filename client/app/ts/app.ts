/// <reference path="../../../typings/tsd.d.ts" />


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider: INGRouteProvider): any {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

// see http://docs.angularjs.org/api/ngRoute/provider/$routeProvider
interface INGRouteProvider {
	when(path: string, route: any): INGRouteProvider;
	otherwise(params: any): INGRouteProvider;
}
