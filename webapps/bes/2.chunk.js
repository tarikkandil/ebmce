webpackJsonp([2,8],{

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(10);
var forms_1 = __webpack_require__(27);
var home_routing_module_1 = __webpack_require__(571);
var dropdown_1 = __webpack_require__(250);
var shared_lazy_module_1 = __webpack_require__(492);
// Components
var reset_component_1 = __webpack_require__(528);
var login_component_1 = __webpack_require__(526);
var newsletter_component_1 = __webpack_require__(527);
var customer_space_links_component_1 = __webpack_require__(570);
var advantages_bes_component_1 = __webpack_require__(569);
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            home_routing_module_1.PagesRoutingModule,
            forms_1.FormsModule,
            shared_lazy_module_1.SharedLazyModule,
            dropdown_1.BsDropdownModule.forRoot(),
            common_1.CommonModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            reset_component_1.ResetComponent,
            newsletter_component_1.NewsletterComponent,
            login_component_1.LoginComponent,
            customer_space_links_component_1.CustomerSpaceLinksComponent,
            advantages_bes_component_1.AdvantagesBesComponent,
        ],
        providers: []
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=D:/workspace/Bes_project/src/home.module.js.map

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(123);
var common_1 = __webpack_require__(10);
var core_2 = __webpack_require__(125);
var angular2_loaders_css_1 = __webpack_require__(493);
var SharedLazyModule = (function () {
    function SharedLazyModule() {
    }
    return SharedLazyModule;
}());
SharedLazyModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            common_1.CommonModule,
            angular2_loaders_css_1.LoadersCssModule,
            core_2.TranslateModule.forChild({}),
        ],
        declarations: [],
        exports: [
            common_1.CommonModule,
            core_2.TranslateModule,
            angular2_loaders_css_1.LoadersCssModule
        ]
    })
], SharedLazyModule);
exports.SharedLazyModule = SharedLazyModule;
//# sourceMappingURL=D:/workspace/Bes_project/src/shared-lazy.module.js.map

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(495));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var LoadersCssComponent = (function () {
    function LoadersCssComponent() {
        this.nodes = [];
        this._loaders = {
            "ball-pulse": 3,
            "ball-grid-pulse": 9,
            "ball-clip-rotate": 1,
            "ball-clip-rotate-pulse": 2,
            "square-spin": 1,
            "ball-clip-rotate-multiple": 2,
            "ball-pulse-rise": 5,
            "ball-rotate": 1,
            "cube-transition": 2,
            "ball-zig-zag": 2,
            "ball-zig-zag-deflect": 2,
            "ball-triangle-path": 3,
            "ball-scale": 1,
            "line-scale": 5,
            "line-scale-party": 4,
            "ball-scale-multiple": 3,
            "ball-pulse-sync": 3,
            "ball-beat": 3,
            "line-scale-pulse-out": 5,
            "line-scale-pulse-out-rapid": 5,
            "ball-scale-ripple": 1,
            "ball-scale-ripple-multiple": 3,
            "ball-spin-fade-loader": 8,
            "line-spin-fade-loader": 8,
            "triangle-skew-spin": 1,
            "pacman": 5,
            "ball-grid-beat": 9,
            "semi-circle-spin": 1
        };
    }
    LoadersCssComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this._loaders[this.loader]; i++) {
            this.nodes.push(i);
        }
    };
    return LoadersCssComponent;
}());
LoadersCssComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'loaders-css',
                template: "\n        <div class=\"loader\">\n            <div class=\"loader-inner {{loader}}\">\n                <div *ngFor=\"let node of nodes\" class=\"{{loaderClass}}\"></div>\n            </div>\n        </div>\n    "
            },] },
];
/** @nocollapse */
LoadersCssComponent.ctorParameters = function () { return []; };
LoadersCssComponent.propDecorators = {
    'loader': [{ type: core_1.Input },],
    'loaderClass': [{ type: core_1.Input },],
};
exports.LoadersCssComponent = LoadersCssComponent;
//# sourceMappingURL=loaders-css.component.js.map

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(10);
var loaders_css_component_1 = __webpack_require__(494);
var LoadersCssModule = (function () {
    function LoadersCssModule() {
    }
    return LoadersCssModule;
}());
LoadersCssModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                declarations: [loaders_css_component_1.LoadersCssComponent],
                exports: [loaders_css_component_1.LoadersCssComponent],
                providers: []
            },] },
];
/** @nocollapse */
LoadersCssModule.ctorParameters = function () { return []; };
exports.LoadersCssModule = LoadersCssModule;
//# sourceMappingURL=module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(122);
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
    };
    LoginComponent.prototype.login = function () {
        this.loading = true;
        localStorage.setItem('currentUser', JSON.stringify({ username: this.model.username, token: this.model.password }));
        this.loading = false;
        this.router.navigate(['/dashboard/transfer']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(604),
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a;
//# sourceMappingURL=D:/workspace/Bes_project/src/login.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(122);
var NewsletterComponent = (function () {
    function NewsletterComponent(router) {
        this.router = router;
        this.model = {};
        this.loading = false;
        this.error = '';
        this.success = false;
    }
    NewsletterComponent.prototype.ngOnInit = function () {
        // reset login status
    };
    NewsletterComponent.prototype.subscribe = function () {
        this.loading = true;
        if (this.model.email === "relamrani@soprabanking.com") {
            this.error = '';
            this.loading = false;
            this.success = true;
        }
        else {
            this.error = "Address email not found";
            this.loading = false;
        }
    };
    return NewsletterComponent;
}());
NewsletterComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(605),
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], NewsletterComponent);
exports.NewsletterComponent = NewsletterComponent;
var _a;
//# sourceMappingURL=D:/workspace/Bes_project/src/newsletter.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(122);
var ResetComponent = (function () {
    function ResetComponent(router) {
        this.router = router;
        this.model = {};
        this.loading = false;
        this.error = '';
        this.success = false;
    }
    ResetComponent.prototype.ngOnInit = function () {
        // reset login status
    };
    ResetComponent.prototype.reset = function () {
        this.loading = false;
        this.success = true;
    };
    return ResetComponent;
}());
ResetComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(606),
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], ResetComponent);
exports.ResetComponent = ResetComponent;
var _a;
//# sourceMappingURL=D:/workspace/Bes_project/src/reset.component.js.map

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var AdvantagesBesComponent = (function () {
    function AdvantagesBesComponent() {
    }
    AdvantagesBesComponent.prototype.ngOnInit = function () {
        // reset login status
    };
    return AdvantagesBesComponent;
}());
AdvantagesBesComponent = __decorate([
    core_1.Component({
        selector: 'advantages-bes',
        template: __webpack_require__(602),
        providers: []
    }),
    __metadata("design:paramtypes", [])
], AdvantagesBesComponent);
exports.AdvantagesBesComponent = AdvantagesBesComponent;
//# sourceMappingURL=D:/workspace/Bes_project/src/advantages-bes.component.js.map

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var CustomerSpaceLinksComponent = (function () {
    function CustomerSpaceLinksComponent() {
    }
    CustomerSpaceLinksComponent.prototype.ngOnInit = function () {
        // reset login status
    };
    return CustomerSpaceLinksComponent;
}());
CustomerSpaceLinksComponent = __decorate([
    core_1.Component({
        selector: "customer-space-links",
        template: __webpack_require__(603),
        providers: []
    }),
    __metadata("design:paramtypes", [])
], CustomerSpaceLinksComponent);
exports.CustomerSpaceLinksComponent = CustomerSpaceLinksComponent;
//# sourceMappingURL=D:/workspace/Bes_project/src/customer-space-links.component.js.map

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(122);
var reset_component_1 = __webpack_require__(528);
var newsletter_component_1 = __webpack_require__(527);
var login_component_1 = __webpack_require__(526);
var routes = [
    {
        path: '',
        data: {
            title: 'Example Pages'
        },
        children: [
            {
                path: 'reset',
                component: reset_component_1.ResetComponent,
                data: {
                    title: 'Reset Password'
                }
            },
            {
                path: 'newsletter',
                component: newsletter_component_1.NewsletterComponent,
                data: {
                    title: 'newsletter'
                }
            },
            {
                path: 'login',
                component: login_component_1.LoginComponent,
                data: {
                    title: 'Login Page'
                }
            }
        ]
    }
];
var PagesRoutingModule = (function () {
    function PagesRoutingModule() {
    }
    return PagesRoutingModule;
}());
PagesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], PagesRoutingModule);
exports.PagesRoutingModule = PagesRoutingModule;
//# sourceMappingURL=D:/workspace/Bes_project/src/home-routing.module.js.map

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-row  align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <h2 class=\"custom-h2\">{{ 'ADVANTAGE.TITRE' | translate }}</h2>\n      <div class=\"animated fadeIn\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block card-block-img p-a-1 clearfix\">\n                <img src=\"assets/img/map.png\">\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block p-a-1 clearfix\">\n                <div>\n                  <h2>Lorem ipsum</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\n                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n                    mollit anim id est laborum. </p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block p-a-1 clearfix\">\n\n                <div>\n                  <h2>Lorem ipsum</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\n                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n                    mollit anim id est laborum.. </p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block  card-block-img p-a-1 clearfix\">\n                <img src=\"assets/img/bg-2.jpg\">\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block card-block-img p-a-1 clearfix\">\n\n                <img src=\"assets/img/bg-3.jpg\">\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block  p-a-1 clearfix\">\n                <div>\n                  <h2>Lorem ipsum</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\n                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n                    mollit anim id est laborum. </p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n        </div>\n        <!--/.row-->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-row  align-items-center\">\n  <div class=\"container container-bes\">\n    <div class=\"row justify-content-center\">\n      <h2 class=\"custom-h2\">{{ 'CUSTOMER.ESPACE' | translate }}</h2>\n      <div class=\"animated fadeIn\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block custom-bloc p-a-1 clearfix\">\n                <img class=\"img-ico\" src=\"assets/img/ico_assurance.png\">\n                <div>\n                  <h6>{{ 'CUSTOMER.SALAMA' | translate }}</h6>\n                  <p>{{ 'CUSTOMER.SUBSCRIBE' | translate }}</p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block custom-bloc p-a-1 clearfix\">\n                <img class=\"img-ico\" src=\"assets/img/logo-geo.png\">\n\n                <div>\n                  <h6>{{ 'CUSTOMER.LOCALISATIONTITLE' | translate }}</h6>\n                  <p>{{ 'CUSTOMER.LOCALISATION' | translate }}</p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block custom-bloc p-a-1 clearfix\">\n                <img class=\"img-ico\" src=\"assets/img/logo-newsletter.png\">\n                <div>\n                  <h6>{{ 'CUSTOMER.NEWSLETTER' | translate }}</h6>\n                  <p>{{ 'CUSTOMER.NEWSLETTERDETAILS' | translate }} </p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block custom-bloc  p-a-1 clearfix\">\n                <img class=\"img-ico\" src=\"assets/img/logo-bank.ico\">\n                <div>\n                  <h6>{{ 'CUSTOMER.ACCOUNT' | translate }}</h6>\n                  <p>{{ 'CUSTOMER.ACCOUNTDETAILS' | translate }}</p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block custom-bloc  p-a-1 clearfix\">\n                <img class=\"img-ico\" src=\"assets/img/logo-card.png\">\n                <div>\n                  <h6>{{ 'CUSTOMER.TRANSFERT' | translate }}</h6>\n                  <p>{{ 'CUSTOMER.TRANSFERTDETAILS' | translate }}</p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block  custom-bloc  p-a-1 clearfix\">\n                <img class=\"img-ico\" src=\"assets/img/logo-prelevement.png\">\n                <div>\n                  <h6>{{ 'CUSTOMER.DEBIT' | translate }}</h6>\n                  <p>{{ 'CUSTOMER.DEBITDETAILS' | translate }}</p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n        </div>\n        <!--/.row-->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 604:
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row app-bes align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-9 pr-0 pl-0 pt-5\">\n        <div class=\"card-group p-3 mb-0\">\n          <div class=\"card card-bes bes p-3\">\n            <div class=\"card-block card-bes card-bes-white\">\n              <div class=\"card-header\">\n                <h2>{{ 'HOME.ESPACE' | translate }}</h2>\n              </div>\n              <p class=\"text-muted\">{{ 'HOME.SUBTITLE' | translate }} </p>\n              <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n                <div class=\"input-group mb-3\" [ngClass]=\"{ 'has-danger has-feedback': f.submitted && !username.valid }\">\n                  <span class=\"input-group-addon input-group-addon-bes btn-right-icon\"><i class=\"icon-user\"></i></span>\n                  <input type=\"email\" [ngClass]=\"{ 'form-control-danger': f.submitted && !username.valid }\" name=\"username\" [(ngModel)]=\"model.username\"\n                    #username=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required class=\"form-control form-bes border-left-none\"\n                    placeholder=\"{{ 'HOME.PLACEHOLDER.USERNAME' | translate }}\">\n                </div>\n\n                <div *ngIf=\"f.submitted && username.errors && username.errors.required\" class=\"alert alert-danger\">{{ 'HOME.USERNAME' | translate }}</div>\n                <div *ngIf=\"f.submitted && username.errors && username.errors.pattern\" class=\"alert alert-danger\">{{ 'HOME.EMAIL' | translate }}</div>\n\n                <div class=\"input-group mb-4\" [ngClass]=\"{ 'has-danger has-feedback': f.submitted && !password.valid }\">\n                  <span class=\"input-group-addon  input-group-addon-bes btn-right-icon\"><i class=\"icon-lock\"></i></span>\n                  <input type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required [ngClass]=\"{ 'form-control-danger': f.submitted && !password.valid }\"\n                    class=\"form-control form-bes border-left-none\" placeholder=\"{{'HOME.PLACEHOLDER.PASSWORD' | translate}}\">\n                </div>\n\n                <div *ngIf=\"f.submitted   && password.errors && password.errors.required\" class=\"alert alert-danger\">{{ 'HOME.PASSWORD' | translate }}</div>\n                <div class=\"card-footer\">\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-bmce\" [disabled]=\"loading\">{{ 'HOME.CONNEXION' | translate }}</button>\n\n                    <img *ngIf=\"loading\" class=\"img-gif\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                    />\n                  </div>\n                  <div class=\"col-6 text-right\">\n        \n                    <button type=\"button\" [routerLink]=\"['/reset']\" class=\"btn btn-link btn-forgot px-0\">{{ 'HOME.PASSWORDFORGOTTEN' | translate }}</button>\n                  </div>\n                </div>\n                <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n                </div>\n              </form>\n            </div>\n          </div>\n\n          <div class=\"card card-bes  card-inverse card-segond  p-3\">\n            <div class=\"card-block\">\n              <div>\n                <div class=\"card-header\">\n                  <h2 class=\"text-center\">BMCE EUROSERVICES</h2>\n                </div>\n                <br>\n                <br>\n                <p>{{ 'HOME.INTRODUCTION' | translate }}\n                  <br>{{ 'HOME.INTRODUCTIONSUITE' | translate }}\n                </p>\n                <br>\n                <div class=\"card-footer\">\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <button type=\"button\" [routerLink]=\"['/register/infos-generales']\" class=\"btn btn-primary btn-bmce active\">{{ 'HOME.CLIENT' | translate }}</button>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<customer-space-links></customer-space-links>\n<advantages-bes></advantages-bes>"

