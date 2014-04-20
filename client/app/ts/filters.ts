/// <reference path="../../../typings/tsd.d.ts" />

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version: any): Function {
    return function(text: string): any {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
