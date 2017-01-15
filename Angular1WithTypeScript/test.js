/// <reference path="scripts/typings/ng-dialog/ng-dialog.d.ts" />
var TestAngularModule;
(function (TestAngularModule) {
    "use strict";
    var Person = (function () {
        function Person() {
        }
        return Person;
    }());
    TestAngularModule.Person = Person;
    var Test = (function () {
        function Test($http, ngDialog) {
            this._httpService = $http;
            this._ngDialog = ngDialog;
        }
        Test.prototype.setFirsNake = function () {
            this._ngDialog.open({
                template: 'firstDialogId',
                controller: 'TestMyDialog',
                controllerAs: 'd',
            });
            var _self = this;
            this._httpService.get("response.json").then(function (resp) {
                _self.firstName = resp.data.FirstName;
            });
        };
        return Test;
    }());
    TestAngularModule.Test = Test;
})(TestAngularModule || (TestAngularModule = {}));
