webpackJsonp([2,8],{

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(38);
var forms_1 = __webpack_require__(177);
var home_routing_module_1 = __webpack_require__(566);
var dropdown_1 = __webpack_require__(182);
var shared_lazy_module_1 = __webpack_require__(484);
// Components
var reset_component_1 = __webpack_require__(523);
var login_component_1 = __webpack_require__(521);
var newsletter_component_1 = __webpack_require__(522);
var customer_space_links_component_1 = __webpack_require__(565);
var advantages_bes_component_1 = __webpack_require__(564);
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

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(98);
var common_1 = __webpack_require__(38);
var core_2 = __webpack_require__(99);
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
            core_2.TranslateModule.forChild({}),
        ],
        exports: [
            common_1.CommonModule,
            core_2.TranslateModule
        ]
    })
], SharedLazyModule);
exports.SharedLazyModule = SharedLazyModule;
//# sourceMappingURL=D:/workspace/Bes_project/src/shared-lazy.module.js.map

/***/ }),

/***/ 521:
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
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(97);
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
        this.loading = false;
        this.router.navigate(['/dashboard/transfer']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(599),
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a;
//# sourceMappingURL=D:/workspace/Bes_project/src/login.component.js.map

/***/ }),

/***/ 522:
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
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(97);
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
        template: __webpack_require__(600),
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], NewsletterComponent);
exports.NewsletterComponent = NewsletterComponent;
var _a;
//# sourceMappingURL=D:/workspace/Bes_project/src/newsletter.component.js.map

/***/ }),

/***/ 523:
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
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(97);
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
        template: __webpack_require__(601),
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], ResetComponent);
exports.ResetComponent = ResetComponent;
var _a;
//# sourceMappingURL=D:/workspace/Bes_project/src/reset.component.js.map

/***/ }),

/***/ 564:
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
var core_1 = __webpack_require__(1);
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
        template: __webpack_require__(597),
        providers: []
    }),
    __metadata("design:paramtypes", [])
], AdvantagesBesComponent);
exports.AdvantagesBesComponent = AdvantagesBesComponent;
//# sourceMappingURL=D:/workspace/Bes_project/src/advantages-bes.component.js.map

/***/ }),

/***/ 565:
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
var core_1 = __webpack_require__(1);
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
        template: __webpack_require__(598),
        providers: []
    }),
    __metadata("design:paramtypes", [])
], CustomerSpaceLinksComponent);
exports.CustomerSpaceLinksComponent = CustomerSpaceLinksComponent;
//# sourceMappingURL=D:/workspace/Bes_project/src/customer-space-links.component.js.map

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(97);
var reset_component_1 = __webpack_require__(523);
var newsletter_component_1 = __webpack_require__(522);
var login_component_1 = __webpack_require__(521);
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

