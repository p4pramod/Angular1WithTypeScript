/// <reference path="test.ts" />

module TestAngularModule {
    "use strict";

    angular.module("app", ["ngDialog"]).controller("ctrl", Test).controller("TestMyDialog", MyDialog);

}