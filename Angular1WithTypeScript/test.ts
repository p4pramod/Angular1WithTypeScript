

module TestAngularModule {
    "use strict";

    export class Person {
        FirstName: string;
    }


    export class Test {

        firstName: string;

        private _httpService: ng.IHttpService;

        private _ngDialog: any;

        constructor($http: ng.IHttpService, ngDialog:any ) {
            this._httpService = $http;
            this._ngDialog = ngDialog;
        }

        setFirsNake(): void {

            this._ngDialog.open({
                template: 'firstDialogId',
                controller: 'TestMyDialog',
                controllerAs: 'd',
            });

            var _self: Test = this;
            this._httpService.get("response.json").then(function (resp: ng.IHttpPromiseCallbackArg<Person>): void {
                _self.firstName = resp.data.FirstName;
            });
        }
    }
}