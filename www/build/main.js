webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_survey_create_page2__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyCreatePage = (function () {
    function SurveyCreatePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.showNextButton = false;
        this.answers = ['item1', 'item2', 'item3', 'item4'];
    }
    SurveyCreatePage.prototype.createAnswer = function () {
        this.answers.push("item" + (this.answers.length + 1));
        this.showNextButton = false;
    };
    SurveyCreatePage.prototype.deleteAnswer = function (index) {
        this.answers.splice(index, 1);
        // Check exits answer
        if (this.answers.length == 0)
            this.showNextButton = true;
    };
    SurveyCreatePage.prototype.nextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_survey_create_page2__["a" /* SurveyCreate2Page */]);
    };
    return SurveyCreatePage;
}());
SurveyCreatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-survey-create',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\survey\create\survey-create.html"*/'<ion-header>\n\n    <ion-navbar style="background-color: #fff">\n\n        <ion-title>\n\n            <h4 class="">Building A Poll</h4>\n\n        </ion-title>\n\n        <!-- <ion-buttons end>\n\n            <button class="btn btn-success">\n\n                NEXT\n\n            </button>\n\n        </ion-buttons> -->\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n            <h3>Poll Question: </h3>\n\n        </div>\n\n        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n            <input type="text" class="form-control" />\n\n        </div>\n\n    </div>\n\n    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n            <h3>Answer Choices: </h3>\n\n        </div>\n\n        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n            <div class="input-group" style="margin: 3% 0;" *ngFor="let item of answers; let i = index;">\n\n                <span class="input-group-addon" id="basic-addon1">{{i+1}}</span>\n\n                <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1">\n\n                <span class="input-group-btn">\n\n                    <button class="btn btn-secondary" type="button" (click)="deleteAnswer(i)">X</button>\n\n                </span>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin: 3% 0;">\n\n        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n            <button class="btn btn-blue form-control" (click)="createAnswer()">Create other answer</button>\n\n        </div>\n\n    </div>\n\n\n\n\n\n    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin: 3% 0;" [hidden]="showNextButton">\n\n        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n            <button type="button" class="btn btn-success form-control" (click)="nextPage()">Next</button>\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\survey\create\survey-create.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], SurveyCreatePage);