/***/ 597:
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-row  align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <h2 class=\"custom-h2\">Quels sont les avantages de votre espace client BMCE ?</h2>\n      <div class=\"animated fadeIn\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block card-block-img p-a-1 clearfix\">\n                <img src=\"assets/img/map.png\">\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block p-a-1 clearfix\">\n                <div>\n                  <h2>Lorem ipsum</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\n                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n                    mollit anim id est laborum. </p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block p-a-1 clearfix\">\n\n                <div>\n                  <h2>Lorem ipsum</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\n                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n                    mollit anim id est laborum.. </p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block  card-block-img p-a-1 clearfix\">\n                <img src=\"assets/img/bg-2.jpg\">\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block card-block-img p-a-1 clearfix\">\n\n                <img src=\"assets/img/bg-3.jpg\">\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block  p-a-1 clearfix\">\n                <div>\n                  <h2>Lorem ipsum</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\n                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n                    mollit anim id est laborum. </p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n        </div>\n        <!--/.row-->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 598:
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-row  align-items-center\">\n  <div class=\"container container-bes\">\n    <div class=\"row justify-content-center\">\n      <h2 class=\"custom-h2\">Accédez aux principales rubriques de votre espace client</h2>\n      <div class=\"animated fadeIn\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block custom-bloc p-a-1 clearfix\">\n                <img class=\"img-ico\" src=\"assets/img/ico_assurance.png\">\n                <div>\n                  <h6>Assurance Salama</h6>\n                  <p>Possibilité à Souscrire en ligne à l'assurance Salama</p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block custom-bloc p-a-1 clearfix\">\n                <img class=\"img-ico\" src=\"assets/img/logo-geo.png\">\n\n                <div>\n                  <h6>Géo-localiser</h6>\n                  <p>Votre agence en présentant leur coordonnées</p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block custom-bloc p-a-1 clearfix\">\n                <img class=\"img-ico\" src=\"assets/img/logo-newsletter.png\">\n                <div>\n                  <h6>Newsletter</h6>\n                  <p>S'inscrire en ligne à notre système de newsletter </p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block custom-bloc  p-a-1 clearfix\">\n                <img class=\"img-ico\" src=\"assets/img/logo-bank.ico\">\n                <div>\n                  <h6>Compte Online</h6>\n                  <p>Ouvrez votre compte BMCE online et bénéficiez de différents fonctionnalités</p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block custom-bloc  p-a-1 clearfix\">\n                <img class=\"img-ico\" src=\"assets/img/logo-card.png\">\n                <div>\n                  <h6>Transférer votre argent</h6>\n                  <p>Ttransférer en ligne via une carte bancaire en toute sécurité</p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n          <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-trans\">\n              <div class=\"card-block  custom-bloc  p-a-1 clearfix\">\n                <img class=\"img-ico\" src=\"assets/img/logo-prelevement.png\">\n                <div>\n                  <h6>prélèvement automatique</h6>\n                  <p>S'ouscrire en ligne au prélèvement automatique</p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <!--/.col-->\n        </div>\n        <!--/.row-->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 599:
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row app-bes align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-9 pr-0 pl-0 pt-5\">\n        <div class=\"card-group p-3 mb-0\">\n          <div class=\"card card-bes bes p-3\">\n            <div class=\"card-block card-bes card-bes-white\">\n              <div class=\"card-header\">\n                <h2>{{ 'HOME.ESPACE' | translate }}</h2>\n              </div>\n              <p class=\"text-muted\">Identifiez-vous pour accéder à votre compte</p>\n              <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n                <div class=\"input-group mb-3\" [ngClass]=\"{ 'has-danger has-feedback': f.submitted && !username.valid }\">\n                  <span class=\"input-group-addon input-group-addon-bes btn-right-icon\"><i class=\"icon-user\"></i></span>\n                  <input type=\"email\" [ngClass]=\"{ 'form-control-danger': f.submitted && !username.valid }\" name=\"username\" [(ngModel)]=\"model.username\"\n                    #username=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required class=\"form-control form-bes border-left-none\"\n                    placeholder=\"Email de l'utilisateur\">\n                </div>\n\n                <div *ngIf=\"f.submitted && username.errors && username.errors.required\" class=\"alert alert-danger\">Nom d'utilisateur est requis</div>\n                <div *ngIf=\"f.submitted && username.errors && username.errors.pattern\" class=\"alert alert-danger\">Adresse e-mail non valide</div>\n\n                <div class=\"input-group mb-4\" [ngClass]=\"{ 'has-danger has-feedback': f.submitted && !password.valid }\">\n                  <span class=\"input-group-addon  input-group-addon-bes btn-right-icon\"><i class=\"icon-lock\"></i></span>\n                  <input type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required [ngClass]=\"{ 'form-control-danger': f.submitted && !password.valid }\"\n                    class=\"form-control form-bes border-left-none\" placeholder=\"Mot de passe\">\n                </div>\n\n                <div *ngIf=\"f.submitted   && password.errors && password.errors.required\" class=\"alert alert-danger\">Mot de passe requis</div>\n                <div class=\"card-footer\">\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-bmce\" [disabled]=\"loading\">Connexion</button>\n\n                    <img *ngIf=\"loading\" class=\"img-gif\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                    />\n                  </div>\n                  <div class=\"col-6 text-right\">\n        \n                    <button type=\"button\" [routerLink]=\"['/reset']\" class=\"btn btn-link btn-forgot px-0\">Mot de passe oublié?</button>\n                  </div>\n                </div>\n                <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n                </div>\n              </form>\n            </div>\n          </div>\n\n          <div class=\"card card-bes  card-inverse card-segond  p-3\">\n            <div class=\"card-block\">\n              <div>\n                <div class=\"card-header\">\n                  <h2 class=\"text-center\">BMCE EUROSERVICES</h2>\n                </div>\n                <br>\n                <br>\n                <p>BMCE EuroServices met à votre disposition un nouveau service en ligne, qui vous permet le transfert par carte\n                  bancaire via Internet.\n                  <br> Avec un seul clic, vous transférez en toute sécurité, votre argent où que vous soyez.\n                </p>\n                <br>\n                <div class=\"card-footer\">\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <button type=\"button\" [routerLink]=\"['/register/infos-generales']\" class=\"btn btn-primary btn-bmce active\">Devenir client</button>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<customer-space-links></customer-space-links>\n<advantages-bes></advantages-bes>"

