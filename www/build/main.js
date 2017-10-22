webpackJsonp([2],{

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		454,
		1
	],
	"../pages/register/register.module": [
		455,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_survey__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_history__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manage_manage__ = __webpack_require__(166);
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
        this.tab4 = __WEBPACK_IMPORTED_MODULE_5__manage_manage__["a" /* ManagePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tabs',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\navigations\tabs.html"*/'<!-- <ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Ionic Blank\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-tabs>\n\n    <ion-tab tabIcon="ios-home"  [root]="tab1" tabTitle="Home"></ion-tab>\n\n    <ion-tab tabIcon="ios-paper"  [root]="tab2" tabTitle="Poll"></ion-tab>\n\n    <ion-tab tabIcon="ios-clock"  [root]="tab3" tabTitle="History"></ion-tab>\n\n    <ion-tab tabIcon="apps" [root]="tab4" tabTitle="Manage"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\navigations\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            HOME\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-item>\n\n        <ion-label>Your Poll List: </ion-label>\n\n    </ion-item>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>My Neighbor Totoro</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>Raiders of the Lost Ark</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>Ghostbusters</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>Batman</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>Back to the Future</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>The Empire Strikes Back</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>The Terminator</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button item-end>View</button>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_create_survey_create__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_detail_survey_detail__ = __webpack_require__(163);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], SurveyPage);

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 162:
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SurveyCreate2Page);

//# sourceMappingURL=survey-create-page2.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_survey_detail_chart__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_survey_create__ = __webpack_require__(85);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], SurveyDetailPage);

//# sourceMappingURL=survey-detail.js.map

/***/ }),

/***/ 164:
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], SurveyDetailChartPage);

//# sourceMappingURL=survey-detail-chart.js.map

/***/ }),

/***/ 165:
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], HistoryPage);

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authen_service_authen_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_profile_my_profile__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__group_group__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManagePage = (function () {
    function ManagePage(nav, app, auth) {
        this.nav = nav;
        this.app = app;
        this.auth = auth;
        this.username = '';
        this.email = '';
        var info = this.auth.getUserInfo();
        this.username = info['name'];
        this.email = info['email'];
    }
    ManagePage.prototype.goProfilePage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__my_profile_my_profile__["a" /* MyProfilePage */]);
    };
    ManagePage.prototype.goGroupPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__group_group__["a" /* GroupPage */]);
    };
    ManagePage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            // this.nav.setRoot(LoginPage)
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        });
    };
    return ManagePage;
}());
ManagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-manage',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\manage\manage.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Manage\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="align-box">\n\n        <button ion-button icom-left outline round (click)="goProfilePage()">\n\n            <ion-icon name="person"></ion-icon>\n\n            Profile\n\n        </button>\n\n        <button ion-button icom-left outline round (click)="goGroupPage()">\n\n            <ion-icon name="people"></ion-icon>\n\n            Group\n\n        </button>\n\n        <button ion-button icom-left outline round (click)="logout()">\n\n            <ion-icon name="log-out"></ion-icon>\n\n            Log out\n\n        </button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\manage\manage.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_authen_service_authen_service__["a" /* AuthenServiceProvider */]])
], ManagePage);

//# sourceMappingURL=manage.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_infor_edit_profile_infor__ = __webpack_require__(168);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 168:
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], EditProfileInfor);

//# sourceMappingURL=edit-profile-infor.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupPage; });
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

