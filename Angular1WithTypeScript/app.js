/// <reference path="test.ts" />
/// <reference path="firstdirective.ts" />
var TestAngularModule;
(function (TestAngularModule) {
    "use strict";
    angular.module("app", ["ngDialog"])
        .controller("ctrl", TestAngularModule.Test)
        .controller("TestMyDialog", TestAngularModule.MyDialog)
        .directive("ngEnter", TestAngularModule.EnterKeyPressDirective.instance);
})(TestAngularModule || (TestAngularModule = {}));