//# sourceMappingURL=survey-create.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigations_tabs__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.goTo = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__navigations_tabs__["a" /* TabsPage */], {
            item: item
        });
        // this.navCtrl.push(HomePage);
        //this.navCtrl.setRoot(HomePage);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\login\login.html"*/'<!--<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>-->\n\n\n\n<ion-content no-padding style="background: #34495e;">\n\n    <div class="" style="margin: 0 10%; margin-top: 25%">\n\n        <div class="text-center">\n\n            <h4 style="color: #fff">Sign in</h4>\n\n        </div>\n\n        <div>\n\n            <div>\n\n                <button class="btn btn-success" style="width:100%;margin: 6px 0;">\n\n                    <span class="glyphicon glyphicon-phone" ></span> \n\n                    <span> Phone Number</span>\n\n                </button>\n\n            </div>\n\n            <div>\n\n                <button class="btn btn-primary" style="width:100%;margin: 6px 0;">\n\n                    <span class="glyphicon glyphicon-user"></span> \n\n                    Facebook\n\n                </button>\n\n            </div>\n\n            <div>\n\n                <button class="btn btn-danger" style="width:100%;margin: 6px 0;">\n\n                    <span class="glyphicon glyphicon-envelope"></span> \n\n                    Google\n\n                </button>\n\n            </div>\n\n        </div>\n\n        <div style="margin-top: 5%;">\n\n            <a>\n\n                <p class="text-center" style="color:#fff">\n\n                    <u>Or sign in with your account</u>\n\n                </p>\n\n            </a>\n\n        </div>\n\n\n\n        <div style="margin-top: 25%;">\n\n            <div class="input-group">\n\n                <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-envelope"></span></span>\n\n                <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">\n\n            </div>\n\n            <div class="input-group">\n\n                <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-lock"></span></span>\n\n                <input type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">\n\n            </div>\n\n            <button class="btn btn-info" style="width:100%;margin: 6px 0;" (click)="goTo()">\n\n                <span> Sign in</span>\n\n            </button>\n\n            <div style="margin-top: 5%;">\n\n                <a>\n\n                    <p class="text-center" style="color:#fff">\n\n                        <u>Forgot password?</u>\n\n                    </p>\n\n                </a>\n\n            </div>\n\n            <div style="margin-top: 25%;">\n\n                <a>\n\n                    <h4 class="text-center" style="color:#fff">\n\n                        Sign up\n\n                    </h4>\n\n                </a>\n\n            </div>\n\n        </div>\n\n\n\n\n\n        <div></div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_survey__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_history__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__survey_survey__["a" /* SurveyPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_4__history_history__["a" /* HistoryPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__["a" /* MyProfilePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tabs',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\navigations\tabs.html"*/'<!-- <ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Ionic Blank\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-tabs>\n\n    <ion-tab tabIcon="ios-home"  [root]="tab1" tabTitle="Home"></ion-tab>\n\n    <ion-tab tabIcon="ios-paper"  [root]="tab2" tabTitle="Poll"></ion-tab>\n\n    <ion-tab tabIcon="ios-clock"  [root]="tab3" tabTitle="History"></ion-tab>\n\n    <ion-tab tabIcon="ios-person" [root]="tab4" tabTitle="Profile"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\navigations\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePage = (function () {
    function HomePage() {
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            HOME\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-item>\n\n        <ion-label>Your Poll List: </ion-label>\n\n    </ion-item>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>My Neighbor Totoro</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>Raiders of the Lost Ark</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>Ghostbusters</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>Batman</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>Back to the Future</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>The Empire Strikes Back</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>The Terminator</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_create_survey_create__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_detail_survey_detail__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveyPage = (function () {
    function SurveyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SurveyPage.prototype.create = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__survey_create_survey_create__["a" /* SurveyCreatePage */]);
    };
    SurveyPage.prototype.goToDetailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__survey_detail_survey_detail__["a" /* SurveyDetailPage */]);
    };
    return SurveyPage;
}());
SurveyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-survey',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\survey\survey.html"*/'<ion-header>\n\n    <ion-navbar style="background-color: #fff">\n\n        <ion-title>\n\n            <h4 class="">Polls</h4>\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only style="color: #ff9e48" (click)="create()">\n\n                <ion-icon name="ios-add-circle"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="">\n\n        <div class="" style="padding:5%;">\n\n            <div class="input-group">\n\n                <input type="text" class="form-control search-border" placeholder="Search for..." aria-label="Search for...">\n\n                <span class="input-group-btn ">\n\n                    <button class="btn">\n\n                        <span class="glyphicon glyphicon-search"></span>\n\n                    </button>\n\n                </span>\n\n            </div>\n\n        </div>\n\n\n\n        <div class="list-data">\n\n            <div class="item-data col-lg-12 col-md-12 col-sm-12 nopadding">\n\n                <!-- <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 nopadding">\n\n                    <img src="/assets/images/background2.jpg" alt="" class="list-data-image">\n\n                </div> -->\n\n\n\n                <div class="item-data-detail col-lg-10 col-md-10 col-sm-10 col-xs-10">\n\n                    <table>\n\n                        <tr>\n\n                            <td>\n\n                                <span style="font-size: 20px; font-weight: bold;">Title</span>\n\n                            </td>\n\n                        </tr>\n\n                        <tr>\n\n                            <td>\n\n                                <i>12/07/2017</i>\n\n                            </td>\n\n                        </tr>\n\n                    </table>\n\n                </div>\n\n                <button (click)="goToDetailPage()" style="min-height:50px; background-color:#ff9e48; color:#fff" class="col-lg-2 col-md-2 col-sm-2 col-xs-2 nopadding">\n\n                    <span class="glyphicon glyphicon-check"></span>\n\n                </button>\n\n\n\n            </div>\n\n\n\n            <div class="item-data col-lg-12 col-md-12 col-sm-12 nopadding">\n\n                <!-- <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 nopadding">\n\n                    <img src="/assets/images/background2.jpg" alt="" class="list-data-image">\n\n                </div> -->\n\n\n\n                <div class="item-data-detail col-lg-10 col-md-10 col-sm-10 col-xs-10">\n\n                    <table>\n\n                        <tr>\n\n                            <td>\n\n                                <span style="font-size: 20px; font-weight: bold;">Title</span>\n\n                            </td>\n\n                        </tr>\n\n                        <tr>\n\n                            <td>\n\n                                <i>12/07/2017</i>\n\n                            </td>\n\n                        </tr>\n\n                    </table>\n\n                </div>\n\n                <button style="min-height:50px; background-color:#ff9e48; color:#fff" class="col-lg-2 col-md-2 col-sm-2 col-xs-2 nopadding">\n\n                    <span class="glyphicon glyphicon-check"></span>\n\n                </button>\n\n\n\n            </div>\n\n\n\n            <div class="item-data col-lg-12 col-md-12 col-sm-12 nopadding">\n\n                <!-- <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 nopadding">\n\n                    <img src="/assets/images/background2.jpg" alt="" class="list-data-image">\n\n                </div> -->\n\n\n\n                <div class="item-data-detail col-lg-10 col-md-10 col-sm-10 col-xs-10">\n\n                    <table>\n\n                        <tr>\n\n                            <td>\n\n                                <span style="font-size: 20px; font-weight: bold;">Title</span>\n\n                            </td>\n\n                        </tr>\n\n                        <tr>\n\n                            <td>\n\n                                <i>12/07/2017</i>\n\n                            </td>\n\n                        </tr>\n\n                    </table>\n\n                    <!-- <p>\n\n                        \n\n                        \n\n                    </p> -->\n\n\n\n                </div>\n\n                <button style="min-height:50px; background-color:#ff9e48; color:#fff" class="col-lg-2 col-md-2 col-sm-2 col-xs-2 nopadding">\n\n                    <span class="glyphicon glyphicon-check"></span>\n\n                </button>\n\n\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\survey\survey.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], SurveyPage);

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyCreate2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyCreate2Page = (function () {
    function SurveyCreate2Page(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.allowChecked = false;
        this.includeChecked = true;
    }
    SurveyCreate2Page.prototype.change = function (item) {
        var _this = this;
        if (item) {
            var prompt_1 = this.alertCtrl.create({
                title: '',
                message: "Maximum number of items that can be selected? ",
                inputs: [
                    {
                        name: 'Number',
                        placeholder: '0'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function (data) {
                            _this.allowChecked = false;
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Save',
                        handler: function (data) {
                            console.log('Saved clicked');
                        }
                    }
                ]
            });
            prompt_1.present();
        }
    };
    return SurveyCreate2Page;
}());
SurveyCreate2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-survey-create-page2',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\survey\create\survey-create-page2.html"*/'<ion-header>\n\n    <ion-navbar style="background-color: #fff">\n\n        <ion-title>\n\n            <h4 class="">Options</h4>\n\n        </ion-title>\n\n        <!-- <ion-buttons end>\n\n                <button class="btn btn-success">\n\n                    NEXT\n\n                </button>\n\n            </ion-buttons> -->\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <!-- <ion-list>\n\n        <ion-item *ngFor="#item of items">\n\n            <ion-label>{{item}}</ion-label>\n\n            <ion-checkbox (change)="change($event, item)"></ion-checkbox>\n\n        </ion-item>\n\n    </ion-list> -->\n\n    <!-- <h3 class="text-center" style="color: #ff741b"></h3> -->\n\n    <ion-item>\n\n        <ion-label class="label">Include an "Other, please specify:" text box</ion-label>\n\n        <ion-checkbox checked="includeChecked" [(ngModel)]="includeChecked"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label class="">Allow multiple selections</ion-label>\n\n        <ion-checkbox checked="allowChecked" [(ngModel)]="allowChecked" (ionChange)="change(allowChecked)"></ion-checkbox>\n\n    </ion-item>\n\n    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bottom" style="margin: 3% 0;">\n\n        <button class="btn btn-primary form-control">Save</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\survey\create\survey-create-page2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SurveyCreate2Page);

//# sourceMappingURL=survey-create-page2.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_survey_detail_chart__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_survey_create__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveyDetailPage = (function () {
    function SurveyDetailPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.header = "Poll Question";
        this.answers = [
            { name: "Item 1", checked: false },
            { name: "Item 2", checked: false },
            { name: "Item 3", checked: false },
            { name: "Item 4", checked: false },
        ];
    }
    SurveyDetailPage.prototype.checkedItem = function (item) {
        item.checked = item.checked ? false : true;
    };
    SurveyDetailPage.prototype.goToPollChart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_survey_detail_chart__["a" /* SurveyDetailChartPage */]);
    };
    SurveyDetailPage.prototype.goToEditPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_survey_create__["a" /* SurveyCreatePage */]);
    };
    return SurveyDetailPage;
}());
SurveyDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-survey-detail',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\survey\detail\survey-detail.html"*/'<ion-header>\n\n    <ion-navbar style="background-color: #fff">\n\n        <ion-title>\n\n            <h4 class="">{{header}}</h4>\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="goToEditPage()">\n\n                <ion-icon name="cog"></ion-icon>\n\n            </button>\n\n            <!-- <ion-icon class="icon" name="cog" ></ion-icon> -->\n\n            <!-- <button class="btn btn-organe">E</button> -->\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <!-- <ion-list>\n\n            <ion-item *ngFor="#item of items">\n\n                <ion-label>{{item}}</ion-label>\n\n                <ion-checkbox (change)="change($event, item)"></ion-checkbox>\n\n            </ion-item>\n\n        </ion-list> -->\n\n    <!-- <h3 class="text-center" style="color: #ff741b"></h3> -->\n\n    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bottom">\n\n        <div>\n\n            <timer></timer>\n\n        </div>\n\n        <h3>What\'s your favorite subject?</h3>\n\n        <div>\n\n            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n                <div class="input-group" style="margin: 3% 0;" *ngFor="let item of answers; let i = index;" (click)="checkedItem(item)">\n\n                    <span class="input-group-addon" id="basic-addon1">\n\n                        <ion-checkbox checked="item.checked" [(ngModel)]="item.checked"></ion-checkbox>\n\n                    </span>\n\n                    <input type="text" style="min-height: 60px;" disabled class="form-control" placeholder="" value="{{item.name}}" aria-describedby="basic-addon1">\n\n                </div>\n\n            </div>\n\n            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bottom" style="margin: 3% 0;">\n\n                <button class="btn btn-blue form-control">Vote</button>\n\n            </div>\n\n            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bottom" style="margin: 3% 0;">\n\n                <button class="btn btn-success form-control" (click)="goToPollChart()">View Result</button>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\survey\detail\survey-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], SurveyDetailPage);

