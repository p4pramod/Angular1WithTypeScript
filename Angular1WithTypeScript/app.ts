/// <reference path="test.ts" />
/// <reference path="firstdirective.ts" />

module TestAngularModule {
    "use strict";

    angular.module("app", ["ngDialog"])
        .controller("ctrl", Test)
        .controller("TestMyDialog", MyDialog)
        .directive("ngEnter", EnterKeyPressDirective.instance);
        

}