/***/ }),

/***/ 605:
/***/ (function(module, exports) {

module.exports = "<div class=\"app app-bes flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <div class=\"clearfix\">\n          <h2 class=\"mr-4\">{{ 'Newsletter.SUBSCRIBE' | translate }}</h2>\n          <h4 class=\"pt-3\">{{ 'Newsletter.SUBSCRIBE' | translate }}</h4>\n        </div>\n\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && subscribe()\" #f=\"ngForm\" novalidate>\n          <div class=\"input-group mb-3\" [ngClass]=\"{ 'has-danger has-feedback': f.submitted && !email.valid }\">\n            <span class=\"input-group-addon input-group-addon-bes\"><i class=\"fa fa-search\"></i></span>\n            <input id=\"prependedInput\" #email=\"ngModel\" required [ngClass]=\"{ 'form-control-danger': f.submitted && !email.valid }\" name=\"email\"\n              [(ngModel)]=\"model.email\" class=\"form-control form-bes form-bes-height\" size=\"16\" type=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n              placeholder=\"Adresse email\">\n            <span class=\"input-group-btn\">\n            <button class=\"btn btn-info btn-pass \" [disabled]=\"loading\" type=\"submit\">{{ 'Newsletter.VALID' | translate }}</button>\n            <img *ngIf=\"loading\" class=\"img-gif\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                    />\n          </span>\n          </div>\n          <div class=\"response-container\">\n            <div *ngIf=\"f.submitted && email.errors &&  email.errors.required && !email.errors.pattern\" class=\"alert alert-danger\">{{ 'Newsletter.EMAILREQUIRED' | translate }}</div>\n            <div *ngIf=\"f.submitted  && email.errors && email.errors.pattern\" class=\"alert alert-danger\">{{ 'Newsletter.EMAILREQUIRED' | translate }}</div>\n            <div *ngIf=\"success && !email.errors && !error\" class=\"alert alert-success\">{{ 'Newsletter.EMAILREQUIRED' | translate }} {{model.email}} </div>\n            <div *ngIf=\"error  && !email.errors\" class=\"alert alert-danger\">{{error}}</div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

module.exports = "<div class=\"app app-bes flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h2 class=\" mr-4\">{{ 'RESET.PASSWORD' | translate }}</h2>\n          <h4 class=\"pt-3\">{{ 'RESET.IDENTIFIANT' | translate }}</h4>\n        </div>\n\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && reset()\" #f=\"ngForm\" novalidate>\n\n          <div class=\"input-group mb-3\" [ngClass]=\"{ 'has-danger has-feedback': f.submitted && !email.valid }\">\n\n            <span class=\"input-group-addon input-group-addon-bes\"><i class=\"fa fa-search\"></i></span>\n            <input id=\"prependedInput\" #email=\"ngModel\" required [ngClass]=\"{ 'form-control-danger': f.submitted && !email.valid }\" name=\"email\"\n              [(ngModel)]=\"model.email\" class=\"form-control form-bes form-bes-height\" size=\"16\" type=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n              placeholder=\"Adresse email\">\n            <span class=\"input-group-btn\">\n            <button class=\"btn btn-info btn-pass \" [disabled]=\"loading\" type=\"submit\">{{ 'RESET.VALID' | translate }}</button>\n            <img *ngIf=\"loading\" class=\"img-gif\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                    />\n          </span>\n          </div>\n          <div class=\"response-container\">\n            <div *ngIf=\"f.submitted && email.errors &&  email.errors.required && !email.errors.pattern\" class=\"alert alert-danger\">{{ 'RESET.EMAILREQUIRED' | translate }}</div>\n            <div *ngIf=\"f.submitted  && email.errors && email.errors.pattern\" class=\"alert alert-danger\">{{ 'RESET.INVALIDEMAIL' | translate }}</div>\n            <div *ngIf=\"success && !email.errors && !error\" class=\"alert alert-success\">{{ 'RESET.RECUPERATIONEMAIL' | translate }} {{model.email}}</div>\n            <div *ngIf=\"error  && !email.errors\" class=\"alert alert-danger\">{{error}}</div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=2.chunk.js.map