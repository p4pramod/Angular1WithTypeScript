/// <reference path="test.ts" />
var TestAngularModule;
(function (TestAngularModule) {
    "use strict";
    angular.module("app", ["ngDialog"]).controller("ctrl", TestAngularModule.Test).controller("TestMyDialog", TestAngularModule.MyDialog);
})(TestAngularModule || (TestAngularModule = {}));