//# sourceMappingURL=survey-detail.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyDetailChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyDetailChartPage = (function () {
    function SurveyDetailChartPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        this.options = {
            responsive: true,
            maintainAspectRatio: false
        };
        this.pieChartWidth = 400;
        this.pieChartHeight = 400;
        //this.pieChartHeight = platform.height()+200;
        //this.pieChartWidth = platform.width();
        console.log('W: ' + this.pieChartWidth + ', H: ' + this.pieChartHeight);
    }
    // events
    SurveyDetailChartPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    SurveyDetailChartPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return SurveyDetailChartPage;
}());
SurveyDetailChartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-survey-detail-chart',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\survey\detail\survey-detail-chart.html"*/'<ion-header>\n\n    <ion-navbar style="background-color: #fff">\n\n        <ion-title>\n\n            <h4 class="">Poll Chart</h4>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin-top: 10px">\n\n        <div style="display: block; height: 350px">\n\n            <canvas baseChart \n\n                [data]="pieChartData" \n\n                [labels]="pieChartLabels" \n\n                [chartType]="pieChartType" \n\n                [options]="options"\n\n                (chartHover)="chartHovered($event)"\n\n                (chartClick)="chartClicked($event)"></canvas>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\survey\detail\survey-detail-chart.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
], SurveyDetailChartPage);

