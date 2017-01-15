/// <reference path="scripts/typings/angularjs/angular.d.ts" />
var TestAngularModule;
(function (TestAngularModule) {
    var EnterKeyPressDirective = (function () {
        function EnterKeyPressDirective() {
            this.name = "testDir";
            this.restrict = "A";
            this.template = "<h3>this is test directive</h3>";
        }
        EnterKeyPressDirective.instance = function () {
            return new EnterKeyPressDirective();
        };
        return EnterKeyPressDirective;
    }());
    TestAngularModule.EnterKeyPressDirective = EnterKeyPressDirective;
})(TestAngularModule || (TestAngularModule = {}));
