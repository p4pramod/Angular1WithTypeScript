var TestAngularModule;
(function (TestAngularModule) {
    "use strict";
    var MyDialog = (function () {
        function MyDialog() {
            this.firstName = "Pramod";
        }
        return MyDialog;
    }());
    TestAngularModule.MyDialog = MyDialog;
})(TestAngularModule || (TestAngularModule = {}));