//# sourceMappingURL=survey-detail-chart.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryPage = (function () {
    function HistoryPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HistoryPage;
}());
HistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-history',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\history\history.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Ionic Blank\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n      <h1>HISTORY PAGE</h1>\n\n      \n\n  </ion-content>\n\n  '/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\history\history.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HistoryPage);

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_infor_edit_profile_infor__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyProfilePage = (function () {
    function MyProfilePage(nav) {
        this.nav = nav;
        // email: string;
        // constructor() {
        // this.username = "ttran229";
        // this.email = "ttran229@csc.com";
        // }
        this.items = [];
        this.username = "ttran229";
        this.items = [
            {
                'title': 'Edit Password',
                'type': 1
            },
            {
                'title': 'Edit Email',
                'type': 2
            }
        ];
    }
    MyProfilePage.prototype.openNavDetailsPage = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__edit_profile_infor_edit_profile_infor__["a" /* EditProfileInfor */], { item: item });
    };
    return MyProfilePage;
}());
MyProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-my-profile',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\my-profile\my-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      My Profile\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- <ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img class="myprofile-photos" src="./assets/images/IMG_2807.JPG">\n\n      </ion-avatar>\n\n      <h2 class="myprofile-profilephotostext">Profile Photo</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label stacked class="myprofile-profilephotostext">Username</ion-label>\n\n      <ion-input type="text" readonly="true" [(ngModel)]="username"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked class="myprofile-profilephotostext">Password</ion-label>\n\n      <ion-input type="password" name="txtPassword" ></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked class="myprofile-profilephotostext">Retype Password</ion-label>\n\n      <ion-input type="password" name="txtRetyPassword" ></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked class="myprofile-profilephotostext">Email</ion-label>\n\n      <ion-input type="email" name="txtEmail" [(ngModel)]="email"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button name="btnUpdate">Update</button>\n\n</ion-content> -->\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img class="myprofile-photos" src="./assets/images/IMG_2807.JPG">\n\n      </ion-avatar>\n\n      <h2 class="myprofile-profilephotostext">Profile Photo</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-item>\n\n      <p class="myprofile-profilephotostext">Hello {{username}} !</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)">\n\n        <ion-label>{{item.title}}</ion-label>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\my-profile\my-profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileInfor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditProfileInfor = (function () {
    function EditProfileInfor(params) {
        this.isEditPassword = false;
        this.isEditEmail = false;
        this.item = params.data.item;
        switch (this.item.type) {
            case 1:
                this.isEditPassword = true;
                break;
            case 2:
                this.isEditEmail = true;
                break;
        }
    }
    return EditProfileInfor;
}());
EditProfileInfor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\edit-profile-infor\edit-profile-infor.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{ item.title }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <p *ngIf="isEditPassword">password</p>\n\n    <p *ngIf="isEditEmail">email</p> -->\n\n  <div *ngIf="isEditPassword">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label stacked>Password</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>Retype Password</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <button ion-button>Save</button>\n\n  </div>\n\n  <div *ngIf="isEditEmail">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label stacked>Email</ion-label>\n\n        <ion-input type="email"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button>Save</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\edit-profile-infor\edit-profile-infor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], EditProfileInfor);

