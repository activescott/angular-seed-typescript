/// <reference path="../../typings/tsd.d.ts" />

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version: string): Function {
    return function(scope: ng.IScope, elm: JQuery, attrs: ng.IAttributes): INGDirectiveDefinitionObject {
      elm.text(version);
      return null;
    };
  }]);

// see http://docs.angularjs.org/api/ng/service/$compile#description_comprehensive-directive-api_directive-definition-object
interface INGDirectiveDefinitionObject {

}
