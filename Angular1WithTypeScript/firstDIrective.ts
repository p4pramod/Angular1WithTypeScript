/// <reference path="scripts/typings/angularjs/angular.d.ts" />

namespace TestAngularModule {

    export class EnterKeyPressDirective implements ng.IDirective {

        static instance(): ng.IDirective {
            return new EnterKeyPressDirective();
        }
        
        name: string = "testDir";

        restrict: string = "A";

        template: string = "<h3>this is test directive</h3>";
      
    }
}