//# sourceMappingURL=edit-profile-infor.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(348);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_product_product__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_survey_survey__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_survey_create_survey_create__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_survey_create_survey_create_page2__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_survey_detail_survey_detail__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_survey_detail_survey_detail_chart__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_history_history__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_user_register_user_register__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_navigations_tabs__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_my_profile_my_profile__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_profile_infor_edit_profile_infor__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_timer_timer__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_product_product__["a" /* ProductPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_survey_survey__["a" /* SurveyPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_survey_create_survey_create__["a" /* SurveyCreatePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_survey_create_survey_create_page2__["a" /* SurveyCreate2Page */],
            __WEBPACK_IMPORTED_MODULE_13__pages_survey_detail_survey_detail__["a" /* SurveyDetailPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_survey_detail_survey_detail_chart__["a" /* SurveyDetailChartPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_history_history__["a" /* HistoryPage */],
            __WEBPACK_IMPORTED_MODULE_20__components_timer_timer__["a" /* TimerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_user_register_user_register__["a" /* UserRegisterPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_navigations_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_my_profile_my_profile__["a" /* MyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_edit_profile_infor_edit_profile_infor__["a" /* EditProfileInfor */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_product_product__["a" /* ProductPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_survey_survey__["a" /* SurveyPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_survey_create_survey_create__["a" /* SurveyCreatePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_survey_create_survey_create_page2__["a" /* SurveyCreate2Page */],
            __WEBPACK_IMPORTED_MODULE_13__pages_survey_detail_survey_detail__["a" /* SurveyDetailPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_survey_detail_survey_detail_chart__["a" /* SurveyDetailChartPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_history_history__["a" /* HistoryPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_user_register_user_register__["a" /* UserRegisterPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_navigations_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_my_profile_my_profile__["a" /* MyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_edit_profile_infor_edit_profile_infor__["a" /* EditProfileInfor */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 204,
	"./af.js": 204,
	"./ar": 205,
	"./ar-dz": 206,
	"./ar-dz.js": 206,
	"./ar-kw": 207,
	"./ar-kw.js": 207,
	"./ar-ly": 208,
	"./ar-ly.js": 208,
	"./ar-ma": 209,
	"./ar-ma.js": 209,
	"./ar-sa": 210,
	"./ar-sa.js": 210,
	"./ar-tn": 211,
	"./ar-tn.js": 211,
	"./ar.js": 205,
	"./az": 212,
	"./az.js": 212,
	"./be": 213,
	"./be.js": 213,
	"./bg": 214,
	"./bg.js": 214,
	"./bn": 215,
	"./bn.js": 215,
	"./bo": 216,
	"./bo.js": 216,
	"./br": 217,
	"./br.js": 217,
	"./bs": 218,
	"./bs.js": 218,
	"./ca": 219,
	"./ca.js": 219,
	"./cs": 220,
	"./cs.js": 220,
	"./cv": 221,
	"./cv.js": 221,
	"./cy": 222,
	"./cy.js": 222,
	"./da": 223,
	"./da.js": 223,
	"./de": 224,
	"./de-at": 225,
	"./de-at.js": 225,
	"./de-ch": 226,
	"./de-ch.js": 226,
	"./de.js": 224,
	"./dv": 227,
	"./dv.js": 227,
	"./el": 228,
	"./el.js": 228,
	"./en-au": 229,
	"./en-au.js": 229,
	"./en-ca": 230,
	"./en-ca.js": 230,
	"./en-gb": 231,
	"./en-gb.js": 231,
	"./en-ie": 232,
	"./en-ie.js": 232,
	"./en-nz": 233,
	"./en-nz.js": 233,
	"./eo": 234,
	"./eo.js": 234,
	"./es": 235,
	"./es-do": 236,
	"./es-do.js": 236,
	"./es.js": 235,
	"./et": 237,
	"./et.js": 237,
	"./eu": 238,
	"./eu.js": 238,
	"./fa": 239,
	"./fa.js": 239,
	"./fi": 240,
	"./fi.js": 240,
	"./fo": 241,
	"./fo.js": 241,
	"./fr": 242,
	"./fr-ca": 243,
	"./fr-ca.js": 243,
	"./fr-ch": 244,
	"./fr-ch.js": 244,
	"./fr.js": 242,
	"./fy": 245,
	"./fy.js": 245,
	"./gd": 246,
	"./gd.js": 246,
	"./gl": 247,
	"./gl.js": 247,
	"./gom-latn": 248,
	"./gom-latn.js": 248,
	"./he": 249,
	"./he.js": 249,
	"./hi": 250,
	"./hi.js": 250,
	"./hr": 251,
	"./hr.js": 251,
	"./hu": 252,
	"./hu.js": 252,
	"./hy-am": 253,
	"./hy-am.js": 253,
	"./id": 254,
	"./id.js": 254,
	"./is": 255,
	"./is.js": 255,
	"./it": 256,
	"./it.js": 256,
	"./ja": 257,
	"./ja.js": 257,
	"./jv": 258,
	"./jv.js": 258,
	"./ka": 259,
	"./ka.js": 259,
	"./kk": 260,
	"./kk.js": 260,
	"./km": 261,
	"./km.js": 261,
	"./kn": 262,
	"./kn.js": 262,
	"./ko": 263,
	"./ko.js": 263,
	"./ky": 264,
	"./ky.js": 264,
	"./lb": 265,
	"./lb.js": 265,
	"./lo": 266,
	"./lo.js": 266,
	"./lt": 267,
	"./lt.js": 267,
	"./lv": 268,
	"./lv.js": 268,
	"./me": 269,
	"./me.js": 269,
	"./mi": 270,
	"./mi.js": 270,
	"./mk": 271,
	"./mk.js": 271,
	"./ml": 272,
	"./ml.js": 272,
	"./mr": 273,
	"./mr.js": 273,
	"./ms": 274,
	"./ms-my": 275,
	"./ms-my.js": 275,
	"./ms.js": 274,
	"./my": 276,
	"./my.js": 276,
	"./nb": 277,
	"./nb.js": 277,
	"./ne": 278,
	"./ne.js": 278,
	"./nl": 279,
	"./nl-be": 280,
	"./nl-be.js": 280,
	"./nl.js": 279,
	"./nn": 281,
	"./nn.js": 281,
	"./pa-in": 282,
	"./pa-in.js": 282,
	"./pl": 283,
	"./pl.js": 283,
	"./pt": 284,
	"./pt-br": 285,
	"./pt-br.js": 285,
	"./pt.js": 284,
	"./ro": 286,
	"./ro.js": 286,
	"./ru": 287,
	"./ru.js": 287,
	"./sd": 288,
	"./sd.js": 288,
	"./se": 289,
	"./se.js": 289,
	"./si": 290,
	"./si.js": 290,
	"./sk": 291,
	"./sk.js": 291,
	"./sl": 292,
	"./sl.js": 292,
	"./sq": 293,
	"./sq.js": 293,
	"./sr": 294,
	"./sr-cyrl": 295,
	"./sr-cyrl.js": 295,
	"./sr.js": 294,
	"./ss": 296,
	"./ss.js": 296,
	"./sv": 297,
	"./sv.js": 297,
	"./sw": 298,
	"./sw.js": 298,
	"./ta": 299,
	"./ta.js": 299,
	"./te": 300,
	"./te.js": 300,
	"./tet": 301,
	"./tet.js": 301,
	"./th": 302,
	"./th.js": 302,
	"./tl-ph": 303,
	"./tl-ph.js": 303,
	"./tlh": 304,
	"./tlh.js": 304,
	"./tr": 305,
	"./tr.js": 305,
	"./tzl": 306,
	"./tzl.js": 306,
	"./tzm": 307,
	"./tzm-latn": 308,
	"./tzm-latn.js": 308,
	"./tzm.js": 307,
	"./uk": 309,
	"./uk.js": 309,
	"./ur": 310,
	"./ur.js": 310,
	"./uz": 311,
	"./uz-latn": 312,
	"./uz-latn.js": 312,
	"./uz.js": 311,
	"./vi": 313,
	"./vi.js": 313,
	"./x-pseudo": 314,
	"./x-pseudo.js": 314,
	"./yo": 315,
	"./yo.js": 315,
	"./zh-cn": 316,
	"./zh-cn.js": 316,
	"./zh-hk": 317,
	"./zh-hk.js": 317,
	"./zh-tw": 318,
	"./zh-tw.js": 318
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 429;

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductPage = (function () {
    function ProductPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ProductPage;
}());
ProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-product',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\product\product.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h1>PRODUCT PAGE</h1>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\product\product.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ProductPage);

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserRegisterPage = (function () {
    function UserRegisterPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return UserRegisterPage;
}());
UserRegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-user-register',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\user-register\user-register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Register\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    \n\n      <ion-item>\n\n        <ion-label stacked class="user-label-left">Username</ion-label>\n\n        <ion-input type="text" ></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n          <ion-label stacked class="user-label-left">Password</ion-label>\n\n        <ion-input type="password" ></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label stacked class="user-label-left">Email</ion-label>\n\n        <ion-input type="email" ></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button>Register</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\user-register\user-register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], UserRegisterPage);

//# sourceMappingURL=user-register.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the TimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TimerComponent = (function () {
    function TimerComponent() {
    }
    TimerComponent.prototype.ngOnInit = function () {
        this.initTimer();
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    };
    TimerComponent.prototype.hasFinished = function () {
        return this.timer.hasFinished;
    };
    TimerComponent.prototype.pauseTimer = function () {
        this.timer.runTimer = false;
    };
    TimerComponent.prototype.resumeTimer = function () {
        this.startTimer();
    };
    TimerComponent.prototype.initTimer = function () {
        if (!this.timeInSeconds) {
            this.timeInSeconds = 300;
        }
        this.timer = {
            time: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            timeRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.timeRemaining);
    };
    TimerComponent.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    TimerComponent.prototype.startTimer = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
        //this.initTimer();
    };
    TimerComponent.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.timer.runTimer) {
                return;
            }
            _this.timer.timeRemaining--;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.timeRemaining);
            if (_this.timer.timeRemaining > 0) {
                _this.timerTick();
            }
            else {
                _this.timer.hasFinished = true;
            }
        }, 1000);
    };
    return TimerComponent;
}());
TimerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'timer',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\components\timer\timer.html"*/'<div>\n\n  <!-- <ion-item class="no-bottom-border item"> -->\n\n    <h1 text-center class="timer">{{timer.displayTime}}</h1>\n\n  <!-- </ion-item> -->\n\n</div>\n\n<!-- <ion-fab bottom left *ngIf="timer.runTimer && timer.hasStarted && !timer.hasFinished">\n\n  <button ion-fab color="primary" (click)="pauseTimer()">\n\n    <ion-icon name="pause"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n<ion-fab bottom left *ngIf="!timer.runTimer && timer.hasStarted && !timer.hasFinished">\n\n  <button ion-fab color="primary" (click)="resumeTimer()">\n\n    <ion-icon name="play"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n<ion-fab bottom left *ngIf="!timer.hasStarted"> \n\n  <button ion-fab color="primary" (click)="startTimer()" item-right>\n\n    <ion-icon name="play"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n\n\n<ion-fab bottom right *ngIf="!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished">\n\n  <button ion-fab color="danger" (click)="initTimer()" item-left>\n\n    <ion-icon name="refresh"></ion-icon>\n\n  </button>\n\n</ion-fab> -->'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\components\timer\timer.html"*/
    }),
    __metadata("design:paramtypes", [])
], TimerComponent);

//# sourceMappingURL=timer.js.map

/***/ })

},[329]);
//# sourceMappingURL=main.js.map