var GroupPage = (function () {
    function GroupPage() {
        this.isNewGroup = false;
        this.groupHeader = "Group";
    }
    GroupPage.prototype.goNewGroup = function () {
        this.isNewGroup = true;
        this.groupHeader = "New Group";
    };
    GroupPage.prototype.goCancel = function () {
        this.isNewGroup = false;
        this.groupHeader = "Group";
    };
    return GroupPage;
}());
GroupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-group',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\group\group.html"*/'<ion-header>\n\n    <ion-navbar style="background-color: #fff">\n\n        <ion-title>\n\n            <h4>{{groupHeader}}</h4>\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only style="color: #ff9e48" (click)="goNewGroup()">\n\n                <ion-icon name="ios-add-circle"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="group-background">\n\n    <div *ngIf="!isNewGroup" class="group-search">\n\n        <div class="input-group">\n\n            <input type="text" class="form-control search-border" placeholder="Search for..." aria-label="Search for...">\n\n            <span class="input-group-btn ">\n\n                <button class="btn">\n\n                    <span class="glyphicon glyphicon-search"></span>\n\n                </button>\n\n            </span>\n\n        </div>\n\n        <div class="list-data">\n\n                <div class="item-data col-lg-12 col-md-12 col-sm-12 nopadding">\n\n                    <div class="item-data-detail col-lg-10 col-md-10 col-sm-10 col-xs-10">\n\n                        <table>\n\n                            <tr>\n\n                                <td>\n\n                                    <span style="font-size: 20px; font-weight: bold;">TRS Dev</span>\n\n                                </td>\n\n                            </tr>\n\n                        </table>\n\n                    </div>\n\n                    <button (click)="goToDetailPage()" style="min-height:50px; background-color:#ff9e48; color:#fff" class="col-lg-2 col-md-2 col-sm-2 col-xs-2 nopadding">\n\n                        <span class="glyphicon glyphicon-check"></span>\n\n                    </button>\n\n    \n\n                </div>\n\n    \n\n                <div class="item-data col-lg-12 col-md-12 col-sm-12 nopadding">\n\n                    <div class="item-data-detail col-lg-10 col-md-10 col-sm-10 col-xs-10">\n\n                        <table>\n\n                            <tr>\n\n                                <td>\n\n                                    <span style="font-size: 20px; font-weight: bold;">TRS QC</span>\n\n                                </td>\n\n                            </tr>\n\n                        </table>\n\n                    </div>\n\n                    <button style="min-height:50px; background-color:#ff9e48; color:#fff" class="col-lg-2 col-md-2 col-sm-2 col-xs-2 nopadding">\n\n                        <span class="glyphicon glyphicon-check"></span>\n\n                    </button>\n\n    \n\n                </div>\n\n            </div>\n\n    </div>\n\n    <div *ngIf="isNewGroup">\n\n        <ion-list class="group-card">\n\n            <ion-item>\n\n                <ion-label stacked>Group ID</ion-label>\n\n                <ion-input type="password"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>Group name</ion-label>\n\n                <ion-input type="text"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Is active</ion-label>\n\n                <ion-checkbox checked="true"></ion-checkbox>\n\n            </ion-item>\n\n        </ion-list>\n\n        <button ion-button (click)="goSave()">Save</button>\n\n        <button ion-button (click)="goCancel()">Cancel</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\group\group.html"*/
    }),
    __metadata("design:paramtypes", [])
], GroupPage);

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_survey_survey__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_survey_create_survey_create__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_survey_create_survey_create_page2__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_survey_detail_survey_detail__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_survey_detail_survey_detail_chart__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_history_history__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_user_register_user_register__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_navigations_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_my_profile_my_profile__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_edit_profile_infor_edit_profile_infor__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_timer_timer__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_manage_manage__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_group_group__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_authen_service_authen_service__ = __webpack_require__(84);
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
            __WEBPACK_IMPORTED_MODULE_9__pages_survey_survey__["a" /* SurveyPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_survey_create_survey_create__["a" /* SurveyCreatePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_survey_create_survey_create_page2__["a" /* SurveyCreate2Page */],
            __WEBPACK_IMPORTED_MODULE_12__pages_survey_detail_survey_detail__["a" /* SurveyDetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_survey_detail_survey_detail_chart__["a" /* SurveyDetailChartPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_history_history__["a" /* HistoryPage */],
            __WEBPACK_IMPORTED_MODULE_19__components_timer_timer__["a" /* TimerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_user_register_user_register__["a" /* UserRegisterPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_navigations_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_my_profile_my_profile__["a" /* MyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_edit_profile_infor_edit_profile_infor__["a" /* EditProfileInfor */],
            __WEBPACK_IMPORTED_MODULE_20__pages_manage_manage__["a" /* ManagePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_group_group__["a" /* GroupPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#RegisterPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_survey_survey__["a" /* SurveyPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_survey_create_survey_create__["a" /* SurveyCreatePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_survey_create_survey_create_page2__["a" /* SurveyCreate2Page */],
            __WEBPACK_IMPORTED_MODULE_12__pages_survey_detail_survey_detail__["a" /* SurveyDetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_survey_detail_survey_detail_chart__["a" /* SurveyDetailChartPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_history_history__["a" /* HistoryPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_user_register_user_register__["a" /* UserRegisterPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_navigations_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_my_profile_my_profile__["a" /* MyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_edit_profile_infor_edit_profile_infor__["a" /* EditProfileInfor */],
            __WEBPACK_IMPORTED_MODULE_20__pages_manage_manage__["a" /* ManagePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_group_group__["a" /* GroupPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_22__providers_authen_service_authen_service__["a" /* AuthenServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 218,
	"./af.js": 218,
	"./ar": 219,
	"./ar-dz": 220,
	"./ar-dz.js": 220,
	"./ar-kw": 221,
	"./ar-kw.js": 221,
	"./ar-ly": 222,
	"./ar-ly.js": 222,
	"./ar-ma": 223,
	"./ar-ma.js": 223,
	"./ar-sa": 224,
	"./ar-sa.js": 224,
	"./ar-tn": 225,
	"./ar-tn.js": 225,
	"./ar.js": 219,
	"./az": 226,
	"./az.js": 226,
	"./be": 227,
	"./be.js": 227,
	"./bg": 228,
	"./bg.js": 228,
	"./bn": 229,
	"./bn.js": 229,
	"./bo": 230,
	"./bo.js": 230,
	"./br": 231,
	"./br.js": 231,
	"./bs": 232,
	"./bs.js": 232,
	"./ca": 233,
	"./ca.js": 233,
	"./cs": 234,
	"./cs.js": 234,
	"./cv": 235,
	"./cv.js": 235,
	"./cy": 236,
	"./cy.js": 236,
	"./da": 237,
	"./da.js": 237,
	"./de": 238,
	"./de-at": 239,
	"./de-at.js": 239,
	"./de-ch": 240,
	"./de-ch.js": 240,
	"./de.js": 238,
	"./dv": 241,
	"./dv.js": 241,
	"./el": 242,
	"./el.js": 242,
	"./en-au": 243,
	"./en-au.js": 243,
	"./en-ca": 244,
	"./en-ca.js": 244,
	"./en-gb": 245,
	"./en-gb.js": 245,
	"./en-ie": 246,
	"./en-ie.js": 246,
	"./en-nz": 247,
	"./en-nz.js": 247,
	"./eo": 248,
	"./eo.js": 248,
	"./es": 249,
	"./es-do": 250,
	"./es-do.js": 250,
	"./es.js": 249,
	"./et": 251,
	"./et.js": 251,
	"./eu": 252,
	"./eu.js": 252,
	"./fa": 253,
	"./fa.js": 253,
	"./fi": 254,
	"./fi.js": 254,
	"./fo": 255,
	"./fo.js": 255,
	"./fr": 256,
	"./fr-ca": 257,
	"./fr-ca.js": 257,
	"./fr-ch": 258,
	"./fr-ch.js": 258,
	"./fr.js": 256,
	"./fy": 259,
	"./fy.js": 259,
	"./gd": 260,
	"./gd.js": 260,
	"./gl": 261,
	"./gl.js": 261,
	"./gom-latn": 262,
	"./gom-latn.js": 262,
	"./he": 263,
	"./he.js": 263,
	"./hi": 264,
	"./hi.js": 264,
	"./hr": 265,
	"./hr.js": 265,
	"./hu": 266,
	"./hu.js": 266,
	"./hy-am": 267,
	"./hy-am.js": 267,
	"./id": 268,
	"./id.js": 268,
	"./is": 269,
	"./is.js": 269,
	"./it": 270,
	"./it.js": 270,
	"./ja": 271,
	"./ja.js": 271,
	"./jv": 272,
	"./jv.js": 272,
	"./ka": 273,
	"./ka.js": 273,
	"./kk": 274,
	"./kk.js": 274,
	"./km": 275,
	"./km.js": 275,
	"./kn": 276,
	"./kn.js": 276,
	"./ko": 277,
	"./ko.js": 277,
	"./ky": 278,
	"./ky.js": 278,
	"./lb": 279,
	"./lb.js": 279,
	"./lo": 280,
	"./lo.js": 280,
	"./lt": 281,
	"./lt.js": 281,
	"./lv": 282,
	"./lv.js": 282,
	"./me": 283,
	"./me.js": 283,
	"./mi": 284,
	"./mi.js": 284,
	"./mk": 285,
	"./mk.js": 285,
	"./ml": 286,
	"./ml.js": 286,
	"./mr": 287,
	"./mr.js": 287,
	"./ms": 288,
	"./ms-my": 289,
	"./ms-my.js": 289,
	"./ms.js": 288,
	"./my": 290,
	"./my.js": 290,
	"./nb": 291,
	"./nb.js": 291,
	"./ne": 292,
	"./ne.js": 292,
	"./nl": 293,
	"./nl-be": 294,
	"./nl-be.js": 294,
	"./nl.js": 293,
	"./nn": 295,
	"./nn.js": 295,
	"./pa-in": 296,
	"./pa-in.js": 296,
	"./pl": 297,
	"./pl.js": 297,
	"./pt": 298,
	"./pt-br": 299,
	"./pt-br.js": 299,
	"./pt.js": 298,
	"./ro": 300,
	"./ro.js": 300,
	"./ru": 301,
	"./ru.js": 301,
	"./sd": 302,
	"./sd.js": 302,
	"./se": 303,
	"./se.js": 303,
	"./si": 304,
	"./si.js": 304,
	"./sk": 305,
	"./sk.js": 305,
	"./sl": 306,
	"./sl.js": 306,
	"./sq": 307,
	"./sq.js": 307,
	"./sr": 308,
	"./sr-cyrl": 309,
	"./sr-cyrl.js": 309,
	"./sr.js": 308,
	"./ss": 310,
	"./ss.js": 310,
	"./sv": 311,
	"./sv.js": 311,
	"./sw": 312,
	"./sw.js": 312,
	"./ta": 313,
	"./ta.js": 313,
	"./te": 314,
	"./te.js": 314,
	"./tet": 315,
	"./tet.js": 315,
	"./th": 316,
	"./th.js": 316,
	"./tl-ph": 317,
	"./tl-ph.js": 317,
	"./tlh": 318,
	"./tlh.js": 318,
	"./tr": 319,
	"./tr.js": 319,
	"./tzl": 320,
	"./tzl.js": 320,
	"./tzm": 321,
	"./tzm-latn": 322,
	"./tzm-latn.js": 322,
	"./tzm.js": 321,
	"./uk": 323,
	"./uk.js": 323,
	"./ur": 324,
	"./ur.js": 324,
	"./uz": 325,
	"./uz-latn": 326,
	"./uz-latn.js": 326,
	"./uz.js": 325,
	"./vi": 327,
	"./vi.js": 327,
	"./x-pseudo": 328,
	"./x-pseudo.js": 328,
	"./yo": 329,
	"./yo.js": 329,
	"./zh-cn": 330,
	"./zh-cn.js": 330,
	"./zh-hk": 331,
	"./zh-hk.js": 331,
	"./zh-tw": 332,
	"./zh-tw.js": 332
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
webpackContext.id = 433;

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(56);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 452:
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], UserRegisterPage);

//# sourceMappingURL=user-register.js.map

/***/ }),