/***/ }),

/***/ 600:
/***/ (function(module, exports) {

module.exports = "<div class=\"app app-bes flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <div class=\"clearfix\">\n          <h2 class=\"mr-4\">S'inscrire au newsletter ?</h2>\n          <h4 class=\"pt-3\">adresse mail</h4>\n        </div>\n\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && subscribe()\" #f=\"ngForm\" novalidate>\n          <div class=\"input-group mb-3\" [ngClass]=\"{ 'has-danger has-feedback': f.submitted && !email.valid }\">\n            <span class=\"input-group-addon input-group-addon-bes\"><i class=\"fa fa-search\"></i></span>\n            <input id=\"prependedInput\" #email=\"ngModel\" required [ngClass]=\"{ 'form-control-danger': f.submitted && !email.valid }\" name=\"email\"\n              [(ngModel)]=\"model.email\" class=\"form-control form-bes form-bes-height\" size=\"16\" type=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n              placeholder=\"Adresse email\">\n            <span class=\"input-group-btn\">\n            <button class=\"btn btn-info btn-pass \" [disabled]=\"loading\" type=\"submit\">Valider</button>\n            <img *ngIf=\"loading\" class=\"img-gif\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                    />\n          </span>\n          </div>\n          <div class=\"response-container\">\n            <div *ngIf=\"f.submitted && email.errors &&  email.errors.required && !email.errors.pattern\" class=\"alert alert-danger\">Adresse email est requis</div>\n            <div *ngIf=\"f.submitted  && email.errors && email.errors.pattern\" class=\"alert alert-danger\">Adresse email non valid</div>\n            <div *ngIf=\"success && !email.errors && !error\" class=\"alert alert-success\">Inscription de {{model.email}} au newsletter</div>\n            <div *ngIf=\"error  && !email.errors\" class=\"alert alert-danger\">{{error}}</div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 601:
/***/ (function(module, exports) {

module.exports = "<div class=\"app app-bes flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h2 class=\" mr-4\">Mot de passe oublié ?</h2>\n          <h4 class=\"pt-3\">mon identifiant (adresse mail)</h4>\n        </div>\n\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && reset()\" #f=\"ngForm\" novalidate>\n\n          <div class=\"input-group mb-3\" [ngClass]=\"{ 'has-danger has-feedback': f.submitted && !email.valid }\">\n\n            <span class=\"input-group-addon input-group-addon-bes\"><i class=\"fa fa-search\"></i></span>\n            <input id=\"prependedInput\" #email=\"ngModel\" required [ngClass]=\"{ 'form-control-danger': f.submitted && !email.valid }\" name=\"email\"\n              [(ngModel)]=\"model.email\" class=\"form-control form-bes form-bes-height\" size=\"16\" type=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n              placeholder=\"Adresse email\">\n            <span class=\"input-group-btn\">\n            <button class=\"btn btn-info btn-pass \" [disabled]=\"loading\" type=\"submit\">Valider</button>\n            <img *ngIf=\"loading\" class=\"img-gif\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                    />\n          </span>\n          </div>\n          <div class=\"response-container\">\n            <div *ngIf=\"f.submitted && email.errors &&  email.errors.required && !email.errors.pattern\" class=\"alert alert-danger\">Adresse email est requis</div>\n            <div *ngIf=\"f.submitted  && email.errors && email.errors.pattern\" class=\"alert alert-danger\">Adresse email non valid</div>\n            <div *ngIf=\"success && !email.errors && !error\" class=\"alert alert-success\">Un email contenant un lien pour rénitialiser votre mot de pass a été envoyé sur {{model.email}}</div>\n            <div *ngIf=\"error  && !email.errors\" class=\"alert alert-danger\">{{error}}</div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=2.chunk.js.map