/***/ 453:
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

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authen_service_authen_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigations_tabs__ = __webpack_require__(159);
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
    function LoginPage(nav, auth, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = { email: 'ttran229@csc.com', password: '123' };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.auth.login(this.registerCredentials).subscribe(function (allowed) {
            if (allowed) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__navigations_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.showError("Access Denied");
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\login\login.html"*/'<ion-content no-padding class="login-bg">\n\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n\n        <div class="" style="margin: 0 10%; margin-top: 25%">\n\n            <div class="text-center">\n\n                <h4 class="login-text">Sign in</h4>\n\n            </div>\n\n\n\n            <div style="margin-top: 25%;">\n\n                <div class="input-group">\n\n                    <span class="input-group-addon" id="basic-addon1">\n\n                        <span class="glyphicon glyphicon-envelope"></span>\n\n                    </span>\n\n                    <input type="text" class="form-control" name="email" [(ngModel)]="registerCredentials.email" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">\n\n                </div>\n\n                <div class="input-group">\n\n                    <span class="input-group-addon" id="basic-addon1">\n\n                        <span class="glyphicon glyphicon-lock"></span>\n\n                    </span>\n\n                    <input type="text"  class="form-control" name="password" [(ngModel)]="registerCredentials.password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">\n\n                </div>\n\n                <button class="btn btn-info login-button" style="width:100%;margin: 6px 0;" type="submit" [disabled]="!registerForm.form.valid">\n\n                    <span> Sign in</span>\n\n                </button>\n\n                <div style="margin-top: 5%;">\n\n                    <a>\n\n                        <p class="login-text">\n\n                            <u>Forgot password?</u>\n\n                        </p>\n\n                    </a>\n\n                </div>\n\n                <div style="margin-top: 25%;">\n\n                    <a>\n\n                        <h4 class="login-text">\n\n                            Sign up\n\n                        </h4>\n\n                    </a>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_authen_service_authen_service__["a" /* AuthenServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/*
  Generated class for the AuthenServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var User = (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());

var AuthenServiceProvider = (function () {
    function AuthenServiceProvider() {
    }
    AuthenServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                // At this point make a request to your backend to make a real check!
                var access = (credentials.password === "123" && credentials.email === "ttran229@csc.com");
                _this.currentUser = new User('ttran229', 'ttran229@csc.com');
                observer.next(access);
                observer.complete();
            });
        }
    };
    AuthenServiceProvider.prototype.register = function (credentials) {
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            // At this point store the credentials to your backend!
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthenServiceProvider.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthenServiceProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    return AuthenServiceProvider;
}());
AuthenServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AuthenServiceProvider);

//# sourceMappingURL=authen-service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_survey_create_page2__ = __webpack_require__(162);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], SurveyCreatePage);

//# sourceMappingURL=survey-create.js.map

/***/ })

},[333]);
//# sourceMappingURL=main.js.map