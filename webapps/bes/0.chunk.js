webpackJsonp([0,8],Array(178).concat([
/* 178 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */
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
var store_1 = __webpack_require__(416);
var angular2_recaptcha_1 = __webpack_require__(578);
var common_1 = __webpack_require__(38);
var forms_1 = __webpack_require__(177);
var register_routing_module_1 = __webpack_require__(570);
var dropdown_1 = __webpack_require__(182);
var ng_bootstrap_1 = __webpack_require__(457);
var core_2 = __webpack_require__(575);
var angular2_text_mask_1 = __webpack_require__(579);
var shared_lazy_module_1 = __webpack_require__(484);
//components
var forms_component_1 = __webpack_require__(567);
var general_component_1 = __webpack_require__(526);
var signalitique_component_1 = __webpack_require__(527);
var contact_component_1 = __webpack_require__(525);
var beneficiaire_component_1 = __webpack_require__(524);
var result_component_1 = __webpack_require__(528);
var navbar_form_step_component_1 = __webpack_require__(569);
var rib_input_component_1 = __webpack_require__(572);
//Directives & pipes
var rib_account_number_pipe_1 = __webpack_require__(529);
var rib_card_number_directive_1 = __webpack_require__(571);
// Services & others
var index_1 = __webpack_require__(436);
var customer_1 = __webpack_require__(515);
var parametrage_service_1 = __webpack_require__(514);
var store_devtools_1 = __webpack_require__(546);
var RegisterModule = (function () {
    function RegisterModule() {
    }
    return RegisterModule;
}());
RegisterModule = __decorate([
    core_1.NgModule({
        imports: [
            register_routing_module_1.RegisterRoutingModule,
            forms_1.FormsModule,
            shared_lazy_module_1.SharedLazyModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyDs3MbHrfAKNiurDnNZ8hIPB7zTS1fOxN8'
            }),
            dropdown_1.BsDropdownModule.forRoot(),
            ng_bootstrap_1.NgbModule.forRoot(),
            common_1.CommonModule,
            forms_1.ReactiveFormsModule,
            angular2_recaptcha_1.ReCaptchaModule,
            store_1.StoreModule.provideStore({ customer: customer_1.customer, signalitique: index_1.signalitique, contact: index_1.contact, beneficiaire: index_1.beneficiaire }),
            store_devtools_1.StoreDevtoolsModule.instrumentOnlyWithExtension(),
            angular2_text_mask_1.TextMaskModule
        ],
        declarations: [
            forms_component_1.FormsComponent,
            general_component_1.GeneralInfoComponent,
            signalitique_component_1.SignalitiqueComponent,
            beneficiaire_component_1.BeneficiaireComponent,
            contact_component_1.ContactComponent,
            result_component_1.ResultComponent,
            rib_input_component_1.RibInputComponent,
            navbar_form_step_component_1.NavbarFormStepComponent,
            rib_card_number_directive_1.RibNumberFormatterDirective,
            rib_account_number_pipe_1.RibNumberPipe
        ],
        providers: [customer_1.CustomerService, rib_account_number_pipe_1.RibNumberPipe, index_1.SignalitiqueService, index_1.ContactService, index_1.BeneficiaireService, parametrage_service_1.ParametrageService]
    })
], RegisterModule);
exports.RegisterModule = RegisterModule;
//# sourceMappingURL=D:/workspace/Bes_project/src/register.module.js.map

/***/ }),
/* 412 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = toInteger;
/* harmony export (immutable) */ __webpack_exports__["a"] = toString;
/* harmony export (immutable) */ __webpack_exports__["g"] = getValueInRange;
/* harmony export (immutable) */ __webpack_exports__["h"] = isString;
/* harmony export (immutable) */ __webpack_exports__["d"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["i"] = isInteger;
/* harmony export (immutable) */ __webpack_exports__["c"] = isDefined;
/* harmony export (immutable) */ __webpack_exports__["f"] = padNumber;
/* harmony export (immutable) */ __webpack_exports__["b"] = regExpEscape;
function toInteger(value) {
    return parseInt("" + value, 10);
}
function toString(value) {
    return (value !== undefined && value !== null) ? "" + value : '';
}
function getValueInRange(value, max, min) {
    if (min === void 0) { min = 0; }
    return Math.max(Math.min(value, max), min);
}
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return '';
    }
}
function regExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
//# sourceMappingURL=util.js.map

/***/ }),
/* 413 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngb_date__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(412);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbCalendarGregorian; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



function fromJSDate(jsDate) {
    return new __WEBPACK_IMPORTED_MODULE_0__ngb_date__["a" /* NgbDate */](jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
function toJSDate(date) {
    var jsDate = new Date(date.year, date.month - 1, date.day);
    // this is done avoid 30 -> 1930 conversion
    if (!isNaN(jsDate.getTime())) {
        jsDate.setFullYear(date.year);
    }
    return jsDate;
}
var NgbCalendar = (function () {
    function NgbCalendar() {
    }
    return NgbCalendar;
}());

NgbCalendar.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbCalendar.ctorParameters = function () { return []; };
var NgbCalendarGregorian = (function (_super) {
    __extends(NgbCalendarGregorian, _super);
    function NgbCalendarGregorian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarGregorian.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarGregorian.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    NgbCalendarGregorian.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarGregorian.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        var jsDate = toJSDate(date);
        switch (period) {
            case 'y':
                return new __WEBPACK_IMPORTED_MODULE_0__ngb_date__["a" /* NgbDate */](date.year + number, 1, 1);
            case 'm':
                jsDate = new Date(date.year, date.month + number - 1, 1);
                break;
            case 'd':
                jsDate.setDate(jsDate.getDate() + number);
                break;
            default:
                return date;
        }
        return fromJSDate(jsDate);
    };
    NgbCalendarGregorian.prototype.getPrev = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    NgbCalendarGregorian.prototype.getWeekday = function (date) {
        var jsDate = toJSDate(date);
        var day = jsDate.getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarGregorian.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        var date = week[thursdayIndex];
        var jsDate = toJSDate(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        var time = jsDate.getTime();
        jsDate.setMonth(0); // Compare with Jan 1
        jsDate.setDate(1);
        return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
    };
    NgbCalendarGregorian.prototype.getToday = function () { return fromJSDate(new Date()); };
    NgbCalendarGregorian.prototype.isValid = function (date) {
        if (!date || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["i" /* isInteger */])(date.year) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["i" /* isInteger */])(date.month) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["i" /* isInteger */])(date.day)) {
            return false;
        }
        var jsDate = toJSDate(date);
        return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month &&
            jsDate.getDate() === date.day;
    };
    return NgbCalendarGregorian;
}(NgbCalendar));

NgbCalendarGregorian.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbCalendarGregorian.ctorParameters = function () { return []; };
//# sourceMappingURL=ngb-calendar.js.map

/***/ }),
/* 414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDate; });
var NgbDate = (function () {
    function NgbDate(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    NgbDate.from = function (date) {
        return date ? new NgbDate(date.year, date.month, date.day ? date.day : 1) : null;
    };
    NgbDate.prototype.equals = function (other) {
        return other && this.year === other.year && this.month === other.month && this.day === other.day;
    };
    NgbDate.prototype.before = function (other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day < other.day;
            }
            else {
                return this.month < other.month;
            }
        }
        else {
            return this.year < other.year;
        }
    };
    NgbDate.prototype.after = function (other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day > other.day;
            }
            else {
                return this.month > other.month;
            }
        }
        else {
            return this.year > other.year;
        }
    };
    NgbDate.prototype.toString = function () { return this.year + "-" + this.month + "-" + this.day; };
    return NgbDate;
}());

//# sourceMappingURL=ngb-date.js.map

/***/ }),
/* 415 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbDatepickerI18nDefault; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var WEEKDAYS_SHORT = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
var MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var MONTHS_FULL = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
    'December'
];
/**
 * Type of the service supplying month and weekday names to to NgbDatepicker component.
 * See the i18n demo for how to extend this class and define a custom provider for i18n.
 */
var NgbDatepickerI18n = (function () {
    function NgbDatepickerI18n() {
    }
    return NgbDatepickerI18n;
}());

NgbDatepickerI18n.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbDatepickerI18n.ctorParameters = function () { return []; };
var NgbDatepickerI18nDefault = (function (_super) {
    __extends(NgbDatepickerI18nDefault, _super);
    function NgbDatepickerI18nDefault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDatepickerI18nDefault.prototype.getWeekdayShortName = function (weekday) { return WEEKDAYS_SHORT[weekday - 1]; };
    NgbDatepickerI18nDefault.prototype.getMonthShortName = function (month) { return MONTHS_SHORT[month - 1]; };
    NgbDatepickerI18nDefault.prototype.getMonthFullName = function (month) { return MONTHS_FULL[month - 1]; };
    return NgbDatepickerI18nDefault;
}(NgbDatepickerI18n));

NgbDatepickerI18nDefault.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbDatepickerI18nDefault.ctorParameters = function () { return []; };
//# sourceMappingURL=datepicker-i18n.js.map

/***/ }),
/* 416 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dispatcher__ = __webpack_require__(509);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return __WEBPACK_IMPORTED_MODULE_0__src_dispatcher__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ng2__ = __webpack_require__(549);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "INITIAL_REDUCER", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ng2__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ng2__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "_INITIAL_REDUCER", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ng2__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "_INITIAL_STATE", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ng2__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "_initialReducerFactory", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ng2__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "_initialStateFactory", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ng2__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "_storeFactory", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ng2__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "_stateFactory", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ng2__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "_reducerFactory", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ng2__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "provideStore", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ng2__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ng2__["k"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_reducer__ = __webpack_require__(510);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Reducer", function() { return __WEBPACK_IMPORTED_MODULE_2__src_reducer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_state__ = __webpack_require__(511);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "State", function() { return __WEBPACK_IMPORTED_MODULE_3__src_state__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_store__ = __webpack_require__(512);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return __WEBPACK_IMPORTED_MODULE_4__src_store__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_utils__ = __webpack_require__(513);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),
/* 417 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupService; });

var ContentRef = (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());

var PopupService = (function () {
    function PopupService(type, _injector, _viewContainerRef, _renderer, componentFactoryResolver) {
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._windowFactory = componentFactoryResolver.resolveComponentFactory(type);
    }
    PopupService.prototype.open = function (content, context) {
        if (!this._windowRef) {
            this._contentRef = this._getContentRef(content, context);
            this._windowRef =
                this._viewContainerRef.createComponent(this._windowFactory, 0, this._injector, this._contentRef.nodes);
        }
        return this._windowRef;
    };
    PopupService.prototype.close = function () {
        if (this._windowRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
            this._windowRef = null;
            if (this._contentRef.viewRef) {
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
                this._contentRef = null;
            }
        }
    };
    PopupService.prototype._getContentRef = function (content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) {
            var viewRef = this._viewContainerRef.createEmbeddedView(content, context);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else {
            return new ContentRef([[this._renderer.createText("" + content)]]);
        }
    };
    return PopupService;
}());

//# sourceMappingURL=popup.js.map

/***/ }),
/* 418 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Positioning */
/* harmony export (immutable) */ __webpack_exports__["a"] = positionElements;
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    return Positioning;
}());

var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=positioning.js.map

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(3);
var maps_api_loader_1 = __webpack_require__(486);
/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._loader.load().then(function () {
            var map = new google.maps.Map(el, mapOptions);
            _this._mapResolver(map);
            return;
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    GoogleMapsAPIWrapper.prototype.createMarker = function (options) {
        if (options === void 0) { options = {}; }
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    GoogleMapsAPIWrapper.prototype.createCircle = function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        return this.getNativeMap().then(function (map) {
            var polygon = new google.maps.Polygon(options);
            polygon.setMap(map);
            return polygon;
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    GoogleMapsAPIWrapper.prototype.containsLocation = function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    GoogleMapsAPIWrapper.prototype.getNativeMap = function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    GoogleMapsAPIWrapper.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    GoogleMapsAPIWrapper.ctorParameters = function () { return [
        { type: maps_api_loader_1.MapsAPILoader, },
        { type: core_1.NgZone, },
    ]; };
    return GoogleMapsAPIWrapper;
}());
exports.GoogleMapsAPIWrapper = GoogleMapsAPIWrapper;
//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),
/* 420 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAccordionConfig; });

/**
 * Configuration service for the NgbAccordion component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the accordions used in the application.
 */
var NgbAccordionConfig = (function () {
    function NgbAccordionConfig() {
        this.closeOthers = false;
    }
    return NgbAccordionConfig;
}());

NgbAccordionConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbAccordionConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=accordion-config.js.map

/***/ }),
/* 421 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAlertConfig; });

/**
 * Configuration service for the NgbAlert component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the alerts used in the application.
 */
var NgbAlertConfig = (function () {
    function NgbAlertConfig() {
        this.dismissible = true;
        this.type = 'warning';
    }
    return NgbAlertConfig;
}());

NgbAlertConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbAlertConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=alert-config.js.map

/***/ }),
/* 422 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCarouselConfig; });

/**
 * Configuration service for the NgbCarousel component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the carousels used in the application.
 */
var NgbCarouselConfig = (function () {
    function NgbCarouselConfig() {
        this.interval = 5000;
        this.wrap = true;
        this.keyboard = true;
    }
    return NgbCarouselConfig;
}());

NgbCarouselConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbCarouselConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=carousel-config.js.map

/***/ }),
/* 423 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerConfig; });

/**
 * Configuration service for the NgbDatepicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
var NgbDatepickerConfig = (function () {
    function NgbDatepickerConfig() {
        this.displayMonths = 1;
        this.firstDayOfWeek = 1;
        this.navigation = 'select';
        this.outsideDays = 'visible';
        this.showWeekdays = true;
        this.showWeekNumbers = false;
    }
    return NgbDatepickerConfig;
}());

NgbDatepickerConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbDatepickerConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=datepicker-config.js.map

/***/ }),
/* 424 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngb_calendar__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngb_date__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datepicker_service__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datepicker_view_model__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_util__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datepicker_config__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datepicker_i18n__ = __webpack_require__(415);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepicker; });









var NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgbDatepicker; }),
    multi: true
};
/**
 * A lightweight and highly configurable datepicker directive
 */
var NgbDatepicker = (function () {
    function NgbDatepicker(_service, _calendar, i18n, config) {
        this._service = _service;
        this._calendar = _calendar;
        this.i18n = i18n;
        this.months = [];
        /**
         * An event fired when navigation happens and currently displayed month changes.
         * See NgbDatepickerNavigateEvent for the payload info.
         */
        this.navigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.dayTemplate = config.dayTemplate;
        this.displayMonths = config.displayMonths;
        this.firstDayOfWeek = config.firstDayOfWeek;
        this.markDisabled = config.markDisabled;
        this.minDate = config.minDate;
        this.maxDate = config.maxDate;
        this.navigation = config.navigation;
        this.outsideDays = config.outsideDays;
        this.showWeekdays = config.showWeekdays;
        this.showWeekNumbers = config.showWeekNumbers;
        this.startDate = config.startDate;
    }
    NgbDatepicker.prototype.getHeaderHeight = function () {
        var h = this.showWeekdays ? 6.25 : 4.25;
        return this.displayMonths === 1 || this.navigation !== 'select' ? h - 2 : h;
    };
    NgbDatepicker.prototype.getHeaderMargin = function () {
        var m = this.showWeekdays ? 2 : 0;
        return this.displayMonths !== 1 || this.navigation !== 'select' ? m + 2 : m;
    };
    /**
     * Navigates current view to provided date.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     * Use 'startDate' input as an alternative
     */
    NgbDatepicker.prototype.navigateTo = function (date) {
        this._setViewWithinLimits(this._service.toValidDate(date));
        this._updateData();
    };
    NgbDatepicker.prototype.ngOnInit = function () {
        this._setDates();
        this.navigateTo(this._date);
    };
    NgbDatepicker.prototype.ngOnChanges = function (changes) {
        this._setDates();
        this._setViewWithinLimits(this._date);
        if (changes['displayMonths']) {
            this.displayMonths = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_util__["e" /* toInteger */])(this.displayMonths);
        }
        // we have to force rebuild all months only if any of these inputs changes
        if (['startDate', 'minDate', 'maxDate', 'navigation', 'firstDayOfWeek', 'markDisabled', 'displayMonths'].some(function (input) { return !!changes[input]; })) {
            this._updateData(true);
        }
    };
    NgbDatepicker.prototype.onDateSelect = function (date) {
        this._setViewWithinLimits(date);
        this.onTouched();
        this.writeValue(date);
        this.onChange({ year: date.year, month: date.month, day: date.day });
        // switch current month
        if (this._date.month !== this.months[0].number && this.displayMonths === 1) {
            this._updateData();
        }
    };
    NgbDatepicker.prototype.onNavigateDateSelect = function (date) {
        this._setViewWithinLimits(date);
        this._updateData();
    };
    NgbDatepicker.prototype.onNavigateEvent = function (event) {
        switch (event) {
            case __WEBPACK_IMPORTED_MODULE_5__datepicker_view_model__["a" /* NavigationEvent */].PREV:
                this._setViewWithinLimits(this._calendar.getPrev(this.months[0].firstDate, 'm'));
                break;
            case __WEBPACK_IMPORTED_MODULE_5__datepicker_view_model__["a" /* NavigationEvent */].NEXT:
                this._setViewWithinLimits(this._calendar.getNext(this.months[0].firstDate, 'm'));
                break;
        }
        this._updateData();
    };
    NgbDatepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbDatepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbDatepicker.prototype.writeValue = function (value) { this.model = this._service.toValidDate(value, null); };
    NgbDatepicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    NgbDatepicker.prototype._setDates = function () {
        this._maxDate = __WEBPACK_IMPORTED_MODULE_3__ngb_date__["a" /* NgbDate */].from(this.maxDate);
        this._minDate = __WEBPACK_IMPORTED_MODULE_3__ngb_date__["a" /* NgbDate */].from(this.minDate);
        this._date = this._service.toValidDate(this.startDate);
        if (!this._calendar.isValid(this._minDate)) {
            this._minDate = this._calendar.getPrev(this._date, 'y', 10);
            this.minDate = { year: this._minDate.year, month: this._minDate.month, day: this._minDate.day };
        }
        if (!this._calendar.isValid(this._maxDate)) {
            this._maxDate = this._calendar.getNext(this._date, 'y', 11);
            this._maxDate = this._calendar.getPrev(this._maxDate);
            this.maxDate = { year: this._maxDate.year, month: this._maxDate.month, day: this._maxDate.day };
        }
        if (this._minDate && this._maxDate && this._maxDate.before(this._minDate)) {
            throw new Error("'maxDate' " + this._maxDate + " should be greater than 'minDate' " + this._minDate);
        }
    };
    NgbDatepicker.prototype._setViewWithinLimits = function (date) {
        if (this._minDate && date.before(this._minDate)) {
            this._date = new __WEBPACK_IMPORTED_MODULE_3__ngb_date__["a" /* NgbDate */](this._minDate.year, this._minDate.month, 1);
        }
        else if (this._maxDate && date.after(this._maxDate)) {
            this._date = new __WEBPACK_IMPORTED_MODULE_3__ngb_date__["a" /* NgbDate */](this._maxDate.year, this._maxDate.month, 1);
        }
        else {
            this._date = new __WEBPACK_IMPORTED_MODULE_3__ngb_date__["a" /* NgbDate */](date.year, date.month, 1);
        }
    };
    NgbDatepicker.prototype._updateData = function (force) {
        if (force === void 0) { force = false; }
        var newMonths = [];
        var _loop_1 = function (i) {
            var newDate_1 = this_1._calendar.getNext(this_1._date, 'm', i);
            var index = this_1.months.findIndex(function (month) { return month.firstDate.equals(newDate_1); });
            if (force || index === -1) {
                newMonths.push(this_1._service.generateMonthViewModel(newDate_1, this_1._minDate, this_1._maxDate, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_util__["e" /* toInteger */])(this_1.firstDayOfWeek), this_1.markDisabled));
            }
            else {
                newMonths.push(this_1.months[index]);
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.displayMonths; i++) {
            _loop_1(i);
        }
        var newDate = newMonths[0].firstDate;
        var oldDate = this.months[0] ? this.months[0].firstDate : null;
        this.months = newMonths;
        // emitting navigation event if the first month changes
        if (!newDate.equals(oldDate)) {
            this.navigate.emit({
                current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
                next: { year: newDate.year, month: newDate.month }
            });
        }
    };
    return NgbDatepicker;
}());

NgbDatepicker.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                exportAs: 'ngbDatepicker',
                selector: 'ngb-datepicker',
                host: { 'class': 'd-inline-block rounded' },
                styles: ["\n    :host {\n      border: 1px solid rgba(0, 0, 0, 0.125);\n    }\n    .ngb-dp-header {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n    }\n    .ngb-dp-month {\n      pointer-events: none;\n    }\n    ngb-datepicker-month-view {\n      pointer-events: auto;\n    }\n    .ngb-dp-month:first-child {\n      margin-left: 0 !important;\n    }    \n    .ngb-dp-month-name {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n    }    \n  "],
                template: "\n    <ng-template #dt let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\">\n       <div ngbDatepickerDayView [date]=\"date\" [currentMonth]=\"currentMonth\" [selected]=\"selected\" [disabled]=\"disabled\"></div>\n    </ng-template>\n    \n    <div class=\"ngb-dp-header bg-faded pt-1 rounded-top\" [style.height.rem]=\"getHeaderHeight()\" \n      [style.marginBottom.rem]=\"-getHeaderMargin()\">\n      <ngb-datepicker-navigation *ngIf=\"navigation !== 'none'\"\n        [date]=\"months[0]?.firstDate\"\n        [minDate]=\"_minDate\"\n        [maxDate]=\"_maxDate\"\n        [months]=\"months.length\"\n        [disabled]=\"disabled\"\n        [showWeekNumbers]=\"showWeekNumbers\"\n        [showSelect]=\"navigation === 'select'\"\n        (navigate)=\"onNavigateEvent($event)\"\n        (select)=\"onNavigateDateSelect($event)\">\n      </ngb-datepicker-navigation>\n    </div>\n\n    <div class=\"ngb-dp-months d-flex px-1 pb-1\">\n      <ng-template ngFor let-month [ngForOf]=\"months\" let-i=\"index\">\n        <div class=\"ngb-dp-month d-block ml-3\">            \n          <div *ngIf=\"navigation !== 'select' || displayMonths > 1\" class=\"ngb-dp-month-name text-center\">\n            {{ i18n.getMonthFullName(month.number) }} {{ month.year }}\n          </div>\n          <ngb-datepicker-month-view\n            [month]=\"month\"\n            [selectedDate]=\"model\"\n            [dayTemplate]=\"dayTemplate || dt\"\n            [showWeekdays]=\"showWeekdays\"\n            [showWeekNumbers]=\"showWeekNumbers\"\n            [disabled]=\"disabled\"\n            [outsideDays]=\"displayMonths === 1 ? outsideDays : 'hidden'\"\n            (select)=\"onDateSelect($event)\">\n          </ngb-datepicker-month-view>\n        </div>\n      </ng-template>\n    </div>\n  ",
                providers: [NGB_DATEPICKER_VALUE_ACCESSOR, __WEBPACK_IMPORTED_MODULE_4__datepicker_service__["a" /* NgbDatepickerService */]]
            },] },
];
/** @nocollapse */
NgbDatepicker.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_4__datepicker_service__["a" /* NgbDatepickerService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__ngb_calendar__["a" /* NgbCalendar */], },
    { type: __WEBPACK_IMPORTED_MODULE_8__datepicker_i18n__["a" /* NgbDatepickerI18n */], },
    { type: __WEBPACK_IMPORTED_MODULE_7__datepicker_config__["a" /* NgbDatepickerConfig */], },
]; };
NgbDatepicker.propDecorators = {
    'dayTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'displayMonths': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'firstDayOfWeek': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'markDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'navigation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'outsideDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showWeekdays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showWeekNumbers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'startDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'navigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=datepicker.js.map

/***/ }),
/* 425 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__(412);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDateParserFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbDateISOParserFormatter; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Abstract type serving as a DI token for the service parsing and formatting dates for the NgbInputDatepicker
 * directive. A default implementation using the ISO 8601 format is provided, but you can provide another implementation
 * to use an alternative format.
 */
var NgbDateParserFormatter = (function () {
    function NgbDateParserFormatter() {
    }
    return NgbDateParserFormatter;
}());

var NgbDateISOParserFormatter = (function (_super) {
    __extends(NgbDateISOParserFormatter, _super);
    function NgbDateISOParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateISOParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('-');
            if (dateParts.length === 1 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[0])) {
                return { year: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[0]) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[1])) {
                return { year: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(dateParts[0]), month: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(dateParts[1]), day: null };
            }
            else if (dateParts.length === 3 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[0]) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[1]) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[2])) {
                return { year: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(dateParts[0]), month: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(dateParts[1]), day: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(dateParts[2]) };
            }
        }
        return null;
    };
    NgbDateISOParserFormatter.prototype.format = function (date) {
        return date ?
            date.year + "-" + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(date.month) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["f" /* padNumber */])(date.month) : '') + "-" + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(date.day) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["f" /* padNumber */])(date.day) : '') :
            '';
    };
    return NgbDateISOParserFormatter;
}(NgbDateParserFormatter));

//# sourceMappingURL=ngb-date-parser-formatter.js.map

/***/ }),
/* 426 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDropdownConfig; });

/**
 * Configuration service for the NgbDropdown directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the dropdowns used in the application.
 */
var NgbDropdownConfig = (function () {
    function NgbDropdownConfig() {
        this.up = false;
        this.autoClose = true;
    }
    return NgbDropdownConfig;
}());

NgbDropdownConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbDropdownConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=dropdown-config.js.map

/***/ }),
/* 427 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPaginationConfig; });

/**
 * Configuration service for the NgbPagination component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
var NgbPaginationConfig = (function () {
    function NgbPaginationConfig() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = 10;
        this.rotate = false;
    }
    return NgbPaginationConfig;
}());

NgbPaginationConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbPaginationConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=pagination-config.js.map

/***/ }),
/* 428 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPopoverConfig; });

/**
 * Configuration service for the NgbPopover directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
var NgbPopoverConfig = (function () {
    function NgbPopoverConfig() {
        this.placement = 'top';
        this.triggers = 'click';
    }
    return NgbPopoverConfig;
}());

NgbPopoverConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbPopoverConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=popover-config.js.map

/***/ }),
/* 429 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbProgressbarConfig; });

/**
 * Configuration service for the NgbProgressbar component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the progress bars used in the application.
 */
var NgbProgressbarConfig = (function () {
    function NgbProgressbarConfig() {
        this.max = 100;
        this.animated = false;
        this.striped = false;
        this.showValue = false;
    }
    return NgbProgressbarConfig;
}());

NgbProgressbarConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbProgressbarConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=progressbar-config.js.map

/***/ }),
/* 430 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbRatingConfig; });

/**
 * Configuration service for the NgbRating component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the ratings used in the application.
 */
var NgbRatingConfig = (function () {
    function NgbRatingConfig() {
        this.max = 10;
        this.readonly = false;
        this.resettable = false;
    }
    return NgbRatingConfig;
}());

NgbRatingConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbRatingConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=rating-config.js.map

/***/ }),
/* 431 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTabsetConfig; });

/**
 * Configuration service for the NgbTabset component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tabsets used in the application.
 */
var NgbTabsetConfig = (function () {
    function NgbTabsetConfig() {
        this.justify = 'start';
        this.type = 'tabs';
    }
    return NgbTabsetConfig;
}());

NgbTabsetConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbTabsetConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=tabset-config.js.map

/***/ }),
/* 432 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTimepickerConfig; });

/**
 * Configuration service for the NgbTimepicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the timepickers used in the application.
 */
var NgbTimepickerConfig = (function () {
    function NgbTimepickerConfig() {
        this.meridian = false;
        this.spinners = true;
        this.seconds = false;
        this.hourStep = 1;
        this.minuteStep = 1;
        this.secondStep = 1;
        this.disabled = false;
        this.readonlyInputs = false;
        this.size = 'medium';
    }
    return NgbTimepickerConfig;
}());

NgbTimepickerConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbTimepickerConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=timepicker-config.js.map

/***/ }),
/* 433 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTooltipConfig; });

/**
 * Configuration service for the NgbTooltip directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */
var NgbTooltipConfig = (function () {
    function NgbTooltipConfig() {
        this.placement = 'top';
        this.triggers = 'hover';
    }
    return NgbTooltipConfig;
}());

NgbTooltipConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbTooltipConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=tooltip-config.js.map

/***/ }),
/* 434 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTypeaheadConfig; });

/**
 * Configuration service for the NgbTypeahead component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the typeaheads used in the application.
 */
var NgbTypeaheadConfig = (function () {
    function NgbTypeaheadConfig() {
        this.editable = true;
        this.focusFirst = true;
        this.showHint = false;
    }
    return NgbTypeaheadConfig;
}());

NgbTypeaheadConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbTypeaheadConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=typeahead-config.js.map

/***/ }),
/* 435 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(412);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTypeaheadWindow; });


var NgbTypeaheadWindow = (function () {
    function NgbTypeaheadWindow() {
        this.activeIdx = 0;
        /**
         * Flag indicating if the first row should be active initially
         */
        this.focusFirst = true;
        /**
         * A function used to format a given result before display. This function should return a formatted string without any
         * HTML markup
         */
        this.formatter = __WEBPACK_IMPORTED_MODULE_1__util_util__["a" /* toString */];
        /**
         * Event raised when user selects a particular result row
         */
        this.selectEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.activeChangeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NgbTypeaheadWindow.prototype.getActive = function () { return this.results[this.activeIdx]; };
    NgbTypeaheadWindow.prototype.markActive = function (activeIdx) {
        this.activeIdx = activeIdx;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.next = function () {
        if (this.activeIdx === this.results.length - 1) {
            this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
        }
        else {
            this.activeIdx++;
        }
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.prev = function () {
        if (this.activeIdx < 0) {
            this.activeIdx = this.results.length - 1;
        }
        else if (this.activeIdx === 0) {
            this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
        }
        else {
            this.activeIdx--;
        }
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.select = function (item) { this.selectEvent.emit(item); };
    NgbTypeaheadWindow.prototype.ngOnInit = function () {
        this.activeIdx = this.focusFirst ? 0 : -1;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype._activeChanged = function () {
        this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
    };
    return NgbTypeaheadWindow;
}());

NgbTypeaheadWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-typeahead-window',
                exportAs: 'ngbTypeaheadWindow',
                host: { 'class': 'dropdown-menu', 'style': 'display: block', 'role': 'listbox', '[id]': 'id' },
                template: "\n    <ng-template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </ng-template>\n    <ng-template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" role=\"option\"\n        [id]=\"id + '-' + idx\"\n        [class.active]=\"idx === activeIdx\"\n        (mouseenter)=\"markActive(idx)\"\n        (click)=\"select(result)\">\n          <ng-template [ngTemplateOutlet]=\"resultTemplate || rt\"\n          [ngOutletContext]=\"{result: result, term: term, formatter: formatter}\"></ng-template>\n      </button>\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
NgbTypeaheadWindow.ctorParameters = function () { return []; };
NgbTypeaheadWindow.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'focusFirst': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'results': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'term': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'formatter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resultTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'selectEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['select',] },],
    'activeChangeEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['activeChange',] },],
};
//# sourceMappingURL=typeahead-window.js.map

/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(553));
__export(__webpack_require__(551));
__export(__webpack_require__(515));
__export(__webpack_require__(552));
__export(__webpack_require__(555));
__export(__webpack_require__(554));
//# sourceMappingURL=D:/workspace/Bes_project/src/index.js.map

/***/ }),
/* 437 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_config__ = __webpack_require__(420);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgbPanelTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NgbPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAccordion; });



var nextId = 0;
/**
 * This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.
 */
var NgbPanelTitle = (function () {
    function NgbPanelTitle(templateRef) {
        this.templateRef = templateRef;
    }
    return NgbPanelTitle;
}());

NgbPanelTitle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'ng-template[ngbPanelTitle]' },] },
];
/** @nocollapse */
NgbPanelTitle.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
]; };
/**
 * This directive must be used to wrap accordion panel content.
 */
var NgbPanelContent = (function () {
    function NgbPanelContent(templateRef) {
        this.templateRef = templateRef;
    }
    return NgbPanelContent;
}());

NgbPanelContent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'ng-template[ngbPanelContent]' },] },
];
/** @nocollapse */
NgbPanelContent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
]; };
/**
 * The NgbPanel directive represents an individual panel with the title and collapsible
 * content
 */
var NgbPanel = (function () {
    function NgbPanel() {
        /**
         *  A flag determining whether the panel is disabled or not.
         *  When disabled, the panel cannot be toggled.
         */
        this.disabled = false;
        /**
         *  An optional id for the panel. The id should be unique.
         *  If not provided, it will be auto-generated.
         */
        this.id = "ngb-panel-" + nextId++;
    }
    return NgbPanel;
}());

NgbPanel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'ngb-panel' },] },
];
/** @nocollapse */
NgbPanel.ctorParameters = function () { return []; };
NgbPanel.propDecorators = {
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'contentTpl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [NgbPanelContent,] },],
    'titleTpl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [NgbPanelTitle,] },],
};
/**
 * The NgbAccordion directive is a collection of panels.
 * It can assure that only one panel can be opened at a time.
 */
var NgbAccordion = (function () {
    function NgbAccordion(config) {
        /**
         * A map that stores each panel state
         */
        this._states = new Map();
        /**
         * A map that stores references to all panels
         */
        this._panelRefs = new Map();
        /**
         * An array or comma separated strings of panel identifiers that should be opened
         */
        this.activeIds = [];
        /**
         * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
         */
        this.panelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
    }
    /**
     * Programmatically toggle a panel with a given id.
     */
    NgbAccordion.prototype.toggle = function (panelId) {
        var panel = this._panelRefs.get(panelId);
        if (panel && !panel.disabled) {
            var nextState = !this._states.get(panelId);
            var defaultPrevented_1 = false;
            this.panelChange.emit({ panelId: panelId, nextState: nextState, preventDefault: function () { defaultPrevented_1 = true; } });
            if (!defaultPrevented_1) {
                this._states.set(panelId, nextState);
                if (this.closeOtherPanels) {
                    this._closeOthers(panelId);
                }
                this._updateActiveIds();
            }
        }
    };
    NgbAccordion.prototype.ngAfterContentChecked = function () {
        // active id updates
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_util__["h" /* isString */])(this.activeIds)) {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
        }
        this._updateStates();
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0]);
            this._updateActiveIds();
        }
    };
    /**
     * @internal
     */
    NgbAccordion.prototype.isOpen = function (panelId) { return this._states.get(panelId); };
    NgbAccordion.prototype._closeOthers = function (panelId) {
        var _this = this;
        this._states.forEach(function (state, id) {
            if (id !== panelId) {
                _this._states.set(id, false);
            }
        });
    };
    NgbAccordion.prototype._updateActiveIds = function () {
        var _this = this;
        this.activeIds =
            this.panels.toArray().filter(function (panel) { return _this.isOpen(panel.id) && !panel.disabled; }).map(function (panel) { return panel.id; });
    };
    NgbAccordion.prototype._updateStates = function () {
        var _this = this;
        this._states.clear();
        this._panelRefs.clear();
        this.panels.toArray().forEach(function (panel) {
            _this._states.set(panel.id, _this.activeIds.indexOf(panel.id) > -1 && !panel.disabled);
            _this._panelRefs.set(panel.id, panel);
        });
    };
    return NgbAccordion;
}());

NgbAccordion.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-accordion',
                exportAs: 'ngbAccordion',
                host: { 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
                template: "\n  <div class=\"card\">\n    <ng-template ngFor let-panel [ngForOf]=\"panels\">\n      <div role=\"tab\" id=\"{{panel.id}}-header\"\n        [class]=\"'card-header ' + (panel.type ? 'card-'+panel.type: type ? 'card-'+type : '')\" [class.active]=\"isOpen(panel.id)\">\n        <a href (click)=\"!!toggle(panel.id)\" [class.text-muted]=\"panel.disabled\" [attr.tabindex]=\"(panel.disabled ? '-1' : null)\"\n          [attr.aria-expanded]=\"isOpen(panel.id)\" [attr.aria-controls]=\"(isOpen(panel.id) ? panel.id : null)\"\n          [attr.aria-disabled]=\"panel.disabled\">\n          {{panel.title}}<ng-template [ngTemplateOutlet]=\"panel.titleTpl?.templateRef\"></ng-template>\n        </a>\n      </div>\n      <div id=\"{{panel.id}}\" role=\"tabpanel\" [attr.aria-labelledby]=\"panel.id + '-header'\" class=\"card-block\" *ngIf=\"isOpen(panel.id)\">\n        <ng-template [ngTemplateOutlet]=\"panel.contentTpl.templateRef\"></ng-template>\n      </div>\n    </ng-template>\n  </div>\n"
            },] },
];
/** @nocollapse */
NgbAccordion.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__accordion_config__["a" /* NgbAccordionConfig */], },
]; };
NgbAccordion.propDecorators = {
    'panels': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [NgbPanel,] },],
    'activeIds': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'closeOtherPanels': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['closeOthers',] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'panelChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=accordion.js.map

/***/ }),
/* 438 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_config__ = __webpack_require__(420);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__accordion_config__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAccordionModule; });






var NGB_ACCORDION_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* NgbAccordion */], __WEBPACK_IMPORTED_MODULE_2__accordion__["b" /* NgbPanel */], __WEBPACK_IMPORTED_MODULE_2__accordion__["c" /* NgbPanelTitle */], __WEBPACK_IMPORTED_MODULE_2__accordion__["d" /* NgbPanelContent */]];
var NgbAccordionModule = (function () {
    function NgbAccordionModule() {
    }
    NgbAccordionModule.forRoot = function () { return { ngModule: NgbAccordionModule, providers: [__WEBPACK_IMPORTED_MODULE_3__accordion_config__["a" /* NgbAccordionConfig */]] }; };
    return NgbAccordionModule;
}());

NgbAccordionModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]] },] },
];
/** @nocollapse */
NgbAccordionModule.ctorParameters = function () { return []; };
//# sourceMappingURL=accordion.module.js.map

/***/ }),
/* 439 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_config__ = __webpack_require__(421);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAlert; });


/**
 * Alerts can be used to provide feedback messages.
 */
var NgbAlert = (function () {
    function NgbAlert(config) {
        /**
         * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
         */
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dismissible = config.dismissible;
        this.type = config.type;
    }
    NgbAlert.prototype.closeHandler = function () { this.close.emit(null); };
    return NgbAlert;
}());

NgbAlert.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-alert',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                template: "\n    <div [class]=\"'alert alert-' + type + (dismissible ? ' alert-dismissible' : '')\" role=\"alert\">\n      <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeHandler()\">\n            <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <ng-content></ng-content>\n    </div>\n    "
            },] },
];
/** @nocollapse */
NgbAlert.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__alert_config__["a" /* NgbAlertConfig */], },
]; };
NgbAlert.propDecorators = {
    'dismissible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'close': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=alert.js.map

/***/ }),
/* 440 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_config__ = __webpack_require__(421);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__alert__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__alert_config__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAlertModule; });






var NgbAlertModule = (function () {
    function NgbAlertModule() {
    }
    NgbAlertModule.forRoot = function () { return { ngModule: NgbAlertModule, providers: [__WEBPACK_IMPORTED_MODULE_3__alert_config__["a" /* NgbAlertConfig */]] }; };
    return NgbAlertModule;
}());

NgbAlertModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_2__alert__["a" /* NgbAlert */]], exports: [__WEBPACK_IMPORTED_MODULE_2__alert__["a" /* NgbAlert */]], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]], entryComponents: [__WEBPACK_IMPORTED_MODULE_2__alert__["a" /* NgbAlert */]] },] },
];
/** @nocollapse */
NgbAlertModule.ctorParameters = function () { return []; };
//# sourceMappingURL=alert.module.js.map

/***/ }),
/* 441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbRadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgbActiveLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbRadio; });


var NGB_RADIO_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgbRadioGroup; }),
    multi: true
};
/**
 * Easily create Bootstrap-style radio buttons. A value of a selected button is bound to a variable
 * specified via ngModel.
 */
var NgbRadioGroup = (function () {
    function NgbRadioGroup() {
        this._radios = new Set();
        this._value = null;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(NgbRadioGroup.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (isDisabled) { this.setDisabledState(isDisabled); },
        enumerable: true,
        configurable: true
    });
    NgbRadioGroup.prototype.onRadioChange = function (radio) {
        this.writeValue(radio.value);
        this.onChange(radio.value);
    };
    NgbRadioGroup.prototype.onRadioValueUpdate = function () { this._updateRadiosValue(); };
    NgbRadioGroup.prototype.register = function (radio) { this._radios.add(radio); };
    NgbRadioGroup.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbRadioGroup.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbRadioGroup.prototype.setDisabledState = function (isDisabled) {
        this._disabled = isDisabled;
        this._updateRadiosDisabled();
    };
    NgbRadioGroup.prototype.unregister = function (radio) { this._radios.delete(radio); };
    NgbRadioGroup.prototype.writeValue = function (value) {
        this._value = value;
        this._updateRadiosValue();
    };
    NgbRadioGroup.prototype._updateRadiosValue = function () {
        var _this = this;
        this._radios.forEach(function (radio) { return radio.updateValue(_this._value); });
    };
    NgbRadioGroup.prototype._updateRadiosDisabled = function () { this._radios.forEach(function (radio) { return radio.updateDisabled(); }); };
    return NgbRadioGroup;
}());

NgbRadioGroup.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[ngbRadioGroup]',
                host: { 'data-toggle': 'buttons', 'class': 'btn-group', 'role': 'group' },
                providers: [NGB_RADIO_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbRadioGroup.ctorParameters = function () { return []; };
var NgbActiveLabel = (function () {
    function NgbActiveLabel(_renderer, _elRef) {
        this._renderer = _renderer;
        this._elRef = _elRef;
    }
    Object.defineProperty(NgbActiveLabel.prototype, "active", {
        set: function (isActive) {
            if (isActive) {
                this._renderer.addClass(this._elRef.nativeElement, 'active');
            }
            else {
                this._renderer.removeClass(this._elRef.nativeElement, 'active');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbActiveLabel.prototype, "disabled", {
        set: function (isDisabled) {
            if (isDisabled) {
                this._renderer.addClass(this._elRef.nativeElement, 'disabled');
            }
            else {
                this._renderer.removeClass(this._elRef.nativeElement, 'disabled');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbActiveLabel.prototype, "focused", {
        set: function (isFocused) {
            if (isFocused) {
                this._renderer.addClass(this._elRef.nativeElement, 'focus');
            }
            else {
                this._renderer.removeClass(this._elRef.nativeElement, 'focus');
            }
        },
        enumerable: true,
        configurable: true
    });
    return NgbActiveLabel;
}());

NgbActiveLabel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'label.btn' },] },
];
/** @nocollapse */
NgbActiveLabel.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
/**
 * Marks an input of type "radio" as part of the NgbRadioGroup.
 */
var NgbRadio = (function () {
    function NgbRadio(_group, _label, _renderer, _element) {
        this._group = _group;
        this._label = _label;
        this._renderer = _renderer;
        this._element = _element;
        this._value = null;
        if (this._group) {
            this._group.register(this);
        }
    }
    Object.defineProperty(NgbRadio.prototype, "value", {
        get: function () { return this._value; },
        /**
         * You can specify model value of a given radio by binding to the value property.
        */
        set: function (value) {
            this._value = value;
            var stringValue = value ? value.toString() : '';
            this._renderer.setProperty(this._element.nativeElement, 'value', stringValue);
            if (this._group) {
                this._group.onRadioValueUpdate();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "checked", {
        get: function () { return this._checked; },
        /**
         * A flag indicating if a given radio button is checked.
         */
        set: function (value) {
            this._checked = this._element.nativeElement.hasAttribute('checked') ? true : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "disabled", {
        get: function () { return (this._group && this._group.disabled) || this._disabled; },
        /**
         * A flag indicating if a given radio button is disabled.
         */
        set: function (isDisabled) {
            this._disabled = isDisabled !== false;
            this.updateDisabled();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "focused", {
        set: function (isFocused) {
            if (this._label) {
                this._label.focused = isFocused;
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbRadio.prototype.ngOnDestroy = function () {
        if (this._group) {
            this._group.unregister(this);
        }
    };
    NgbRadio.prototype.onChange = function () {
        if (this._group) {
            this._group.onRadioChange(this);
        }
    };
    NgbRadio.prototype.updateValue = function (value) {
        this._checked = (this.value === value && value !== null);
        this._label.active = this._checked;
    };
    NgbRadio.prototype.updateDisabled = function () {
        var disabled = (this._group && this._group.disabled) || this._disabled;
        if (this._label) {
            this._label.disabled = disabled;
        }
    };
    return NgbRadio;
}());

NgbRadio.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=radio]',
                host: {
                    '[checked]': 'checked',
                    '[disabled]': 'disabled',
                    '(change)': 'onChange()',
                    '(focus)': 'focused = true',
                    '(blur)': 'focused = false'
                }
            },] },
];
/** @nocollapse */
NgbRadio.ctorParameters = function () { return [
    { type: NgbRadioGroup, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
    { type: NgbActiveLabel, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
NgbRadio.propDecorators = {
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['value',] },],
    'checked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['checked',] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled',] },],
};
//# sourceMappingURL=radio.js.map

/***/ }),
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__radio__ = __webpack_require__(441);
/* unused harmony reexport NgbRadio */
/* unused harmony reexport NgbActiveLabel */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__radio__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbButtonsModule; });



var NGB_RADIO_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_1__radio__["b" /* NgbRadio */], __WEBPACK_IMPORTED_MODULE_1__radio__["c" /* NgbActiveLabel */], __WEBPACK_IMPORTED_MODULE_1__radio__["a" /* NgbRadioGroup */]];
var NgbButtonsModule = (function () {
    function NgbButtonsModule() {
    }
    NgbButtonsModule.forRoot = function () { return { ngModule: NgbButtonsModule, providers: [] }; };
    return NgbButtonsModule;
}());

NgbButtonsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: NGB_RADIO_DIRECTIVES, exports: NGB_RADIO_DIRECTIVES },] },
];
/** @nocollapse */
NgbButtonsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=radio.module.js.map

/***/ }),
/* 443 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_config__ = __webpack_require__(422);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCarousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NGB_CAROUSEL_DIRECTIVES; });


var nextId = 0;
/**
 * Represents an individual slide to be used within a carousel.
 */
var NgbSlide = (function () {
    function NgbSlide(tplRef) {
        this.tplRef = tplRef;
        /**
         * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
         * Will be auto-generated if not provided.
         */
        this.id = "ngb-slide-" + nextId++;
    }
    return NgbSlide;
}());

NgbSlide.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'ng-template[ngbSlide]' },] },
];
/** @nocollapse */
NgbSlide.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
]; };
NgbSlide.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * Directive to easily create carousels based on Bootstrap's markup.
 */
var NgbCarousel = (function () {
    function NgbCarousel(config) {
        this.interval = config.interval;
        this.wrap = config.wrap;
        this.keyboard = config.keyboard;
    }
    NgbCarousel.prototype.ngAfterContentChecked = function () {
        var activeSlide = this._getSlideById(this.activeId);
        this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
    };
    NgbCarousel.prototype.ngOnInit = function () { this._startTimer(); };
    NgbCarousel.prototype.ngOnDestroy = function () { clearInterval(this._slideChangeInterval); };
    /**
     * Navigate to a slide with the specified identifier.
     */
    NgbCarousel.prototype.select = function (slideId) {
        this.cycleToSelected(slideId);
        this._restartTimer();
    };
    /**
     * Navigate to the next slide.
     */
    NgbCarousel.prototype.prev = function () {
        this.cycleToPrev();
        this._restartTimer();
    };
    /**
     * Navigate to the next slide.
     */
    NgbCarousel.prototype.next = function () {
        this.cycleToNext();
        this._restartTimer();
    };
    /**
     * Stops the carousel from cycling through items.
     */
    NgbCarousel.prototype.pause = function () { this._stopTimer(); };
    /**
     * Restarts cycling through the carousel slides from left to right.
     */
    NgbCarousel.prototype.cycle = function () { this._startTimer(); };
    NgbCarousel.prototype.cycleToNext = function () { this.cycleToSelected(this._getNextSlide(this.activeId)); };
    NgbCarousel.prototype.cycleToPrev = function () { this.cycleToSelected(this._getPrevSlide(this.activeId)); };
    NgbCarousel.prototype.cycleToSelected = function (slideIdx) {
        var selectedSlide = this._getSlideById(slideIdx);
        if (selectedSlide) {
            this.activeId = selectedSlide.id;
        }
    };
    NgbCarousel.prototype.keyPrev = function () {
        if (this.keyboard) {
            this.prev();
        }
    };
    NgbCarousel.prototype.keyNext = function () {
        if (this.keyboard) {
            this.next();
        }
    };
    NgbCarousel.prototype._restartTimer = function () {
        this._stopTimer();
        this._startTimer();
    };
    NgbCarousel.prototype._startTimer = function () {
        var _this = this;
        if (this.interval > 0) {
            this._slideChangeInterval = setInterval(function () { _this.cycleToNext(); }, this.interval);
        }
    };
    NgbCarousel.prototype._stopTimer = function () { clearInterval(this._slideChangeInterval); };
    NgbCarousel.prototype._getSlideById = function (slideId) {
        var slideWithId = this.slides.filter(function (slide) { return slide.id === slideId; });
        return slideWithId.length ? slideWithId[0] : null;
    };
    NgbCarousel.prototype._getSlideIdxById = function (slideId) {
        return this.slides.toArray().indexOf(this._getSlideById(slideId));
    };
    NgbCarousel.prototype._getNextSlide = function (currentSlideId) {
        var slideArr = this.slides.toArray();
        var currentSlideIdx = this._getSlideIdxById(currentSlideId);
        var isLastSlide = currentSlideIdx === slideArr.length - 1;
        return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
            slideArr[currentSlideIdx + 1].id;
    };
    NgbCarousel.prototype._getPrevSlide = function (currentSlideId) {
        var slideArr = this.slides.toArray();
        var currentSlideIdx = this._getSlideIdxById(currentSlideId);
        var isFirstSlide = currentSlideIdx === 0;
        return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
            slideArr[currentSlideIdx - 1].id;
    };
    return NgbCarousel;
}());

NgbCarousel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-carousel',
                exportAs: 'ngbCarousel',
                host: {
                    'class': 'carousel slide',
                    '[style.display]': '"block"',
                    'tabIndex': '0',
                    '(mouseenter)': 'pause()',
                    '(mouseleave)': 'cycle()',
                    '(keydown.arrowLeft)': 'keyPrev()',
                    '(keydown.arrowRight)': 'keyNext()'
                },
                template: "\n    <ol class=\"carousel-indicators\">\n      <li *ngFor=\"let slide of slides\" [id]=\"slide.id\" [class.active]=\"slide.id === activeId\" (click)=\"cycleToSelected(slide.id)\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div *ngFor=\"let slide of slides\" class=\"carousel-item\" [class.active]=\"slide.id === activeId\">\n        <ng-template [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n      </div>\n    </div>\n    <a class=\"left carousel-control-prev\" role=\"button\" (click)=\"cycleToPrev()\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control-next\" role=\"button\" (click)=\"cycleToNext()\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n    "
            },] },
];
/** @nocollapse */
NgbCarousel.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__carousel_config__["a" /* NgbCarouselConfig */], },
]; };
NgbCarousel.propDecorators = {
    'slides': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [NgbSlide,] },],
    'interval': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'wrap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'keyboard': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'activeId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];
//# sourceMappingURL=carousel.js.map

/***/ }),
/* 444 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_config__ = __webpack_require__(422);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__carousel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__carousel__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__carousel_config__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCarouselModule; });






var NgbCarouselModule = (function () {
    function NgbCarouselModule() {
    }
    NgbCarouselModule.forRoot = function () { return { ngModule: NgbCarouselModule, providers: [__WEBPACK_IMPORTED_MODULE_3__carousel_config__["a" /* NgbCarouselConfig */]] }; };
    return NgbCarouselModule;
}());

NgbCarouselModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: __WEBPACK_IMPORTED_MODULE_2__carousel__["c" /* NGB_CAROUSEL_DIRECTIVES */], exports: __WEBPACK_IMPORTED_MODULE_2__carousel__["c" /* NGB_CAROUSEL_DIRECTIVES */], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]] },] },
];
/** @nocollapse */
NgbCarouselModule.ctorParameters = function () { return []; };
//# sourceMappingURL=carousel.module.js.map

/***/ }),
/* 445 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCollapse; });

/**
 * The NgbCollapse directive provides a simple way to hide and show an element with animations.
 */
var NgbCollapse = (function () {
    function NgbCollapse() {
        /**
         * A flag indicating collapsed (true) or open (false) state.
         */
        this.collapsed = false;
    }
    return NgbCollapse;
}());

NgbCollapse.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[ngbCollapse]',
                exportAs: 'ngbCollapse',
                host: { '[class.collapse]': 'true', '[class.show]': '!collapsed' }
            },] },
];
/** @nocollapse */
NgbCollapse.ctorParameters = function () { return []; };
NgbCollapse.propDecorators = {
    'collapsed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngbCollapse',] },],
};
//# sourceMappingURL=collapse.js.map

/***/ }),
/* 446 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse__ = __webpack_require__(445);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__collapse__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCollapseModule; });



var NgbCollapseModule = (function () {
    function NgbCollapseModule() {
    }
    NgbCollapseModule.forRoot = function () { return { ngModule: NgbCollapseModule, providers: [] }; };
    return NgbCollapseModule;
}());

NgbCollapseModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_1__collapse__["a" /* NgbCollapse */]], exports: [__WEBPACK_IMPORTED_MODULE_1__collapse__["a" /* NgbCollapse */]] },] },
];
/** @nocollapse */
NgbCollapseModule.ctorParameters = function () { return []; };
//# sourceMappingURL=collapse.module.js.map

/***/ }),
/* 447 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerDayView; });

var NgbDatepickerDayView = (function () {
    function NgbDatepickerDayView() {
    }
    NgbDatepickerDayView.prototype.isMuted = function () { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); };
    return NgbDatepickerDayView;
}());

NgbDatepickerDayView.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: '[ngbDatepickerDayView]',
                styles: ["\n    :host {\n      text-align: center;\n      width: 2rem;\n      height: 2rem;\n      line-height: 2rem;      \n      border-radius: 0.25rem;\n    }\n    :host.outside {\n      opacity: 0.5;\n    }\n  "],
                host: {
                    '[class.bg-primary]': 'selected',
                    '[class.text-white]': 'selected',
                    '[class.text-muted]': 'isMuted()',
                    '[class.outside]': 'isMuted()',
                    '[class.btn-secondary]': '!disabled'
                },
                template: "{{ date.day }}"
            },] },
];
/** @nocollapse */
NgbDatepickerDayView.ctorParameters = function () { return []; };
NgbDatepickerDayView.propDecorators = {
    'currentMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'date': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'selected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=datepicker-day-view.js.map

/***/ }),
/* 448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngb_date__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datepicker__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngb_date_parser_formatter__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_positioning__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngb_calendar__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datepicker_service__ = __webpack_require__(452);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbInputDatepicker; });








var NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgbInputDatepicker; }),
    multi: true
};
var NGB_DATEPICKER_VALIDATOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgbInputDatepicker; }),
    multi: true
};
/**
 * A directive that makes it possible to have datepickers on input fields.
 * Manages integration with the input field itself (data entry) and ngModel (validation etc.).
 */
var NgbInputDatepicker = (function () {
    function NgbInputDatepicker(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, ngZone, _service, _calendar) {
        var _this = this;
        this._parserFormatter = _parserFormatter;
        this._elRef = _elRef;
        this._vcRef = _vcRef;
        this._renderer = _renderer;
        this._cfr = _cfr;
        this._service = _service;
        this._calendar = _calendar;
        this._cRef = null;
        /**
         * An event fired when navigation happens and currently displayed month changes.
         * See NgbDatepickerNavigateEvent for the payload info.
         */
        this.navigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._onChange = function (_) { };
        this._onTouched = function () { };
        this._validatorChange = function () { };
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._cRef) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util_positioning__["a" /* positionElements */])(_this._elRef.nativeElement, _this._cRef.location.nativeElement, 'bottom-left');
            }
        });
    }
    NgbInputDatepicker.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    NgbInputDatepicker.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    NgbInputDatepicker.prototype.registerOnValidatorChange = function (fn) { this._validatorChange = fn; };
    ;
    NgbInputDatepicker.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elRef.nativeElement, 'disabled', isDisabled);
        if (this.isOpen()) {
            this._cRef.instance.setDisabledState(isDisabled);
        }
    };
    NgbInputDatepicker.prototype.validate = function (c) {
        var value = c.value;
        if (value === null || value === undefined) {
            return null;
        }
        if (!this._calendar.isValid(value)) {
            return { 'ngbDate': { invalid: c.value } };
        }
        if (this.minDate && __WEBPACK_IMPORTED_MODULE_2__ngb_date__["a" /* NgbDate */].from(value).before(__WEBPACK_IMPORTED_MODULE_2__ngb_date__["a" /* NgbDate */].from(this.minDate))) {
            return { 'ngbDate': { requiredBefore: this.minDate } };
        }
        if (this.maxDate && __WEBPACK_IMPORTED_MODULE_2__ngb_date__["a" /* NgbDate */].from(value).after(__WEBPACK_IMPORTED_MODULE_2__ngb_date__["a" /* NgbDate */].from(this.maxDate))) {
            return { 'ngbDate': { requiredAfter: this.maxDate } };
        }
    };
    NgbInputDatepicker.prototype.writeValue = function (value) {
        var ngbDate = value ? new __WEBPACK_IMPORTED_MODULE_2__ngb_date__["a" /* NgbDate */](value.year, value.month, value.day) : null;
        this._model = this._calendar.isValid(value) ? ngbDate : null;
        this._writeModelValue(this._model);
    };
    NgbInputDatepicker.prototype.manualDateChange = function (value) {
        this._model = this._service.toValidDate(this._parserFormatter.parse(value), null);
        this._onChange(this._model ? { year: this._model.year, month: this._model.month, day: this._model.day } : value);
        this._writeModelValue(this._model);
    };
    NgbInputDatepicker.prototype.isOpen = function () { return !!this._cRef; };
    /**
     * Opens the datepicker with the selected date indicated by the ngModel value.
     */
    NgbInputDatepicker.prototype.open = function () {
        var _this = this;
        if (!this.isOpen()) {
            var cf = this._cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__datepicker__["a" /* NgbDatepicker */]);
            this._cRef = this._vcRef.createComponent(cf);
            this._applyPopupStyling(this._cRef.location.nativeElement);
            this._cRef.instance.writeValue(this._model);
            this._applyDatepickerInputs(this._cRef.instance);
            this._subscribeForDatepickerOutputs(this._cRef.instance);
            this._cRef.instance.ngOnInit();
            // date selection event handling
            this._cRef.instance.registerOnChange(function (selectedDate) {
                _this.writeValue(selectedDate);
                _this._onChange(selectedDate);
                _this.close();
            });
        }
    };
    /**
     * Closes the datepicker popup.
     */
    NgbInputDatepicker.prototype.close = function () {
        if (this.isOpen()) {
            this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
            this._cRef = null;
        }
    };
    /**
     * Toggles the datepicker popup (opens when closed and closes when opened).
     */
    NgbInputDatepicker.prototype.toggle = function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Navigates current view to provided date.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     * Use 'startDate' input as an alternative
     */
    NgbInputDatepicker.prototype.navigateTo = function (date) {
        if (this.isOpen()) {
            this._cRef.instance.navigateTo(date);
        }
    };
    NgbInputDatepicker.prototype.onBlur = function () { this._onTouched(); };
    NgbInputDatepicker.prototype.ngOnChanges = function (changes) {
        if (changes['minDate'] || changes['maxDate']) {
            this._validatorChange();
        }
    };
    NgbInputDatepicker.prototype.ngOnDestroy = function () {
        this.close();
        this._zoneSubscription.unsubscribe();
    };
    NgbInputDatepicker.prototype._applyDatepickerInputs = function (datepickerInstance) {
        var _this = this;
        ['dayTemplate', 'displayMonths', 'firstDayOfWeek', 'markDisabled', 'minDate', 'maxDate', 'navigation',
            'outsideDays', 'showNavigation', 'showWeekdays', 'showWeekNumbers']
            .forEach(function (optionName) {
            if (_this[optionName] !== undefined) {
                datepickerInstance[optionName] = _this[optionName];
            }
        });
        datepickerInstance.startDate = this.startDate || this._model;
    };
    NgbInputDatepicker.prototype._applyPopupStyling = function (nativeElement) {
        this._renderer.addClass(nativeElement, 'dropdown-menu');
        this._renderer.setStyle(nativeElement, 'padding', '0');
    };
    NgbInputDatepicker.prototype._subscribeForDatepickerOutputs = function (datepickerInstance) {
        var _this = this;
        datepickerInstance.navigate.subscribe(function (date) { return _this.navigate.emit(date); });
    };
    NgbInputDatepicker.prototype._writeModelValue = function (model) {
        this._renderer.setProperty(this._elRef.nativeElement, 'value', this._parserFormatter.format(model));
        if (this.isOpen()) {
            this._cRef.instance.writeValue(model);
            this._onTouched();
        }
    };
    return NgbInputDatepicker;
}());

NgbInputDatepicker.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[ngbDatepicker]',
                exportAs: 'ngbDatepicker',
                host: { '(change)': 'manualDateChange($event.target.value)', '(keyup.esc)': 'close()', '(blur)': 'onBlur()' },
                providers: [NGB_DATEPICKER_VALUE_ACCESSOR, NGB_DATEPICKER_VALIDATOR, __WEBPACK_IMPORTED_MODULE_7__datepicker_service__["a" /* NgbDatepickerService */]]
            },] },
];
/** @nocollapse */
NgbInputDatepicker.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_4__ngb_date_parser_formatter__["a" /* NgbDateParserFormatter */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    { type: __WEBPACK_IMPORTED_MODULE_7__datepicker_service__["a" /* NgbDatepickerService */], },
    { type: __WEBPACK_IMPORTED_MODULE_6__ngb_calendar__["a" /* NgbCalendar */], },
]; };
NgbInputDatepicker.propDecorators = {
    'dayTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'displayMonths': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'firstDayOfWeek': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'markDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'navigation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'outsideDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showWeekdays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showWeekNumbers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'startDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'navigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=datepicker-input.js.map

/***/ }),
/* 449 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngb_date__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_i18n__ = __webpack_require__(415);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerMonthView; });



var NgbDatepickerMonthView = (function () {
    function NgbDatepickerMonthView(i18n) {
        this.i18n = i18n;
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NgbDatepickerMonthView.prototype.doSelect = function (day) {
        if (!this.isDisabled(day) && !this.isHidden(day)) {
            this.select.emit(__WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */].from(day.date));
        }
    };
    NgbDatepickerMonthView.prototype.isDisabled = function (day) { return this.disabled || day.disabled; };
    NgbDatepickerMonthView.prototype.isSelected = function (date) { return this.selectedDate && this.selectedDate.equals(date); };
    NgbDatepickerMonthView.prototype.isCollapsed = function (week) {
        return this.outsideDays === 'collapsed' && week.days[0].date.month !== this.month.number &&
            week.days[week.days.length - 1].date.month !== this.month.number;
    };
    NgbDatepickerMonthView.prototype.isHidden = function (day) {
        return (this.outsideDays === 'hidden' || this.outsideDays === 'collapsed') && this.month.number !== day.date.month;
    };
    return NgbDatepickerMonthView;
}());

NgbDatepickerMonthView.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-datepicker-month-view',
                host: { 'class': 'd-block' },
                styles: ["\n    .ngb-dp-weekday, .ngb-dp-week-number {\n      line-height: 2rem;\n    }\n    .ngb-dp-day, .ngb-dp-weekday, .ngb-dp-week-number {\n      width: 2rem;\n      height: 2rem;      \n    }\n    .ngb-dp-day {\n      cursor: pointer;\n    }\n    .ngb-dp-day.disabled, .ngb-dp-day.hidden {\n      cursor: default;\n    }\n  "],
                template: "\n    <div *ngIf=\"showWeekdays\" class=\"ngb-dp-week d-flex\">\n      <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-weekday\"></div>\n      <div *ngFor=\"let w of month.weekdays\" class=\"ngb-dp-weekday small text-center text-info font-italic\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <ng-template ngFor let-week [ngForOf]=\"month.weeks\">\n      <div *ngIf=\"!isCollapsed(week)\" class=\"ngb-dp-week d-flex\">\n        <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-week-number small text-center font-italic text-muted\">{{ week.number }}</div>\n        <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day)\" class=\"ngb-dp-day\" [class.disabled]=\"isDisabled(day)\"\n         [class.hidden]=\"isHidden(day)\">\n          <ng-template [ngIf]=\"!isHidden(day)\">\n            <ng-template [ngTemplateOutlet]=\"dayTemplate\"\n            [ngOutletContext]=\"{date: {year: day.date.year, month: day.date.month, day: day.date.day},\n              currentMonth: month.number,\n              disabled: isDisabled(day),\n              selected: isSelected(day.date)}\">\n            </ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
NgbDatepickerMonthView.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__datepicker_i18n__["a" /* NgbDatepickerI18n */], },
]; };
NgbDatepickerMonthView.propDecorators = {
    'dayTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'month': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'outsideDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'selectedDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showWeekdays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showWeekNumbers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'select': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=datepicker-month-view.js.map

/***/ }),
/* 450 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngb_date__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datepicker_i18n__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngb_calendar__ = __webpack_require__(413);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerNavigationSelect; });





var NgbDatepickerNavigationSelect = (function () {
    function NgbDatepickerNavigationSelect(i18n, calendar) {
        this.i18n = i18n;
        this.calendar = calendar;
        this.years = [];
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.months = calendar.getMonths();
    }
    NgbDatepickerNavigationSelect.prototype.ngOnChanges = function (changes) {
        if (changes['maxDate'] || changes['minDate'] || changes['date']) {
            this._generateYears();
            this._generateMonths();
        }
    };
    NgbDatepickerNavigationSelect.prototype.changeMonth = function (month) { this.select.emit(new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](this.date.year, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* toInteger */])(month), 1)); };
    NgbDatepickerNavigationSelect.prototype.changeYear = function (year) { this.select.emit(new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* toInteger */])(year), this.date.month, 1)); };
    NgbDatepickerNavigationSelect.prototype._generateMonths = function () {
        var _this = this;
        this.months = this.calendar.getMonths();
        if (this.date && this.date.year === this.minDate.year) {
            var index = this.months.findIndex(function (month) { return month === _this.minDate.month; });
            this.months = this.months.slice(index);
        }
        if (this.date && this.date.year === this.maxDate.year) {
            var index = this.months.findIndex(function (month) { return month === _this.maxDate.month; });
            this.months = this.months.slice(0, index + 1);
        }
    };
    NgbDatepickerNavigationSelect.prototype._generateYears = function () {
        var _this = this;
        this.years = Array.from({ length: this.maxDate.year - this.minDate.year + 1 }, function (e, i) { return _this.minDate.year + i; });
    };
    return NgbDatepickerNavigationSelect;
}());

NgbDatepickerNavigationSelect.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-datepicker-navigation-select',
                styles: ["\n    select {\n      /* to align with btn-sm */\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;      \n      line-height: 1.25;\n      /* to cancel the custom height set by custom-select */\n      height: inherit;\n      width: 50%;\n    }\n  "],
                template: "\n    <select [disabled]=\"disabled\" class=\"custom-select d-inline-block\" [value]=\"date?.month\" (change)=\"changeMonth($event.target.value)\">\n      <option *ngFor=\"let m of months\" [value]=\"m\">{{ i18n.getMonthShortName(m) }}</option>\n    </select>" +
                    "<select [disabled]=\"disabled\" class=\"custom-select d-inline-block\" [value]=\"date?.year\" (change)=\"changeYear($event.target.value)\">\n      <option *ngFor=\"let y of years\" [value]=\"y\">{{ y }}</option>\n    </select> \n  " // template needs to be formatted in a certain way so we don't add empty text nodes
            },] },
];
/** @nocollapse */
NgbDatepickerNavigationSelect.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__datepicker_i18n__["a" /* NgbDatepickerI18n */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__ngb_calendar__["a" /* NgbCalendar */], },
]; };
NgbDatepickerNavigationSelect.propDecorators = {
    'date': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'select': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=datepicker-navigation-select.js.map

/***/ }),
/* 451 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_view_model__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_i18n__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngb_calendar__ = __webpack_require__(413);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerNavigation; });




var NgbDatepickerNavigation = (function () {
    function NgbDatepickerNavigation(i18n, _calendar) {
        this.i18n = i18n;
        this._calendar = _calendar;
        this.navigation = __WEBPACK_IMPORTED_MODULE_1__datepicker_view_model__["a" /* NavigationEvent */];
        this.navigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NgbDatepickerNavigation.prototype.doNavigate = function (event) { this.navigate.emit(event); };
    NgbDatepickerNavigation.prototype.nextDisabled = function () {
        return this.disabled || (this.maxDate && this._calendar.getNext(this.date, 'm').after(this.maxDate));
    };
    NgbDatepickerNavigation.prototype.prevDisabled = function () {
        var prevDate = this._calendar.getPrev(this.date, 'm');
        return this.disabled || (this.minDate && prevDate.year <= this.minDate.year && prevDate.month < this.minDate.month);
    };
    NgbDatepickerNavigation.prototype.selectDate = function (date) { this.select.emit(date); };
    return NgbDatepickerNavigation;
}());

NgbDatepickerNavigation.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-datepicker-navigation',
                host: { 'class': 'd-flex justify-content-between', '[class.collapsed]': '!showSelect' },
                styles: ["\n    :host {\n      height: 2rem;\n      line-height: 1.85rem;\n    }\n    :host.collapsed {\n      margin-bottom: -2rem;        \n    }\n    .ngb-dp-navigation-chevron::before {\n      border-style: solid;\n      border-width: 0.2em 0.2em 0 0;\n      content: '';\n      display: inline-block;\n      height: 0.75em;\n      transform: rotate(-135deg);\n      -webkit-transform: rotate(-135deg);\n      -ms-transform: rotate(-135deg);\n      width: 0.75em;\n      margin: 0 0 0 0.5rem;\n    }    \n    .ngb-dp-navigation-chevron.right:before {\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n      margin: 0 0.5rem 0 0;\n    }\n    .btn-link {\n      cursor: pointer;\n      outline: 0;\n    }\n    .btn-link[disabled] {\n      cursor: not-allowed;\n      opacity: .65;\n    }    \n  "],
                template: "\n    <button type=\"button\" class=\"btn-link\" (click)=\"!!doNavigate(navigation.PREV)\" [disabled]=\"prevDisabled()\">\n      <span class=\"ngb-dp-navigation-chevron\"></span>    \n    </button>\n    \n    <ngb-datepicker-navigation-select *ngIf=\"showSelect\" class=\"d-block\" [style.width.rem]=\"months * 9\"\n      [date]=\"date\"\n      [minDate]=\"minDate\"\n      [maxDate]=\"maxDate\"\n      [disabled] = \"disabled\"\n      (select)=\"selectDate($event)\">\n    </ngb-datepicker-navigation-select>\n    \n    <button type=\"button\" class=\"btn-link\" (click)=\"!!doNavigate(navigation.NEXT)\" [disabled]=\"nextDisabled()\">\n      <span class=\"ngb-dp-navigation-chevron right\"></span>\n    </button>\n  "
            },] },
];
/** @nocollapse */
NgbDatepickerNavigation.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__datepicker_i18n__["a" /* NgbDatepickerI18n */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__ngb_calendar__["a" /* NgbCalendar */], },
]; };
NgbDatepickerNavigation.propDecorators = {
    'date': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'months': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showWeekNumbers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'navigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'select': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=datepicker-navigation.js.map

/***/ }),
/* 452 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngb_calendar__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngb_date__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerService; });



var NgbDatepickerService = (function () {
    function NgbDatepickerService(_calendar) {
        this._calendar = _calendar;
    }
    NgbDatepickerService.prototype.generateMonthViewModel = function (date, minDate, maxDate, firstDayOfWeek, markDisabled) {
        var month = { firstDate: null, number: date.month, year: date.year, weeks: [], weekdays: [] };
        date = this._getFirstViewDate(date, firstDayOfWeek);
        // month has weeks
        for (var w = 0; w < this._calendar.getWeeksPerMonth(); w++) {
            var days = [];
            // week has days
            for (var d = 0; d < this._calendar.getDaysPerWeek(); d++) {
                if (w === 0) {
                    month.weekdays.push(this._calendar.getWeekday(date));
                }
                var newDate = new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](date.year, date.month, date.day);
                var disabled = (minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate));
                if (!disabled && markDisabled) {
                    disabled = markDisabled(newDate, { month: month.number, year: month.year });
                }
                // saving first date of the month
                if (month.firstDate === null && date.month === month.number) {
                    month.firstDate = newDate;
                }
                days.push({ date: newDate, disabled: disabled });
                date = this._calendar.getNext(date);
            }
            month.weeks.push({ number: this._calendar.getWeekNumber(days.map(function (day) { return __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */].from(day.date); }), firstDayOfWeek), days: days });
        }
        return month;
    };
    NgbDatepickerService.prototype.toValidDate = function (date, defaultValue) {
        var ngbDate = __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */].from(date);
        if (defaultValue === undefined) {
            defaultValue = this._calendar.getToday();
        }
        return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
    };
    NgbDatepickerService.prototype._getFirstViewDate = function (date, firstDayOfWeek) {
        var _this = this;
        var currentMonth = date.month;
        var today = new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](date.year, date.month, date.day);
        var yesterday = this._calendar.getPrev(today);
        var firstDayOfCurrentMonthIsAlsoFirstDayOfWeek = function () { return today.month !== yesterday.month && firstDayOfWeek === _this._calendar.getWeekday(today); };
        var reachedTheFirstDayOfTheLastWeekOfPreviousMonth = function () { return today.month !== currentMonth && firstDayOfWeek === _this._calendar.getWeekday(today); };
        // going back in time
        while (!reachedTheFirstDayOfTheLastWeekOfPreviousMonth() && !firstDayOfCurrentMonthIsAlsoFirstDayOfWeek()) {
            today = new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](yesterday.year, yesterday.month, yesterday.day);
            yesterday = this._calendar.getPrev(yesterday);
        }
        return today;
    };
    return NgbDatepickerService;
}());

NgbDatepickerService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbDatepickerService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__ngb_calendar__["a" /* NgbCalendar */], },
]; };
//# sourceMappingURL=datepicker-service.js.map

/***/ }),
/* 453 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationEvent; });
var NavigationEvent;
(function (NavigationEvent) {
    NavigationEvent[NavigationEvent["PREV"] = 0] = "PREV";
    NavigationEvent[NavigationEvent["NEXT"] = 1] = "NEXT";
})(NavigationEvent || (NavigationEvent = {}));
//# sourceMappingURL=datepicker-view-model.js.map

/***/ }),
/* 454 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datepicker_month_view__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datepicker_navigation__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datepicker_input__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datepicker_day_view__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datepicker_i18n__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngb_calendar__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngb_date_parser_formatter__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__datepicker_navigation_select__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__datepicker_config__ = __webpack_require__(423);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__datepicker__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__datepicker_input__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__ngb_calendar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hijri_ngb_calendar_islamic_civil__ = __webpack_require__(488);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_13__hijri_ngb_calendar_islamic_civil__["a"]; });
/* unused harmony reexport NgbDatepickerMonthView */
/* unused harmony reexport NgbDatepickerDayView */
/* unused harmony reexport NgbDatepickerNavigation */
/* unused harmony reexport NgbDatepickerNavigationSelect */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_12__datepicker_config__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__datepicker_i18n__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_10__ngb_date_parser_formatter__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgbDatepickerModule; });
























var NgbDatepickerModule = (function () {
    function NgbDatepickerModule() {
    }
    NgbDatepickerModule.forRoot = function () {
        return {
            ngModule: NgbDatepickerModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_9__ngb_calendar__["a" /* NgbCalendar */], useClass: __WEBPACK_IMPORTED_MODULE_9__ngb_calendar__["b" /* NgbCalendarGregorian */] },
                { provide: __WEBPACK_IMPORTED_MODULE_8__datepicker_i18n__["a" /* NgbDatepickerI18n */], useClass: __WEBPACK_IMPORTED_MODULE_8__datepicker_i18n__["b" /* NgbDatepickerI18nDefault */] },
                { provide: __WEBPACK_IMPORTED_MODULE_10__ngb_date_parser_formatter__["a" /* NgbDateParserFormatter */], useClass: __WEBPACK_IMPORTED_MODULE_10__ngb_date_parser_formatter__["b" /* NgbDateISOParserFormatter */] }, __WEBPACK_IMPORTED_MODULE_12__datepicker_config__["a" /* NgbDatepickerConfig */]
            ]
        };
    };
    return NgbDatepickerModule;
}());

NgbDatepickerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__datepicker__["a" /* NgbDatepicker */], __WEBPACK_IMPORTED_MODULE_3__datepicker_month_view__["a" /* NgbDatepickerMonthView */], __WEBPACK_IMPORTED_MODULE_4__datepicker_navigation__["a" /* NgbDatepickerNavigation */], __WEBPACK_IMPORTED_MODULE_11__datepicker_navigation_select__["a" /* NgbDatepickerNavigationSelect */], __WEBPACK_IMPORTED_MODULE_7__datepicker_day_view__["a" /* NgbDatepickerDayView */],
                    __WEBPACK_IMPORTED_MODULE_5__datepicker_input__["a" /* NgbInputDatepicker */]
                ],
                exports: [__WEBPACK_IMPORTED_MODULE_2__datepicker__["a" /* NgbDatepicker */], __WEBPACK_IMPORTED_MODULE_5__datepicker_input__["a" /* NgbInputDatepicker */]],
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"]],
                entryComponents: [__WEBPACK_IMPORTED_MODULE_2__datepicker__["a" /* NgbDatepicker */]]
            },] },
];
/** @nocollapse */
NgbDatepickerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=datepicker.module.js.map

/***/ }),
/* 455 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_config__ = __webpack_require__(426);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbDropdownToggle; });


/**
 * Transforms a node into a dropdown.
 */
var NgbDropdown = (function () {
    function NgbDropdown(config) {
        /**
         *  Defines whether or not the dropdown-menu is open initially.
         */
        this._open = false;
        /**
         *  An event fired when the dropdown is opened or closed.
         *  Event's payload equals whether dropdown is open.
         */
        this.openChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.up = config.up;
        this.autoClose = config.autoClose;
    }
    /**
     * Checks if the dropdown menu is open or not.
     */
    NgbDropdown.prototype.isOpen = function () { return this._open; };
    /**
     * Opens the dropdown menu of a given navbar or tabbed navigation.
     */
    NgbDropdown.prototype.open = function () {
        if (!this._open) {
            this._open = true;
            this.openChange.emit(true);
        }
    };
    /**
     * Closes the dropdown menu of a given navbar or tabbed navigation.
     */
    NgbDropdown.prototype.close = function () {
        if (this._open) {
            this._open = false;
            this.openChange.emit(false);
        }
    };
    /**
     * Toggles the dropdown menu of a given navbar or tabbed navigation.
     */
    NgbDropdown.prototype.toggle = function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    NgbDropdown.prototype.closeFromOutsideClick = function ($event) {
        if (this.autoClose && $event.button !== 2 && !this._isEventFromToggle($event)) {
            this.close();
        }
    };
    NgbDropdown.prototype.closeFromOutsideEsc = function () {
        if (this.autoClose) {
            this.close();
        }
    };
    Object.defineProperty(NgbDropdown.prototype, "toggleElement", {
        /**
         * @internal
         */
        set: function (toggleElement) { this._toggleElement = toggleElement; },
        enumerable: true,
        configurable: true
    });
    NgbDropdown.prototype._isEventFromToggle = function ($event) { return !!this._toggleElement && this._toggleElement.contains($event.target); };
    return NgbDropdown;
}());

NgbDropdown.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[ngbDropdown]',
                exportAs: 'ngbDropdown',
                host: {
                    '[class.dropdown]': '!up',
                    '[class.dropup]': 'up',
                    '[class.show]': 'isOpen()',
                    '(keyup.esc)': 'closeFromOutsideEsc()',
                    '(document:click)': 'closeFromOutsideClick($event)'
                }
            },] },
];
/** @nocollapse */
NgbDropdown.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__dropdown_config__["a" /* NgbDropdownConfig */], },
]; };
NgbDropdown.propDecorators = {
    'up': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'autoClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    '_open': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['open',] },],
    'openChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * Allows the dropdown to be toggled via click. This directive is optional.
 */
var NgbDropdownToggle = (function () {
    function NgbDropdownToggle(dropdown, elementRef) {
        this.dropdown = dropdown;
        dropdown.toggleElement = elementRef.nativeElement;
    }
    NgbDropdownToggle.prototype.toggleOpen = function () { this.dropdown.toggle(); };
    return NgbDropdownToggle;
}());

NgbDropdownToggle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[ngbDropdownToggle]',
                host: {
                    'class': 'dropdown-toggle',
                    'aria-haspopup': 'true',
                    '[attr.aria-expanded]': 'dropdown.isOpen()',
                    '(click)': 'toggleOpen()'
                }
            },] },
];
/** @nocollapse */
NgbDropdownToggle.ctorParameters = function () { return [
    { type: NgbDropdown, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
//# sourceMappingURL=dropdown.js.map

/***/ }),
/* 456 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_config__ = __webpack_require__(426);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__dropdown__["a"]; });
/* unused harmony reexport NgbDropdownToggle */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__dropdown_config__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDropdownModule; });





var NGB_DROPDOWN_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_1__dropdown__["b" /* NgbDropdownToggle */], __WEBPACK_IMPORTED_MODULE_1__dropdown__["a" /* NgbDropdown */]];
var NgbDropdownModule = (function () {
    function NgbDropdownModule() {
    }
    NgbDropdownModule.forRoot = function () { return { ngModule: NgbDropdownModule, providers: [__WEBPACK_IMPORTED_MODULE_2__dropdown_config__["a" /* NgbDropdownConfig */]] }; };
    return NgbDropdownModule;
}());

NgbDropdownModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES },] },
];
/** @nocollapse */
NgbDropdownModule.ctorParameters = function () { return []; };
//# sourceMappingURL=dropdown.module.js.map

/***/ }),
/* 457 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons_radio_module__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_module__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collapse_collapse_module__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__popover_popover_module__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_module__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rating_rating_module__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tabset_tabset_module__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_module__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_module__ = __webpack_require__(481);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionModule", function() { return __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionConfig", function() { return __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordion", function() { return __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanel", function() { return __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelTitle", function() { return __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelContent", function() { return __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlertModule", function() { return __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlertConfig", function() { return __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlert", function() { return __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbButtonsModule", function() { return __WEBPACK_IMPORTED_MODULE_3__buttons_radio_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRadioGroup", function() { return __WEBPACK_IMPORTED_MODULE_3__buttons_radio_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselModule", function() { return __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselConfig", function() { return __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarousel", function() { return __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbSlide", function() { return __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_module__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCollapseModule", function() { return __WEBPACK_IMPORTED_MODULE_5__collapse_collapse_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCollapse", function() { return __WEBPACK_IMPORTED_MODULE_5__collapse_collapse_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendar", function() { return __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicCivil", function() { return __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerModule", function() { return __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18n", function() { return __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerConfig", function() { return __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateParserFormatter", function() { return __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepicker", function() { return __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbInputDatepicker", function() { return __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownModule", function() { return __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownConfig", function() { return __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdown", function() { return __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalModule", function() { return __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModal", function() { return __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbActiveModal", function() { return __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalRef", function() { return __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDismissReasons", function() { return __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationModule", function() { return __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationConfig", function() { return __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPagination", function() { return __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverModule", function() { return __WEBPACK_IMPORTED_MODULE_10__popover_popover_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverConfig", function() { return __WEBPACK_IMPORTED_MODULE_10__popover_popover_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopover", function() { return __WEBPACK_IMPORTED_MODULE_10__popover_popover_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarModule", function() { return __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarConfig", function() { return __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbar", function() { return __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRatingModule", function() { return __WEBPACK_IMPORTED_MODULE_12__rating_rating_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRatingConfig", function() { return __WEBPACK_IMPORTED_MODULE_12__rating_rating_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRating", function() { return __WEBPACK_IMPORTED_MODULE_12__rating_rating_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetModule", function() { return __WEBPACK_IMPORTED_MODULE_13__tabset_tabset_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetConfig", function() { return __WEBPACK_IMPORTED_MODULE_13__tabset_tabset_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabset", function() { return __WEBPACK_IMPORTED_MODULE_13__tabset_tabset_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTab", function() { return __WEBPACK_IMPORTED_MODULE_13__tabset_tabset_module__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabContent", function() { return __WEBPACK_IMPORTED_MODULE_13__tabset_tabset_module__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabTitle", function() { return __WEBPACK_IMPORTED_MODULE_13__tabset_tabset_module__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerModule", function() { return __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerConfig", function() { return __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepicker", function() { return __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipModule", function() { return __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipConfig", function() { return __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltip", function() { return __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadModule", function() { return __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadConfig", function() { return __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeahead", function() { return __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_module__["c"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRootModule", function() { return NgbRootModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModule", function() { return NgbModule; });

































var NGB_MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__["a" /* NgbAccordionModule */], __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__["a" /* NgbAlertModule */], __WEBPACK_IMPORTED_MODULE_3__buttons_radio_module__["a" /* NgbButtonsModule */], __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_module__["a" /* NgbCarouselModule */], __WEBPACK_IMPORTED_MODULE_5__collapse_collapse_module__["a" /* NgbCollapseModule */], __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__["c" /* NgbDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__["a" /* NgbDropdownModule */], __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["a" /* NgbModalModule */], __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__["a" /* NgbPaginationModule */], __WEBPACK_IMPORTED_MODULE_10__popover_popover_module__["a" /* NgbPopoverModule */], __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_module__["a" /* NgbProgressbarModule */], __WEBPACK_IMPORTED_MODULE_12__rating_rating_module__["a" /* NgbRatingModule */],
    __WEBPACK_IMPORTED_MODULE_13__tabset_tabset_module__["a" /* NgbTabsetModule */], __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_module__["a" /* NgbTimepickerModule */], __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__["a" /* NgbTooltipModule */], __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_module__["a" /* NgbTypeaheadModule */]
];
var NgbRootModule = (function () {
    function NgbRootModule() {
    }
    return NgbRootModule;
}());

NgbRootModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__["a" /* NgbAlertModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_3__buttons_radio_module__["a" /* NgbButtonsModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_5__collapse_collapse_module__["a" /* NgbCollapseModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_module__["a" /* NgbProgressbarModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__["a" /* NgbTooltipModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_module__["a" /* NgbTypeaheadModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__["a" /* NgbAccordionModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_module__["a" /* NgbCarouselModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__["c" /* NgbDatepickerModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__["a" /* NgbDropdownModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["a" /* NgbModalModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__["a" /* NgbPaginationModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_10__popover_popover_module__["a" /* NgbPopoverModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_module__["a" /* NgbProgressbarModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_12__rating_rating_module__["a" /* NgbRatingModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_13__tabset_tabset_module__["a" /* NgbTabsetModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_module__["a" /* NgbTimepickerModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__["a" /* NgbTooltipModule */].forRoot()
                ],
                exports: NGB_MODULES
            },] },
];
/** @nocollapse */
NgbRootModule.ctorParameters = function () { return []; };
var NgbModule = (function () {
    function NgbModule() {
    }
    NgbModule.forRoot = function () { return { ngModule: NgbRootModule }; };
    return NgbModule;
}());

NgbModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ imports: NGB_MODULES, exports: NGB_MODULES },] },
];
/** @nocollapse */
NgbModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),
/* 458 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModalBackdrop; });

var NgbModalBackdrop = (function () {
    function NgbModalBackdrop() {
    }
    return NgbModalBackdrop;
}());

NgbModalBackdrop.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{ selector: 'ngb-modal-backdrop', template: '', host: { 'class': 'modal-backdrop fade show' } },] },
];
/** @nocollapse */
NgbModalBackdrop.ctorParameters = function () { return []; };
//# sourceMappingURL=modal-backdrop.js.map

/***/ }),
/* 459 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDismissReasons; });
var ModalDismissReasons;
(function (ModalDismissReasons) {
    ModalDismissReasons[ModalDismissReasons["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
    ModalDismissReasons[ModalDismissReasons["ESC"] = 1] = "ESC";
})(ModalDismissReasons || (ModalDismissReasons = {}));
//# sourceMappingURL=modal-dismiss-reasons.js.map

/***/ }),
/* 460 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_popup__ = __webpack_require__(417);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbActiveModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModalRef; });


/**
 * A reference to an active (currently opened) modal. Instances of this class
 * can be injected into components passed as modal content.
 */
var NgbActiveModal = (function () {
    function NgbActiveModal() {
    }
    /**
     * Can be used to close a modal, passing an optional result.
     */
    NgbActiveModal.prototype.close = function (result) { };
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     */
    NgbActiveModal.prototype.dismiss = function (reason) { };
    return NgbActiveModal;
}());

NgbActiveModal.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbActiveModal.ctorParameters = function () { return []; };
/**
 * A reference to a newly opened modal.
 */
var NgbModalRef = (function () {
    function NgbModalRef(_windowCmptRef, _contentRef, _backdropCmptRef) {
        var _this = this;
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        _windowCmptRef.instance.dismissEvent.subscribe(function (reason) { _this.dismiss(reason); });
        this.result = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
        this.result.then(null, function () { });
    }
    Object.defineProperty(NgbModalRef.prototype, "componentInstance", {
        /**
         * The instance of component used as modal's content.
         * Undefined when a TemplateRef is used as modal's content.
         */
        get: function () {
            if (this._contentRef.componentRef) {
                return this._contentRef.componentRef.instance;
            }
        },
        // only needed to keep TS1.8 compatibility
        set: function (instance) { },
        enumerable: true,
        configurable: true
    });
    /**
     * Can be used to close a modal, passing an optional result.
     */
    NgbModalRef.prototype.close = function (result) {
        if (this._windowCmptRef) {
            this._resolve(result);
            this._removeModalElements();
        }
    };
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     */
    NgbModalRef.prototype.dismiss = function (reason) {
        if (this._windowCmptRef) {
            this._reject(reason);
            this._removeModalElements();
        }
    };
    NgbModalRef.prototype._removeModalElements = function () {
        var windowNativeEl = this._windowCmptRef.location.nativeElement;
        windowNativeEl.parentNode.removeChild(windowNativeEl);
        this._windowCmptRef.destroy();
        if (this._backdropCmptRef) {
            var backdropNativeEl = this._backdropCmptRef.location.nativeElement;
            backdropNativeEl.parentNode.removeChild(backdropNativeEl);
            this._backdropCmptRef.destroy();
        }
        if (this._contentRef && this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._windowCmptRef = null;
        this._backdropCmptRef = null;
        this._contentRef = null;
    };
    return NgbModalRef;
}());

NgbModalRef.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbModalRef.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__util_popup__["b" /* ContentRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentRef"], },
]; };
//# sourceMappingURL=modal-ref.js.map

/***/ }),
/* 461 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_popup__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_backdrop__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_window__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_ref__ = __webpack_require__(460);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModalStack; });






var NgbModalStack = (function () {
    function NgbModalStack(_applicationRef, _injector, _componentFactoryResolver) {
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._backdropFactory = _componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__modal_backdrop__["a" /* NgbModalBackdrop */]);
        this._windowFactory = _componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__modal_window__["a" /* NgbModalWindow */]);
    }
    NgbModalStack.prototype.open = function (moduleCFR, contentInjector, content, options) {
        var containerSelector = options.container || 'body';
        var containerEl = document.querySelector(containerSelector);
        if (!containerEl) {
            throw new Error("The specified modal container \"" + containerSelector + "\" was not found in the DOM.");
        }
        var activeModal = new __WEBPACK_IMPORTED_MODULE_5__modal_ref__["b" /* NgbActiveModal */]();
        var contentRef = this._getContentRef(moduleCFR, contentInjector, content, activeModal);
        var windowCmptRef;
        var backdropCmptRef;
        var ngbModalRef;
        if (options.backdrop !== false) {
            backdropCmptRef = this._backdropFactory.create(this._injector);
            this._applicationRef.attachView(backdropCmptRef.hostView);
            containerEl.appendChild(backdropCmptRef.location.nativeElement);
        }
        windowCmptRef = this._windowFactory.create(this._injector, contentRef.nodes);
        this._applicationRef.attachView(windowCmptRef.hostView);
        containerEl.appendChild(windowCmptRef.location.nativeElement);
        ngbModalRef = new __WEBPACK_IMPORTED_MODULE_5__modal_ref__["a" /* NgbModalRef */](windowCmptRef, contentRef, backdropCmptRef);
        activeModal.close = function (result) { ngbModalRef.close(result); };
        activeModal.dismiss = function (reason) { ngbModalRef.dismiss(reason); };
        this._applyWindowOptions(windowCmptRef.instance, options);
        return ngbModalRef;
    };
    NgbModalStack.prototype._applyWindowOptions = function (windowInstance, options) {
        ['backdrop', 'keyboard', 'size', 'windowClass'].forEach(function (optionName) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["c" /* isDefined */])(options[optionName])) {
                windowInstance[optionName] = options[optionName];
            }
        });
    };
    NgbModalStack.prototype._getContentRef = function (moduleCFR, contentInjector, content, context) {
        if (!content) {
            return new __WEBPACK_IMPORTED_MODULE_1__util_popup__["b" /* ContentRef */]([]);
        }
        else if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) {
            var viewRef = content.createEmbeddedView(context);
            this._applicationRef.attachView(viewRef);
            return new __WEBPACK_IMPORTED_MODULE_1__util_popup__["b" /* ContentRef */]([viewRef.rootNodes], viewRef);
        }
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["h" /* isString */])(content)) {
            return new __WEBPACK_IMPORTED_MODULE_1__util_popup__["b" /* ContentRef */]([[document.createTextNode("" + content)]]);
        }
        else {
            var contentCmptFactory = moduleCFR.resolveComponentFactory(content);
            var modalContentInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolveAndCreate([{ provide: __WEBPACK_IMPORTED_MODULE_5__modal_ref__["b" /* NgbActiveModal */], useValue: context }], contentInjector);
            var componentRef = contentCmptFactory.create(modalContentInjector);
            this._applicationRef.attachView(componentRef.hostView);
            return new __WEBPACK_IMPORTED_MODULE_1__util_popup__["b" /* ContentRef */]([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
    };
    return NgbModalStack;
}());

NgbModalStack.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbModalStack.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
]; };
//# sourceMappingURL=modal-stack.js.map

/***/ }),
/* 462 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_dismiss_reasons__ = __webpack_require__(459);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModalWindow; });


var NgbModalWindow = (function () {
    function NgbModalWindow(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.backdrop = true;
        this.keyboard = true;
        this.dismissEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NgbModalWindow.prototype.backdropClick = function ($event) {
        if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
            this.dismiss(__WEBPACK_IMPORTED_MODULE_1__modal_dismiss_reasons__["a" /* ModalDismissReasons */].BACKDROP_CLICK);
        }
    };
    NgbModalWindow.prototype.escKey = function ($event) {
        if (this.keyboard && !$event.defaultPrevented) {
            this.dismiss(__WEBPACK_IMPORTED_MODULE_1__modal_dismiss_reasons__["a" /* ModalDismissReasons */].ESC);
        }
    };
    NgbModalWindow.prototype.dismiss = function (reason) { this.dismissEvent.emit(reason); };
    NgbModalWindow.prototype.ngOnInit = function () {
        this._elWithFocus = document.activeElement;
        this._renderer.addClass(document.body, 'modal-open');
    };
    NgbModalWindow.prototype.ngAfterViewInit = function () {
        if (!this._elRef.nativeElement.contains(document.activeElement)) {
            this._elRef.nativeElement['focus'].apply(this._elRef.nativeElement, []);
        }
    };
    NgbModalWindow.prototype.ngOnDestroy = function () {
        if (this._elWithFocus && document.body.contains(this._elWithFocus)) {
            this._elWithFocus['focus'].apply(this._elWithFocus, []);
        }
        else {
            document.body['focus'].apply(document.body, []);
        }
        this._elWithFocus = null;
        this._renderer.removeClass(document.body, 'modal-open');
    };
    return NgbModalWindow;
}());

NgbModalWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-modal-window',
                host: {
                    '[class]': '"modal fade show" + (windowClass ? " " + windowClass : "")',
                    'role': 'dialog',
                    'tabindex': '-1',
                    'style': 'display: block;',
                    '(keyup.esc)': 'escKey($event)',
                    '(click)': 'backdropClick($event)'
                },
                template: "\n    <div [class]=\"'modal-dialog' + (size ? ' modal-' + size : '')\" role=\"document\">\n        <div class=\"modal-content\"><ng-content></ng-content></div>\n    </div>\n    "
            },] },
];
/** @nocollapse */
NgbModalWindow.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
NgbModalWindow.propDecorators = {
    'backdrop': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'keyboard': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'windowClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'dismissEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['dismiss',] },],
};
//# sourceMappingURL=modal-window.js.map

/***/ }),
/* 463 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_stack__ = __webpack_require__(461);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModal; });


/**
 * A service to open modal windows. Creating a modal is straightforward: create a template and pass it as an argument to
 * the "open" method!
 */
var NgbModal = (function () {
    function NgbModal(_moduleCFR, _injector, _modalStack) {
        this._moduleCFR = _moduleCFR;
        this._injector = _injector;
        this._modalStack = _modalStack;
    }
    /**
     * Opens a new modal window with the specified content and using supplied options. Content can be provided
     * as a TemplateRef or a component type. If you pass a component type as content than instances of those
     * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
     * NgbActiveModal class to close / dismiss modals from "inside" of a component.
     */
    NgbModal.prototype.open = function (content, options) {
        if (options === void 0) { options = {}; }
        return this._modalStack.open(this._moduleCFR, this._injector, content, options);
    };
    return NgbModal;
}());

NgbModal.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbModal.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__modal_stack__["a" /* NgbModalStack */], },
]; };
//# sourceMappingURL=modal.js.map

/***/ }),
/* 464 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_backdrop__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_window__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_stack__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal__ = __webpack_require__(463);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_ref__ = __webpack_require__(460);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__modal_ref__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__modal_ref__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_dismiss_reasons__ = __webpack_require__(459);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__modal_dismiss_reasons__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModalModule; });








var NgbModalModule = (function () {
    function NgbModalModule() {
    }
    NgbModalModule.forRoot = function () { return { ngModule: NgbModalModule, providers: [__WEBPACK_IMPORTED_MODULE_4__modal__["a" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_3__modal_stack__["a" /* NgbModalStack */]] }; };
    return NgbModalModule;
}());

NgbModalModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop__["a" /* NgbModalBackdrop */], __WEBPACK_IMPORTED_MODULE_2__modal_window__["a" /* NgbModalWindow */]],
                entryComponents: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop__["a" /* NgbModalBackdrop */], __WEBPACK_IMPORTED_MODULE_2__modal_window__["a" /* NgbModalWindow */]],
                providers: [__WEBPACK_IMPORTED_MODULE_4__modal__["a" /* NgbModal */]]
            },] },
];
/** @nocollapse */
NgbModalModule.ctorParameters = function () { return []; };
//# sourceMappingURL=modal.module.js.map

/***/ }),
/* 465 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_config__ = __webpack_require__(427);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPagination; });



/**
 * A directive that will take care of visualising a pagination bar and enable / disable buttons correctly!
 */
var NgbPagination = (function () {
    function NgbPagination(config) {
        this.pageCount = 0;
        this.pages = [];
        /**
         *  Current page.
         */
        this.page = 0;
        /**
         *  An event fired when the page is changed.
         *  Event's payload equals to the newly selected page.
         */
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.disabled = config.disabled;
        this.boundaryLinks = config.boundaryLinks;
        this.directionLinks = config.directionLinks;
        this.ellipses = config.ellipses;
        this.maxSize = config.maxSize;
        this.pageSize = config.pageSize;
        this.rotate = config.rotate;
        this.size = config.size;
    }
    NgbPagination.prototype.hasPrevious = function () { return this.page > 1; };
    NgbPagination.prototype.hasNext = function () { return this.page < this.pageCount; };
    NgbPagination.prototype.selectPage = function (pageNumber) { this._updatePages(pageNumber); };
    NgbPagination.prototype.ngOnChanges = function (changes) { this._updatePages(this.page); };
    /**
     * @internal
     */
    NgbPagination.prototype.isEllipsis = function (pageNumber) { return pageNumber === -1; };
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    NgbPagination.prototype._applyEllipses = function (start, end) {
        if (this.ellipses) {
            if (start > 0) {
                if (start > 1) {
                    this.pages.unshift(-1);
                }
                this.pages.unshift(1);
            }
            if (end < this.pageCount) {
                if (end < (this.pageCount - 1)) {
                    this.pages.push(-1);
                }
                this.pages.push(this.pageCount);
            }
        }
    };
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    NgbPagination.prototype._applyRotation = function () {
        var start = 0;
        var end = this.pageCount;
        var leftOffset = Math.floor(this.maxSize / 2);
        var rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        return [start, end];
    };
    /**
     * Paginates page numbers based on maxSize items per page
     */
    NgbPagination.prototype._applyPagination = function () {
        var page = Math.ceil(this.page / this.maxSize) - 1;
        var start = page * this.maxSize;
        var end = start + this.maxSize;
        return [start, end];
    };
    NgbPagination.prototype._setPageInRange = function (newPageNo) {
        var prevPageNo = this.page;
        this.page = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_util__["g" /* getValueInRange */])(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo) {
            this.pageChange.emit(this.page);
        }
    };
    NgbPagination.prototype._updatePages = function (newPage) {
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_util__["d" /* isNumber */])(this.pageCount)) {
            this.pageCount = 0;
        }
        // fill-in model needed to render pages
        this.pages.length = 0;
        for (var i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            var start = 0;
            var end = this.pageCount;
            // either paginating or rotating page numbers
            if (this.rotate) {
                _a = this._applyRotation(), start = _a[0], end = _a[1];
            }
            else {
                _b = this._applyPagination(), start = _b[0], end = _b[1];
            }
            this.pages = this.pages.slice(start, end);
            // adding ellipses
            this._applyEllipses(start, end);
        }
        var _a, _b;
    };
    return NgbPagination;
}());

NgbPagination.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-pagination',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                host: { 'role': 'navigation' },
                template: "\n    <ul [class]=\"'pagination' + (size ? ' pagination-' + size : '')\">\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\"\n        [class.disabled]=\"!hasPrevious() || disabled\">\n        <a aria-label=\"First\" class=\"page-link\" href (click)=\"!!selectPage(1)\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <span aria-hidden=\"true\">&laquo;&laquo;</span>\n        </a>\n      </li>\n\n      <li *ngIf=\"directionLinks\" class=\"page-item\"\n        [class.disabled]=\"!hasPrevious() || disabled\">\n        <a aria-label=\"Previous\" class=\"page-link\" href (click)=\"!!selectPage(page-1)\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <span aria-hidden=\"true\">&laquo;</span>\n        </a>\n      </li>\n      <li *ngFor=\"let pageNumber of pages\" class=\"page-item\" [class.active]=\"pageNumber === page\"\n        [class.disabled]=\"isEllipsis(pageNumber) || disabled\">\n        <a *ngIf=\"isEllipsis(pageNumber)\" class=\"page-link\">...</a>\n        <a *ngIf=\"!isEllipsis(pageNumber)\" class=\"page-link\" href (click)=\"!!selectPage(pageNumber)\">\n          {{pageNumber}}\n          <span *ngIf=\"pageNumber === page\" class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li *ngIf=\"directionLinks\" class=\"page-item\" [class.disabled]=\"!hasNext() || disabled\">\n        <a aria-label=\"Next\" class=\"page-link\" href (click)=\"!!selectPage(page+1)\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <span aria-hidden=\"true\">&raquo;</span>\n        </a>\n      </li>\n\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\" [class.disabled]=\"!hasNext() || disabled\">\n        <a aria-label=\"Last\" class=\"page-link\" href (click)=\"!!selectPage(pageCount)\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <span aria-hidden=\"true\">&raquo;&raquo;</span>\n        </a>\n      </li>\n    </ul>\n  "
            },] },
];
/** @nocollapse */
NgbPagination.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__pagination_config__["a" /* NgbPaginationConfig */], },
]; };
NgbPagination.propDecorators = {
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'boundaryLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ellipses': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'rotate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'collectionSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'page': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'pageSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=pagination.js.map

/***/ }),
/* 466 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagination_config__ = __webpack_require__(427);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__pagination__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__pagination_config__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPaginationModule; });






var NgbPaginationModule = (function () {
    function NgbPaginationModule() {
    }
    NgbPaginationModule.forRoot = function () { return { ngModule: NgbPaginationModule, providers: [__WEBPACK_IMPORTED_MODULE_3__pagination_config__["a" /* NgbPaginationConfig */]] }; };
    return NgbPaginationModule;
}());

NgbPaginationModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_2__pagination__["a" /* NgbPagination */]], exports: [__WEBPACK_IMPORTED_MODULE_2__pagination__["a" /* NgbPagination */]], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]] },] },
];
/** @nocollapse */
NgbPaginationModule.ctorParameters = function () { return []; };
//# sourceMappingURL=pagination.module.js.map

/***/ }),
/* 467 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_triggers__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_positioning__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_popup__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_config__ = __webpack_require__(428);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbPopoverWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPopover; });





var nextId = 0;
var NgbPopoverWindow = (function () {
    function NgbPopoverWindow() {
        this.placement = 'top';
    }
    return NgbPopoverWindow;
}());

NgbPopoverWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-popover-window',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                host: { '[class]': '"popover show popover-" + placement', 'role': 'tooltip', '[id]': 'id' },
                template: "\n    <h3 class=\"popover-title\">{{title}}</h3><div class=\"popover-content\"><ng-content></ng-content></div>\n    "
            },] },
];
/** @nocollapse */
NgbPopoverWindow.ctorParameters = function () { return []; };
NgbPopoverWindow.propDecorators = {
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var NgbPopover = (function () {
    function NgbPopover(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * Emits an event when the popover is shown
         */
        this.shown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Emits an event when the popover is hidden
         */
        this.hidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._ngbPopoverWindowId = "ngb-popover-" + nextId++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this._popupService = new __WEBPACK_IMPORTED_MODULE_3__util_popup__["a" /* PopupService */](NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_positioning__["a" /* positionElements */])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
            }
        });
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of the popover.
     * The context is an optional value to be injected into the popover template when it is created.
     */
    NgbPopover.prototype.open = function (context) {
        if (!this._windowRef) {
            this._windowRef = this._popupService.open(this.ngbPopover, context);
            this._windowRef.instance.placement = this.placement;
            this._windowRef.instance.title = this.popoverTitle;
            this._windowRef.instance.id = this._ngbPopoverWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered via
            // Renderer::listen() are not picked up by change detection with the OnPush strategy
            this._windowRef.changeDetectorRef.markForCheck();
            this.shown.emit();
        }
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of the popover.
     */
    NgbPopover.prototype.close = function () {
        if (this._windowRef) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
     */
    NgbPopover.prototype.toggle = function () {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Returns whether or not the popover is currently being shown
     */
    NgbPopover.prototype.isOpen = function () { return this._windowRef != null; };
    NgbPopover.prototype.ngOnInit = function () {
        this._unregisterListenersFn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_triggers__["a" /* listenToTriggers */])(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbPopover.prototype.ngOnDestroy = function () {
        this.close();
        this._unregisterListenersFn();
        this._zoneSubscription.unsubscribe();
    };
    return NgbPopover;
}());

NgbPopover.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngbPopover]', exportAs: 'ngbPopover' },] },
];
/** @nocollapse */
NgbPopover.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_4__popover_config__["a" /* NgbPopoverConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
NgbPopover.propDecorators = {
    'ngbPopover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'popoverTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'shown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'hidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=popover.js.map

/***/ }),
/* 468 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_config__ = __webpack_require__(428);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__popover__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__popover_config__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPopoverModule; });





var NgbPopoverModule = (function () {
    function NgbPopoverModule() {
    }
    NgbPopoverModule.forRoot = function () { return { ngModule: NgbPopoverModule, providers: [__WEBPACK_IMPORTED_MODULE_2__popover_config__["a" /* NgbPopoverConfig */]] }; };
    return NgbPopoverModule;
}());

NgbPopoverModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_1__popover__["a" /* NgbPopover */], __WEBPACK_IMPORTED_MODULE_1__popover__["b" /* NgbPopoverWindow */]], exports: [__WEBPACK_IMPORTED_MODULE_1__popover__["a" /* NgbPopover */]], entryComponents: [__WEBPACK_IMPORTED_MODULE_1__popover__["b" /* NgbPopoverWindow */]] },] },
];
/** @nocollapse */
NgbPopoverModule.ctorParameters = function () { return []; };
//# sourceMappingURL=popover.module.js.map

/***/ }),
/* 469 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressbar_config__ = __webpack_require__(429);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbProgressbar; });



/**
 * Directive that can be used to provide feedback on the progress of a workflow or an action.
 */
var NgbProgressbar = (function () {
    function NgbProgressbar(config) {
        /**
         * Current value to be displayed in the progressbar. Should be smaller or equal to "max" value.
         */
        this.value = 0;
        this.max = config.max;
        this.animated = config.animated;
        this.striped = config.striped;
        this.type = config.type;
        this.showValue = config.showValue;
    }
    NgbProgressbar.prototype.getValue = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_util__["g" /* getValueInRange */])(this.value, this.max); };
    NgbProgressbar.prototype.getPercentValue = function () { return 100 * this.getValue() / this.max; };
    return NgbProgressbar;
}());

NgbProgressbar.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-progressbar',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                template: "\n    <div class=\"progress\">\n      <div class=\"progress-bar{{type ? ' bg-' + type : ''}}{{animated ? ' progress-bar-animated' : ''}}{{striped ?\n    ' progress-bar-striped' : ''}}\" role=\"progressbar\" [style.width.%]=\"getPercentValue()\"\n    [attr.aria-valuenow]=\"getValue()\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\">\n        <span *ngIf=\"showValue\">{{getPercentValue()}}%</span><ng-content></ng-content>\n      </div>\n    </div>\n  "
            },] },
];
/** @nocollapse */
NgbProgressbar.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__progressbar_config__["a" /* NgbProgressbarConfig */], },
]; };
NgbProgressbar.propDecorators = {
    'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'animated': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'striped': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=progressbar.js.map

/***/ }),
/* 470 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressbar__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progressbar_config__ = __webpack_require__(429);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__progressbar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__progressbar_config__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbProgressbarModule; });






var NgbProgressbarModule = (function () {
    function NgbProgressbarModule() {
    }
    NgbProgressbarModule.forRoot = function () { return { ngModule: NgbProgressbarModule, providers: [__WEBPACK_IMPORTED_MODULE_3__progressbar_config__["a" /* NgbProgressbarConfig */]] }; };
    return NgbProgressbarModule;
}());

NgbProgressbarModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_2__progressbar__["a" /* NgbProgressbar */]], exports: [__WEBPACK_IMPORTED_MODULE_2__progressbar__["a" /* NgbProgressbar */]], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]] },] },
];
/** @nocollapse */
NgbProgressbarModule.ctorParameters = function () { return []; };
//# sourceMappingURL=progressbar.module.js.map

/***/ }),
/* 471 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rating_config__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbRating; });




var Key;
(function (Key) {
    Key[Key["End"] = 35] = "End";
    Key[Key["Home"] = 36] = "Home";
    Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowRight"] = 39] = "ArrowRight";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
var NGB_RATING_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgbRating; }),
    multi: true
};
/**
 * Rating directive that will take care of visualising a star rating bar.
 */
var NgbRating = (function () {
    function NgbRating(config, _changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.contexts = [];
        this.disabled = false;
        /**
         * An event fired when a user is hovering over a given rating.
         * Event's payload equals to the rating being hovered over.
         */
        this.hover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An event fired when a user stops hovering over a given rating.
         * Event's payload equals to the rating of the last item being hovered over.
         */
        this.leave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An event fired when a user selects a new rating.
         * Event's payload equals to the newly selected rating.
         */
        this.rateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.max = config.max;
        this.readonly = config.readonly;
    }
    NgbRating.prototype.ariaValueText = function () { return this.nextRate + " out of " + this.max; };
    NgbRating.prototype.enter = function (value) {
        if (!this.readonly && !this.disabled) {
            this._updateState(value);
        }
        this.hover.emit(value);
    };
    NgbRating.prototype.handleBlur = function () { this.onTouched(); };
    NgbRating.prototype.handleClick = function (value) { this.update(this.resettable && this.rate === value ? 0 : value); };
    NgbRating.prototype.handleKeyDown = function (event) {
        if (Key[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* toString */])(event.which)]) {
            event.preventDefault();
            switch (event.which) {
                case Key.ArrowDown:
                case Key.ArrowLeft:
                    this.update(this.rate - 1);
                    break;
                case Key.ArrowUp:
                case Key.ArrowRight:
                    this.update(this.rate + 1);
                    break;
                case Key.Home:
                    this.update(0);
                    break;
                case Key.End:
                    this.update(this.max);
                    break;
            }
        }
    };
    NgbRating.prototype.ngOnChanges = function (changes) {
        if (changes['rate']) {
            this.update(this.rate);
        }
    };
    NgbRating.prototype.ngOnInit = function () {
        this.contexts = Array.from({ length: this.max }, function () { return ({ fill: 0 }); });
        this._updateState(this.rate);
    };
    NgbRating.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbRating.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbRating.prototype.reset = function () {
        this.leave.emit(this.nextRate);
        this._updateState(this.rate);
    };
    NgbRating.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    NgbRating.prototype.update = function (value, internalChange) {
        if (internalChange === void 0) { internalChange = true; }
        var newRate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["g" /* getValueInRange */])(value, this.max, 0);
        if (!this.readonly && !this.disabled && this.rate !== newRate) {
            this.rate = newRate;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            this.onChange(this.rate);
            this.onTouched();
        }
        this._updateState(this.rate);
    };
    NgbRating.prototype.writeValue = function (value) {
        this.update(value, false);
        this._changeDetectorRef.markForCheck();
    };
    NgbRating.prototype._getFillValue = function (index) {
        var diff = this.nextRate - index;
        if (diff >= 1) {
            return 100;
        }
        if (diff < 1 && diff > 0) {
            return Number.parseInt((diff * 100).toFixed(2));
        }
        return 0;
    };
    NgbRating.prototype._updateState = function (nextValue) {
        var _this = this;
        this.nextRate = nextValue;
        this.contexts.forEach(function (context, index) { return context.fill = _this._getFillValue(index); });
    };
    return NgbRating;
}());

NgbRating.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-rating',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                host: {
                    'class': 'd-inline-flex',
                    'tabindex': '0',
                    'role': 'slider',
                    'aria-valuemin': '0',
                    '[attr.aria-valuemax]': 'max',
                    '[attr.aria-valuenow]': 'nextRate',
                    '[attr.aria-valuetext]': 'ariaValueText()',
                    '[attr.aria-disabled]': 'readonly ? true : null',
                    '(blur)': 'handleBlur()',
                    '(keydown)': 'handleKeyDown($event)',
                    '(mouseleave)': 'reset()'
                },
                template: "\n    <ng-template #t let-fill=\"fill\">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>\n    <ng-template ngFor [ngForOf]=\"contexts\" let-index=\"index\">\n      <span class=\"sr-only\">({{ index < nextRate ? '*' : ' ' }})</span>\n      <span (mouseenter)=\"enter(index + 1)\" (click)=\"handleClick(index + 1)\" [style.cursor]=\"readonly || disabled ? 'default' : 'pointer'\">\n        <ng-template [ngTemplateOutlet]=\"starTemplate || t\" [ngOutletContext]=\"contexts[index]\"></ng-template>\n      </span>\n    </ng-template>\n  ",
                providers: [NGB_RATING_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbRating.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__rating_config__["a" /* NgbRatingConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
NgbRating.propDecorators = {
    'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'rate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'readonly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resettable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'starTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],] },],
    'hover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'leave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'rateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=rating.js.map

/***/ }),
/* 472 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rating_config__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rating__ = __webpack_require__(471);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__rating__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__rating_config__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbRatingModule; });






var NgbRatingModule = (function () {
    function NgbRatingModule() {
    }
    NgbRatingModule.forRoot = function () { return { ngModule: NgbRatingModule, providers: [__WEBPACK_IMPORTED_MODULE_2__rating_config__["a" /* NgbRatingConfig */]] }; };
    return NgbRatingModule;
}());

NgbRatingModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_3__rating__["a" /* NgbRating */]], exports: [__WEBPACK_IMPORTED_MODULE_3__rating__["a" /* NgbRating */]], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]] },] },
];
/** @nocollapse */
NgbRatingModule.ctorParameters = function () { return []; };
//# sourceMappingURL=rating.module.js.map

/***/ }),
/* 473 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabset_config__ = __webpack_require__(431);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NgbTabTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgbTabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTabset; });


var nextId = 0;
/**
 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
 */
var NgbTabTitle = (function () {
    function NgbTabTitle(templateRef) {
        this.templateRef = templateRef;
    }
    return NgbTabTitle;
}());

NgbTabTitle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'ng-template[ngbTabTitle]' },] },
];
/** @nocollapse */
NgbTabTitle.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
]; };
/**
 * This directive must be used to wrap content to be displayed in a tab.
 */
var NgbTabContent = (function () {
    function NgbTabContent(templateRef) {
        this.templateRef = templateRef;
    }
    return NgbTabContent;
}());

NgbTabContent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'ng-template[ngbTabContent]' },] },
];
/** @nocollapse */
NgbTabContent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
]; };
/**
 * A directive representing an individual tab.
 */
var NgbTab = (function () {
    function NgbTab() {
        /**
         * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
         */
        this.id = "ngb-tab-" + nextId++;
        /**
         * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
         */
        this.disabled = false;
    }
    return NgbTab;
}());

NgbTab.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'ngb-tab' },] },
];
/** @nocollapse */
NgbTab.ctorParameters = function () { return []; };
NgbTab.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'contentTpl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [NgbTabContent,] },],
    'titleTpl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [NgbTabTitle,] },],
};
/**
 * A component that makes it easy to create tabbed interface.
 */
var NgbTabset = (function () {
    function NgbTabset(config) {
        /**
         * Whether the closed tabs should be hidden without destroying them
         */
        this.destroyOnHide = true;
        /**
         * A tab change event fired right before the tab selection happens. See NgbTabChangeEvent for payload details
         */
        this.tabChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.type = config.type;
        this.justify = config.justify;
    }
    /**
     * Selects the tab with the given id and shows its associated pane.
     * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     */
    NgbTabset.prototype.select = function (tabId) {
        var selectedTab = this._getTabById(tabId);
        if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
            var defaultPrevented_1 = false;
            this.tabChange.emit({ activeId: this.activeId, nextId: selectedTab.id, preventDefault: function () { defaultPrevented_1 = true; } });
            if (!defaultPrevented_1) {
                this.activeId = selectedTab.id;
            }
        }
    };
    NgbTabset.prototype.ngAfterContentChecked = function () {
        // auto-correct activeId that might have been set incorrectly as input
        var activeTab = this._getTabById(this.activeId);
        this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
    };
    NgbTabset.prototype._getTabById = function (id) {
        var tabsWithId = this.tabs.filter(function (tab) { return tab.id === id; });
        return tabsWithId.length ? tabsWithId[0] : null;
    };
    return NgbTabset;
}());

NgbTabset.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-tabset',
                exportAs: 'ngbTabset',
                template: "\n    <ul [class]=\"'nav nav-' + type + ' justify-content-' + justify\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a [id]=\"tab.id\" class=\"nav-link\" [class.active]=\"tab.id === activeId\" [class.disabled]=\"tab.disabled\"\n          href (click)=\"!!select(tab.id)\" role=\"tab\" [attr.tabindex]=\"(tab.disabled ? '-1': undefined)\"\n          [attr.aria-controls]=\"(!destroyOnHide || tab.id === activeId ? tab.id + '-panel' : null)\"\n          [attr.aria-expanded]=\"tab.id === activeId\" [attr.aria-disabled]=\"tab.disabled\">\n          {{tab.title}}<ng-template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef\"></ng-template>\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n        <div\n          class=\"tab-pane {{tab.id === activeId ? 'active' : null}}\"\n          *ngIf=\"!destroyOnHide || tab.id === activeId\"\n          role=\"tabpanel\"\n          [attr.aria-labelledby]=\"tab.id\" id=\"{{tab.id}}-panel\"\n          [attr.aria-expanded]=\"tab.id === activeId\">\n          <ng-template [ngTemplateOutlet]=\"tab.contentTpl.templateRef\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  "
            },] },
];
/** @nocollapse */
NgbTabset.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__tabset_config__["a" /* NgbTabsetConfig */], },
]; };
NgbTabset.propDecorators = {
    'tabs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [NgbTab,] },],
    'activeId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'destroyOnHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'justify': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tabChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=tabset.js.map

/***/ }),
/* 474 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabset__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabset_config__ = __webpack_require__(431);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__tabset__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__tabset__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__tabset__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__tabset__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__tabset_config__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTabsetModule; });






var NGB_TABSET_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_2__tabset__["a" /* NgbTabset */], __WEBPACK_IMPORTED_MODULE_2__tabset__["b" /* NgbTab */], __WEBPACK_IMPORTED_MODULE_2__tabset__["c" /* NgbTabContent */], __WEBPACK_IMPORTED_MODULE_2__tabset__["d" /* NgbTabTitle */]];
var NgbTabsetModule = (function () {
    function NgbTabsetModule() {
    }
    NgbTabsetModule.forRoot = function () { return { ngModule: NgbTabsetModule, providers: [__WEBPACK_IMPORTED_MODULE_3__tabset_config__["a" /* NgbTabsetConfig */]] }; };
    return NgbTabsetModule;
}());

NgbTabsetModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]] },] },
];
/** @nocollapse */
NgbTabsetModule.ctorParameters = function () { return []; };
//# sourceMappingURL=tabset.module.js.map

/***/ }),
/* 475 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngb_time__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timepicker_config__ = __webpack_require__(432);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTimepicker; });





var NGB_TIMEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgbTimepicker; }),
    multi: true
};
/**
 * A lightweight & configurable timepicker directive.
 */
var NgbTimepicker = (function () {
    function NgbTimepicker(config) {
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.meridian = config.meridian;
        this.spinners = config.spinners;
        this.seconds = config.seconds;
        this.hourStep = config.hourStep;
        this.minuteStep = config.minuteStep;
        this.secondStep = config.secondStep;
        this.disabled = config.disabled;
        this.readonlyInputs = config.readonlyInputs;
        this.size = config.size;
    }
    NgbTimepicker.prototype.writeValue = function (value) {
        this.model = value ? new __WEBPACK_IMPORTED_MODULE_3__ngb_time__["a" /* NgbTime */](value.hour, value.minute, value.second) : new __WEBPACK_IMPORTED_MODULE_3__ngb_time__["a" /* NgbTime */]();
        if (!this.seconds && (!value || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(value.second))) {
            this.model.second = 0;
        }
    };
    NgbTimepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbTimepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbTimepicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    NgbTimepicker.prototype.changeHour = function (step) {
        this.model.changeHour(step);
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.changeMinute = function (step) {
        this.model.changeMinute(step);
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.changeSecond = function (step) {
        this.model.changeSecond(step);
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateHour = function (newVal) {
        this.model.updateHour(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* toInteger */])(newVal));
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateMinute = function (newVal) {
        this.model.updateMinute(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* toInteger */])(newVal));
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateSecond = function (newVal) {
        this.model.updateSecond(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* toInteger */])(newVal));
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.toggleMeridian = function () {
        if (this.meridian) {
            this.changeHour(12);
        }
    };
    NgbTimepicker.prototype.formatHour = function (value) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(value)) {
            if (this.meridian) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["f" /* padNumber */])(value % 12 === 0 ? 12 : value % 12);
            }
            else {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["f" /* padNumber */])(value % 24);
            }
        }
        else {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["f" /* padNumber */])(NaN);
        }
    };
    NgbTimepicker.prototype.formatMinSec = function (value) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["f" /* padNumber */])(value); };
    NgbTimepicker.prototype.setFormControlSize = function () { return { 'form-control-sm': this.size === 'small', 'form-control-lg': this.size === 'large' }; };
    NgbTimepicker.prototype.setButtonSize = function () { return { 'btn-sm': this.size === 'small', 'btn-lg': this.size === 'large' }; };
    NgbTimepicker.prototype.ngOnChanges = function (changes) {
        if (changes['seconds'] && !this.seconds && this.model && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(this.model.second)) {
            this.model.second = 0;
            this.propagateModelChange(false);
        }
    };
    NgbTimepicker.prototype.propagateModelChange = function (touched) {
        if (touched === void 0) { touched = true; }
        if (touched) {
            this.onTouched();
        }
        if (this.model.isValid(this.seconds)) {
            this.onChange({ hour: this.model.hour, minute: this.model.minute, second: this.model.second });
        }
        else {
            this.onChange(null);
        }
    };
    return NgbTimepicker;
}());

NgbTimepicker.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-timepicker',
                styles: ["\n    .ngb-tp {\n      display: flex;\n      align-items: center;\n    }\n\n    .ngb-tp-hour, .ngb-tp-minute, .ngb-tp-second, .ngb-tp-meridian {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-around;\n    }\n\n    .ngb-tp-spacer {\n      width: 1em;\n      text-align: center;\n    }\n\n    .chevron::before {\n      border-style: solid;\n      border-width: 0.29em 0.29em 0 0;\n      content: '';\n      display: inline-block;\n      height: 0.69em;\n      left: 0.05em;\n      position: relative;\n      top: 0.15em;\n      transform: rotate(-45deg);\n      -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n      vertical-align: middle;\n      width: 0.71em;\n    }\n\n    .chevron.bottom:before {\n      top: -.3em;\n      -webkit-transform: rotate(135deg);\n      -ms-transform: rotate(135deg);\n      transform: rotate(135deg);\n    }\n\n    .btn-link {\n      outline: 0;\n    }\n\n    .btn-link.disabled {\n      cursor: not-allowed;\n      opacity: .65;\n    }\n\n    input {\n      text-align: center;\n      display: inline-block;\n      width: auto;\n    }\n  "],
                template: "\n    <fieldset [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n      <div class=\"ngb-tp\">\n        <div class=\"ngb-tp-hour\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeHour(hourStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment hours</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"HH\"\n            [value]=\"formatHour(model?.hour)\" (change)=\"updateHour($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Hours\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeHour(-hourStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement hours</span>\n          </button>\n        </div>\n        <div class=\"ngb-tp-spacer\">:</div>\n        <div class=\"ngb-tp-minute\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeMinute(minuteStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment minutes</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"MM\"\n            [value]=\"formatMinSec(model?.minute)\" (change)=\"updateMinute($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Minutes\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeMinute(-minuteStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement minutes</span>\n          </button>\n        </div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-spacer\">:</div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-second\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeSecond(secondStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment seconds</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"SS\"\n            [value]=\"formatMinSec(model?.second)\" (change)=\"updateSecond($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Seconds\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeSecond(-secondStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement seconds</span>\n          </button>\n        </div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-spacer\"></div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-meridian\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" [ngClass]=\"setButtonSize()\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\"\n            (click)=\"toggleMeridian()\">{{model.hour >= 12 ? 'PM' : 'AM'}}</button>\n        </div>\n      </div>\n    </fieldset>\n  ",
                providers: [NGB_TIMEPICKER_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbTimepicker.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_4__timepicker_config__["a" /* NgbTimepickerConfig */], },
]; };
NgbTimepicker.propDecorators = {
    'meridian': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'spinners': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'seconds': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'hourStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'minuteStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'secondStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'readonlyInputs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=timepicker.js.map

/***/ }),
/* 476 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timepicker__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timepicker_config__ = __webpack_require__(432);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__timepicker__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__timepicker_config__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTimepickerModule; });






var NgbTimepickerModule = (function () {
    function NgbTimepickerModule() {
    }
    NgbTimepickerModule.forRoot = function () { return { ngModule: NgbTimepickerModule, providers: [__WEBPACK_IMPORTED_MODULE_3__timepicker_config__["a" /* NgbTimepickerConfig */]] }; };
    return NgbTimepickerModule;
}());

NgbTimepickerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_2__timepicker__["a" /* NgbTimepicker */]], exports: [__WEBPACK_IMPORTED_MODULE_2__timepicker__["a" /* NgbTimepicker */]], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]] },] },
];
/** @nocollapse */
NgbTimepickerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=timepicker.module.js.map

/***/ }),
/* 477 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_triggers__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_positioning__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_popup__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip_config__ = __webpack_require__(433);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbTooltipWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTooltip; });





var nextId = 0;
var NgbTooltipWindow = (function () {
    function NgbTooltipWindow() {
        this.placement = 'top';
    }
    return NgbTooltipWindow;
}());

NgbTooltipWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-tooltip-window',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                host: { '[class]': '"tooltip show tooltip-" + placement', 'role': 'tooltip', '[id]': 'id' },
                template: "\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    "
            },] },
];
/** @nocollapse */
NgbTooltipWindow.ctorParameters = function () { return []; };
NgbTooltipWindow.propDecorators = {
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * A lightweight, extensible directive for fancy tooltip creation.
 */
var NgbTooltip = (function () {
    function NgbTooltip(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * Emits an event when the tooltip is shown
         */
        this.shown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Emits an event when the tooltip is hidden
         */
        this.hidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._ngbTooltipWindowId = "ngb-tooltip-" + nextId++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this._popupService = new __WEBPACK_IMPORTED_MODULE_3__util_popup__["a" /* PopupService */](NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_positioning__["a" /* positionElements */])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
            }
        });
    }
    Object.defineProperty(NgbTooltip.prototype, "ngbTooltip", {
        get: function () { return this._ngbTooltip; },
        /**
         * Content to be displayed as tooltip. If falsy, the tooltip won't open.
         */
        set: function (value) {
            this._ngbTooltip = value;
            if (!value && this._windowRef) {
                this.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * The context is an optional value to be injected into the tooltip template when it is created.
     */
    NgbTooltip.prototype.open = function (context) {
        if (!this._windowRef && this._ngbTooltip) {
            this._windowRef = this._popupService.open(this._ngbTooltip, context);
            this._windowRef.instance.placement = this.placement;
            this._windowRef.instance.id = this._ngbTooltipWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered via
            // Renderer::listen() - to be determined if this is a bug in the Angular itself
            this._windowRef.changeDetectorRef.markForCheck();
            this.shown.emit();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     */
    NgbTooltip.prototype.close = function () {
        if (this._windowRef != null) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     */
    NgbTooltip.prototype.toggle = function () {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Returns whether or not the tooltip is currently being shown
     */
    NgbTooltip.prototype.isOpen = function () { return this._windowRef != null; };
    NgbTooltip.prototype.ngOnInit = function () {
        this._unregisterListenersFn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_triggers__["a" /* listenToTriggers */])(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbTooltip.prototype.ngOnDestroy = function () {
        this.close();
        this._unregisterListenersFn();
        this._zoneSubscription.unsubscribe();
    };
    return NgbTooltip;
}());

NgbTooltip.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' },] },
];
/** @nocollapse */
NgbTooltip.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_4__tooltip_config__["a" /* NgbTooltipConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
NgbTooltip.propDecorators = {
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'shown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'hidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'ngbTooltip': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=tooltip.js.map

/***/ }),
/* 478 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_config__ = __webpack_require__(433);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__tooltip_config__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__tooltip__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTooltipModule; });





var NgbTooltipModule = (function () {
    function NgbTooltipModule() {
    }
    NgbTooltipModule.forRoot = function () { return { ngModule: NgbTooltipModule, providers: [__WEBPACK_IMPORTED_MODULE_2__tooltip_config__["a" /* NgbTooltipConfig */]] }; };
    return NgbTooltipModule;
}());

NgbTooltipModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_1__tooltip__["a" /* NgbTooltip */], __WEBPACK_IMPORTED_MODULE_1__tooltip__["b" /* NgbTooltipWindow */]], exports: [__WEBPACK_IMPORTED_MODULE_1__tooltip__["a" /* NgbTooltip */]], entryComponents: [__WEBPACK_IMPORTED_MODULE_1__tooltip__["b" /* NgbTooltipWindow */]] },] },
];
/** @nocollapse */
NgbTooltipModule.ctorParameters = function () { return []; };
//# sourceMappingURL=tooltip.module.js.map

/***/ }),
/* 479 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(412);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbHighlight; });


var NgbHighlight = (function () {
    function NgbHighlight() {
        this.highlightClass = 'ngb-highlight';
    }
    NgbHighlight.prototype.ngOnChanges = function (changes) {
        var resultStr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_util__["a" /* toString */])(this.result);
        var resultLC = resultStr.toLowerCase();
        var termLC = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_util__["a" /* toString */])(this.term).toLowerCase();
        var currentIdx = 0;
        if (termLC.length > 0) {
            this.parts = resultLC.split(new RegExp("(" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_util__["b" /* regExpEscape */])(termLC) + ")")).map(function (part) {
                var originalPart = resultStr.substr(currentIdx, part.length);
                currentIdx += part.length;
                return originalPart;
            });
        }
        else {
            this.parts = [resultStr];
        }
    };
    return NgbHighlight;
}());

NgbHighlight.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-highlight',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                template: "<ng-template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" +
                    "<span *ngIf=\"isOdd\" class=\"{{highlightClass}}\">{{part}}</span><ng-template [ngIf]=\"!isOdd\">{{part}}</ng-template>" +
                    "</ng-template>",
                styles: ["\n    .ngb-highlight {\n      font-weight: bold;\n    }\n  "]
            },] },
];
/** @nocollapse */
NgbHighlight.ctorParameters = function () { return []; };
NgbHighlight.propDecorators = {
    'highlightClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'result': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'term': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=highlight.js.map

/***/ }),
/* 480 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_let__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_do__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromEvent__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_positioning__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__typeahead_window__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_popup__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_util__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__typeahead_config__ = __webpack_require__(434);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTypeahead; });










var Key;
(function (Key) {
    Key[Key["Tab"] = 9] = "Tab";
    Key[Key["Enter"] = 13] = "Enter";
    Key[Key["Escape"] = 27] = "Escape";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
var NGB_TYPEAHEAD_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgbTypeahead; }),
    multi: true
};
var nextWindowId = 0;
/**
 * NgbTypeahead directive provides a simple way of creating powerful typeaheads from any text input
 */
var NgbTypeahead = (function () {
    function NgbTypeahead(_elementRef, _viewContainerRef, _renderer, _injector, componentFactoryResolver, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._injector = _injector;
        /**
         * An event emitted when a match is selected. Event payload is of type NgbTypeaheadSelectItemEvent.
         */
        this.selectItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.popupId = "ngb-typeahead-" + nextWindowId++;
        this._onTouched = function () { };
        this._onChange = function (_) { };
        this.editable = config.editable;
        this.focusFirst = config.focusFirst;
        this.showHint = config.showHint;
        this._valueChanges = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromEvent__["fromEvent"])(_elementRef.nativeElement, 'input', function ($event) { return $event.target.value; });
        this._popupService = new __WEBPACK_IMPORTED_MODULE_7__util_popup__["a" /* PopupService */](__WEBPACK_IMPORTED_MODULE_6__typeahead_window__["a" /* NgbTypeaheadWindow */], _injector, _viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this.isPopupOpen()) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util_positioning__["a" /* positionElements */])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, 'bottom-left');
            }
        });
    }
    NgbTypeahead.prototype.ngOnInit = function () {
        var _this = this;
        var inputValues$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_do__["_do"].call(this._valueChanges, function (value) {
            _this._userInput = value;
            if (_this.editable) {
                _this._onChange(value);
            }
        });
        var results$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_let__["letProto"].call(inputValues$, this.ngbTypeahead);
        var userInput$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_do__["_do"].call(results$, function () {
            if (!_this.editable) {
                _this._onChange(undefined);
            }
        });
        this._subscription = this._subscribeToUserInput(userInput$);
    };
    NgbTypeahead.prototype.ngOnDestroy = function () {
        this._unsubscribeFromUserInput();
        this._zoneSubscription.unsubscribe();
    };
    NgbTypeahead.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    NgbTypeahead.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    NgbTypeahead.prototype.writeValue = function (value) { this._writeInputValue(this._formatItemForInput(value)); };
    NgbTypeahead.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgbTypeahead.prototype.dismissPopup = function () {
        if (this.isPopupOpen()) {
            this._closePopup();
            this._writeInputValue(this._userInput);
        }
    };
    NgbTypeahead.prototype.isPopupOpen = function () { return this._windowRef != null; };
    NgbTypeahead.prototype.handleBlur = function () { this._onTouched(); };
    NgbTypeahead.prototype.handleKeyDown = function (event) {
        if (!this.isPopupOpen()) {
            return;
        }
        if (Key[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util_util__["a" /* toString */])(event.which)]) {
            switch (event.which) {
                case Key.ArrowDown:
                    event.preventDefault();
                    this._windowRef.instance.next();
                    this._showHint();
                    break;
                case Key.ArrowUp:
                    event.preventDefault();
                    this._windowRef.instance.prev();
                    this._showHint();
                    break;
                case Key.Enter:
                case Key.Tab:
                    var result = this._windowRef.instance.getActive();
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util_util__["c" /* isDefined */])(result)) {
                        event.preventDefault();
                        event.stopPropagation();
                        this._selectResult(result);
                    }
                    this._closePopup();
                    break;
                case Key.Escape:
                    event.preventDefault();
                    this.dismissPopup();
                    break;
            }
        }
    };
    NgbTypeahead.prototype._openPopup = function () {
        var _this = this;
        if (!this.isPopupOpen()) {
            this._windowRef = this._popupService.open();
            this._windowRef.instance.id = this.popupId;
            this._windowRef.instance.selectEvent.subscribe(function (result) { return _this._selectResultClosePopup(result); });
            this._windowRef.instance.activeChangeEvent.subscribe(function (activeId) { return _this.activeDescendant = activeId; });
        }
    };
    NgbTypeahead.prototype._closePopup = function () {
        this._popupService.close();
        this._windowRef = null;
        this.activeDescendant = undefined;
    };
    NgbTypeahead.prototype._selectResult = function (result) {
        var defaultPrevented = false;
        this.selectItem.emit({ item: result, preventDefault: function () { defaultPrevented = true; } });
        if (!defaultPrevented) {
            this.writeValue(result);
            this._onChange(result);
        }
    };
    NgbTypeahead.prototype._selectResultClosePopup = function (result) {
        this._selectResult(result);
        this._closePopup();
    };
    NgbTypeahead.prototype._showHint = function () {
        if (this.showHint) {
            var userInputLowerCase = this._userInput.toLowerCase();
            var formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
            if (userInputLowerCase === formattedVal.substr(0, this._userInput.length).toLowerCase()) {
                this._writeInputValue(this._userInput + formattedVal.substr(this._userInput.length));
                this._elementRef.nativeElement['setSelectionRange'].apply(this._elementRef.nativeElement, [this._userInput.length, formattedVal.length]);
            }
            else {
                this.writeValue(this._windowRef.instance.getActive());
            }
        }
    };
    NgbTypeahead.prototype._formatItemForInput = function (item) {
        return item && this.inputFormatter ? this.inputFormatter(item) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util_util__["a" /* toString */])(item);
    };
    NgbTypeahead.prototype._writeInputValue = function (value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
    };
    NgbTypeahead.prototype._subscribeToUserInput = function (userInput$) {
        var _this = this;
        return userInput$.subscribe(function (results) {
            if (!results || results.length === 0) {
                _this._closePopup();
            }
            else {
                _this._openPopup();
                _this._windowRef.instance.focusFirst = _this.focusFirst;
                _this._windowRef.instance.results = results;
                _this._windowRef.instance.term = _this._elementRef.nativeElement.value;
                if (_this.resultFormatter) {
                    _this._windowRef.instance.formatter = _this.resultFormatter;
                }
                if (_this.resultTemplate) {
                    _this._windowRef.instance.resultTemplate = _this.resultTemplate;
                }
                _this._showHint();
                // The observable stream we are subscribing to might have async steps
                // and if a component containing typeahead is using the OnPush strategy
                // the change detection turn wouldn't be invoked automatically.
                _this._windowRef.changeDetectorRef.detectChanges();
            }
        });
    };
    NgbTypeahead.prototype._unsubscribeFromUserInput = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._subscription = null;
    };
    return NgbTypeahead;
}());

NgbTypeahead.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[ngbTypeahead]',
                host: {
                    '(blur)': 'handleBlur()',
                    '[class.open]': 'isPopupOpen()',
                    '(document:click)': 'dismissPopup()',
                    '(keydown)': 'handleKeyDown($event)',
                    'autocomplete': 'off',
                    'autocapitalize': 'off',
                    'autocorrect': 'off',
                    'role': 'combobox',
                    'aria-multiline': 'false',
                    '[attr.aria-autocomplete]': 'showHint ? "both" : "list"',
                    '[attr.aria-activedescendant]': 'activeDescendant',
                    '[attr.aria-owns]': 'isPopupOpen() ? popupId : null',
                    '[attr.aria-expanded]': 'isPopupOpen()'
                },
                providers: [NGB_TYPEAHEAD_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbTypeahead.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_9__typeahead_config__["a" /* NgbTypeaheadConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
NgbTypeahead.propDecorators = {
    'editable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'focusFirst': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'inputFormatter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ngbTypeahead': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resultFormatter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resultTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showHint': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'selectItem': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=typeahead.js.map

/***/ }),
/* 481 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__highlight__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_window__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__typeahead__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__typeahead_config__ = __webpack_require__(434);
/* unused harmony reexport NgbHighlight */
/* unused harmony reexport NgbTypeaheadWindow */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__typeahead_config__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__typeahead__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTypeaheadModule; });










var NgbTypeaheadModule = (function () {
    function NgbTypeaheadModule() {
    }
    NgbTypeaheadModule.forRoot = function () { return { ngModule: NgbTypeaheadModule, providers: [__WEBPACK_IMPORTED_MODULE_5__typeahead_config__["a" /* NgbTypeaheadConfig */]] }; };
    return NgbTypeaheadModule;
}());

NgbTypeaheadModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [__WEBPACK_IMPORTED_MODULE_4__typeahead__["a" /* NgbTypeahead */], __WEBPACK_IMPORTED_MODULE_2__highlight__["a" /* NgbHighlight */], __WEBPACK_IMPORTED_MODULE_3__typeahead_window__["a" /* NgbTypeaheadWindow */]],
                exports: [__WEBPACK_IMPORTED_MODULE_4__typeahead__["a" /* NgbTypeahead */]],
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                entryComponents: [__WEBPACK_IMPORTED_MODULE_3__typeahead_window__["a" /* NgbTypeaheadWindow */]]
            },] },
];
/** @nocollapse */
NgbTypeaheadModule.ctorParameters = function () { return []; };
//# sourceMappingURL=typeahead.module.js.map

/***/ }),
/* 482 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Trigger */
/* unused harmony export parseTriggers */
/* harmony export (immutable) */ __webpack_exports__["a"] = listenToTriggers;
var Trigger = (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close;
        if (!close) {
            this.close = open;
        }
    }
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());

var DEFAULT_ALIASES = {
    hover: ['mouseenter', 'mouseleave']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers.split(/\s+/).map(function (trigger) { return trigger.split(':'); }).map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers.filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
var noopFn = function () { };
function listenToTriggers(renderer, nativeElement, triggers, openFn, closeFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return noopFn;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
        }
        else {
            listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
        }
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}
//# sourceMappingURL=triggers.js.map

/***/ }),
/* 483 */,
/* 484 */
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
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(3);
var google_maps_api_wrapper_1 = __webpack_require__(419);
var MarkerManager = (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    MarkerManager.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MarkerManager.ctorParameters = function () { return [
        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
        { type: core_1.NgZone, },
    ]; };
    return MarkerManager;
}());
exports.MarkerManager = MarkerManager;
//# sourceMappingURL=marker-manager.js.map

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var MapsAPILoader = (function () {
    function MapsAPILoader() {
    }
    MapsAPILoader.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MapsAPILoader.ctorParameters = function () { return []; };
    return MapsAPILoader;
}());
exports.MapsAPILoader = MapsAPILoader;
//# sourceMappingURL=maps-api-loader.js.map

/***/ }),
/* 487 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngb_calendar__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(412);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCalendarHijri; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var NgbCalendarHijri = (function (_super) {
    __extends(NgbCalendarHijri, _super);
    function NgbCalendarHijri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarHijri.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarHijri.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    NgbCalendarHijri.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarHijri.prototype.isValid = function (date) {
        return date && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(date.year) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(date.month) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(date.day) &&
            !isNaN(this.toGregorian(date).getTime());
    };
    NgbCalendarHijri.prototype.setDay = function (date, day) {
        day = +day;
        var mDays = this.getDaysInIslamicMonth(date.month, date.year);
        if (day <= 0) {
            while (day <= 0) {
                date = this.setMonth(date, date.month - 1);
                mDays = this.getDaysInIslamicMonth(date.month, date.year);
                day += mDays;
            }
        }
        else if (day > mDays) {
            while (day > mDays) {
                day -= mDays;
                date = this.setMonth(date, date.month + 1);
                mDays = this.getDaysInIslamicMonth(date.month, date.year);
            }
        }
        date.day = day;
        return date;
    };
    NgbCalendarHijri.prototype.setMonth = function (date, month) {
        month = +month;
        date.year = date.year + Math.floor((month - 1) / 12);
        date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
        return date;
    };
    NgbCalendarHijri.prototype.setYear = function (date, yearValue) {
        date.year = +yearValue;
        return date;
    };
    NgbCalendarHijri.prototype._isIslamicLeapYear = function (year) { return (14 + 11 * year) % 30 < 11; };
    /**
     * Returns the start of Hijri Month.
     * `month` is 0 for Muharram, 1 for Safar, etc.
     * `year` is any Hijri year.
     */
    NgbCalendarHijri.prototype._getMonthStart = function (year, month) {
        return Math.ceil(29.5 * month) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
    };
    /**
     * Returns the start of Hijri year.
     * `year` is any Hijri year.
     */
    NgbCalendarHijri.prototype._getYearStart = function (year) { return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0); };
    return NgbCalendarHijri;
}(__WEBPACK_IMPORTED_MODULE_0__ngb_calendar__["a" /* NgbCalendar */]));

NgbCalendarHijri.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbCalendarHijri.ctorParameters = function () { return []; };
//# sourceMappingURL=ngb-calendar-hijri.js.map

/***/ }),
/* 488 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngb_calendar_hijri__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngb_date__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCalendarIslamicCivil; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



function isGregorianLeapYear(date) {
    var year = date.getFullYear();
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function mod(a, b) {
    return a - b * Math.floor(a / b);
}
/**
 * The civil calendar is one type of Hijri calendars used in islamic countries.
 * Uses a fixed cycle of alternating 29- and 30-day months,
 * with a leap day added to the last month of 11 out of every 30 years.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 * All the calculations here are based on the equations from "Calendrical Calculations" By Edward M. Reingold, Nachum
 * Dershowitz.
 */
var GREGORIAN_EPOCH = 1721425.5;
var ISLAMIC_EPOCH = 1948439.5;
var NgbCalendarIslamicCivil = (function (_super) {
    __extends(NgbCalendarIslamicCivil, _super);
    function NgbCalendarIslamicCivil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
     * `gdate` is a JS Date to be converted to Hijri.
     */
    NgbCalendarIslamicCivil.prototype.fromGregorian = function (gdate) {
        var date = new Date(gdate);
        var gYear = date.getFullYear(), gMonth = date.getMonth(), gDay = date.getDate();
        var julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) +
            -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) +
            Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(date) ? -1 : -2) + gDay);
        julianDay = Math.floor(julianDay) + 0.5;
        var days = julianDay - ISLAMIC_EPOCH;
        var hYear = Math.floor((30 * days + 10646) / 10631.0);
        var hMonth = Math.ceil((days - 29 - this._getYearStart(hYear)) / 29.5);
        hMonth = Math.min(hMonth, 11);
        var hDay = Math.ceil(days - this._getMonthStart(hYear, hMonth)) + 1;
        return new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](hYear, hMonth + 1, hDay);
    };
    /**
     * Returns the equivalent JS date value for a give input islamic(civil) date.
     * `hijriDate` is an islamic(civil) date to be converted to Gregorian.
     */
    NgbCalendarIslamicCivil.prototype.toGregorian = function (hijriDate) {
        var hYear = hijriDate.year;
        var hMonth = hijriDate.month - 1;
        var hDate = hijriDate.day;
        var julianDay = hDate + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
        var wjd = Math.floor(julianDay - 0.5) + 0.5, depoch = wjd - GREGORIAN_EPOCH, quadricent = Math.floor(depoch / 146097), dqc = mod(depoch, 146097), cent = Math.floor(dqc / 36524), dcent = mod(dqc, 36524), quad = Math.floor(dcent / 1461), dquad = mod(dcent, 1461), yindex = Math.floor(dquad / 365);
        var year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
        if (!(cent === 4 || yindex === 4)) {
            year++;
        }
        var gYearStart = GREGORIAN_EPOCH + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400);
        var yearday = wjd - gYearStart;
        var tjd = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear(new Date(year, 3, 1)) ? -1 : -2) + 1);
        var leapadj = wjd < tjd ? 0 : isGregorianLeapYear(new Date(year, 3, 1)) ? 1 : 2;
        var month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
        var tjd2 = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) +
            Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear(new Date(year, month - 1, 1)) ? -1 : -2) +
                1);
        var day = wjd - tjd2 + 1;
        return new Date(year, month - 1, day);
    };
    /**
     * Returns the number of days in a specific Hijri month.
     * `month` is 1 for Muharram, 2 for Safar, etc.
     * `year` is any Hijri year.
     */
    NgbCalendarIslamicCivil.prototype.getDaysInIslamicMonth = function (month, year) {
        year = year + Math.floor(month / 13);
        month = ((month - 1) % 12) + 1;
        var length = 29 + month % 2;
        if (month === 12 && this._isIslamicLeapYear(year)) {
            length++;
        }
        return length;
    };
    NgbCalendarIslamicCivil.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        date = __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */].from(date);
        switch (period) {
            case 'y':
                date = this.setYear(date, date.year + number);
                date.month = 1;
                date.day = 1;
                return date;
            case 'm':
                date = this.setMonth(date, date.month + number);
                date.day = 1;
                return date;
            case 'd':
                return this.setDay(date, date.day + number);
            default:
                return date;
        }
    };
    NgbCalendarIslamicCivil.prototype.getPrev = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    NgbCalendarIslamicCivil.prototype.getWeekday = function (date) {
        var day = this.toGregorian(date).getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarIslamicCivil.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        var date = week[thursdayIndex];
        var jsDate = this.toGregorian(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        var time = jsDate.getTime();
        var MuhDate = this.toGregorian(new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](date.year, 1, 1)); // Compare with Muharram 1
        return Math.floor(Math.round((time - MuhDate.getTime()) / 86400000) / 7) + 1;
    };
    NgbCalendarIslamicCivil.prototype.getToday = function () { return this.fromGregorian(new Date()); };
    return NgbCalendarIslamicCivil;
}(__WEBPACK_IMPORTED_MODULE_0__ngb_calendar_hijri__["a" /* NgbCalendarHijri */]));

NgbCalendarIslamicCivil.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbCalendarIslamicCivil.ctorParameters = function () { return []; };
//# sourceMappingURL=ngb-calendar-islamic-civil.js.map

/***/ }),
/* 489 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__(412);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTime; });

var NgbTime = (function () {
    function NgbTime(hour, minute, second) {
        this.hour = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(hour);
        this.minute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(minute);
        this.second = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(second);
    }
    NgbTime.prototype.changeHour = function (step) {
        if (step === void 0) { step = 1; }
        this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
    };
    NgbTime.prototype.updateHour = function (hour) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(hour)) {
            this.hour = (hour < 0 ? 24 + hour : hour) % 24;
        }
        else {
            this.hour = NaN;
        }
    };
    NgbTime.prototype.changeMinute = function (step) {
        if (step === void 0) { step = 1; }
        this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
    };
    NgbTime.prototype.updateMinute = function (minute) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(minute)) {
            this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
            this.changeHour(Math.floor(minute / 60));
        }
        else {
            this.minute = NaN;
        }
    };
    NgbTime.prototype.changeSecond = function (step) {
        if (step === void 0) { step = 1; }
        this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
    };
    NgbTime.prototype.updateSecond = function (second) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(second)) {
            this.second = second < 0 ? 60 + second % 60 : second % 60;
            this.changeMinute(Math.floor(second / 60));
        }
        else {
            this.second = NaN;
        }
    };
    NgbTime.prototype.isValid = function (checkSecs) {
        if (checkSecs === void 0) { checkSecs = true; }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(this.hour) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(this.minute) && (checkSecs ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(this.second) : true);
    };
    NgbTime.prototype.toString = function () { return (this.hour || 0) + ":" + (this.minute || 0) + ":" + (this.second || 0); };
    return NgbTime;
}());

//# sourceMappingURL=ngb-time.js.map

/***/ }),
/* 490 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDevtoolActions; });
var ActionTypes = {
    PERFORM_ACTION: 'PERFORM_ACTION',
    RESET: 'RESET',
    ROLLBACK: 'ROLLBACK',
    COMMIT: 'COMMIT',
    SWEEP: 'SWEEP',
    TOGGLE_ACTION: 'TOGGLE_ACTION',
    SET_ACTIONS_ACTIVE: 'SET_ACTIONS_ACTIVE',
    JUMP_TO_STATE: 'JUMP_TO_STATE',
    IMPORT_STATE: 'IMPORT_STATE'
};
/**
* Action creators to change the History state.
*/
var StoreDevtoolActions = {
    performAction: function (action) {
        if (typeof action.type === 'undefined') {
            throw new Error('Actions may not have an undefined "type" property. ' +
                'Have you misspelled a constant?');
        }
        return { type: ActionTypes.PERFORM_ACTION, action: action, timestamp: Date.now() };
    },
    reset: function () {
        return { type: ActionTypes.RESET, timestamp: Date.now() };
    },
    rollback: function () {
        return { type: ActionTypes.ROLLBACK, timestamp: Date.now() };
    },
    commit: function () {
        return { type: ActionTypes.COMMIT, timestamp: Date.now() };
    },
    sweep: function () {
        return { type: ActionTypes.SWEEP };
    },
    toggleAction: function (id) {
        return { type: ActionTypes.TOGGLE_ACTION, id: id };
    },
    setActionsActive: function (start, end, active) {
        if (active === void 0) { active = true; }
        return { type: ActionTypes.SET_ACTIONS_ACTIVE, start: start, end: end, active: active };
    },
    jumpToState: function (index) {
        return { type: ActionTypes.JUMP_TO_STATE, index: index };
    },
    importState: function (nextLiftedState) {
        return { type: ActionTypes.IMPORT_STATE, nextLiftedState: nextLiftedState };
    }
};
//# sourceMappingURL=actions.js.map

/***/ }),
/* 491 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(490);
/* harmony export (immutable) */ __webpack_exports__["d"] = difference;
/* harmony export (immutable) */ __webpack_exports__["c"] = unliftState;
/* unused harmony export unliftAction */
/* harmony export (immutable) */ __webpack_exports__["b"] = liftAction;
/* harmony export (immutable) */ __webpack_exports__["a"] = applyOperators;

function difference(first, second) {
    return first.filter(function (item) { return second.indexOf(item) < 0; });
}
/**
 * Provides an app's view into the state of the lifted store.
 */
function unliftState(liftedState) {
    var computedStates = liftedState.computedStates, currentStateIndex = liftedState.currentStateIndex;
    var state = computedStates[currentStateIndex].state;
    return state;
}
function unliftAction(liftedState) {
    return liftedState.actionsById[liftedState.nextActionId - 1];
}
/**
* Lifts an app's action into an action on the lifted store.
*/
function liftAction(action) {
    return __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* StoreDevtoolActions */].performAction(action);
}
function applyOperators(input$, operators) {
    return operators.reduce(function (source$, _a) {
        var operator = _a[0], args = _a.slice(1);
        return operator.apply(source$, args);
    }, input$);
}
//# sourceMappingURL=utils.js.map

/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var info_window_manager_1 = __webpack_require__(495);
var infoWindowId = 0;
/**
 * SebmGoogleMapInfoWindow renders a info window inside a {@link SebmGoogleMapMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow } from
 * 'angular2-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow],
 *  styles: [`
 *    .sebm-google-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <sebm-google-map-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <sebm-google-map-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </sebm-google-map-info-window>
 *      </sebm-google-map-marker>
 *    </sebm-google-map>
 *  `
 * })
 * ```
 */
var SebmGoogleMapInfoWindow = (function () {
    function SebmGoogleMapInfoWindow(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */
        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */
        this.infoWindowClose = new core_1.EventEmitter();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    SebmGoogleMapInfoWindow.prototype.ngOnInit = function () {
        this.content = this._el.nativeElement.querySelector('.sebm-google-map-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    };
    /** @internal */
    SebmGoogleMapInfoWindow.prototype.ngOnChanges = function (changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    };
    SebmGoogleMapInfoWindow.prototype._registerEventListeners = function () {
        var _this = this;
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this.isOpen = false;
            _this.infoWindowClose.emit();
        });
    };
    SebmGoogleMapInfoWindow.prototype._updateOpenState = function () {
        this.isOpen ? this.open() : this.close();
    };
    SebmGoogleMapInfoWindow.prototype._setInfoWindowOptions = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    };
    /**
     * Opens the info window.
     */
    SebmGoogleMapInfoWindow.prototype.open = function () { return this._infoWindowManager.open(this); };
    /**
     * Closes the info window.
     */
    SebmGoogleMapInfoWindow.prototype.close = function () {
        var _this = this;
        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
    };
    /** @internal */
    SebmGoogleMapInfoWindow.prototype.id = function () { return this._id; };
    /** @internal */
    SebmGoogleMapInfoWindow.prototype.toString = function () { return 'SebmGoogleMapInfoWindow-' + this._id.toString(); };
    /** @internal */
    SebmGoogleMapInfoWindow.prototype.ngOnDestroy = function () { this._infoWindowManager.deleteInfoWindow(this); };
    SebmGoogleMapInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
    SebmGoogleMapInfoWindow.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sebm-google-map-info-window',
                    inputs: ['latitude', 'longitude', 'disableAutoPan', 'isOpen', 'zIndex', 'maxWidth'],
                    outputs: ['infoWindowClose'],
                    template: "<div class='sebm-google-map-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SebmGoogleMapInfoWindow.ctorParameters = function () { return [
        { type: info_window_manager_1.InfoWindowManager, },
        { type: core_1.ElementRef, },
    ]; };
    return SebmGoogleMapInfoWindow;
}());
exports.SebmGoogleMapInfoWindow = SebmGoogleMapInfoWindow;
//# sourceMappingURL=google-map-info-window.js.map

/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
/**
 * SebmGoogleMapPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
var SebmGoogleMapPolylinePoint = (function () {
    function SebmGoogleMapPolylinePoint() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new core_1.EventEmitter();
    }
    SebmGoogleMapPolylinePoint.prototype.ngOnChanges = function (changes) {
        if (changes['latitude'] || changes['longitude']) {
            var position = {
                lat: changes['latitude'].currentValue,
                lng: changes['longitude'].currentValue
            };
            this.positionChanged.emit(position);
        }
    };
    SebmGoogleMapPolylinePoint.decorators = [
        { type: core_1.Directive, args: [{ selector: 'sebm-google-map-polyline-point' },] },
    ];
    /** @nocollapse */
    SebmGoogleMapPolylinePoint.ctorParameters = function () { return []; };
    SebmGoogleMapPolylinePoint.propDecorators = {
        'latitude': [{ type: core_1.Input },],
        'longitude': [{ type: core_1.Input },],
        'positionChanged': [{ type: core_1.Output },],
    };
    return SebmGoogleMapPolylinePoint;
}());
exports.SebmGoogleMapPolylinePoint = SebmGoogleMapPolylinePoint;
//# sourceMappingURL=google-map-polyline-point.js.map

/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(3);
var google_maps_api_wrapper_1 = __webpack_require__(419);
var CircleManager = (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    ;
    /**
     * Removes the given circle from the map.
     */
    CircleManager.prototype.removeCircle = function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    ;
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    ;
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    ;
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    ;
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    ;
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    ;
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    ;
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    ;
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    CircleManager.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    CircleManager.ctorParameters = function () { return [
        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
        { type: core_1.NgZone, },
    ]; };
    return CircleManager;
}());
exports.CircleManager = CircleManager;
//# sourceMappingURL=circle-manager.js.map

/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(3);
var core_1 = __webpack_require__(1);
var google_maps_api_wrapper_1 = __webpack_require__(419);
var marker_manager_1 = __webpack_require__(485);
var InfoWindowManager = (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setPosition({
            lat: infoWindow.latitude,
            lng: infoWindow.longitude
        }); });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    InfoWindowManager.prototype.createEventObservable = function (eventName, infoWindow) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    InfoWindowManager.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    InfoWindowManager.ctorParameters = function () { return [
        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
        { type: core_1.NgZone, },
        { type: marker_manager_1.MarkerManager, },
    ]; };
    return InfoWindowManager;
}());
exports.InfoWindowManager = InfoWindowManager;
//# sourceMappingURL=info-window-manager.js.map

/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(3);
var google_maps_api_wrapper_1 = __webpack_require__(419);
/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    KmlLayerManager.prototype.addKmlLayer = function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    KmlLayerManager.prototype.createEventObservable = function (eventName, layer) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    KmlLayerManager.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    KmlLayerManager.ctorParameters = function () { return [
        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
        { type: core_1.NgZone, },
    ]; };
    return KmlLayerManager;
}());
exports.KmlLayerManager = KmlLayerManager;
//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(3);
var google_maps_api_wrapper_1 = __webpack_require__(419);
var PolygonManager = (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolygonManager.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    PolygonManager.ctorParameters = function () { return [
        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
        { type: core_1.NgZone, },
    ]; };
    return PolygonManager;
}());
exports.PolygonManager = PolygonManager;
//# sourceMappingURL=polygon-manager.js.map

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(3);
var google_maps_api_wrapper_1 = __webpack_require__(419);
var PolylineManager = (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolylineManager.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    PolylineManager.ctorParameters = function () { return [
        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
        { type: core_1.NgZone, },
    ]; };
    return PolylineManager;
}());
exports.PolylineManager = PolylineManager;
//# sourceMappingURL=polyline-manager.js.map

/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(1);
var browser_globals_1 = __webpack_require__(536);
var maps_api_loader_1 = __webpack_require__(486);
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(exports.GoogleMapsScriptProtocol || (exports.GoogleMapsScriptProtocol = {}));
var GoogleMapsScriptProtocol = exports.GoogleMapsScriptProtocol;
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
exports.LAZY_MAPS_API_CONFIG = new core_1.OpaqueToken('angular2-google-maps LAZY_MAPS_API_CONFIG');
var LazyMapsAPILoader = (function (_super) {
    __extends(LazyMapsAPILoader, _super);
    function LazyMapsAPILoader(config, w, d) {
        _super.call(this);
        this._config = config || {};
        this._windowRef = w;
        this._documentRef = d;
    }
    LazyMapsAPILoader.prototype.load = function () {
        var _this = this;
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        var script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        var callbackName = "angular2GoogleMapsLazyMapsAPILoader";
        script.src = this._getScriptSrc(callbackName);
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this._windowRef.getNativeWindow()[callbackName] = function () { resolve(); };
            script.onerror = function (error) { reject(error); };
        });
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
        var protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
        var protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        var queryParams = {
            v: this._config.apiVersion || '3',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map(function (entry) { return entry.key + "=" + entry.value; })
            .join('&');
        return protocol + "//" + hostAndPath + "?" + params;
    };
    LazyMapsAPILoader.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    LazyMapsAPILoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.LAZY_MAPS_API_CONFIG,] },] },
        { type: browser_globals_1.WindowRef, },
        { type: browser_globals_1.DocumentRef, },
    ]; };
    return LazyMapsAPILoader;
}(maps_api_loader_1.MapsAPILoader));
exports.LazyMapsAPILoader = LazyMapsAPILoader;
//# sourceMappingURL=lazy-maps-api-loader.js.map

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(3);
var tryCatch_1 = __webpack_require__(181);
var isFunction_1 = __webpack_require__(101);
var errorObject_1 = __webpack_require__(100);
var Subscription_1 = __webpack_require__(49);
var toString = Object.prototype.toString;
function isNodeStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isNodeList(sourceObj) {
    return !!sourceObj && toString.call(sourceObj) === '[object NodeList]';
}
function isHTMLCollection(sourceObj) {
    return !!sourceObj && toString.call(sourceObj) === '[object HTMLCollection]';
}
function isEventTarget(sourceObj) {
    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromEventObservable = (function (_super) {
    __extends(FromEventObservable, _super);
    function FromEventObservable(sourceObj, eventName, selector, options) {
        _super.call(this);
        this.sourceObj = sourceObj;
        this.eventName = eventName;
        this.selector = selector;
        this.options = options;
    }
    /* tslint:enable:max-line-length */
    /**
     * Creates an Observable that emits events of a specific type coming from the
     * given event target.
     *
     * <span class="informal">Creates an Observable from DOM events, or Node
     * EventEmitter events or others.</span>
     *
     * <img src="./img/fromEvent.png" width="100%">
     *
     * Creates an Observable by attaching an event listener to an "event target",
     * which may be an object with `addEventListener` and `removeEventListener`,
     * a Node.js EventEmitter, a jQuery style EventEmitter, a NodeList from the
     * DOM, or an HTMLCollection from the DOM. The event handler is attached when
     * the output Observable is subscribed, and removed when the Subscription is
     * unsubscribed.
     *
     * @example <caption>Emits clicks happening on the DOM document</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * clicks.subscribe(x => console.log(x));
     *
     * // Results in:
     * // MouseEvent object logged to console everytime a click
     * // occurs on the document.
     *
     * @see {@link from}
     * @see {@link fromEventPattern}
     *
     * @param {EventTargetLike} target The DOMElement, event target, Node.js
     * EventEmitter, NodeList or HTMLCollection to attach the event handler to.
     * @param {string} eventName The event name of interest, being emitted by the
     * `target`.
     * @param {EventListenerOptions} [options] Options to pass through to addEventListener
     * @param {SelectorMethodSignature<T>} [selector] An optional function to
     * post-process results. It takes the arguments from the event handler and
     * should return a single value.
     * @return {Observable<T>}
     * @static true
     * @name fromEvent
     * @owner Observable
     */
    FromEventObservable.create = function (target, eventName, options, selector) {
        if (isFunction_1.isFunction(options)) {
            selector = options;
            options = undefined;
        }
        return new FromEventObservable(target, eventName, selector, options);
    };
    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber, options) {
        var unsubscribe;
        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
            for (var i = 0, len = sourceObj.length; i < len; i++) {
                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
            }
        }
        else if (isEventTarget(sourceObj)) {
            var source_1 = sourceObj;
            sourceObj.addEventListener(eventName, handler, options);
            unsubscribe = function () { return source_1.removeEventListener(eventName, handler); };
        }
        else if (isJQueryStyleEventEmitter(sourceObj)) {
            var source_2 = sourceObj;
            sourceObj.on(eventName, handler);
            unsubscribe = function () { return source_2.off(eventName, handler); };
        }
        else if (isNodeStyleEventEmitter(sourceObj)) {
            var source_3 = sourceObj;
            sourceObj.addListener(eventName, handler);
            unsubscribe = function () { return source_3.removeListener(eventName, handler); };
        }
        else {
            throw new TypeError('Invalid event target');
        }
        subscriber.add(new Subscription_1.Subscription(unsubscribe));
    };
    FromEventObservable.prototype._subscribe = function (subscriber) {
        var sourceObj = this.sourceObj;
        var eventName = this.eventName;
        var options = this.options;
        var selector = this.selector;
        var handler = selector ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
            if (result === errorObject_1.errorObject) {
                subscriber.error(errorObject_1.errorObject.e);
            }
            else {
                subscriber.next(result);
            }
        } : function (e) { return subscriber.next(e); };
        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber, options);
    };
    return FromEventObservable;
}(Observable_1.Observable));
exports.FromEventObservable = FromEventObservable;
//# sourceMappingURL=FromEventObservable.js.map

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FromEventObservable_1 = __webpack_require__(500);
exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
//# sourceMappingURL=fromEvent.js.map

/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(11);
/* tslint:enable:max-line-length */
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @method do
 * @name do
 * @owner Observable
 */
function _do(nextOrObserver, error, complete) {
    return this.lift(new DoOperator(nextOrObserver, error, complete));
}
exports._do = _do;
var DoOperator = (function () {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DoSubscriber = (function (_super) {
    __extends(DoSubscriber, _super);
    function DoSubscriber(destination, nextOrObserver, error, complete) {
        _super.call(this, destination);
        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
        safeSubscriber.syncErrorThrowable = true;
        this.add(safeSubscriber);
        this.safeSubscriber = safeSubscriber;
    }
    DoSubscriber.prototype._next = function (value) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.next(value);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.next(value);
        }
    };
    DoSubscriber.prototype._error = function (err) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.error(err);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.error(err);
        }
    };
    DoSubscriber.prototype._complete = function () {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.complete();
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.complete();
        }
    };
    return DoSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=do.js.map

/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @param func
 * @return {Observable<R>}
 * @method let
 * @owner Observable
 */
function letProto(func) {
    return func(this);
}
exports.letProto = letProto;
//# sourceMappingURL=let.js.map

/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var QueueAction_1 = __webpack_require__(620);
var QueueScheduler_1 = __webpack_require__(621);
/**
 *
 * Queue Scheduler
 *
 * <span class="informal">Put every next task on a queue, instead of executing it immediately</span>
 *
 * `queue` scheduler, when used with delay, behaves the same as {@link async} scheduler.
 *
 * When used without delay, it schedules given task synchronously - executes it right when
 * it is scheduled. However when called recursively, that is when inside the scheduled task,
 * another task is scheduled with queue scheduler, instead of executing immediately as well,
 * that task will be put on a queue and wait for current one to finish.
 *
 * This means that when you execute task with `queue` scheduler, you are sure it will end
 * before any other task scheduled with that scheduler will start.
 *
 * @examples <caption>Schedule recursively first, then do something</caption>
 *
 * Rx.Scheduler.queue.schedule(() => {
 *   Rx.Scheduler.queue.schedule(() => console.log('second')); // will not happen now, but will be put on a queue
 *
 *   console.log('first');
 * });
 *
 * // Logs:
 * // "first"
 * // "second"
 *
 *
 * @example <caption>Reschedule itself recursively</caption>
 *
 * Rx.Scheduler.queue.schedule(function(state) {
 *   if (state !== 0) {
 *     console.log('before', state);
 *     this.schedule(state - 1); // `this` references currently executing Action,
 *                               // which we reschedule with new state
 *     console.log('after', state);
 *   }
 * }, 0, 3);
 *
 * // In scheduler that runs recursively, you would expect:
 * // "before", 3
 * // "before", 2
 * // "before", 1
 * // "after", 1
 * // "after", 2
 * // "after", 3
 *
 * // But with queue it logs:
 * // "before", 3
 * // "after", 3
 * // "before", 2
 * // "after", 2
 * // "before", 1
 * // "after", 1
 *
 *
 * @static true
 * @name queue
 * @owner Scheduler
 */
exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
//# sourceMappingURL=queue.js.map

/***/ }),
/* 505 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_operator_enterZone__ = __webpack_require__(543);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "enterZone", function() { return __WEBPACK_IMPORTED_MODULE_0__src_operator_enterZone__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EnterZoneOperator", function() { return __WEBPACK_IMPORTED_MODULE_0__src_operator_enterZone__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_operator_leaveZone__ = __webpack_require__(544);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "leaveZone", function() { return __WEBPACK_IMPORTED_MODULE_1__src_operator_leaveZone__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LeaveZoneOperator", function() { return __WEBPACK_IMPORTED_MODULE_1__src_operator_leaveZone__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_operator_select__ = __webpack_require__(545);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_2__src_operator_select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_compose__ = __webpack_require__(542);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_3__src_compose__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),
/* 506 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_DEVTOOLS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INITIAL_OPTIONS; });

var STORE_DEVTOOLS_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('@ngrx/devtools Options');
var INITIAL_OPTIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('@ngrx/devtools Initial Config');
//# sourceMappingURL=config.js.map

/***/ }),
/* 507 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_merge__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_observeOn__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_observeOn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_observeOn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_scan__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_skip__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_skip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_skip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_withLatestFrom__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_scheduler_queue__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_scheduler_queue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_scheduler_queue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__extension__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reducer__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__actions__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__config__ = __webpack_require__(506);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DevtoolsDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDevtools; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();















var DevtoolsDispatcher = (function (_super) {
    __extends(DevtoolsDispatcher, _super);
    function DevtoolsDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DevtoolsDispatcher;
}(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["Dispatcher"]));

DevtoolsDispatcher.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
DevtoolsDispatcher.ctorParameters = function () { return []; };
var StoreDevtools = (function () {
    function StoreDevtools(dispatcher, actions$, reducers$, extension, initialState, config) {
        var liftedInitialState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__reducer__["a" /* liftInitialState */])(initialState, config.monitor);
        var liftReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__reducer__["b" /* liftReducerWith */])(initialState, liftedInitialState, config.monitor, {
            maxAge: config.maxAge
        });
        var liftedAction$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils__["a" /* applyOperators */])(actions$, [
            [__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_skip__["skip"], 1],
            [__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_merge__["merge"], extension.actions$],
            [__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__["map"], __WEBPACK_IMPORTED_MODULE_11__utils__["b" /* liftAction */]],
            [__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_merge__["merge"], dispatcher, extension.liftedActions$],
            [__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_observeOn__["observeOn"], __WEBPACK_IMPORTED_MODULE_9_rxjs_scheduler_queue__["queue"]]
        ]);
        var liftedReducer$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__["map"].call(reducers$, liftReducer);
        var liftedStateSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"](1);
        var liftedStateSubscription = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils__["a" /* applyOperators */])(liftedAction$, [
            [__WEBPACK_IMPORTED_MODULE_8_rxjs_operator_withLatestFrom__["withLatestFrom"], liftedReducer$],
            [__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_scan__["scan"], function (liftedState, _a) {
                    var action = _a[0], reducer = _a[1];
                    var nextState = reducer(liftedState, action);
                    extension.notify(action, nextState);
                    return nextState;
                }, liftedInitialState]
        ]).subscribe(liftedStateSubject);
        var liftedState$ = liftedStateSubject.asObservable();
        var state$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__["map"].call(liftedState$, __WEBPACK_IMPORTED_MODULE_11__utils__["c" /* unliftState */]);
        this.stateSubscription = liftedStateSubscription;
        this.dispatcher = dispatcher;
        this.liftedState = liftedState$;
        this.state = state$;
    }
    StoreDevtools.prototype.dispatch = function (action) {
        this.dispatcher.dispatch(action);
    };
    StoreDevtools.prototype.next = function (action) {
        this.dispatcher.dispatch(action);
    };
    StoreDevtools.prototype.error = function (error) { };
    StoreDevtools.prototype.complete = function () { };
    StoreDevtools.prototype.performAction = function (action) {
        this.dispatch(__WEBPACK_IMPORTED_MODULE_13__actions__["a" /* StoreDevtoolActions */].performAction(action));
    };
    StoreDevtools.prototype.reset = function () {
        this.dispatch(__WEBPACK_IMPORTED_MODULE_13__actions__["a" /* StoreDevtoolActions */].reset());
    };
    StoreDevtools.prototype.rollback = function () {
        this.dispatch(__WEBPACK_IMPORTED_MODULE_13__actions__["a" /* StoreDevtoolActions */].rollback());
    };
    StoreDevtools.prototype.commit = function () {
        this.dispatch(__WEBPACK_IMPORTED_MODULE_13__actions__["a" /* StoreDevtoolActions */].commit());
    };
    StoreDevtools.prototype.sweep = function () {
        this.dispatch(__WEBPACK_IMPORTED_MODULE_13__actions__["a" /* StoreDevtoolActions */].sweep());
    };
    StoreDevtools.prototype.toggleAction = function (id) {
        this.dispatch(__WEBPACK_IMPORTED_MODULE_13__actions__["a" /* StoreDevtoolActions */].toggleAction(id));
    };
    StoreDevtools.prototype.jumpToState = function (index) {
        this.dispatch(__WEBPACK_IMPORTED_MODULE_13__actions__["a" /* StoreDevtoolActions */].jumpToState(index));
    };
    StoreDevtools.prototype.importState = function (nextLiftedState) {
        this.dispatch(__WEBPACK_IMPORTED_MODULE_13__actions__["a" /* StoreDevtoolActions */].importState(nextLiftedState));
    };
    return StoreDevtools;
}());

StoreDevtools.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
StoreDevtools.ctorParameters = function () { return [
    { type: DevtoolsDispatcher, },
    { type: __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["Dispatcher"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["Reducer"], },
    { type: __WEBPACK_IMPORTED_MODULE_10__extension__["a" /* DevtoolsExtension */], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["INITIAL_STATE"],] },] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_14__config__["a" /* STORE_DEVTOOLS_CONFIG */],] },] },
]; };
//# sourceMappingURL=devtools.js.map

/***/ }),
/* 508 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_empty__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_share__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_switchMap__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_takeUntil__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__(491);
/* unused harmony export ExtensionActionTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REDUX_DEVTOOLS_EXTENSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevtoolsExtension; });









var ExtensionActionTypes = {
    START: 'START',
    DISPATCH: 'DISPATCH',
    STOP: 'STOP',
    ACTION: 'ACTION'
};
var REDUX_DEVTOOLS_EXTENSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('Redux Devtools Extension');
var DevtoolsExtension = (function () {
    function DevtoolsExtension(devtoolsExtension) {
        this.instanceId = "ngrx-store-" + Date.now();
        this.devtoolsExtension = devtoolsExtension;
        this.createActionStreams();
    }
    DevtoolsExtension.prototype.notify = function (action, state) {
        if (!this.devtoolsExtension) {
            return;
        }
        this.devtoolsExtension.send(null, state, false, this.instanceId);
    };
    DevtoolsExtension.prototype.createChangesObservable = function () {
        var _this = this;
        if (!this.devtoolsExtension) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_empty__["empty"])();
        }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (subscriber) {
            var connection = _this.devtoolsExtension.connect({ instanceId: _this.instanceId });
            connection.subscribe(function (change) { return subscriber.next(change); });
            return connection.unsubscribe;
        });
    };
    DevtoolsExtension.prototype.createActionStreams = function () {
        var _this = this;
        // Listens to all changes based on our instanceId
        var changes$ = __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_share__["share"].call(this.createChangesObservable());
        // Listen for the start action
        var start$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__["filter"].call(changes$, function (change) { return change.type === ExtensionActionTypes.START; });
        // Listen for the stop action
        var stop$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__["filter"].call(changes$, function (change) { return change.type === ExtensionActionTypes.STOP; });
        // Listen for lifted actions
        var liftedActions$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils__["a" /* applyOperators */])(changes$, [
            [__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__["filter"], function (change) { return change.type === ExtensionActionTypes.DISPATCH; }],
            [__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__["map"], function (change) { return _this.unwrapAction(change.payload); }]
        ]);
        // Listen for unlifted actions
        var actions$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils__["a" /* applyOperators */])(changes$, [
            [__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__["filter"], function (change) { return change.type === ExtensionActionTypes.ACTION; }],
            [__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__["map"], function (change) { return _this.unwrapAction(change.payload); }]
        ]);
        var actionsUntilStop$ = __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_takeUntil__["takeUntil"].call(actions$, stop$);
        var liftedUntilStop$ = __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_takeUntil__["takeUntil"].call(liftedActions$, stop$);
        // Only take the action sources between the start/stop events
        this.actions$ = __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_switchMap__["switchMap"].call(start$, function () { return actionsUntilStop$; });
        this.liftedActions$ = __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_switchMap__["switchMap"].call(start$, function () { return liftedUntilStop$; });
    };
    DevtoolsExtension.prototype.unwrapAction = function (action) {
        return typeof action === 'string' ? eval("(" + action + ")") : action;
    };
    return DevtoolsExtension;
}());

DevtoolsExtension.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
DevtoolsExtension.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [REDUX_DEVTOOLS_EXTENSION,] },] },
]; };
//# sourceMappingURL=extension.js.map

/***/ }),
/* 509 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dispatcher; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Dispatcher = (function (_super) {
    __extends(Dispatcher, _super);
    function Dispatcher() {
        return _super.call(this, { type: Dispatcher.INIT }) || this;
    }
    Dispatcher.prototype.dispatch = function (action) {
        this.next(action);
    };
    Dispatcher.prototype.complete = function () {
        // noop
    };
    return Dispatcher;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]));

Dispatcher.INIT = '@ngrx/store/init';
//# sourceMappingURL=dispatcher.js.map

/***/ }),
/* 510 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reducer; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Reducer = (function (_super) {
    __extends(Reducer, _super);
    function Reducer(_dispatcher, initialReducer) {
        var _this = _super.call(this, initialReducer) || this;
        _this._dispatcher = _dispatcher;
        return _this;
    }
    Reducer.prototype.replaceReducer = function (reducer) {
        this.next(reducer);
    };
    Reducer.prototype.next = function (reducer) {
        _super.prototype.next.call(this, reducer);
        this._dispatcher.dispatch({ type: Reducer.REPLACE });
    };
    return Reducer;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]));

Reducer.REPLACE = '@ngrx/store/replace-reducer';
//# sourceMappingURL=reducer.js.map

/***/ }),
/* 511 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operator_withLatestFrom__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_scan__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_observeOn__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_observeOn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operator_observeOn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_scheduler_queue__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_scheduler_queue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_scheduler_queue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var State = (function (_super) {
    __extends(State, _super);
    function State(_initialState, action$, reducer$) {
        var _this = _super.call(this, _initialState) || this;
        var actionInQueue$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_observeOn__["observeOn"].call(action$, __WEBPACK_IMPORTED_MODULE_3_rxjs_scheduler_queue__["queue"]);
        var actionAndReducer$ = __WEBPACK_IMPORTED_MODULE_0_rxjs_operator_withLatestFrom__["withLatestFrom"].call(actionInQueue$, reducer$);
        var state$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_scan__["scan"].call(actionAndReducer$, function (state, _a) {
            var action = _a[0], reducer = _a[1];
            return reducer(state, action);
        }, _initialState);
        state$.subscribe(function (value) { return _this.next(value); });
        return _this;
    }
    return State;
}(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]));

//# sourceMappingURL=state.js.map

/***/ }),
/* 512 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_core__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Store; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Store = (function (_super) {
    __extends(Store, _super);
    function Store(_dispatcher, _reducer, state$) {
        var _this = _super.call(this) || this;
        _this._dispatcher = _dispatcher;
        _this._reducer = _reducer;
        _this.select = __WEBPACK_IMPORTED_MODULE_0__ngrx_core__["select"].bind(_this);
        _this.source = state$;
        return _this;
    }
    Store.prototype.lift = function (operator) {
        var store = new Store(this._dispatcher, this._reducer, this);
        store.operator = operator;
        return store;
    };
    Store.prototype.replaceReducer = function (reducer) {
        this._reducer.next(reducer);
    };
    Store.prototype.dispatch = function (action) {
        this._dispatcher.next(action);
    };
    Store.prototype.next = function (action) {
        this._dispatcher.next(action);
    };
    Store.prototype.error = function (err) {
        this._dispatcher.error(err);
    };
    Store.prototype.complete = function () {
        // noop
    };
    return Store;
}(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]));

//# sourceMappingURL=store.js.map

/***/ }),
/* 513 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    var finalReducerKeys = Object.keys(finalReducers);
    return function combination(state, action) {
        if (state === void 0) { state = {}; }
        var hasChanged = false;
        var nextState = {};
        for (var i = 0; i < finalReducerKeys.length; i++) {
            var key = finalReducerKeys[i];
            var reducer = finalReducers[key];
            var previousStateForKey = state[key];
            var nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
}
//# sourceMappingURL=utils.js.map

/***/ }),
/* 514 */
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
var mock_parametrage_1 = __webpack_require__(550);
var ParametrageService = (function () {
    function ParametrageService() {
    }
    ParametrageService.prototype.getMockCitiesOfFrance = function () {
        return mock_parametrage_1.CitiesOfFrance;
    };
    ParametrageService.prototype.getMockCitiesOfAllemagne = function () {
        return mock_parametrage_1.CitiesOfAllemagne;
    };
    ParametrageService.prototype.getMockCitiesOfChine = function () {
        return mock_parametrage_1.CitiesOfCHINE;
    };
    ParametrageService.prototype.getMockCitiesOfEmiratsArabesUni = function () {
        return mock_parametrage_1.CitiesOfEmiratsArabesUni;
    };
    ParametrageService.prototype.getAgencesBes = function () {
        return mock_parametrage_1.AgencesBES;
    };
    return ParametrageService;
}());
ParametrageService = __decorate([
    core_1.Injectable()
], ParametrageService);
exports.ParametrageService = ParametrageService;
//# sourceMappingURL=D:/workspace/Bes_project/src/parametrage.service.js.map

/***/ }),
/* 515 */
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
var store_1 = __webpack_require__(416);
var core_2 = __webpack_require__(505);
__webpack_require__(102);
__webpack_require__(611);
var UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
var initialState = {
    firstName: '',
    lastName: 'qsdqsd',
    email: '',
    confirmEmail: '',
};
function customer(state, action) {
    if (state === void 0) { state = initialState; }
    console.log('customerprofile reducer');
    switch (action.type) {
        case UPDATE_CUSTOMER:
            return action.payload;
        default:
            return state;
    }
}
exports.customer = customer;
;
exports.reducers = {
    customer: customer
};
exports.rootReducer = core_2.compose(store_1.combineReducers)(exports.reducers);
function reducer(state, action) {
    return exports.rootReducer(state, action);
}
exports.reducer = reducer;
var CustomerService = (function () {
    function CustomerService(store) {
        this.store = store;
        this.customer$ = this.store.select('customer').take(1);
        this.customer = this.store.select(function (store) { return store.customer; });
    }
    CustomerService.prototype.updateUser = function (customer) {
        this.store.dispatch({ type: UPDATE_CUSTOMER, payload: customer });
    };
    return CustomerService;
}());
CustomerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _a || Object])
], CustomerService);
exports.CustomerService = CustomerService;
var _a;
//# sourceMappingURL=D:/workspace/Bes_project/src/customer.js.map

/***/ }),
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */
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
var forms_1 = __webpack_require__(177);
var router_1 = __webpack_require__(97);
var index_1 = __webpack_require__(436);
var store_1 = __webpack_require__(416);
var parametrage_service_1 = __webpack_require__(514);
var BeneficiaireComponent = (function () {
    function BeneficiaireComponent(store, beneficiaireService, contactService, fb, customerService, router, parametrageService) {
        this.store = store;
        this.beneficiaireService = beneficiaireService;
        this.contactService = contactService;
        this.fb = fb;
        this.customerService = customerService;
        this.router = router;
        this.parametrageService = parametrageService;
        this.hidden = false;
        this.hiddenBen = false;
        this.success = false;
        this.step = 4;
        this.label = "RIB bénéficiaire";
        this.markers = [];
    }
    BeneficiaireComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agences = this.parametrageService.getAgencesBes();
        this.agences.forEach(function (element) {
            _this.markers.push({
                title: element.key,
                lat: element.lat,
                lng: element.lng,
                label: "",
                icon: "assets/img/marker.png",
                draggable: true
            });
        });
        this.beneficiaireService.beneficiaire$
            .subscribe(this.initForm.bind(this));
        this.customer = this.customerService.customer$.subscribe(function (customer) {
            _this.email = customer.email;
        });
        this.contactService.contact$.subscribe(function (contact) {
            console.log(contact);
            _this.initializeMap(contact.cityOfBirth);
        });
    };
    BeneficiaireComponent.prototype.initializeMap = function (city) {
        var _this = this;
        city = this.noAccent(city);
        city = city.toLowerCase();
        this.agences.forEach(function (element) {
            var value = element.value.toLowerCase();
            if (value === city) {
                _this.lat = element.lat;
                _this.lng = element.lng;
            }
        });
    };
    BeneficiaireComponent.prototype.initForm = function (beneficiaire) {
        this.form = this.fb.group({
            account: [beneficiaire.account, [forms_1.Validators.required, forms_1.Validators.pattern(/([0-9]{21})$/)]],
            lastname: [beneficiaire.lastname, forms_1.Validators.required],
            firstname: [beneficiaire.firstname, forms_1.Validators.required],
            agenceBes: [beneficiaire.agenceBes, forms_1.Validators.required],
            newsletterInscription: [beneficiaire.newsletterInscription],
            agree: [beneficiaire.agree],
        });
    };
    BeneficiaireComponent.prototype.hideMap = function () {
        this.hidden = !this.hidden;
    };
    BeneficiaireComponent.prototype.hideBeneficiare = function () {
        var _this = this;
        this.hiddenBen = !this.hiddenBen;
        if (this.hiddenBen === true) {
            this.customer = this.customerService.customer$.subscribe(function (customer) {
                _this.form.get('lastname').patchValue(customer.lastName);
                _this.form.get('firstname').patchValue(customer.firstName);
            });
            this.form.get('lastname').disable();
            this.form.get('firstname').disable();
        }
        else {
            this.form.get('lastname').patchValue('');
            this.form.get('firstname').patchValue('');
            this.form.get('firstname').enable();
            this.form.get('lastname').enable();
        }
    };
    BeneficiaireComponent.prototype.back = function () {
        localStorage.removeItem('beneficiaire');
        this.router.navigateByUrl('register/contact');
    };
    BeneficiaireComponent.prototype.next = function () {
        var _this = this;
        if (this.hiddenBen === true) {
            this.form.get('firstname').enable();
            this.form.get('lastname').enable();
            this.customer = this.customerService.customer$.subscribe(function (customer) {
                _this.form.get('lastname').patchValue(customer.lastName);
                _this.form.get('firstname').patchValue(customer.firstName);
            });
        }
        this.beneficiaireService.updateBeneficiaire(this.form.value);
        localStorage.setItem('beneficiaire', JSON.stringify([{ account: this.form.value.account, firstname: this.form.value.firstname, lastname: this.form.value.lastname }]));
        this.router.navigateByUrl('register/result');
    };
    BeneficiaireComponent.prototype.noAccent = function (text) {
        var accent = [
            /[\300-\306]/g, /[\340-\346]/g,
            /[\310-\313]/g, /[\350-\353]/g,
            /[\314-\317]/g, /[\354-\357]/g,
            /[\322-\330]/g, /[\362-\370]/g,
            /[\331-\334]/g, /[\371-\374]/g,
            /[\321]/g, /[\361]/g,
            /[\307]/g, /[\347]/g,
        ];
        var noaccent = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', 'N', 'n', 'C', 'c'];
        for (var i = 0; i < accent.length; i++) {
            text = text.replace(accent[i], noaccent[i]);
        }
        return text;
    };
    BeneficiaireComponent.prototype.clickedMarker = function (label, index) {
        var _this = this;
        console.log(index);
        this.agences.forEach(function (element) {
            if (element.key === index) {
                _this.form.get('agenceBes').patchValue(element.key);
            }
        });
    };
    return BeneficiaireComponent;
}());
BeneficiaireComponent = __decorate([
    core_1.Component({
        selector: 'app-beneficiaire',
        template: __webpack_require__(602),
        styles: [__webpack_require__(584)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _a || Object, typeof (_b = typeof index_1.BeneficiaireService !== "undefined" && index_1.BeneficiaireService) === "function" && _b || Object, typeof (_c = typeof index_1.ContactService !== "undefined" && index_1.ContactService) === "function" && _c || Object, typeof (_d = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _d || Object, typeof (_e = typeof index_1.CustomerService !== "undefined" && index_1.CustomerService) === "function" && _e || Object, typeof (_f = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _f || Object, typeof (_g = typeof parametrage_service_1.ParametrageService !== "undefined" && parametrage_service_1.ParametrageService) === "function" && _g || Object])
], BeneficiaireComponent);
exports.BeneficiaireComponent = BeneficiaireComponent;
var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=D:/workspace/Bes_project/src/beneficiaire.component.js.map

/***/ }),
/* 525 */
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
var forms_1 = __webpack_require__(177);
var router_1 = __webpack_require__(97);
var index_1 = __webpack_require__(436);
var store_1 = __webpack_require__(416);
var ContactComponent = (function () {
    function ContactComponent(store, contactService, fb, router) {
        this.store = store;
        this.contactService = contactService;
        this.fb = fb;
        this.router = router;
        this.step = 3;
        this.citiesOfFrance = [];
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contactService.contact$
            .subscribe(this.initForm.bind(this));
    };
    ContactComponent.prototype.initForm = function (contact) {
        this.form = this.fb.group({
            address: [contact.address, forms_1.Validators.required],
            countryOfBirth: [contact.countryOfBirth, forms_1.Validators.required],
            codePostal: [contact.codePostal, forms_1.Validators.required],
            phone: [contact.phone, [forms_1.Validators.required, forms_1.Validators.pattern(/([0-9])$/)]],
            email: [contact.email],
            cityOfBirth: [contact.cityOfBirth]
        });
    };
    ContactComponent.prototype.back = function () {
        this.router.navigateByUrl('register/signalitique');
    };
    ContactComponent.prototype.next = function () {
        this.contactService.updateContact(this.form.value);
        localStorage.setItem('address', JSON.stringify({ phone: this.form.value.phone, email: this.form.value.email }));
        this.router.navigateByUrl('register/beneficiaire');
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'app-address',
        template: __webpack_require__(603),
        styles: [__webpack_require__(585)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _a || Object, typeof (_b = typeof index_1.ContactService !== "undefined" && index_1.ContactService) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], ContactComponent);
exports.ContactComponent = ContactComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=D:/workspace/Bes_project/src/contact.component.js.map

/***/ }),
/* 526 */
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
var forms_1 = __webpack_require__(177);
var router_1 = __webpack_require__(97);
var store_1 = __webpack_require__(416);
var index_1 = __webpack_require__(436);
var GeneralInfoComponent = (function () {
    function GeneralInfoComponent(store, customerService, fb, router) {
        this.store = store;
        this.customerService = customerService;
        this.fb = fb;
        this.router = router;
        this.step = 1;
        this.hidden = false;
        this.success = false;
        this.submitted = 0;
        this.error = '';
        this.customer = customerService.customer;
    }
    GeneralInfoComponent.prototype.ngOnDestroy = function () {
        // this.subscription.unsubscribe();
    };
    GeneralInfoComponent.prototype.ngOnInit = function () {
        this.initForm({
            firstName: '',
            lastName: '',
            email: '',
            confirmEmail: '',
        });
        this.subscription = this.customer
            .subscribe(function (campaigns) {
            console.log(campaigns);
        });
        //     this.store.select<CustomerProfile>(store => store.customer).subscribe(customer => {
        //      console.log(customer);
        //         this.form.patchValue(customer, { emitEvent: false })
        // });
        // this.subscription = this.customerService.customer$.subscribe(
        //   customer => {
        //     console.log("aloo");
        //     this.form.patchValue({ "lastName": customer.lastName }, { emitEvent: false })
        //   });
    };
    GeneralInfoComponent.prototype.ngAfterContentInit = function () {
    };
    GeneralInfoComponent.prototype.initForm = function (customer) {
        this.form = this.fb.group({
            lastName: [customer.lastName, forms_1.Validators.required],
            firstName: [customer.firstName, forms_1.Validators.required],
            email: [customer.email, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
            confirmEmail: [customer.confirmEmail, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])]
        }, { validator: this.matchingPasswords('email', 'confirmEmail') });
    };
    GeneralInfoComponent.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    GeneralInfoComponent.prototype.handleFormChanges = function () {
    };
    GeneralInfoComponent.prototype.next = function () {
        this.customerService.updateUser(this.form.value);
        localStorage.setItem('user', JSON.stringify({ firstname: this.form.value.firstName, lastname: this.form.value.lastName }));
        this.router.navigateByUrl('register/signalitique');
    };
    return GeneralInfoComponent;
}());
GeneralInfoComponent = __decorate([
    core_1.Component({
        selector: 'app-user',
        template: __webpack_require__(605),
        styles: [__webpack_require__(587)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _a || Object, typeof (_b = typeof index_1.CustomerService !== "undefined" && index_1.CustomerService) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], GeneralInfoComponent);
exports.GeneralInfoComponent = GeneralInfoComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=D:/workspace/Bes_project/src/general.component.js.map

/***/ }),
/* 527 */
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
var forms_1 = __webpack_require__(177);
var router_1 = __webpack_require__(97);
var index_1 = __webpack_require__(436);
var store_1 = __webpack_require__(416);
var date_validator_1 = __webpack_require__(568);
var ng_bootstrap_1 = __webpack_require__(457);
var SignalitiqueComponent = (function () {
    function SignalitiqueComponent(store, signalitiqueService, fb, router, config) {
        this.store = store;
        this.signalitiqueService = signalitiqueService;
        this.fb = fb;
        this.router = router;
        this.step = 2;
        config.minDate = { year: 1920, month: 1, day: 1 };
    }
    SignalitiqueComponent.prototype.ngOnInit = function () {
        this.signalitiqueService.signalitique$
            .subscribe(this.initForm.bind(this));
    };
    SignalitiqueComponent.prototype.initForm = function (signalitique) {
        this.form = this.fb.group({
            gender: [signalitique.gender, forms_1.Validators.required],
            birthday: [signalitique.birthday, [forms_1.Validators.required, date_validator_1.validateBirthday]],
            birthplace: [signalitique.birthplace, forms_1.Validators.required],
            identityDocument: [signalitique.identityDocument, forms_1.Validators.required],
            identityNumber: [signalitique.identityNumber, forms_1.Validators.required],
            placeOfIssue: [signalitique.placeOfIssue, forms_1.Validators.required],
            dateOfIssue: [signalitique.dateOfIssue, forms_1.Validators.required],
            expirDate: [signalitique.expirDate, [forms_1.Validators.required, date_validator_1.validateDate]],
        });
    };
    SignalitiqueComponent.prototype.back = function () {
        this.router.navigateByUrl('register/infos-generales');
    };
    SignalitiqueComponent.prototype.next = function () {
        this.signalitiqueService.updateSignalitique(this.form.value);
        this.router.navigateByUrl('register/contact');
    };
    return SignalitiqueComponent;
}());
SignalitiqueComponent = __decorate([
    core_1.Component({
        selector: 'app-health',
        template: __webpack_require__(606),
        styles: [__webpack_require__(588)],
        providers: [ng_bootstrap_1.NgbDatepickerConfig]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _a || Object, typeof (_b = typeof index_1.SignalitiqueService !== "undefined" && index_1.SignalitiqueService) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof ng_bootstrap_1.NgbDatepickerConfig !== "undefined" && ng_bootstrap_1.NgbDatepickerConfig) === "function" && _e || Object])
], SignalitiqueComponent);
exports.SignalitiqueComponent = SignalitiqueComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=D:/workspace/Bes_project/src/signalitique.component.js.map

/***/ }),
/* 528 */
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
var index_1 = __webpack_require__(436);
var ResultComponent = (function () {
    function ResultComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
        this.email = "";
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.customer$.subscribe(function (customer) {
            _this.email = customer.email;
        });
    };
    ResultComponent.prototype.backToHome = function () {
        this.router.navigateByUrl('/');
    };
    return ResultComponent;
}());
ResultComponent = __decorate([
    core_1.Component({
        selector: 'app-result',
        template: __webpack_require__(607)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof index_1.CustomerService !== "undefined" && index_1.CustomerService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], ResultComponent);
exports.ResultComponent = ResultComponent;
var _a, _b;
//# sourceMappingURL=D:/workspace/Bes_project/src/result.component.js.map

/***/ }),
/* 529 */
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
var PADDING = "000000";
var RibNumberPipe = (function () {
    function RibNumberPipe() {
        // TODO comes from configuration settings
        this.PREFIX = '';
        this.DECIMAL_SEPARATOR = ".";
        this.THOUSANDS_SEPARATOR = " ";
        this.SUFFIX = '';
    }
    RibNumberPipe.prototype.transform = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        var _a = (value || "").toString()
            .split("."), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? "" : _b;
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
        return this.PREFIX + integer;
    };
    RibNumberPipe.prototype.parse = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        var _a = (value || "").replace(this.PREFIX, "")
            .replace(this.SUFFIX, "")
            .split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? "" : _b;
        integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, "g"), "");
        fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";
        return integer;
    };
    return RibNumberPipe;
}());
RibNumberPipe = __decorate([
    core_1.Pipe({ name: "RibNumber" }),
    __metadata("design:paramtypes", [])
], RibNumberPipe);
exports.RibNumberPipe = RibNumberPipe;
//# sourceMappingURL=D:/workspace/Bes_project/src/rib-account-number.pipe.js.map

/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var circle_manager_1 = __webpack_require__(494);
var SebmGoogleMapCircle = (function () {
    function SebmGoogleMapCircle(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */
        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */
        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */
        this.centerChange = new core_1.EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleClick = new core_1.EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleDblClick = new core_1.EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */
        this.drag = new core_1.EventEmitter();
        /**
         * This event is fired when the user stops dragging the circle.
         */
        this.dragEnd = new core_1.EventEmitter();
        /**
         * This event is fired when the user starts dragging the circle.
         */
        this.dragStart = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */
        this.mouseDown = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */
        this.mouseMove = new core_1.EventEmitter();
        /**
         * This event is fired on circle mouseout.
         */
        this.mouseOut = new core_1.EventEmitter();
        /**
         * This event is fired on circle mouseover.
         */
        this.mouseOver = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */
        this.mouseUp = new core_1.EventEmitter();
        /**
         * This event is fired when the circle's radius is changed.
         */
        this.radiusChange = new core_1.EventEmitter();
        /**
         * This event is fired when the circle is right-clicked on.
         */
        this.rightClick = new core_1.EventEmitter();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    SebmGoogleMapCircle.prototype.ngOnInit = function () {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    SebmGoogleMapCircle.prototype.ngOnChanges = function (changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        this._updateCircleOptionsChanges(changes);
    };
    SebmGoogleMapCircle.prototype._updateCircleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapCircle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    SebmGoogleMapCircle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
                switch (eventName) {
                    case 'radius_changed':
                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
                        break;
                    case 'center_changed':
                        _this._manager.getCenter(_this).then(function (center) {
                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
                        });
                        break;
                    default:
                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                }
            }));
        });
    };
    /** @internal */
    SebmGoogleMapCircle.prototype.ngOnDestroy = function () {
        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    };
    /**
     * Gets the LatLngBounds of this Circle.
     */
    SebmGoogleMapCircle.prototype.getBounds = function () { return this._manager.getBounds(this); };
    SebmGoogleMapCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
    SebmGoogleMapCircle._mapOptions = [
        'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
        'visible', 'zIndex'
    ];
    SebmGoogleMapCircle.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'sebm-google-map-circle',
                    inputs: [
                        'latitude', 'longitude', 'clickable', 'draggable: circleDraggable', 'editable', 'fillColor',
                        'fillOpacity', 'radius', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
                        'visible', 'zIndex'
                    ],
                    outputs: [
                        'centerChange', 'circleClick', 'circleDblClick', 'drag', 'dragEnd', 'dragStart', 'mouseDown',
                        'mouseMove', 'mouseOut', 'mouseOver', 'mouseUp', 'radiusChange', 'rightClick'
                    ]
                },] },
    ];
    /** @nocollapse */
    SebmGoogleMapCircle.ctorParameters = function () { return [
        { type: circle_manager_1.CircleManager, },
    ]; };
    return SebmGoogleMapCircle;
}());
exports.SebmGoogleMapCircle = SebmGoogleMapCircle;
//# sourceMappingURL=google-map-circle.js.map

/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var kml_layer_manager_1 = __webpack_require__(496);
var layerId = 0;
var SebmGoogleMapKmlLayer = (function () {
    function SebmGoogleMapKmlLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
         * If true, the layer receives mouse events. Default value is true.
         */
        this.clickable = true;
        /**
         * By default, the input map is centered and zoomed to the bounding box of the contents of the
         * layer.
         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
         * were never set.
         */
        this.preserveViewport = false;
        /**
         * Whether to render the screen overlays. Default true.
         */
        this.screenOverlays = true;
        /**
         * Suppress the rendering of info windows when layer features are clicked.
         */
        this.suppressInfoWindows = false;
        /**
         * The URL of the KML document to display.
         */
        this.url = null;
        /**
         * The z-index of the layer.
         */
        this.zIndex = null;
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new core_1.EventEmitter();
        /**
         * This event is fired when the KML layers default viewport has changed.
         */
        this.defaultViewportChange = new core_1.EventEmitter();
        /**
         * This event is fired when the KML layer has finished loading.
         * At this point it is safe to read the status property to determine if the layer loaded
         * successfully.
         */
        this.statusChange = new core_1.EventEmitter();
    }
    SebmGoogleMapKmlLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    SebmGoogleMapKmlLayer.prototype.ngOnChanges = function (changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    };
    SebmGoogleMapKmlLayer.prototype._updatePolygonOptions = function (changes) {
        var options = Object.keys(changes)
            .filter(function (k) { return SebmGoogleMapKmlLayer._kmlLayerOptions.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    SebmGoogleMapKmlLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
            { name: 'defaultviewport_changed', handler: function () { return _this.defaultViewportChange.emit(); } },
            { name: 'status_changed', handler: function () { return _this.statusChange.emit(); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    SebmGoogleMapKmlLayer.prototype.id = function () { return this._id; };
    /** @internal */
    SebmGoogleMapKmlLayer.prototype.toString = function () { return "SebmGoogleMapKmlLayer-" + this._id.toString(); };
    /** @internal */
    SebmGoogleMapKmlLayer.prototype.ngOnDestroy = function () {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    SebmGoogleMapKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
    SebmGoogleMapKmlLayer.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'sebm-google-map-kml-layer',
                    inputs: ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'],
                    outputs: ['layerClick', 'defaultViewportChange', 'statusChange']
                },] },
    ];
    /** @nocollapse */
    SebmGoogleMapKmlLayer.ctorParameters = function () { return [
        { type: kml_layer_manager_1.KmlLayerManager, },
    ]; };
    return SebmGoogleMapKmlLayer;
}());
exports.SebmGoogleMapKmlLayer = SebmGoogleMapKmlLayer;
//# sourceMappingURL=google-map-kml-layer.js.map

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var marker_manager_1 = __webpack_require__(485);
var google_map_info_window_1 = __webpack_require__(492);
var markerId = 0;
/**
 * SebmGoogleMapMarker renders a map marker inside a {@link SebmGoogleMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { SebmGoogleMap, SebmGoogleMapMarker } from 'angular2-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [SebmGoogleMap, SebmGoogleMapMarker],
 *  styles: [`
 *    .sebm-google-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <sebm-google-map-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </sebm-google-map-marker>
 *    </sebm-google-map>
 *  `
 * })
 * ```
 */
var SebmGoogleMapMarker = (function () {
    function SebmGoogleMapMarker(_markerManager) {
        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        this.draggable = false;
        /**
         * If true, the marker is visible
         */
        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */
        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */
        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */
        this.zIndex = 1;
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */
        this.markerClick = new core_1.EventEmitter();
        /**
         * This event is fired when the user stops dragging the marker.
         */
        this.dragEnd = new core_1.EventEmitter();
        /**
         * This event is fired when the user mouses over the marker.
         */
        this.mouseOver = new core_1.EventEmitter();
        /**
         * This event is fired when the user mouses outside the marker.
         */
        this.mouseOut = new core_1.EventEmitter();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._id = (markerId++).toString();
    }
    /* @internal */
    SebmGoogleMapMarker.prototype.ngAfterContentInit = function () {
        if (this.infoWindow != null) {
            this.infoWindow.hostMarker = this;
        }
    };
    /** @internal */
    SebmGoogleMapMarker.prototype.ngOnChanges = function (changes) {
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
    };
    SebmGoogleMapMarker.prototype._addEventListeners = function () {
        var _this = this;
        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this.openInfoWindow && _this.infoWindow != null) {
                _this.infoWindow.open();
            }
            _this.markerClick.emit(null);
        });
        this._observableSubscriptions.push(cs);
        var ds = this._markerManager.createEventObservable('dragend', this)
            .subscribe(function (e) {
            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(ds);
        var mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe(function (e) {
            _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mover);
        var mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe(function (e) {
            _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mout);
    };
    /** @internal */
    SebmGoogleMapMarker.prototype.id = function () { return this._id; };
    /** @internal */
    SebmGoogleMapMarker.prototype.toString = function () { return 'SebmGoogleMapMarker-' + this._id.toString(); };
    /** @internal */
    SebmGoogleMapMarker.prototype.ngOnDestroy = function () {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    SebmGoogleMapMarker.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'sebm-google-map-marker',
                    inputs: [
                        'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
                        'openInfoWindow', 'opacity', 'visible', 'zIndex'
                    ],
                    outputs: ['markerClick', 'dragEnd', 'mouseOver', 'mouseOut']
                },] },
    ];
    /** @nocollapse */
    SebmGoogleMapMarker.ctorParameters = function () { return [
        { type: marker_manager_1.MarkerManager, },
    ]; };
    SebmGoogleMapMarker.propDecorators = {
        'infoWindow': [{ type: core_1.ContentChild, args: [google_map_info_window_1.SebmGoogleMapInfoWindow,] },],
    };
    return SebmGoogleMapMarker;
}());
exports.SebmGoogleMapMarker = SebmGoogleMapMarker;
//# sourceMappingURL=google-map-marker.js.map

/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var polygon_manager_1 = __webpack_require__(497);
/**
 * SebmGoogleMapPolygon renders a polygon on a {@link SebmGoogleMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 * import { SebmGoogleMap, SebmGooglePolygon, LatLngLiteral } from 'angular2-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .semb-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <semb-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <semb-map-polygon [paths]="paths">
 *      </semb-map-polygon>
 *    </semb-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: Array<LatLngLiteral> = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
var SebmGoogleMapPolygon = (function () {
    function SebmGoogleMapPolygon(_polygonManager) {
        this._polygonManager = _polygonManager;
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic
         * property defines the mode of dragging. Defaults to false.
         */
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * The ordered sequence of coordinates that designates a closed loop.
         * Unlike polylines, a polygon may consist of one or more paths.
         *  As a result, the paths property may specify one or more arrays of
         * LatLng coordinates. Paths are closed automatically; do not repeat the
         * first vertex of the path as the last vertex. Simple polygons may be
         * defined using a single array of LatLngs. More complex polygons may
         * specify an array of arrays. Any simple arrays are converted into Arrays.
         * Inserting or removing LatLngs from the Array will automatically update
         * the polygon on the map.
         */
        this.paths = [];
        /**
         * This event is fired when the DOM click event is fired on the Polygon.
         */
        this.polyClick = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polygon.
         */
        this.polyDblClick = new core_1.EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the polygon.
         */
        this.polyDrag = new core_1.EventEmitter();
        /**
         * This event is fired when the user stops dragging the polygon.
         */
        this.polyDragEnd = new core_1.EventEmitter();
        /**
         * This event is fired when the user starts dragging the polygon.
         */
        this.polyDragStart = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polygon.
         */
        this.polyMouseDown = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polygon.
         */
        this.polyMouseMove = new core_1.EventEmitter();
        /**
         * This event is fired on Polygon mouseout.
         */
        this.polyMouseOut = new core_1.EventEmitter();
        /**
         * This event is fired on Polygon mouseover.
         */
        this.polyMouseOver = new core_1.EventEmitter();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polygon
         */
        this.polyMouseUp = new core_1.EventEmitter();
        /**
         * This even is fired when the Polygon is right-clicked on.
         */
        this.polyRightClick = new core_1.EventEmitter();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
    }
    /** @internal */
    SebmGoogleMapPolygon.prototype.ngAfterContentInit = function () {
        if (!this._polygonAddedToManager) {
            this._init();
        }
    };
    SebmGoogleMapPolygon.prototype.ngOnChanges = function (changes) {
        if (!this._polygonAddedToManager) {
            this._init();
            return;
        }
        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    };
    SebmGoogleMapPolygon.prototype._init = function () {
        this._polygonManager.addPolygon(this);
        this._polygonAddedToManager = true;
        this._addEventListeners();
    };
    SebmGoogleMapPolygon.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.polyClick.emit(ev); } },
            { name: 'dbclick', handler: function (ev) { return _this.polyDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.polyDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.polyDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.polyDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.polyMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.polyMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.polyMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.polyMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.polyMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.polyRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polygonManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    SebmGoogleMapPolygon.prototype._updatePolygonOptions = function (changes) {
        return Object.keys(changes)
            .filter(function (k) { return SebmGoogleMapPolygon._polygonOptionsAttributes.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
    };
    /** @internal */
    SebmGoogleMapPolygon.prototype.id = function () { return this._id; };
    /** @internal */
    SebmGoogleMapPolygon.prototype.ngOnDestroy = function () {
        this._polygonManager.deletePolygon(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    SebmGoogleMapPolygon._polygonOptionsAttributes = [
        'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
        'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
        'editable', 'visible'
    ];
    SebmGoogleMapPolygon.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'sebm-map-polygon',
                    inputs: [
                        'clickable',
                        'draggable: polyDraggable',
                        'editable',
                        'fillColor',
                        'fillOpacity',
                        'geodesic',
                        'paths',
                        'strokeColor',
                        'strokeOpacity',
                        'strokeWeight',
                        'visible',
                        'zIndex',
                    ],
                    outputs: [
                        'polyClick', 'polyDblClick', 'polyDrag', 'polyDragEnd', 'polyMouseDown', 'polyMouseMove',
                        'polyMouseOut', 'polyMouseOver', 'polyMouseUp', 'polyRightClick'
                    ]
                },] },
    ];
    /** @nocollapse */
    SebmGoogleMapPolygon.ctorParameters = function () { return [
        { type: polygon_manager_1.PolygonManager, },
    ]; };
    return SebmGoogleMapPolygon;
}());
exports.SebmGoogleMapPolygon = SebmGoogleMapPolygon;
//# sourceMappingURL=google-map-polygon.js.map

/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var polyline_manager_1 = __webpack_require__(498);
var google_map_polyline_point_1 = __webpack_require__(493);
var polylineId = 0;
/**
 * SebmGoogleMapPolyline renders a polyline on a {@link SebmGoogleMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { SebmGoogleMap, SebmGooglePolyline, SebmGooglePolylinePoint } from
 * 'angular2-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [SebmGoogleMap, SebmGooglePolyline, SebmGooglePolylinePoint],
 *  styles: [`
 *    .sebm-google-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <sebm-google-map-polyline>
 *          <sebm-google-map-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </sebm-google-map-polyline-point>
 *          <sebm-google-map-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </sebm-google-map-polyline-point>
 *      </sebm-google-map-polyline>
 *    </sebm-google-map>
 *  `
 * })
 * ```
 */
var SebmGoogleMapPolyline = (function () {
    function SebmGoogleMapPolyline(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */
        this.lineClick = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */
        this.lineDblClick = new core_1.EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */
        this.lineDrag = new core_1.EventEmitter();
        /**
         * This event is fired when the user stops dragging the polyline.
         */
        this.lineDragEnd = new core_1.EventEmitter();
        /**
         * This event is fired when the user starts dragging the polyline.
         */
        this.lineDragStart = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */
        this.lineMouseDown = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */
        this.lineMouseMove = new core_1.EventEmitter();
        /**
         * This event is fired on Polyline mouseout.
         */
        this.lineMouseOut = new core_1.EventEmitter();
        /**
         * This event is fired on Polyline mouseover.
         */
        this.lineMouseOver = new core_1.EventEmitter();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */
        this.lineMouseUp = new core_1.EventEmitter();
        /**
         * This even is fired when the Polyline is right-clicked on.
         */
        this.lineRightClick = new core_1.EventEmitter();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    /** @internal */
    SebmGoogleMapPolyline.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.points.length) {
            this.points.forEach(function (point) {
                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
                _this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        var s = this.points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
        this._subscriptions.push(s);
        this._polylineManager.updatePolylinePoints(this);
    };
    SebmGoogleMapPolyline.prototype.ngOnChanges = function (changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapPolyline._polylineOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
        this._polylineManager.setPolylineOptions(this, options);
    };
    SebmGoogleMapPolyline.prototype._init = function () {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    };
    SebmGoogleMapPolyline.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
            { name: 'dbclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    SebmGoogleMapPolyline.prototype._getPoints = function () {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    };
    /** @internal */
    SebmGoogleMapPolyline.prototype.id = function () { return this._id; };
    /** @internal */
    SebmGoogleMapPolyline.prototype.ngOnDestroy = function () {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    SebmGoogleMapPolyline._polylineOptionsAttributes = [
        'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
        'zIndex'
    ];
    SebmGoogleMapPolyline.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'sebm-google-map-polyline',
                    inputs: [
                        'clickable', 'draggable: polylineDraggable', 'editable', 'geodesic', 'strokeColor',
                        'strokeWeight', 'strokeOpacity', 'visible', 'zIndex'
                    ],
                    outputs: [
                        'lineClick', 'lineDblClick', 'lineDrag', 'lineDragEnd', 'lineMouseDown', 'lineMouseMove',
                        'lineMouseOut', 'lineMouseOver', 'lineMouseUp', 'lineRightClick'
                    ]
                },] },
    ];
    /** @nocollapse */
    SebmGoogleMapPolyline.ctorParameters = function () { return [
        { type: polyline_manager_1.PolylineManager, },
    ]; };
    SebmGoogleMapPolyline.propDecorators = {
        'points': [{ type: core_1.ContentChildren, args: [google_map_polyline_point_1.SebmGoogleMapPolylinePoint,] },],
    };
    return SebmGoogleMapPolyline;
}());
exports.SebmGoogleMapPolyline = SebmGoogleMapPolyline;
//# sourceMappingURL=google-map-polyline.js.map

/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var google_maps_api_wrapper_1 = __webpack_require__(419);
var circle_manager_1 = __webpack_require__(494);
var info_window_manager_1 = __webpack_require__(495);
var marker_manager_1 = __webpack_require__(485);
var polygon_manager_1 = __webpack_require__(497);
var polyline_manager_1 = __webpack_require__(498);
var kml_layer_manager_1 = __webpack_require__(496);
/**
 * SebMGoogleMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the CSS
 * class `sebm-google-map-container`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 * import { SebmGoogleMap } from 'angular2-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [SebmGoogleMap],
 *  styles: [`
 *    .sebm-google-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </sebm-google-map>
 *  `
 * })
 * ```
 */
var SebmGoogleMap = (function () {
    function SebmGoogleMap(_elem, _mapsWrapper) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        /**
         * The longitude that defines the center of the map.
         */
        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */
        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */
        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */
        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */
        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */
        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */
        this.keyboardShortcuts = true;
        /**
         * The enabled/disabled state of the Zoom control.
         */
        this.zoomControl = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */
        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */
        this.usePanning = false;
        /**
         * The initial enabled/disabled state of the Street View Pegman control.
         * This control is part of the default UI, and should be set to false when displaying a map type
         * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
         */
        this.streetViewControl = true;
        /**
         * Sets the viewport to contain the given bounds.
         */
        this.fitBounds = null;
        /**
         * The initial enabled/disabled state of the Scale control. This is disabled by default.
         */
        this.scaleControl = false;
        /**
         * The initial enabled/disabled state of the Map type control.
         */
        this.mapTypeControl = false;
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */
        this.mapClick = new core_1.EventEmitter();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapRightClick = new core_1.EventEmitter();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapDblClick = new core_1.EventEmitter();
        /**
         * This event emitter is fired when the map center changes.
         */
        this.centerChange = new core_1.EventEmitter();
        /**
         * This event is fired when the viewport bounds have changed.
         */
        this.boundsChange = new core_1.EventEmitter();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */
        this.idle = new core_1.EventEmitter();
        /**
         * This event is fired when the zoom level has changed.
         */
        this.zoomChange = new core_1.EventEmitter();
    }
    /** @internal */
    SebmGoogleMap.prototype.ngOnInit = function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.sebm-google-map-container-inner');
        this._initMapInstance(container);
    };
    SebmGoogleMap.prototype._initMapInstance = function (el) {
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            disableDefaultUI: this.disableDefaultUI,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            zoomControl: this.zoomControl,
            styles: this.styles,
            streetViewControl: this.streetViewControl,
            scaleControl: this.scaleControl,
            mapTypeControl: this.mapTypeControl
        });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleIdleEvent();
    };
    /** @internal */
    SebmGoogleMap.prototype.ngOnDestroy = function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /* @internal */
    SebmGoogleMap.prototype.ngOnChanges = function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    SebmGoogleMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * Returns a promise that gets resolved after the event was triggered.
     */
    SebmGoogleMap.prototype.triggerResize = function () {
        var _this = this;
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () { return _this._mapsWrapper.triggerMapEvent('resize').then(function () { return resolve(); }); });
        });
    };
    SebmGoogleMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            changes['fitBounds'] == null) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if (changes['fitBounds'] && this.fitBounds != null) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    SebmGoogleMap.prototype._fitBounds = function () {
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(this.fitBounds);
            return;
        }
        this._mapsWrapper.fitBounds(this.fitBounds);
    };
    SebmGoogleMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    SebmGoogleMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    SebmGoogleMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    SebmGoogleMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    SebmGoogleMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    /**
     * Map option attributes that can change over time
     */
    SebmGoogleMap._mapOptionsAttributes = [
        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
        'keyboardShortcuts', 'zoomControl', 'styles', 'streetViewControl', 'zoom', 'mapTypeControl',
        'minZoom', 'maxZoom'
    ];
    SebmGoogleMap.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sebm-google-map',
                    providers: [
                        google_maps_api_wrapper_1.GoogleMapsAPIWrapper, marker_manager_1.MarkerManager, info_window_manager_1.InfoWindowManager, circle_manager_1.CircleManager, polyline_manager_1.PolylineManager,
                        polygon_manager_1.PolygonManager, kml_layer_manager_1.KmlLayerManager
                    ],
                    inputs: [
                        'longitude', 'latitude', 'zoom', 'minZoom', 'maxZoom', 'draggable: mapDraggable',
                        'disableDoubleClickZoom', 'disableDefaultUI', 'scrollwheel', 'backgroundColor', 'draggableCursor',
                        'draggingCursor', 'keyboardShortcuts', 'zoomControl', 'styles', 'usePanning', 'streetViewControl',
                        'fitBounds', 'scaleControl', 'mapTypeControl'
                    ],
                    outputs: [
                        'mapClick', 'mapRightClick', 'mapDblClick', 'centerChange', 'idle', 'boundsChange', 'zoomChange'
                    ],
                    host: { '[class.sebm-google-map-container]': 'true' },
                    styles: ["\n    .sebm-google-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .sebm-google-map-content {\n      display:none;\n    }\n  "],
                    template: "\n    <div class='sebm-google-map-container-inner'></div>\n    <div class='sebm-google-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SebmGoogleMap.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
    ]; };
    return SebmGoogleMap;
}());
exports.SebmGoogleMap = SebmGoogleMap;
//# sourceMappingURL=google-map.js.map

/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var WindowRef = (function () {
    function WindowRef() {
    }
    WindowRef.prototype.getNativeWindow = function () { return window; };
    return WindowRef;
}());
exports.WindowRef = WindowRef;
var DocumentRef = (function () {
    function DocumentRef() {
    }
    DocumentRef.prototype.getNativeDocument = function () { return document; };
    return DocumentRef;
}());
exports.DocumentRef = DocumentRef;
exports.BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
//# sourceMappingURL=browser-globals.js.map

/***/ }),
/* 537 */
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
var forms_1 = __webpack_require__(177);
var captcha_service_1 = __webpack_require__(538);
var ReCaptchaComponent = ReCaptchaComponent_1 = (function () {
    function ReCaptchaComponent(_zone, _captchaService) {
        this._zone = _zone;
        this._captchaService = _captchaService;
        this.site_key = null;
        this.theme = 'light';
        this.type = 'image';
        this.size = 'normal';
        this.tabindex = 0;
        this.badge = 'bottomright';
        /* Available languages: https://developers.google.com/recaptcha/docs/language */
        this.language = null;
        this.captchaResponse = new core_1.EventEmitter();
        this.captchaExpired = new core_1.EventEmitter();
        this.widgetId = null;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    ReCaptchaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._captchaService.getReady(this.language)
            .subscribe(function (ready) {
            if (!ready)
                return;
            // noinspection TypeScriptUnresolvedVariable,TypeScriptUnresolvedFunction
            _this.widgetId = window.grecaptcha.render(_this.targetRef.nativeElement, {
                'sitekey': _this.site_key,
                'badge': _this.badge,
                'theme': _this.theme,
                'type': _this.type,
                'size': _this.size,
                'tabindex': _this.tabindex,
                'callback': (function (response) { return _this._zone.run(_this.recaptchaCallback.bind(_this, response)); }),
                'expired-callback': (function () { return _this._zone.run(_this.recaptchaExpiredCallback.bind(_this)); })
            });
        });
    };
    // noinspection JSUnusedGlobalSymbols
    ReCaptchaComponent.prototype.reset = function () {
        if (this.widgetId === null)
            return;
        // noinspection TypeScriptUnresolvedVariable
        window.grecaptcha.reset(this.widgetId);
        this.onChange(null);
    };
    // noinspection JSUnusedGlobalSymbols
    ReCaptchaComponent.prototype.execute = function () {
        if (this.widgetId === null)
            return;
        // noinspection TypeScriptUnresolvedVariable
        window.grecaptcha.execute(this.widgetId);
    };
    ReCaptchaComponent.prototype.getResponse = function () {
        if (this.widgetId === null)
            return null;
        // noinspection TypeScriptUnresolvedVariable
        return window.grecaptcha.getResponse(this.widgetId);
    };
    ReCaptchaComponent.prototype.writeValue = function (newValue) {
        /* ignore it */
    };
    ReCaptchaComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ReCaptchaComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ReCaptchaComponent.prototype.recaptchaCallback = function (response) {
        this.onChange(response);
        this.onTouched();
        this.captchaResponse.emit(response);
    };
    ReCaptchaComponent.prototype.recaptchaExpiredCallback = function () {
        this.onChange(null);
        this.onTouched();
        this.captchaExpired.emit();
    };
    return ReCaptchaComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ReCaptchaComponent.prototype, "site_key", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ReCaptchaComponent.prototype, "theme", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ReCaptchaComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ReCaptchaComponent.prototype, "size", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ReCaptchaComponent.prototype, "tabindex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ReCaptchaComponent.prototype, "badge", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ReCaptchaComponent.prototype, "language", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ReCaptchaComponent.prototype, "captchaResponse", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ReCaptchaComponent.prototype, "captchaExpired", void 0);
__decorate([
    core_1.ViewChild('target'),
    __metadata("design:type", core_1.ElementRef)
], ReCaptchaComponent.prototype, "targetRef", void 0);
ReCaptchaComponent = ReCaptchaComponent_1 = __decorate([
    core_1.Component({
        selector: 're-captcha',
        template: '<div #target></div>',
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return ReCaptchaComponent_1; }),
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [core_1.NgZone,
        captcha_service_1.ReCaptchaService])
], ReCaptchaComponent);
exports.ReCaptchaComponent = ReCaptchaComponent;
var ReCaptchaComponent_1;


/***/ }),
/* 538 */
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
var BehaviorSubject_1 = __webpack_require__(179);
/*
 * Common service shared by all reCaptcha component instances
 * through dependency injection.
 * This service has the task of loading the reCaptcha API once for all.
 * Only the first instance of the component creates the service, subsequent
 * components will use the existing instance.
 *
 * As the language is passed to the <script>, the first component
 * determines the language of all subsequent components. This is a limitation
 * of the present Google API.
 */
var ReCaptchaService = (function () {
    function ReCaptchaService(zone) {
        var _this = this;
        this.scriptLoaded = false;
        this.readySubject = new BehaviorSubject_1.BehaviorSubject(false);
        /* the callback needs to exist before the API is loaded */
        window["reCaptchaOnloadCallback"] = (function () { return zone.run(_this.onloadCallback.bind(_this)); });
    }
    ReCaptchaService.prototype.getReady = function (language) {
        if (!this.scriptLoaded) {
            this.scriptLoaded = true;
            var doc = document.body;
            var script = document.createElement('script');
            script.innerHTML = '';
            script.src = 'https://www.google.com/recaptcha/api.js?onload=reCaptchaOnloadCallback&render=explicit' +
                (language ? '&hl=' + language : '');
            script.async = true;
            script.defer = true;
            doc.appendChild(script);
        }
        return this.readySubject.asObservable();
    };
    ReCaptchaService.prototype.onloadCallback = function () {
        this.readySubject.next(true);
    };
    return ReCaptchaService;
}());
ReCaptchaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone])
], ReCaptchaService);
exports.ReCaptchaService = ReCaptchaService;
/* singleton pattern taken from https://github.com/angular/angular/issues/13854 */
function RECAPTCHA_SERVICE_PROVIDER_FACTORY(ngZone, parentDispatcher) {
    return parentDispatcher || new ReCaptchaService(ngZone);
}
exports.RECAPTCHA_SERVICE_PROVIDER_FACTORY = RECAPTCHA_SERVICE_PROVIDER_FACTORY;
exports.RECAPTCHA_SERVICE_PROVIDER = {
    provide: ReCaptchaService,
    deps: [core_1.NgZone, [new core_1.Optional(), new core_1.SkipSelf(), ReCaptchaService]],
    useFactory: RECAPTCHA_SERVICE_PROVIDER_FACTORY
};


/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(11);
/* tslint:enable:max-line-length */
/**
 * Applies an accumulator function over the source Observable, and returns each
 * intermediate result, with an optional seed value.
 *
 * <span class="informal">It's like {@link reduce}, but emits the current
 * accumulation whenever the source emits a value.</span>
 *
 * <img src="./img/scan.png" width="100%">
 *
 * Combines together all values emitted on the source, using an accumulator
 * function that knows how to join a new source value into the accumulation from
 * the past. Is similar to {@link reduce}, but emits the intermediate
 * accumulations.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var ones = clicks.mapTo(1);
 * var seed = 0;
 * var count = ones.scan((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link reduce}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator
 * The accumulator function called on each source value.
 * @param {T|R} [seed] The initial accumulation value.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method scan
 * @owner Observable
 */
function scan(accumulator, seed) {
    var hasSeed = false;
    // providing a seed of `undefined` *should* be valid and trigger
    // hasSeed! so don't use `seed !== undefined` checks!
    // For this reason, we have to check it here at the original call site
    // otherwise inside Operator/Subscriber we won't know if `undefined`
    // means they didn't provide anything or if they literally provided `undefined`
    if (arguments.length >= 2) {
        hasSeed = true;
    }
    return this.lift(new ScanOperator(accumulator, seed, hasSeed));
}
exports.scan = scan;
var ScanOperator = (function () {
    function ScanOperator(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) { hasSeed = false; }
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    ScanOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ScanOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ScanSubscriber = (function (_super) {
    __extends(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
        _super.call(this, destination);
        this.accumulator = accumulator;
        this._seed = _seed;
        this.hasSeed = hasSeed;
        this.index = 0;
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
        get: function () {
            return this._seed;
        },
        set: function (value) {
            this.hasSeed = true;
            this._seed = value;
        },
        enumerable: true,
        configurable: true
    });
    ScanSubscriber.prototype._next = function (value) {
        if (!this.hasSeed) {
            this.seed = value;
            this.destination.next(value);
        }
        else {
            return this._tryNext(value);
        }
    };
    ScanSubscriber.prototype._tryNext = function (value) {
        var index = this.index++;
        var result;
        try {
            result = this.accumulator(this.seed, value, index);
        }
        catch (err) {
            this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
    };
    return ScanSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=scan.js.map

/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(39);
var subscribeToResult_1 = __webpack_require__(40);
/* tslint:enable:max-line-length */
/**
 * Combines the source Observable with other Observables to create an Observable
 * whose values are calculated from the latest values of each, only when the
 * source emits.
 *
 * <span class="informal">Whenever the source Observable emits a value, it
 * computes a formula using that value plus the latest values from other input
 * Observables, then emits the output of that formula.</span>
 *
 * <img src="./img/withLatestFrom.png" width="100%">
 *
 * `withLatestFrom` combines each value from the source Observable (the
 * instance) with the latest values from the other input Observables only when
 * the source emits a value, optionally using a `project` function to determine
 * the value to be emitted on the output Observable. All input Observables must
 * emit at least one value before the output Observable will emit a value.
 *
 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var result = clicks.withLatestFrom(timer);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Function} [project] Projection function for combining values
 * together. Receives all values in order of the Observables passed, where the
 * first parameter is a value from the source Observable. (e.g.
 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
 * passed, arrays will be emitted on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method withLatestFrom
 * @owner Observable
 */
function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    var project;
    if (typeof args[args.length - 1] === 'function') {
        project = args.pop();
    }
    var observables = args;
    return this.lift(new WithLatestFromOperator(observables, project));
}
exports.withLatestFrom = withLatestFrom;
var WithLatestFromOperator = (function () {
    function WithLatestFromOperator(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    WithLatestFromOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    };
    return WithLatestFromOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WithLatestFromSubscriber = (function (_super) {
    __extends(WithLatestFromSubscriber, _super);
    function WithLatestFromSubscriber(destination, observables, project) {
        _super.call(this, destination);
        this.observables = observables;
        this.project = project;
        this.toRespond = [];
        var len = observables.length;
        this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            this.toRespond.push(i);
        }
        for (var i = 0; i < len; i++) {
            var observable = observables[i];
            this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
        }
    }
    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        var toRespond = this.toRespond;
        if (toRespond.length > 0) {
            var found = toRespond.indexOf(outerIndex);
            if (found !== -1) {
                toRespond.splice(found, 1);
            }
        }
    };
    WithLatestFromSubscriber.prototype.notifyComplete = function () {
        // noop
    };
    WithLatestFromSubscriber.prototype._next = function (value) {
        if (this.toRespond.length === 0) {
            var args = [value].concat(this.values);
            if (this.project) {
                this._tryProject(args);
            }
            else {
                this.destination.next(args);
            }
        }
    };
    WithLatestFromSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return WithLatestFromSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.textMaskCore=r():e.textMaskCore=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,d=e.placeholderChar,c=e.placeholder,v=e.indexesOfPipedChars,p=void 0===v?n:v,h=e.caretTrapIndexes,g=void 0===h?n:h;if(0===l)return 0;var m=f.length,y=t.length,b=c.length,C=s.length,P=m-y,x=P>0,O=0===y,k=P>1&&!x&&!O;if(k)return l;var j=x&&(t===s||s===c),M=0,T=void 0,w=void 0;if(j)M=l-P;else{var _=s.toLowerCase(),V=f.toLowerCase(),S=V.substr(0,l).split(o),N=S.filter(function(e){return _.indexOf(e)!==-1});w=N[N.length-1];var E=a.substr(0,N.length).split(o).filter(function(e){return e!==d}).length,A=c.substr(0,N.length).split(o).filter(function(e){return e!==d}).length,R=A!==E,I=void 0!==a[N.length-1]&&void 0!==c[N.length-2]&&a[N.length-1]!==d&&a[N.length-1]!==c[N.length-1]&&a[N.length-1]===c[N.length-2];!x&&(R||I)&&E>0&&c.indexOf(w)>-1&&void 0!==f[l]&&(T=!0,w=f[l]);for(var J=p.map(function(e){return _[e]}),q=J.filter(function(e){return e===w}).length,F=N.filter(function(e){return e===w}).length,L=c.substr(0,c.indexOf(d)).split(o).filter(function(e,r){return e===w&&f[r]!==e}).length,W=L+F+q+(T?1:0),z=0,B=0;B<C;B++){var D=_[B];if(M=B+1,D===w&&z++,z>=W)break}}if(x){for(var G=M,H=M;H<=b;H++)if(c[H]===d&&(G=H),c[H]===d||g.indexOf(H)!==-1||H===b)return G}else if(T){for(var K=M-1;K>=0;K--)if(s[K]===w||g.indexOf(K)!==-1||0===K)return K}else for(var Q=M;Q>=0;Q--)if(c[Q-1]===d||g.indexOf(Q)!==-1||0===Q)return Q}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.guide,u=void 0===n||n,l=t.previousConformedValue,s=void 0===l?a:l,f=t.placeholderChar,d=void 0===f?i.placeholderChar:f,c=t.placeholder,v=void 0===c?(0,o.convertMaskToPlaceholder)(r,d):c,p=t.currentCaretPosition,h=t.keepCharPositions,g=u===!1&&void 0!==s,m=e.length,y=s.length,b=v.length,C=r.length,P=m-y,x=P>0,O=p+(x?-P:0),k=O+Math.abs(P);if(h===!0&&!x){for(var j=a,M=O;M<k;M++)v[M]===d&&(j+=d);e=e.slice(0,O)+j+e.slice(O,m)}for(var T=e.split(a).map(function(e,r){return{char:e,isNew:r>=O&&r<k}}),w=m-1;w>=0;w--){var _=T[w].char;if(_!==d){var V=w>=O&&y===C;_===v[V?w-P:w]&&T.splice(w,1)}}var S=a,N=!1;e:for(var E=0;E<b;E++){var A=v[E];if(A===d){if(T.length>0)for(;T.length>0;){var R=T.shift(),I=R.char,J=R.isNew;if(I===d&&g!==!0){S+=d;continue e}if(r[E].test(I)){if(h===!0&&J!==!1&&s!==a&&u!==!1&&x){for(var q=T.length,F=null,L=0;L<q;L++){var W=T[L];if(W.char!==d&&W.isNew===!1)break;if(W.char===d){F=L;break}}null!==F?(S+=I,T.splice(F,1)):E--}else S+=I;continue e}N=!0}g===!1&&(S+=v.substr(E,b));break}S+=A}if(g&&x===!1){for(var z=null,B=0;B<S.length;B++)v[B]===d&&(z=B);S=null!==z?S.substr(0,z+1):a}return{conformedValue:S,meta:{someCharsRejected:N}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(4),i=t(1),a=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var r=[],t=void 0;t=e.indexOf(s),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isString=o,r.isNumber=i,r.processCaretTraps=a;var u=t(1),l=[],s="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,d=n.guide,m=n.pipe,b=n.placeholderChar,C=void 0===b?p.placeholderChar:b,P=n.keepCharPositions,x=void 0!==P&&P,O=n.showMask,k=void 0!==O&&O;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===y&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var j=void 0,M=void 0;if(s instanceof Array&&(j=(0,v.convertMaskToPlaceholder)(s,C)),s!==!1){var T=a(t),w=o.selectionEnd,_=r.previousConformedValue,V=r.previousPlaceholder,S=void 0;if(("undefined"==typeof s?"undefined":l(s))===h){if(M=s(T,{currentCaretPosition:w,previousConformedValue:_,placeholderChar:C}),M===!1)return;var N=(0,v.processCaretTraps)(M),E=N.maskWithoutCaretTraps,A=N.indexes;M=E,S=A,j=(0,v.convertMaskToPlaceholder)(M,C)}else M=s;var R={previousConformedValue:_,guide:d,placeholderChar:C,pipe:m,placeholder:j,currentCaretPosition:w,keepCharPositions:x},I=(0,c.default)(T,M,R),J=I.conformedValue,q=("undefined"==typeof m?"undefined":l(m))===h,F={};q&&(F=m(J,u({rawValue:T},R)),F===!1?F={value:_,rejected:!0}:(0,v.isString)(F)&&(F={value:F}));var L=q?F.value:J,W=(0,f.default)({previousConformedValue:_,previousPlaceholder:V,conformedValue:L,placeholder:j,rawValue:T,currentCaretPosition:w,placeholderChar:C,indexesOfPipedChars:F.indexesOfPipedChars,caretTrapIndexes:S}),z=L===j&&0===W,B=k?j:g,D=z?B:L;r.previousConformedValue=D,r.previousPlaceholder=j,o.value!==D&&(o.value=D,i(o,W))}}}}}function i(e,r){document.activeElement===e&&(b?C(function(){return e.setSelectionRange(r,r,m)},0):e.setSelectionRange(r,r,m))}function a(e){if((0,v.isString)(e))return e;if((0,v.isNumber)(e))return String(e);if(void 0===e||null===e)return g;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(2),f=n(s),d=t(3),c=n(d),v=t(4),p=t(1),h="function",g="",m="none",y="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),C="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

/***/ }),
/* 542 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compose; });
var compose = function () {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i - 0] = arguments[_i];
    }
    return function (arg) {
        if (functions.length === 0) {
            return arg;
        }
        var last = functions[functions.length - 1];
        var rest = functions.slice(0, -1);
        return rest.reduceRight(function (composed, fn) { return fn(composed); }, last(arg));
    };
};
//# sourceMappingURL=compose.js.map

/***/ }),
/* 543 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subscriber__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subscriber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subscriber__);
/* harmony export (immutable) */ __webpack_exports__["a"] = enterZone;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EnterZoneOperator; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

function enterZone(zone) {
    return this.lift(new EnterZoneOperator(zone));
}
var EnterZoneOperator = (function () {
    function EnterZoneOperator(_zone) {
        this._zone = _zone;
    }
    EnterZoneOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new EnterZoneSubscriber(subscriber, this._zone));
    };
    return EnterZoneOperator;
}());
var EnterZoneSubscriber = (function (_super) {
    __extends(EnterZoneSubscriber, _super);
    function EnterZoneSubscriber(destination, _zone) {
        _super.call(this, destination);
        this._zone = _zone;
    }
    EnterZoneSubscriber.prototype._next = function (value) {
        var _this = this;
        this._zone.run(function () { return _this.destination.next(value); });
    };
    return EnterZoneSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subscriber__["Subscriber"]));
//# sourceMappingURL=enterZone.js.map

/***/ }),
/* 544 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subscriber__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subscriber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subscriber__);
/* harmony export (immutable) */ __webpack_exports__["a"] = leaveZone;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LeaveZoneOperator; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

function leaveZone(zone) {
    return this.lift(new LeaveZoneOperator(zone));
}
var LeaveZoneOperator = (function () {
    function LeaveZoneOperator(_zone) {
        this._zone = _zone;
    }
    LeaveZoneOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new LeaveZoneSubscriber(subscriber, this._zone));
    };
    return LeaveZoneOperator;
}());
var LeaveZoneSubscriber = (function (_super) {
    __extends(LeaveZoneSubscriber, _super);
    function LeaveZoneSubscriber(destination, _zone) {
        _super.call(this, destination);
        this._zone = _zone;
    }
    LeaveZoneSubscriber.prototype._next = function (value) {
        var _this = this;
        this._zone.runOutsideAngular(function () { return _this.destination.next(value); });
    };
    return LeaveZoneSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subscriber__["Subscriber"]));
//# sourceMappingURL=leaveZone.js.map

/***/ }),
/* 545 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operator_pluck__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_operator_pluck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_distinctUntilChanged__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operator_distinctUntilChanged__);
/* harmony export (immutable) */ __webpack_exports__["a"] = select;



function select(pathOrMapFn) {
    var paths = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paths[_i - 1] = arguments[_i];
    }
    var mapped$;
    if (typeof pathOrMapFn === 'string') {
        mapped$ = __WEBPACK_IMPORTED_MODULE_0_rxjs_operator_pluck__["pluck"].call.apply(__WEBPACK_IMPORTED_MODULE_0_rxjs_operator_pluck__["pluck"], [this, pathOrMapFn].concat(paths));
    }
    else if (typeof pathOrMapFn === 'function') {
        mapped$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_map__["map"].call(this, pathOrMapFn);
    }
    else {
        throw new TypeError(("Unexpected type " + typeof pathOrMapFn + " in select operator,")
            + " expected 'string' or 'function'");
    }
    return __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_distinctUntilChanged__["distinctUntilChanged"].call(mapped$);
}
//# sourceMappingURL=select.js.map

/***/ }),
/* 546 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_instrument__ = __webpack_require__(547);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDevtoolsModule", function() { return __WEBPACK_IMPORTED_MODULE_0__src_instrument__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_devtools__ = __webpack_require__(507);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDevtools", function() { return __WEBPACK_IMPORTED_MODULE_1__src_devtools__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),
/* 547 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devtools__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__extension__ = __webpack_require__(508);
/* unused harmony export _createReduxDevtoolsExtension */
/* unused harmony export _createState */
/* unused harmony export _createReducer */
/* unused harmony export _createStateIfExtension */
/* unused harmony export _createReducerIfExtension */
/* unused harmony export noMonitor */
/* unused harmony export _createOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDevtoolsModule; });





function _createReduxDevtoolsExtension() {
    var legacyExtensionKey = 'devToolsExtension';
    var extensionKey = '__REDUX_DEVTOOLS_EXTENSION__';
    if (typeof window === 'object' && typeof window[legacyExtensionKey] !== 'undefined') {
        return window[legacyExtensionKey];
    }
    else if (typeof window === 'object' && typeof window[extensionKey] !== 'undefined') {
        return window[extensionKey];
    }
    else {
        return null;
    }
}
function _createState(devtools) {
    return devtools.state;
}
function _createReducer(dispatcher, reducer) {
    return new __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["Reducer"](dispatcher, reducer);
}
function _createStateIfExtension(extension, injector, initialState) {
    if (!!extension) {
        var devtools = injector.get(__WEBPACK_IMPORTED_MODULE_2__devtools__["a" /* StoreDevtools */]);
        return _createState(devtools);
    }
    else {
        var dispatcher = injector.get(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["Dispatcher"]);
        var reducer = injector.get(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["Reducer"]);
        return new __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["State"](initialState, dispatcher, reducer);
    }
}
function _createReducerIfExtension(extension, injector, reducer) {
    if (!!extension) {
        var devtoolsDispatcher = injector.get(__WEBPACK_IMPORTED_MODULE_2__devtools__["b" /* DevtoolsDispatcher */]);
        return _createReducer(devtoolsDispatcher, reducer);
    }
    else {
        var dispatcher = injector.get(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["Dispatcher"]);
        return new __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["Reducer"](dispatcher, reducer);
    }
}
function noMonitor() {
    return null;
}
function _createOptions(_options) {
    var DEFAULT_OPTIONS = { monitor: noMonitor };
    var options = typeof _options === 'function' ? _options() : _options;
    options = Object.assign({}, DEFAULT_OPTIONS, options);
    if (options.maxAge && options.maxAge < 2) {
        throw new Error("Devtools 'maxAge' cannot be less than 2, got " + options.maxAge);
    }
    return options;
}
var StoreDevtoolsModule = (function () {
    function StoreDevtoolsModule() {
    }
    StoreDevtoolsModule.instrumentStore = function (_options) {
        if (_options === void 0) { _options = {}; }
        return {
            ngModule: StoreDevtoolsModule,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["State"],
                    deps: [__WEBPACK_IMPORTED_MODULE_2__devtools__["a" /* StoreDevtools */]],
                    useFactory: _createState
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__config__["b" /* INITIAL_OPTIONS */],
                    useValue: _options
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["Reducer"],
                    deps: [__WEBPACK_IMPORTED_MODULE_2__devtools__["b" /* DevtoolsDispatcher */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["INITIAL_REDUCER"]],
                    useFactory: _createReducer
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__config__["a" /* STORE_DEVTOOLS_CONFIG */],
                    deps: [__WEBPACK_IMPORTED_MODULE_3__config__["b" /* INITIAL_OPTIONS */]],
                    useFactory: _createOptions
                }
            ]
        };
    };
    StoreDevtoolsModule.instrumentOnlyWithExtension = function (_options) {
        if (_options === void 0) { _options = {}; }
        return {
            ngModule: StoreDevtoolsModule,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["State"],
                    deps: [__WEBPACK_IMPORTED_MODULE_4__extension__["b" /* REDUX_DEVTOOLS_EXTENSION */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["INITIAL_STATE"]],
                    useFactory: _createStateIfExtension
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["Reducer"],
                    deps: [__WEBPACK_IMPORTED_MODULE_4__extension__["b" /* REDUX_DEVTOOLS_EXTENSION */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["INITIAL_REDUCER"]],
                    useFactory: _createReducerIfExtension
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__config__["b" /* INITIAL_OPTIONS */],
                    useValue: _options
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__config__["a" /* STORE_DEVTOOLS_CONFIG */],
                    deps: [__WEBPACK_IMPORTED_MODULE_3__config__["b" /* INITIAL_OPTIONS */]],
                    useFactory: _createOptions
                }
            ]
        };
    };
    return StoreDevtoolsModule;
}());

StoreDevtoolsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["StoreModule"]
                ],
                providers: [
                    __WEBPACK_IMPORTED_MODULE_4__extension__["a" /* DevtoolsExtension */],
                    __WEBPACK_IMPORTED_MODULE_2__devtools__["b" /* DevtoolsDispatcher */],
                    __WEBPACK_IMPORTED_MODULE_2__devtools__["a" /* StoreDevtools */],
                    {
                        provide: __WEBPACK_IMPORTED_MODULE_4__extension__["b" /* REDUX_DEVTOOLS_EXTENSION */],
                        useFactory: _createReduxDevtoolsExtension
                    }
                ]
            },] },
];
/** @nocollapse */
StoreDevtoolsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=instrument.js.map

/***/ }),
/* 548 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(490);
/* unused harmony export INIT_ACTION */
/* harmony export (immutable) */ __webpack_exports__["a"] = liftInitialState;
/* harmony export (immutable) */ __webpack_exports__["b"] = liftReducerWith;



var INIT_ACTION = { type: __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["Dispatcher"].INIT };
/**
* Computes the next entry in the log by applying an action.
*/
function computeNextEntry(reducer, action, state, error) {
    if (error) {
        return {
            state: state,
            error: 'Interrupted by an error up the chain'
        };
    }
    var nextState = state;
    var nextError;
    try {
        nextState = reducer(state, action);
    }
    catch (err) {
        nextError = err.toString();
        console.error(err.stack || err);
    }
    return {
        state: nextState,
        error: nextError
    };
}
/**
* Runs the reducer on invalidated actions to get a fresh computation log.
*/
function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds) {
    // Optimization: exit early and return the same reference
    // if we know nothing could have changed.
    if (minInvalidatedStateIndex >= computedStates.length &&
        computedStates.length === stagedActionIds.length) {
        return computedStates;
    }
    var nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
    for (var i = minInvalidatedStateIndex; i < stagedActionIds.length; i++) {
        var actionId = stagedActionIds[i];
        var action = actionsById[actionId].action;
        var previousEntry = nextComputedStates[i - 1];
        var previousState = previousEntry ? previousEntry.state : committedState;
        var previousError = previousEntry ? previousEntry.error : undefined;
        var shouldSkip = skippedActionIds.indexOf(actionId) > -1;
        var entry = shouldSkip ?
            previousEntry :
            computeNextEntry(reducer, action, previousState, previousError);
        nextComputedStates.push(entry);
    }
    return nextComputedStates;
}
function liftInitialState(initialCommittedState, monitorReducer) {
    return {
        monitorState: monitorReducer(undefined, {}),
        nextActionId: 1,
        actionsById: { 0: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* liftAction */])(INIT_ACTION) },
        stagedActionIds: [0],
        skippedActionIds: [],
        committedState: initialCommittedState,
        currentStateIndex: 0,
        computedStates: []
    };
}
/**
* Creates a history state reducer from an app's reducer.
*/
function liftReducerWith(initialCommittedState, initialLiftedState, monitorReducer, options) {
    if (options === void 0) { options = {}; }
    /**
    * Manages how the history actions modify the history state.
    */
    return function (reducer) { return function (liftedState, liftedAction) {
        var _a = liftedState || initialLiftedState, monitorState = _a.monitorState, actionsById = _a.actionsById, nextActionId = _a.nextActionId, stagedActionIds = _a.stagedActionIds, skippedActionIds = _a.skippedActionIds, committedState = _a.committedState, currentStateIndex = _a.currentStateIndex, computedStates = _a.computedStates;
        if (!liftedState) {
            // Prevent mutating initialLiftedState
            actionsById = Object.create(actionsById);
        }
        function commitExcessActions(n) {
            // Auto-commits n-number of excess actions.
            var excess = n;
            var idsToDelete = stagedActionIds.slice(1, excess + 1);
            for (var i = 0; i < idsToDelete.length; i++) {
                if (computedStates[i + 1].error) {
                    // Stop if error is found. Commit actions up to error.
                    excess = i;
                    idsToDelete = stagedActionIds.slice(1, excess + 1);
                    break;
                }
                else {
                    delete actionsById[idsToDelete[i]];
                }
            }
            skippedActionIds = skippedActionIds.filter(function (id) { return idsToDelete.indexOf(id) === -1; });
            stagedActionIds = [0].concat(stagedActionIds.slice(excess + 1));
            committedState = computedStates[excess].state;
            computedStates = computedStates.slice(excess);
            currentStateIndex = currentStateIndex > excess
                ? currentStateIndex - excess
                : 0;
        }
        // By default, agressively recompute every state whatever happens.
        // This has O(n) performance, so we'll override this to a sensible
        // value whenever we feel like we don't have to recompute the states.
        var minInvalidatedStateIndex = 0;
        switch (liftedAction.type) {
            case __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* ActionTypes */].RESET: {
                // Get back to the state the store was created with.
                actionsById = { 0: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* liftAction */])(INIT_ACTION) };
                nextActionId = 1;
                stagedActionIds = [0];
                skippedActionIds = [];
                committedState = initialCommittedState;
                currentStateIndex = 0;
                computedStates = [];
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* ActionTypes */].COMMIT: {
                // Consider the last committed state the new starting point.
                // Squash any staged actions into a single committed state.
                actionsById = { 0: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* liftAction */])(INIT_ACTION) };
                nextActionId = 1;
                stagedActionIds = [0];
                skippedActionIds = [];
                committedState = computedStates[currentStateIndex].state;
                currentStateIndex = 0;
                computedStates = [];
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* ActionTypes */].ROLLBACK: {
                // Forget about any staged actions.
                // Start again from the last committed state.
                actionsById = { 0: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* liftAction */])(INIT_ACTION) };
                nextActionId = 1;
                stagedActionIds = [0];
                skippedActionIds = [];
                currentStateIndex = 0;
                computedStates = [];
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* ActionTypes */].TOGGLE_ACTION: {
                // Toggle whether an action with given ID is skipped.
                // Being skipped means it is a no-op during the computation.
                var actionId_1 = liftedAction.id;
                var index = skippedActionIds.indexOf(actionId_1);
                if (index === -1) {
                    skippedActionIds = [actionId_1].concat(skippedActionIds);
                }
                else {
                    skippedActionIds = skippedActionIds.filter(function (id) { return id !== actionId_1; });
                }
                // Optimization: we know history before this action hasn't changed
                minInvalidatedStateIndex = stagedActionIds.indexOf(actionId_1);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* ActionTypes */].SET_ACTIONS_ACTIVE: {
                // Toggle whether an action with given ID is skipped.
                // Being skipped means it is a no-op during the computation.
                var start = liftedAction.start, end = liftedAction.end, active = liftedAction.active;
                var actionIds = [];
                for (var i = start; i < end; i++)
                    actionIds.push(i);
                if (active) {
                    skippedActionIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* difference */])(skippedActionIds, actionIds);
                }
                else {
                    skippedActionIds = skippedActionIds.concat(actionIds);
                }
                // Optimization: we know history before this action hasn't changed
                minInvalidatedStateIndex = stagedActionIds.indexOf(start);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* ActionTypes */].JUMP_TO_STATE: {
                // Without recomputing anything, move the pointer that tell us
                // which state is considered the current one. Useful for sliders.
                currentStateIndex = liftedAction.index;
                // Optimization: we know the history has not changed.
                minInvalidatedStateIndex = Infinity;
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* ActionTypes */].SWEEP: {
                // Forget any actions that are currently being skipped.
                stagedActionIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* difference */])(stagedActionIds, skippedActionIds);
                skippedActionIds = [];
                currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* ActionTypes */].PERFORM_ACTION: {
                // Auto-commit as new actions come in.
                if (options.maxAge && stagedActionIds.length === options.maxAge) {
                    commitExcessActions(1);
                }
                if (currentStateIndex === stagedActionIds.length - 1) {
                    currentStateIndex++;
                }
                var actionId = nextActionId++;
                // Mutation! This is the hottest path, and we optimize on purpose.
                // It is safe because we set a new key in a cache dictionary.
                actionsById[actionId] = liftedAction;
                stagedActionIds = stagedActionIds.concat([actionId]);
                // Optimization: we know that only the new action needs computing.
                minInvalidatedStateIndex = stagedActionIds.length - 1;
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* ActionTypes */].IMPORT_STATE: {
                // Completely replace everything.
                (_b = liftedAction.nextLiftedState, monitorState = _b.monitorState, actionsById = _b.actionsById, nextActionId = _b.nextActionId, stagedActionIds = _b.stagedActionIds, skippedActionIds = _b.skippedActionIds, committedState = _b.committedState, currentStateIndex = _b.currentStateIndex, computedStates = _b.computedStates);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["Reducer"].REPLACE:
            case __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["Dispatcher"].INIT: {
                // Always recompute states on hot reload and init.
                minInvalidatedStateIndex = 0;
                if (options.maxAge && stagedActionIds.length > options.maxAge) {
                    // States must be recomputed before committing excess.
                    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds);
                    commitExcessActions(stagedActionIds.length - options.maxAge);
                    // Avoid double computation.
                    minInvalidatedStateIndex = Infinity;
                }
                break;
            }
            default: {
                // If the action is not recognized, it's a monitor action.
                // Optimization: a monitor action can't change history.
                minInvalidatedStateIndex = Infinity;
                break;
            }
        }
        computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds);
        monitorState = monitorReducer(monitorState, liftedAction);
        return {
            monitorState: monitorState,
            actionsById: actionsById,
            nextActionId: nextActionId,
            stagedActionIds: stagedActionIds,
            skippedActionIds: skippedActionIds,
            committedState: committedState,
            currentStateIndex: currentStateIndex,
            computedStates: computedStates
        };
        var _b;
    }; };
}
//# sourceMappingURL=reducer.js.map

/***/ }),
/* 549 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducer__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dispatcher__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(513);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_REDUCER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _INITIAL_REDUCER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _INITIAL_STATE; });
/* harmony export (immutable) */ __webpack_exports__["e"] = _initialReducerFactory;
/* harmony export (immutable) */ __webpack_exports__["f"] = _initialStateFactory;
/* harmony export (immutable) */ __webpack_exports__["g"] = _storeFactory;
/* harmony export (immutable) */ __webpack_exports__["h"] = _stateFactory;
/* harmony export (immutable) */ __webpack_exports__["i"] = _reducerFactory;
/* harmony export (immutable) */ __webpack_exports__["j"] = provideStore;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return StoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var INITIAL_REDUCER = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('Token ngrx/store/reducer');
var INITIAL_STATE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('Token ngrx/store/initial-state');
var _INITIAL_REDUCER = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('Token _ngrx/store/reducer');
var _INITIAL_STATE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('Token _ngrx/store/initial-state');
function _initialReducerFactory(reducer) {
    if (typeof reducer === 'function') {
        return reducer;
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* combineReducers */])(reducer);
}
function _initialStateFactory(initialState, reducer) {
    if (!initialState) {
        return reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_2__dispatcher__["a" /* Dispatcher */].INIT });
    }
    return initialState;
}
function _storeFactory(dispatcher, reducer, state$) {
    return new __WEBPACK_IMPORTED_MODULE_3__store__["a" /* Store */](dispatcher, reducer, state$);
}
function _stateFactory(initialState, dispatcher, reducer) {
    return new __WEBPACK_IMPORTED_MODULE_4__state__["a" /* State */](initialState, dispatcher, reducer);
}
function _reducerFactory(dispatcher, reducer) {
    return new __WEBPACK_IMPORTED_MODULE_1__reducer__["a" /* Reducer */](dispatcher, reducer);
}
;
/**
 * @deprecated, use StoreModule.provideStore instead!
 */
function provideStore(_reducer, _initialState) {
    return [
        __WEBPACK_IMPORTED_MODULE_2__dispatcher__["a" /* Dispatcher */],
        { provide: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* Store */], useFactory: _storeFactory, deps: [__WEBPACK_IMPORTED_MODULE_2__dispatcher__["a" /* Dispatcher */], __WEBPACK_IMPORTED_MODULE_1__reducer__["a" /* Reducer */], __WEBPACK_IMPORTED_MODULE_4__state__["a" /* State */]] },
        { provide: __WEBPACK_IMPORTED_MODULE_1__reducer__["a" /* Reducer */], useFactory: _reducerFactory, deps: [__WEBPACK_IMPORTED_MODULE_2__dispatcher__["a" /* Dispatcher */], INITIAL_REDUCER] },
        { provide: __WEBPACK_IMPORTED_MODULE_4__state__["a" /* State */], useFactory: _stateFactory, deps: [INITIAL_STATE, __WEBPACK_IMPORTED_MODULE_2__dispatcher__["a" /* Dispatcher */], __WEBPACK_IMPORTED_MODULE_1__reducer__["a" /* Reducer */]] },
        { provide: INITIAL_REDUCER, useFactory: _initialReducerFactory, deps: [_INITIAL_REDUCER] },
        { provide: INITIAL_STATE, useFactory: _initialStateFactory, deps: [_INITIAL_STATE, INITIAL_REDUCER] },
        { provide: _INITIAL_STATE, useValue: _initialState },
        { provide: _INITIAL_REDUCER, useValue: _reducer }
    ];
}
var StoreModule = StoreModule_1 = (function () {
    function StoreModule() {
    }
    StoreModule.provideStore = function (_reducer, _initialState) {
        return {
            ngModule: StoreModule_1,
            providers: provideStore(_reducer, _initialState)
        };
    };
    return StoreModule;
}());
StoreModule = StoreModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({})
], StoreModule);

var StoreModule_1;
//# sourceMappingURL=ng2.js.map

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesOfFrance = [
    {
        "key": "marseille",
        "value": "Marseille"
    },
    {
        "key": "montpellier",
        "value": "Montpellier"
    },
    {
        "key": "lille",
        "value": "Lille"
    },
    {
        "key": "lyon",
        "value": "Lyon"
    },
    {
        "key": "strasbourg",
        "value": "Strasbourg"
    },
    {
        "key": "bordeaux",
        "value": "Bordeaux"
    },
    {
        "key": "toulouse",
        "value": "Toulouse"
    },
    {
        "key": "orleans",
        "value": "Orléans"
    },
    {
        "key": "Asnières",
        "value": "asnieres"
    },
    {
        "key": "mantes",
        "value": "Mantes-la-jolie"
    },
    {
        "key": "dijon",
        "value": "Dijon"
    },
    {
        "key": "paris",
        "value": "Paris"
    }
];
exports.CitiesOfEspagne = [
    {
        "key": "madrid",
        "value": "Madrid"
    },
    {
        "key": "barcelone",
        "value": "Barcelone"
    },
    {
        "key": "Valence",
        "value": "valence"
    },
    {
        "key": "Alméria",
        "value": "almeria"
    },
    {
        "key": "murcia",
        "value": "Murcia"
    }
];
exports.CitiesOfItalie = [
    {
        "key": "milan",
        "value": "Milan"
    },
    {
        "key": "bologne",
        "value": "Bologne"
    },
    {
        "key": "turin",
        "value": "Turin"
    },
    {
        "key": "padova",
        "value": "Padova"
    },
    {
        "key": "rome",
        "value": "Rome"
    }
];
exports.CitiesOfAllemagne = [
    {
        "key": "frankfurt",
        "value": "Frankfurt"
    },
    {
        "key": "düsseldorf",
        "value": "düsseldorf"
    },
    {
        "key": "turin",
        "value": "Turin"
    },
    {
        "key": "padova",
        "value": "Padova"
    },
    {
        "key": "rome",
        "value": "Rome"
    }
];
exports.CitiesOfRUNI = [
    {
        "key": "londres",
        "value": "Londres"
    }
];
exports.CitiesOfEmiratsArabesUni = [
    {
        "key": "abudhabi",
        "value": "Abu Dhabi"
    }
];
exports.CitiesOfCHINE = [
    {
        "key": "pekin",
        "value": "Pekin"
    }
];
exports.AgencesBES = [
    {
        key: "marseille",
        value: "Marseille",
        address: "20, Bd. Dugommier - 13 001 - Marseille",
        pays: "France",
        lat: 43.298799,
        lng: 5.381092
    },
    {
        key: "montpellier",
        value: "Montpellier",
        address: "59, Cours Gambetta 34 000 - Montpellier",
        pays: "France",
        lat: 43.608506,
        lng: 3.867618
    },
    {
        key: "lille",
        value: "Lille",
        address: "48, Bd. De la liberté - 59 800 - Lille",
        pays: "France",
        lat: 50.635232,
        lng: 3.054868
    },
    {
        key: "lyon",
        value: "Lyon",
        address: "1, Rue Carry - 69 003 - Lyon",
        pays: "France",
        lat: 45.754538,
        lng: 4.872238
    },
    {
        key: "strasbourg",
        value: "Strasbourg",
        address: "13, Av. Du Général de Gaulle 67 000 - Strasbourg",
        pays: "France",
        lat: 48.580245,
        lng: 7.770395
    },
    {
        key: "bordeaux",
        value: "Bordeaux",
        address: "35, Av. Charles de Gaulle 33 200 - Bordeaux",
        pays: "France",
        lat: 44.848828,
        lng: -0.598848
    },
    {
        key: "toulouse",
        value: "Toulouse",
        address: "64, Bis avenue Jean Rieux - 31500 Toulouse",
        pays: "France",
        lat: 43.596163,
        lng: 1.462520
    },
    {
        key: "orleans",
        value: "Orléans",
        address: "6-8 Place de l’indien 45 100 - Orléans la source",
        pays: "France",
        lat: 47.839472,
        lng: 1.934850
    },
    {
        key: "asnieres",
        value: "Asnières",
        address: "43, Rue pierre brossolette 92 600 - Asnières",
        pays: "France",
        lat: 48.912133,
        lng: 2.294978
    },
    {
        key: "mantes",
        value: "Mantes-la-jolie",
        address: "34, Bd du Maréchal Juin 78 200 - Mantes-la-jolie.",
        pays: "France",
        lat: 48.990973,
        lng: 1.708865
    },
    {
        key: "dijon",
        value: "Dijon",
        address: "64 Bis, Avenue du Drapeau 21 000 - Dijon",
        pays: "France",
        lat: 47.336907,
        lng: 5.044692
    },
    {
        key: "paris",
        value: "Paris",
        address: "64 Bis, Avenue du Drapeau 21 000 - Dijon",
        pays: "France",
        lat: 48.892572,
        lng: 2.316232
    },
    {
        key: "madrid",
        value: "Madrid",
        address: "Plaza Cataluña, n°.1 - 28002 - Madrid",
        pays: "Espagne",
        lat: 40.449243,
        lng: -3.678368
    },
    {
        key: "barcelone",
        value: "Barcelone",
        address: "Calle Tarragona , 129 08014 - Barcelona",
        pays: "Espagne",
        lat: 41.377461,
        lng: 2.146019
    },
    {
        key: "valence",
        value: "Valence",
        address: "Calle Alfonso Magnanima nº3 46003 - Valencia",
        pays: "Espagne",
        lat: 39.472799,
        lng: -0.370719
    },
    {
        key: "almeria",
        value: "Alméria",
        address: "Calle José Artes de Arcos - Alméria",
        pays: "Espagne",
        lat: 36.835878,
        lng: -2.459020
    },
    {
        key: "murcia",
        value: "Murcia",
        address: "Calle Bolos, b bajo 2 30 005 - Murcia",
        pays: "Espagne",
        lat: 37.985630,
        lng: -1.138049
    },
    {
        key: "milan",
        value: "Milan",
        address: "Viale Nazario Sauro,5 - cap 20124 Milano",
        pays: "Italie",
        lat: 45.491426,
        lng: 9.196570
    },
    {
        key: "bologne",
        value: "Bologne",
        address: "Bologne",
        pays: "Italie",
        lat: 44.494887,
        lng: 11.342616
    },
    {
        key: "turin",
        value: "Turin",
        address: "Turin",
        pays: "Italie",
        lat: 45.070312,
        lng: 7.686856
    },
    {
        key: "padova",
        value: "Padova",
        address: "Padova",
        pays: "Italie",
        lat: 45.406435,
        lng: 11.876761
    },
    {
        key: "rome",
        value: "Rome",
        address: "Rome",
        pays: "Italie",
        lat: 41.902783,
        lng: 12.496366
    }
];
//# sourceMappingURL=D:/workspace/Bes_project/src/mock-parametrage.js.map

/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=D:/workspace/Bes_project/src/app-store.js.map

/***/ }),
/* 552 */
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
var store_1 = __webpack_require__(416);
var UPDATE_BENEFICIAIRE = 'UPDATE_BENEFICIAIRE';
var initialState = {
    account: '',
    lastname: '',
    firstname: '',
    agenceBes: 'laon',
    agree: '',
    newsletterInscription: ''
};
exports.beneficiaire = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UPDATE_BENEFICIAIRE:
            return action.payload;
        default:
            return state;
    }
};
var BeneficiaireService = (function () {
    function BeneficiaireService(store) {
        this.store = store;
        this.beneficiaire$ = this.store.select('beneficiaire');
    }
    BeneficiaireService.prototype.updateBeneficiaire = function (beneficiaire) {
        this.store.dispatch({ type: UPDATE_BENEFICIAIRE, payload: beneficiaire });
    };
    return BeneficiaireService;
}());
BeneficiaireService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _a || Object])
], BeneficiaireService);
exports.BeneficiaireService = BeneficiaireService;
var _a;
//# sourceMappingURL=D:/workspace/Bes_project/src/beneficiaire.js.map

/***/ }),
/* 553 */
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
var store_1 = __webpack_require__(416);
var UPDATE_CONTACT = 'UPDATE_CONTACT';
var initialState = {
    address: '',
    countryOfBirth: 'France',
    codePostal: '',
    phone: '',
    email: '',
    cityOfBirth: 'paris'
};
exports.contact = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UPDATE_CONTACT:
            return action.payload;
        default:
            return state;
    }
};
var ContactService = (function () {
    function ContactService(store) {
        this.store = store;
        this.contact$ = this.store.select('contact');
    }
    ContactService.prototype.updateContact = function (contact) {
        this.store.dispatch({ type: UPDATE_CONTACT, payload: contact });
    };
    return ContactService;
}());
ContactService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _a || Object])
], ContactService);
exports.ContactService = ContactService;
var _a;
//# sourceMappingURL=D:/workspace/Bes_project/src/contact.js.map

/***/ }),
/* 554 */
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
var store_1 = __webpack_require__(416);
__webpack_require__(184);
var RemoteService = (function () {
    function RemoteService(store) {
        this.store = store;
    }
    RemoteService.prototype.sendDataToServer = function () {
        return this.store.take(1);
    };
    return RemoteService;
}());
RemoteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _a || Object])
], RemoteService);
exports.RemoteService = RemoteService;
var _a;
//# sourceMappingURL=D:/workspace/Bes_project/src/remote.js.map

/***/ }),
/* 555 */
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
var store_1 = __webpack_require__(416);
var UPDATE_SIGNALITIQUE = 'UPDATE_SIGNALITIQUE';
var initialState = {
    gender: '',
    birthday: '',
    birthplace: '',
    identityDocument: '',
    identityNumber: '',
    placeOfIssue: '',
    dateOfIssue: '',
    expirDate: ''
};
exports.signalitique = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UPDATE_SIGNALITIQUE:
            return action.payload;
        default:
            return state;
    }
};
var SignalitiqueService = (function () {
    function SignalitiqueService(store) {
        this.store = store;
        this.signalitique$ = this.store.select('signalitique');
    }
    SignalitiqueService.prototype.updateSignalitique = function (signalitique) {
        this.store.dispatch({ type: UPDATE_SIGNALITIQUE, payload: signalitique });
    };
    return SignalitiqueService;
}());
SignalitiqueService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof store_1.Store !== "undefined" && store_1.Store) === "function" && _a || Object])
], SignalitiqueService);
exports.SignalitiqueService = SignalitiqueService;
var _a;
//# sourceMappingURL=D:/workspace/Bes_project/src/signalitique.js.map

/***/ }),
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */
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
var FormsComponent = (function () {
    function FormsComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    FormsComponent.prototype.openDialog = function () {
    };
    return FormsComponent;
}());
FormsComponent = __decorate([
    core_1.Component({
        selector: 'app-forms',
        template: __webpack_require__(604),
        styles: [__webpack_require__(586)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ViewContainerRef !== "undefined" && core_1.ViewContainerRef) === "function" && _a || Object])
], FormsComponent);
exports.FormsComponent = FormsComponent;
var _a;
//# sourceMappingURL=D:/workspace/Bes_project/src/forms.component.js.map

/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function validateBirthday(c) {
    var know = new Date().getTime();
    var date1 = c.value.year + '-' + c.value.month + '-' + c.value.day;
    var date = new Date(date1).getTime();
    date = date + 24 * 60 * 60 * 1000 * 365 * 18;
    if (know < date) {
        return {
            validateBirthday: true
        };
    }
}
exports.validateBirthday = validateBirthday;
function validateDate(c) {
    var know = new Date().getTime();
    var date1 = c.value.year + '-' + c.value.month + '-' + c.value.day;
    var date = new Date(date1).getTime();
    if (know > date) {
        return {
            validateDate: true
        };
    }
}
exports.validateDate = validateDate;
//# sourceMappingURL=D:/workspace/Bes_project/src/date-validator.js.map

/***/ }),
/* 569 */
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
var NavbarFormStepComponent = (function () {
    function NavbarFormStepComponent() {
    }
    NavbarFormStepComponent.prototype.ngOnInit = function () {
    };
    return NavbarFormStepComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NavbarFormStepComponent.prototype, "step", void 0);
NavbarFormStepComponent = __decorate([
    core_1.Component({
        selector: 'navbar-step-form',
        template: "<ul id=\"progressbar\">\n          <li [class.active]=\"step == '1'\">Infos G\u00E9n\u00E9rales</li>\n          <li [class.active]=\"step == '2'\">Signalitique</li>\n          <li [class.active]=\"step == '3'\">Contact</li>\n          <li [class.active]=\"step == '4'\">Beneficiaire</li>\n        </ul>"
    }),
    __metadata("design:paramtypes", [])
], NavbarFormStepComponent);
exports.NavbarFormStepComponent = NavbarFormStepComponent;
//# sourceMappingURL=D:/workspace/Bes_project/src/navbar-form-step.component.js.map

/***/ }),
/* 570 */
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
var general_component_1 = __webpack_require__(526);
var signalitique_component_1 = __webpack_require__(527);
var contact_component_1 = __webpack_require__(525);
var beneficiaire_component_1 = __webpack_require__(524);
var result_component_1 = __webpack_require__(528);
var routes = [
    {
        path: '',
        data: {
            title: 'Devenir client Pages'
        },
        children: [
            {
                path: 'infos-generales',
                component: general_component_1.GeneralInfoComponent,
                data: {
                    title: 'General informations for customer'
                }
            },
            {
                path: 'signalitique',
                component: signalitique_component_1.SignalitiqueComponent,
                data: {
                    title: 'Signalitique informations for customer'
                }
            },
            {
                path: 'contact',
                component: contact_component_1.ContactComponent,
                data: {
                    title: 'contact informations for customer'
                }
            },
            {
                path: 'beneficiaire',
                component: beneficiaire_component_1.BeneficiaireComponent,
                data: {
                    title: 'beneficiaire informations for customer'
                }
            },
            {
                path: 'result',
                component: result_component_1.ResultComponent,
                data: {
                    title: 'result of customer registration'
                }
            }
        ]
    }
];
var RegisterRoutingModule = (function () {
    function RegisterRoutingModule() {
    }
    return RegisterRoutingModule;
}());
RegisterRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], RegisterRoutingModule);
exports.RegisterRoutingModule = RegisterRoutingModule;
//# sourceMappingURL=D:/workspace/Bes_project/src/register-routing.module.js.map

/***/ }),
/* 571 */
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
var rib_account_number_pipe_1 = __webpack_require__(529);
var RibNumberFormatterDirective = (function () {
    function RibNumberFormatterDirective(elementRef, cardNumberPipe) {
        this.elementRef = elementRef;
        this.cardNumberPipe = cardNumberPipe;
        this.el = this.elementRef.nativeElement;
    }
    RibNumberFormatterDirective.prototype.ngOnInit = function () {
        this.el.value = this.cardNumberPipe.transform(this.el.value, 2);
    };
    RibNumberFormatterDirective.prototype.onFocus = function (value) {
        this.el.value = this.cardNumberPipe.parse(value, 2); // opossite of transform
    };
    RibNumberFormatterDirective.prototype.onBlur = function (value) {
        this.el.value = this.cardNumberPipe.transform(value, 2);
    };
    return RibNumberFormatterDirective;
}());
__decorate([
    core_1.HostListener("focus", ["$event.target.value"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RibNumberFormatterDirective.prototype, "onFocus", null);
__decorate([
    core_1.HostListener("blur", ["$event.target.value"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RibNumberFormatterDirective.prototype, "onBlur", null);
RibNumberFormatterDirective = __decorate([
    core_1.Directive({ selector: "[RibNumberFormatter]" }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof rib_account_number_pipe_1.RibNumberPipe !== "undefined" && rib_account_number_pipe_1.RibNumberPipe) === "function" && _b || Object])
], RibNumberFormatterDirective);
exports.RibNumberFormatterDirective = RibNumberFormatterDirective;
var _a, _b;
//# sourceMappingURL=D:/workspace/Bes_project/src/rib-card-number.directive.js.map

/***/ }),
/* 572 */
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
var forms_1 = __webpack_require__(177);
var RibInputComponent = (function () {
    function RibInputComponent() {
        // originalName: string;
        // selectedItem: Item;
        // @Output() saved = new EventEmitter();
        // @Output() cancelled = new EventEmitter();
        // @Input() set item(value: Item) {
        //   if (value) this.originalName = value.name;
        //   this.selectedItem = Object.assign({}, value);
        // }
        this.mask = [/[1-9]/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/];
    }
    return RibInputComponent;
}());
__decorate([
    core_1.Input('label'),
    __metadata("design:type", Object)
], RibInputComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('group'),
    __metadata("design:type", typeof (_a = typeof forms_1.FormGroup !== "undefined" && forms_1.FormGroup) === "function" && _a || Object)
], RibInputComponent.prototype, "form", void 0);
RibInputComponent = __decorate([
    core_1.Component({
        selector: 'rib-input',
        template: __webpack_require__(608),
        providers: []
    }),
    __metadata("design:paramtypes", [])
], RibInputComponent);
exports.RibInputComponent = RibInputComponent;
var _a;
//# sourceMappingURL=D:/workspace/Bes_project/src/rib-input.component.js.map

/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var google_map_kml_layer_1 = __webpack_require__(531);
var google_map_1 = __webpack_require__(535);
var google_map_circle_1 = __webpack_require__(530);
var google_map_info_window_1 = __webpack_require__(492);
var google_map_marker_1 = __webpack_require__(532);
var google_map_polygon_1 = __webpack_require__(533);
var google_map_polyline_1 = __webpack_require__(534);
var google_map_polyline_point_1 = __webpack_require__(493);
var lazy_maps_api_loader_1 = __webpack_require__(499);
var lazy_maps_api_loader_2 = __webpack_require__(499);
var maps_api_loader_1 = __webpack_require__(486);
var browser_globals_1 = __webpack_require__(536);
/**
 * @internal
 */
function coreDirectives() {
    return [
        google_map_1.SebmGoogleMap, google_map_marker_1.SebmGoogleMapMarker, google_map_info_window_1.SebmGoogleMapInfoWindow, google_map_circle_1.SebmGoogleMapCircle,
        google_map_polygon_1.SebmGoogleMapPolygon, google_map_polyline_1.SebmGoogleMapPolyline, google_map_polyline_point_1.SebmGoogleMapPolylinePoint, google_map_kml_layer_1.SebmGoogleMapKmlLayer
    ];
}
exports.coreDirectives = coreDirectives;
;
/**
 * The angular2-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
var AgmCoreModule = (function () {
    function AgmCoreModule() {
    }
    /**
     * Please use this method when you register the module at the root level.
     */
    AgmCoreModule.forRoot = function (lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmCoreModule,
            providers: browser_globals_1.BROWSER_GLOBALS_PROVIDERS.concat([
                { provide: maps_api_loader_1.MapsAPILoader, useClass: lazy_maps_api_loader_1.LazyMapsAPILoader },
                { provide: lazy_maps_api_loader_2.LAZY_MAPS_API_CONFIG, useValue: lazyMapsAPILoaderConfig }
            ]),
        };
    };
    AgmCoreModule.decorators = [
        { type: core_1.NgModule, args: [{ declarations: coreDirectives(), exports: coreDirectives() },] },
    ];
    /** @nocollapse */
    AgmCoreModule.ctorParameters = function () { return []; };
    return AgmCoreModule;
}());
exports.AgmCoreModule = AgmCoreModule;
//# sourceMappingURL=core-module.js.map

/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var google_map_1 = __webpack_require__(535);
exports.SebmGoogleMap = google_map_1.SebmGoogleMap;
var google_map_circle_1 = __webpack_require__(530);
exports.SebmGoogleMapCircle = google_map_circle_1.SebmGoogleMapCircle;
var google_map_info_window_1 = __webpack_require__(492);
exports.SebmGoogleMapInfoWindow = google_map_info_window_1.SebmGoogleMapInfoWindow;
var google_map_kml_layer_1 = __webpack_require__(531);
exports.SebmGoogleMapKmlLayer = google_map_kml_layer_1.SebmGoogleMapKmlLayer;
var google_map_marker_1 = __webpack_require__(532);
exports.SebmGoogleMapMarker = google_map_marker_1.SebmGoogleMapMarker;
var google_map_polygon_1 = __webpack_require__(533);
exports.SebmGoogleMapPolygon = google_map_polygon_1.SebmGoogleMapPolygon;
var google_map_polyline_1 = __webpack_require__(534);
exports.SebmGoogleMapPolyline = google_map_polyline_1.SebmGoogleMapPolyline;
var google_map_polyline_point_1 = __webpack_require__(493);
exports.SebmGoogleMapPolylinePoint = google_map_polyline_point_1.SebmGoogleMapPolylinePoint;
//# sourceMappingURL=directives.js.map

/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// main modules
__export(__webpack_require__(574));
__export(__webpack_require__(576));
// Google Maps types
// core module
// we explicitly export the module here to prevent this Ionic 2 bug:
// http://stevemichelotti.com/integrate-angular-2-google-maps-into-ionic-2/
var core_module_1 = __webpack_require__(573);
exports.AgmCoreModule = core_module_1.AgmCoreModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var google_maps_api_wrapper_1 = __webpack_require__(419);
exports.GoogleMapsAPIWrapper = google_maps_api_wrapper_1.GoogleMapsAPIWrapper;
var circle_manager_1 = __webpack_require__(494);
exports.CircleManager = circle_manager_1.CircleManager;
var info_window_manager_1 = __webpack_require__(495);
exports.InfoWindowManager = info_window_manager_1.InfoWindowManager;
var marker_manager_1 = __webpack_require__(485);
exports.MarkerManager = marker_manager_1.MarkerManager;
var polygon_manager_1 = __webpack_require__(497);
exports.PolygonManager = polygon_manager_1.PolygonManager;
var polyline_manager_1 = __webpack_require__(498);
exports.PolylineManager = polyline_manager_1.PolylineManager;
var kml_layer_manager_1 = __webpack_require__(496);
exports.KmlLayerManager = kml_layer_manager_1.KmlLayerManager;
var lazy_maps_api_loader_1 = __webpack_require__(499);
exports.GoogleMapsScriptProtocol = lazy_maps_api_loader_1.GoogleMapsScriptProtocol;
exports.LAZY_MAPS_API_CONFIG = lazy_maps_api_loader_1.LAZY_MAPS_API_CONFIG;
exports.LazyMapsAPILoader = lazy_maps_api_loader_1.LazyMapsAPILoader;
var maps_api_loader_1 = __webpack_require__(486);
exports.MapsAPILoader = maps_api_loader_1.MapsAPILoader;
var noop_maps_api_loader_1 = __webpack_require__(577);
exports.NoOpMapsAPILoader = noop_maps_api_loader_1.NoOpMapsAPILoader;
//# sourceMappingURL=services.js.map

/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
var NoOpMapsAPILoader = (function () {
    function NoOpMapsAPILoader() {
    }
    NoOpMapsAPILoader.prototype.load = function () {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    };
    ;
    return NoOpMapsAPILoader;
}());
exports.NoOpMapsAPILoader = NoOpMapsAPILoader;
//# sourceMappingURL=noop-maps-api-loader.js.map

/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var captcha_component_1 = __webpack_require__(537);
var captcha_service_1 = __webpack_require__(538);
var ReCaptchaModule = (function () {
    function ReCaptchaModule() {
    }
    return ReCaptchaModule;
}());
ReCaptchaModule = __decorate([
    core_1.NgModule({
        declarations: [captcha_component_1.ReCaptchaComponent],
        exports: [captcha_component_1.ReCaptchaComponent],
        providers: [captcha_service_1.RECAPTCHA_SERVICE_PROVIDER]
    })
], ReCaptchaModule);
exports.ReCaptchaModule = ReCaptchaModule;
__export(__webpack_require__(537));


/***/ }),
/* 579 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(177);
var textMaskCore_1 = __webpack_require__(541);
exports.MASKEDINPUT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MaskedInputDirective; }),
    multi: true
};
var MaskedInputDirective = (function () {
    function MaskedInputDirective(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.textMaskConfig = {
            mask: [],
            guide: true,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
        };
        this._onTouched = function () { };
        this._onChange = function (_) { };
    }
    MaskedInputDirective.prototype.ngOnChanges = function (changes) {
        this.setupMask();
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(this.inputElement.value);
        }
    };
    MaskedInputDirective.prototype.writeValue = function (value) {
        if (!this.inputElement) {
            this.setupMask();
        }
        // set the initial value for cases where the mask is disabled
        var normalizedValue = value == null ? '' : value;
        this.renderer.setElementProperty(this.inputElement, 'value', normalizedValue);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
        }
    };
    MaskedInputDirective.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    MaskedInputDirective.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    MaskedInputDirective.prototype.setDisabledState = function (isDisabled) {
        this.renderer.setElementProperty(this.element.nativeElement, 'disabled', isDisabled);
    };
    MaskedInputDirective.prototype.onInput = function (value) {
        if (!this.inputElement) {
            this.setupMask();
        }
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
            // get the updated value
            value = this.inputElement.value;
            // check against the last value to prevent firing ngModelChange despite no changes
            if (this.lastValue !== value) {
                this.lastValue = value;
                this._onChange(value);
            }
        }
    };
    MaskedInputDirective.prototype.setupMask = function () {
        if (this.element.nativeElement.tagName === 'INPUT') {
            // `textMask` directive is used directly on an input element
            this.inputElement = this.element.nativeElement;
        }
        else {
            // `textMask` directive is used on an abstracted input element, `ion-input`, `md-input`, etc
            this.inputElement = this.element.nativeElement.getElementsByTagName('INPUT')[0];
        }
        if (this.inputElement) {
            this.textMaskInputElement = textMaskCore_1.createTextMaskInputElement(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
        }
    };
    return MaskedInputDirective;
}());
__decorate([
    core_1.Input('textMask'),
    __metadata("design:type", Object)
], MaskedInputDirective.prototype, "textMaskConfig", void 0);
MaskedInputDirective = __decorate([
    core_1.Directive({
        host: {
            '(input)': 'onInput($event.target.value)',
            '(blur)': '_onTouched()'
        },
        selector: '[textMask]',
        providers: [exports.MASKEDINPUT_VALUE_ACCESSOR]
    }),
    __param(0, core_1.Inject(core_1.Renderer)), __param(1, core_1.Inject(core_1.ElementRef)),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], MaskedInputDirective);
exports.MaskedInputDirective = MaskedInputDirective;
var TextMaskModule = (function () {
    function TextMaskModule() {
    }
    return TextMaskModule;
}());
TextMaskModule = __decorate([
    core_1.NgModule({
        declarations: [MaskedInputDirective],
        exports: [MaskedInputDirective]
    })
], TextMaskModule);
exports.TextMaskModule = TextMaskModule;
var textMaskCore_2 = __webpack_require__(541);
exports.conformToMask = textMaskCore_2.conformToMask;
//# sourceMappingURL=angular2TextMask.js.map

/***/ }),
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(178)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(178)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(178)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 587 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(178)();
// imports


// module
exports.push([module.i, "md-card-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\nmd-input {\n  width: 100%;\n}\nmd-card-actions {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.error {\n  font-size: 13px;\n  color: #c7254e;\n  background: #f9f2f4;\n  border-radius: 3px;\n  padding: 15px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.form-group {\n  width: 100%;\n}\n\n.space {\n  margin-bottom: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(178)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row app-bes align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6 pt-5 pb-5\">\n        <div class=\"card-block card-bes card-bes-white\">\n          <h4 style=\"margin-bottom: 2rem !important;\">{{'REGISTER.TITLE' | translate}}</h4>\n          <navbar-step-form [step]=\"step\"></navbar-step-form>\n          <form novalidate [formGroup]=\"form\" (submit)=\"next()\">\n            <rib-input [group]=\"form\" [label]=\"label\"></rib-input>\n            <div>\n              <label class=\"custom-control custom-radio\"  id=\"Sradio\">\n                <input formControlName=\"agree\" (change)=\"hideBeneficiare()\" type=\"checkbox\"  class=\"custom-control-input\">\n                  <span class=\"custom-control-indicator\"></span>\n                    <span class=\"custom-control-description\">Je suis le client bénéficiaire</span>\n                      </label>\n            </div>\n\n            <div class=\"beneficiare\">\n              <div class=\"form-group row\">\n                <label class=\"col-md-4 form-control-label\" for=\"text-input\">Nom du bénéficiare <span class=\"required\">*</span></label>\n                <div class=\"col-md-8\">\n                  <input type=\"text\" id=\"disabledTextInput\" formControlName=\"lastname\" class=\"form-control form-bes\" placeholder=\"\">\n                  <div *ngIf=\"form.get('lastname').touched && form.get('lastname').hasError('required')\" class=\"alert alert-danger\">Nom de bénéficiaire requis</div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-4 form-control-label\" for=\"text-input\">Prénom du bénéficiare <span class=\"required\">*</span></label>\n                <div class=\"col-md-8\">\n                  <input type=\"text\" id=\"disabledTextInput\" formControlName=\"firstname\" class=\"form-control form-bes\" placeholder=\"\">\n                  <div *ngIf=\"form.get('firstname').touched && form.get('firstname').hasError('required')\" class=\"alert alert-danger\">Prénom de bénéficiaire requis</div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-4 form-control-label\" for=\"text-input\">Agence BES <span class=\"required\">*</span></label>\n              <div class=\"col-md-8\">\n                <select id=\"inputState\" formControlName=\"agenceBes\" class=\"form-control form-bes\">\n                    <optgroup  *ngFor=\"let agence of agences\" label=\"{{agence.pays}}\">\n                      <option [value]=\"agence.key\">{{agence.address}}</option>\n                    </optgroup>  \n              </select>\n                <div *ngIf=\"form.get('agenceBes').touched && form.get('agenceBes').hasError('required')\" class=\"alert alert-danger\">Agence BES requise</div>\n              </div>\n            </div>\n\n            <sebm-google-map [zoom]=\"15\" [latitude]=\"lat\" [longitude]=\"lng\" [hidden]=\"hidden\">\n              <sebm-google-map-marker *ngFor=\"let m of markers; let i = index\" (markerClick)=\"clickedMarker(m.label, m.title)\" [latitude]=\"m.lat\"\n                [longitude]=\"m.lng\" [label]=\"m.label\" [iconUrl]=\"m.icon\">\n              </sebm-google-map-marker>\n            </sebm-google-map>\n\n\n            <div class=\"form-group row mt-3\">\n              <label class=\"col-md-4 form-control-label\" for=\"text-input\">Télécharger pièce d'identité <span class=\"required\">*</span></label>\n              <div class=\"col-md-8\">\n                <input type=\"file\" name=\"file\" id=\"file\" class=\"inputfile\" />\n                <label class=\"p-3\" for=\"file\">Télécharger votre pièce d'identité</label>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <label class=\"custom-control custom-radio\"  id=\"Sradio\">\n                  <input formControlName=\"newsletterInscription\" value=\"1\"  type=\"checkbox\" value=\"1\"  class=\"custom-control-input\">\n                  <span class=\"custom-control-indicator\"></span>\n                    <span class=\"custom-control-description\"> J'accepte de recevoir des newletters et des offres de produits et services par courrier électronique\n                      de BMCE EuroServices et ses partenaires</span>\n                      </label>\n              </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-12\">\n            <label class=\"custom-control custom-radio\"  id=\"Sradio\">\n              <input formControlName=\"agree\" value=\"1\" type=\"checkbox\"  class=\"custom-control-input\">\n                <span class=\"custom-control-indicator\"></span>\n                  <span class=\"custom-control-description\">\n                    J'ai lu et j'accepte les mentions légales</span>\n                    </label>\n          </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <button type=\"button\" class=\"btn btn-primary btn-bmce\" (click)=\"back()\">Précédent</button>\n        </div>\n        <div class=\"col-6 text-right\">\n          <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-success btn-bmce\">Valider</button>\n        </div>\n      </div>\n      </form>\n    </div>\n  </div>\n</div>\n</div>\n</div>"

/***/ }),
/* 603 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row app-bes align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6 pt-5 pb-5\">\n        <div class=\"card-block card-bes card-height card-bes-white\">\n          <h4 style=\"margin-bottom: 2rem !important;\">Devenir Client</h4>\n          <navbar-step-form [step]=\"step\"></navbar-step-form>\n          <form novalidate [formGroup]=\"form\" (submit)=\"next()\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-4 form-control-label\" for=\"text-input\">Adresse <span class=\"required\">*</span></label>\n              <div class=\"col-md-8\">\n                <input class=\"form-control form-bes\" type=\"text\" formControlName=\"address\" id=\"example-text-input\">\n                <div *ngIf=\"form.get('address').touched && form.get('address').hasError('required')\" class=\"alert alert-danger\">Adresse requise</div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-4 form-control-label\" for=\"text-input\">Code postal <span class=\"required\">*</span></label>\n              <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control form-bes\" id=\"inputZip\" formControlName=\"codePostal\">\n                <div *ngIf=\"form.get('codePostal').touched && form.get('codePostal').hasError('required')\" class=\"alert alert-danger\">Code postale requis</div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"inputState\" class=\"col-md-4 form-control-label\">Pays<span class=\"required\">*</span></label>\n              <div class=\"col-md-8\">\n                <select id=\"inputState\" formControlName=\"countryOfBirth\" class=\"form-control form-bes\">Choose\n                   <option value=\"France\" selected=\"selected\">France </option>\n                      <option value=\"Afghanistan\">Afghanistan </option>\n                      <option value=\"Afrique_Centrale\">Afrique_Centrale </option>\n                      <option value=\"Afrique_du_sud\">Afrique_du_Sud </option> \n                      <option value=\"Albanie\">Albanie </option>\n                      <option value=\"Algerie\">Algerie </option>\n                      <option value=\"Allemagne\">Allemagne </option>\n                      <option value=\"Andorre\">Andorre </option>\n                      <option value=\"Angola\">Angola </option>\n                      <option value=\"Anguilla\">Anguilla </option>\n                      <option value=\"Arabie_Saoudite\">Arabie_Saoudite </option>\n                      <option value=\"Argentine\">Argentine </option>\n                      <option value=\"Armenie\">Armenie </option> \n                      <option value=\"Australie\">Australie </option>\n                      <option value=\"Autriche\">Autriche </option>\n                      <option value=\"Azerbaidjan\">Azerbaidjan </option>\n                      <option value=\"Bahamas\">Bahamas </option>\n                      <option value=\"Bangladesh\">Bangladesh </option>\n                      <option value=\"Barbade\">Barbade </option>\n                      <option value=\"Bahrein\">Bahrein </option>\n                      <option value=\"Belgique\">Belgique </option>\n                      <option value=\"Belize\">Belize </option>\n                      <option value=\"Benin\">Benin </option>\n                      <option value=\"Bermudes\">Bermudes </option>\n                      <option value=\"Bielorussie\">Bielorussie </option>\n                      <option value=\"Bolivie\">Bolivie </option>\n                      <option value=\"Botswana\">Botswana </option>\n                      <option value=\"Bhoutan\">Bhoutan </option>\n                      <option value=\"Boznie_Herzegovine\">Boznie_Herzegovine </option>\n                      <option value=\"Bresil\">Bresil </option>\n                      <option value=\"Brunei\">Brunei </option>\n                      <option value=\"Bulgarie\">Bulgarie </option>\n                      <option value=\"Burkina_Faso\">Burkina_Faso </option>\n                      <option value=\"Burundi\">Burundi </option>\n                      <option value=\"Caiman\">Caiman </option>\n                      <option value=\"Cambodge\">Cambodge </option>\n                      <option value=\"Cameroun\">Cameroun </option>\n                      <option value=\"Canada\">Canada </option>\n                      <option value=\"Canaries\">Canaries </option>\n                      <option value=\"Cap_vert\">Cap_Vert </option>\n                      <option value=\"Chili\">Chili </option>\n                      <option value=\"Chine\">Chine </option> \n                      <option value=\"Chypre\">Chypre </option> \n                      <option value=\"Colombie\">Colombie </option>\n                      <option value=\"Comores\">Colombie </option>\n                      <option value=\"Congo\">Congo </option>\n                      <option value=\"Congo_democratique\">Congo_democratique </option>\n                      <option value=\"Cook\">Cook </option>\n                      <option value=\"Coree_du_Nord\">Coree_du_Nord </option>\n                      <option value=\"Coree_du_Sud\">Coree_du_Sud </option>\n                      <option value=\"Costa_Rica\">Costa_Rica </option>\n                      <option value=\"Cote_d_Ivoire\">Côte_d_Ivoire </option>\n                      <option value=\"Croatie\">Croatie </option>\n                      <option value=\"Cuba\">Cuba </option>\n                      <option value=\"Danemark\">Danemark </option>\n                      <option value=\"Djibouti\">Djibouti </option>\n                      <option value=\"Dominique\">Dominique </option>\n                      <option value=\"Egypte\">Egypte </option> \n                      <option value=\"Emirats_Arabes_Unis\">Emirats_Arabes_Unis </option>\n                      <option value=\"Equateur\">Equateur </option>\n                      <option value=\"Erythree\">Erythree </option>\n                      <option value=\"Espagne\">Espagne </option>\n                      <option value=\"Estonie\">Estonie </option>\n                      <option value=\"Etats_Unis\">Etats_Unis </option>\n                      <option value=\"Ethiopie\">Ethiopie </option>\n                      <option value=\"Falkland\">Falkland </option>\n                      <option value=\"Feroe\">Feroe </option>\n                      <option value=\"Fidji\">Fidji </option>\n                      <option value=\"Finlande\">Finlande </option>\n                      <option value=\"France\">France </option>\n                      <option value=\"Gabon\">Gabon </option>\n                      <option value=\"Gambie\">Gambie </option>\n                      <option value=\"Georgie\">Georgie </option>\n                      <option value=\"Ghana\">Ghana </option>\n                      <option value=\"Gibraltar\">Gibraltar </option>\n                      <option value=\"Grece\">Grece </option>\n                      <option value=\"Grenade\">Grenade </option>\n                      <option value=\"Groenland\">Groenland </option>\n                      <option value=\"Guadeloupe\">Guadeloupe </option>\n                      <option value=\"Guam\">Guam </option>\n                      <option value=\"Guatemala\">Guatemala</option>\n                      <option value=\"Guernesey\">Guernesey </option>\n                      <option value=\"Guinee\">Guinee </option>\n                      <option value=\"Guinee_Bissau\">Guinee_Bissau </option>\n                      <option value=\"Guinee equatoriale\">Guinee_Equatoriale </option>\n                      <option value=\"Guyana\">Guyana </option>\n                      <option value=\"Guyane_Francaise \">Guyane_Francaise </option>\n                      <option value=\"Haiti\">Haiti </option>\n                      <option value=\"Hawaii\">Hawaii </option> \n                      <option value=\"Honduras\">Honduras </option>\n                      <option value=\"Hong_Kong\">Hong_Kong </option>\n                      <option value=\"Hongrie\">Hongrie </option>\n                      <option value=\"Inde\">Inde </option>\n                      <option value=\"Indonesie\">Indonesie </option>\n                      <option value=\"Iran\">Iran </option>\n                      <option value=\"Iraq\">Iraq </option>\n                      <option value=\"Irlande\">Irlande </option>\n                      <option value=\"Islande\">Islande </option>\n                      <option value=\"Israel\">Israel </option>\n                      <option value=\"Italie\">italie </option>\n                      <option value=\"Jamaique\">Jamaique </option>\n                      <option value=\"Jan Mayen\">Jan Mayen </option>\n                      <option value=\"Japon\">Japon </option>\n                      <option value=\"Jersey\">Jersey </option>\n                      <option value=\"Jordanie\">Jordanie </option>\n                      <option value=\"Kazakhstan\">Kazakhstan </option>\n                      <option value=\"Kenya\">Kenya </option>\n                      <option value=\"Kirghizstan\">Kirghizistan </option>\n                      <option value=\"Kiribati\">Kiribati </option>\n                      <option value=\"Koweit\">Koweit </option>\n                      <option value=\"Laos\">Laos </option>\n                      <option value=\"Lesotho\">Lesotho </option>\n                      <option value=\"Lettonie\">Lettonie </option>\n                      <option value=\"Liban\">Liban </option>\n                      <option value=\"Liberia\">Liberia </option>\n                      <option value=\"Liechtenstein\">Liechtenstein </option>\n                      <option value=\"Lituanie\">Lituanie </option> \n                      <option value=\"Luxembourg\">Luxembourg </option>\n                      <option value=\"Lybie\">Lybie </option>\n                      <option value=\"Macao\">Macao </option>\n                      <option value=\"Macedoine\">Macedoine </option>\n                      <option value=\"Madagascar\">Madagascar </option>\n                      <option value=\"Madère\">Madère </option>\n                      <option value=\"Malaisie\">Malaisie </option>\n                      <option value=\"Malawi\">Malawi </option>\n                      <option value=\"Maldives\">Maldives </option>\n                      <option value=\"Mali\">Mali </option>\n                      <option value=\"Malte\">Malte </option>\n                      <option value=\"Man\">Man </option>\n                      <option value=\"Mariannes du Nord\">Mariannes du Nord </option>\n                      <option value=\"Maroc\">Maroc </option>\n                      <option value=\"Marshall\">Marshall </option>\n                      <option value=\"Martinique\">Martinique </option>\n                      <option value=\"Maurice\">Maurice </option>\n                      <option value=\"Mauritanie\">Mauritanie </option>\n                      <option value=\"Mayotte\">Mayotte </option>\n                      <option value=\"Mexique\">Mexique </option>\n                      <option value=\"Micronesie\">Micronesie </option>\n                      <option value=\"Midway\">Midway </option>\n                      <option value=\"Moldavie\">Moldavie </option>\n                      <option value=\"Monaco\">Monaco </option>\n                      <option value=\"Mongolie\">Mongolie </option>\n                      <option value=\"Montserrat\">Montserrat </option>\n                      <option value=\"Mozambique\">Mozambique </option>\n                      <option value=\"Namibie\">Namibie </option>\n                      <option value=\"Nauru\">Nauru </option>\n                      <option value=\"Nepal\">Nepal </option>\n                      <option value=\"Nicaragua\">Nicaragua </option>\n                      <option value=\"Niger\">Niger </option>\n                      <option value=\"Nigeria\">Nigeria </option>\n                      <option value=\"Niue\">Niue </option>\n                      <option value=\"Norfolk\">Norfolk </option>\n                      <option value=\"Norvege\">Norvege </option>\n                      <option value=\"Nouvelle_Caledonie\">Nouvelle_Caledonie </option>\n                      <option value=\"Nouvelle_Zelande\">Nouvelle_Zelande </option>\n                      <option value=\"Oman\">Oman </option>\n                      <option value=\"Ouganda\">Ouganda </option>\n                      <option value=\"Ouzbekistan\">Ouzbekistan </option>\n                      <option value=\"Pakistan\">Pakistan </option>\n                      <option value=\"Palau\">Palau </option>\n                      <option value=\"Palestine\">Palestine </option>\n                      <option value=\"Panama\">Panama </option>\n                      <option value=\"Papouasie_Nouvelle_Guinee\">Papouasie_Nouvelle_Guinee </option>\n                      <option value=\"Paraguay\">Paraguay </option>\n                      <option value=\"Pays_Bas\">Pays_Bas </option>\n                      <option value=\"Perou\">Perou </option>\n                      <option value=\"Philippines\">Philippines </option> \n                      <option value=\"Pologne\">Pologne </option>\n                      <option value=\"Polynesie\">Polynesie </option>\n                      <option value=\"Porto_Rico\">Porto_Rico </option>\n                      <option value=\"Portugal\">Portugal </option>\n                      <option value=\"Qatar\">Qatar </option>\n                      <option value=\"Republique_Dominicaine\">Republique_Dominicaine </option>\n                      <option value=\"Republique_Tcheque\">Republique_Tcheque </option>\n                      <option value=\"Reunion\">Reunion </option>\n                      <option value=\"Roumanie\">Roumanie </option>\n                      <option value=\"Royaume_Uni\">Royaume_Uni </option>\n                      <option value=\"Russie\">Russie </option>\n                      <option value=\"Rwanda\">Rwanda </option>\n                      <option value=\"Sahara Occidental\">Sahara Occidental </option>\n                      <option value=\"Sainte_Lucie\">Sainte_Lucie </option>\n                      <option value=\"Saint_Marin\">Saint_Marin </option>\n                      <option value=\"Salomon\">Salomon </option>\n                      <option value=\"Salvador\">Salvador </option>\n                      <option value=\"Samoa_Occidentales\">Samoa_Occidentales</option>\n                      <option value=\"Samoa_Americaine\">Samoa_Americaine </option>\n                      <option value=\"Sao_Tome_et_Principe\">Sao_Tome_et_Principe </option> \n                      <option value=\"Senegal\">Senegal </option> \n                      <option value=\"Seychelles\">Seychelles </option>\n                      <option value=\"Sierra Leone\">Sierra Leone </option>\n                      <option value=\"Singapour\">Singapour </option>\n                      <option value=\"Slovaquie\">Slovaquie </option>\n                      <option value=\"Slovenie\">Slovenie</option>\n                      <option value=\"Somalie\">Somalie </option>\n                      <option value=\"Soudan\">Soudan </option> \n                      <option value=\"Sri_Lanka\">Sri_Lanka </option> \n                      <option value=\"Suede\">Suede </option>\n                      <option value=\"Suisse\">Suisse </option>\n                      <option value=\"Surinam\">Surinam </option>\n                      <option value=\"Swaziland\">Swaziland </option>\n                      <option value=\"Syrie\">Syrie </option>\n                      <option value=\"Tadjikistan\">Tadjikistan </option>\n                      <option value=\"Taiwan\">Taiwan </option>\n                      <option value=\"Tonga\">Tonga </option>\n                      <option value=\"Tanzanie\">Tanzanie </option>\n                      <option value=\"Tchad\">Tchad </option>\n                      <option value=\"Thailande\">Thailande </option>\n                      <option value=\"Tibet\">Tibet </option>\n                      <option value=\"Timor_Oriental\">Timor_Oriental </option>\n                      <option value=\"Togo\">Togo </option> \n                      <option value=\"Trinite_et_Tobago\">Trinite_et_Tobago </option>\n                      <option value=\"Tristan da cunha\">Tristan de cuncha </option>\n                      <option value=\"Tunisie\">Tunisie </option>\n                      <option value=\"Turkmenistan\">Turmenistan </option> \n                      <option value=\"Turquie\">Turquie </option>\n                      <option value=\"Ukraine\">Ukraine </option>\n                      <option value=\"Uruguay\">Uruguay </option>\n                      <option value=\"Vanuatu\">Vanuatu </option>\n                      <option value=\"Vatican\">Vatican </option>\n                      <option value=\"Venezuela\">Venezuela </option>\n                      <option value=\"Vierges_Americaines\">Vierges_Americaines </option>\n                      <option value=\"Vierges_Britanniques\">Vierges_Britanniques </option>\n                      <option value=\"Vietnam\">Vietnam </option>\n                      <option value=\"Wake\">Wake </option>\n                      <option value=\"Wallis et Futuma\">Wallis et Futuma </option>\n                      <option value=\"Yemen\">Yemen </option>\n                      <option value=\"Yougoslavie\">Yougoslavie </option>\n                      <option value=\"Zambie\">Zambie </option>\n                      <option value=\"Zimbabwe\">Zimbabwe </option>\n                  </select>\n                <div *ngIf=\"form.get('countryOfBirth').touched && form.get('countryOfBirth').hasError('required')\" class=\"alert alert-danger\">Pays requis</div>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label for=\"inputState\" class=\"col-md-4 form-control-label\">Ville<span class=\"required\">*</span></label>\n              <div class=\"col-md-8\">\n                <input class=\"form-control form-bes\" type=\"text\" formControlName=\"cityOfBirth\">\n                <div *ngIf=\"form.get('cityOfBirth').touched && form.get('cityOfBirth').hasError('required')\" class=\"alert alert-danger\">Ville requise</div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-4 form-control-label\" for=\"text-input\">Téléphone <span class=\"required\">*</span></label>\n              <div class=\"col-md-8\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-btn input-group-addon-bes\">\n                    <li class=\"nav-item dropdown\" dropdown>\n                      <a href class=\"btn  dropdown-toggle\" style=\"background: transparent !important;border: none;\" dropdownToggle (click)=\"false\">\n                        <span class=\"\"><span class=\"flag-icon flag-icon-fr\"></span><span class=\"languages\">(+33)</span></span>\n                      </a>\n                      <div class=\"dropdown-menu dropdown-menu-left\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n                        <a class=\"dropdown-item\" href=\"#/address\"><span class=\"flag-icon flag-icon-us\"></span><span  class=\"languages\">(+44)</span></a>\n                        <a class=\"dropdown-item\" href=\"#//address\"><span class=\"flag-icon flag-icon-es\"></span><span  class=\"languages\">(+34)</span></a>\n                        <a class=\"dropdown-item\" href=\"#/address\"><span class=\"flag-icon flag-icon-be\"></span><span  class=\"languages\">(+32)</span></a>\n                      </div>\n                    </li>\n                  </div>\n                  <input class=\"form-control form-bes\" id=\"input1-group3\" formControlName=\"phone\" name=\"input1-group3\" placeholder=\"Numéro\"\n                    type=\"text\">\n                </div>\n                <div *ngIf=\"form.get('phone').touched && form.get('phone').hasError('required')\" class=\"alert alert-danger\">Numéro de Téléphone requis</div>\n                <div *ngIf=\"form.get('phone').touched && form.get('phone').hasError('pattern')\" class=\"alert alert-danger\">\n                  Téléphone non valide\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-4 form-control-label\" for=\"text-input\">Email <span class=\"required\">*</span></label>\n              <div class=\"col-md-8\">\n                <input class=\"form-control form-bes\" type=\"text\" formControlName=\"email\" value=\"{{(store | async)?.customer.email}}\" id=\"example-date-input\">\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <button type=\"button\" class=\"btn btn-primary btn-bmce\" (click)=\"back()\">Précédent</button>\n              </div>\n              <div class=\"col-6 text-right\">\n                <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary btn-bmce\">Suivant</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),
/* 604 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),
/* 605 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row app-bes align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6  pt-5 pb-5\">\n        <div class=\"card-block card-bes card-height  card-bes-white\">\n          <div class=\"card-header card-header-bes\">\n            \n            <h4 style=\"margin-bottom: 2rem !important;\">Devenir Client</h4>\n            <!--<navbar-step-form [step]=\"step\"></navbar-step-form>-->\n          </div>\n\n          <form novalidate [formGroup]=\"form\" (submit)=\"next()\">\n            <div class=\"form-group row mb-0 pl-4\">\n              <div class=\"col-sm-6 pl-0 pr-1\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon input-group-addon-bes\"><i class=\"icon-user\"></i></span>\n                  <input type=\"text\" formControlName=\"lastName\" class=\"form-control form-bes\" placeholder=\"Nom\">\n                </div>\n                <div class=\"alert-container mb-2 mt-2\">\n                  <div *ngIf=\"form.get('lastName').touched && form.get('lastName').hasError('required')\" class=\"alert alert-danger\"><span>nom requis</span></div>\n                </div>\n\n              </div>\n              <div class=\"col-sm-6 pl-0 pr-1\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon  input-group-addon-bes\"><i class=\"icon-user\"></i></span>\n                  <input type=\"text\" formControlName=\"firstName\" class=\"form-control form-bes\" placeholder=\"Prénom\">\n                </div>\n                <div class=\"alert-container mb-2 mt-2\">\n                  <div *ngIf=\"form.get('firstName').touched && form.get('firstName').hasError('required')\" class=\"alert alert-danger\">Prénom requis</div>\n                </div>\n\n              </div>\n            </div>\n            <div class=\"form-group row mb-0 pl-4 pr-1\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon  input-group-addon-bes\"><font color=\"#C0C0C0\">@</font></span>\n                <input type=\"email\" formControlName=\"email\" class=\"form-control form-bes\" placeholder=\"Email\">\n              </div>\n\n            </div>\n            <div class=\"alert-container col-sm-6 mb-2 mt-2\">\n              <div *ngIf=\"form.get('email').touched && form.get('email').hasError('required')\" class=\"alert alert-danger\">\n                Adresse e-mail requis\n              </div>\n              <div *ngIf=\"form.get('email').touched && form.get('email').hasError('pattern')\" class=\"alert alert-danger\">\n                Adresse e-mail non valide\n              </div>\n            </div>\n            <div class=\"form-group row pl-4 pr-1\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon  input-group-addon-bes\"><font color=\"#C0C0C0\">@</font></span>\n                <input type=\"text\" formControlName=\"confirmEmail\" class=\"form-control form-bes\" placeholder=\"Confirmer votre Email\">\n              </div>\n\n            </div>\n            <div class=\"alert-container col-sm-6 mb-2 mt-2\">\n              <div *ngIf=\"form.get('confirmEmail').touched && form.get('confirmEmail').hasError('required')\" class=\"alert alert-danger\">\n                Adresse e-mail de confirmation requis\n              </div>\n              <div *ngIf=\"form.get('confirmEmail').touched && form.get('confirmEmail').hasError('pattern')\" class=\"alert  alert-danger\">\n                Adresse e-mail de confirmation non valide\n              </div>\n            </div>\n\n            <div class=\"form-group row pl-4 pr-1\">\n              <label>Veuillez prouvez que vous n'êtes pas un robot</label>\n              <re-captcha site_key=\"6LcO0SEUAAAAAGyFwB2n6oqSzUD91uapRI7FPNcm\"></re-captcha>\n            </div>\n\n\n            <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n\n\n\n            <div class=\"form-group row pl-4\">\n              <div class=\"col-6\">\n              </div>\n              <div class=\"col-6 text-right pr-0\">\n                <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary btn-bmce\">Suivant</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 606 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row app-bes align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6 pt-5 pb-5\">\n        <div class=\"card-block card-bes card-height card-bes-white\">\n          <h4 style=\"margin-bottom: 2rem !important;\">Devenir Client</h4>\n          <navbar-step-form [step]=\"step\"></navbar-step-form>\n          <form novalidate [formGroup]=\"form\" (submit)=\"next()\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-6\">\n                <div class=\"input-group mb-3\">\n                  <span class=\"input-group-addon input-group-addon-bes\"><i class=\"icon-user\"></i></span>\n                  <input type=\"text\" value=\"{{(store | async)?.customer.lastName}}\" class=\"form-control form-bes\" placeholder=\"Nom\">\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"input-group mb-3\">\n                  <span class=\"input-group-addon input-group-addon-bes\"><i class=\"icon-user\"></i></span>\n                  <input type=\"text\" value=\"{{(store | async)?.customer.firstName}}\" class=\"form-control form-bes\" placeholder=\"Prénom\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-form-legend col-sm-4\">Sexe <span class=\"required\">*</span></label>\n                <div class=\"col-md-8\">\n                  <label class=\"custom-control custom-radio\"  id=\"Sradio\">\n                    <input name=\"gender\" formControlName=\"gender\"  type=\"radio\" value=\"Femme\"  class=\"custom-control-input\">\n                      <span class=\"custom-control-indicator\"></span>\n                        <span class=\"custom-control-description\">Femme</span>\n                          </label>\n                          <label class=\"custom-control custom-radio\">\n                            <input  formControlName=\"gender\"  value=\"Homme\" type=\"radio\"  class=\"custom-control-input\">\n                              <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">Homme</span>\n                                  </label>\n                </div>\n                <div *ngIf=\"form.get('gender').touched && form.get('gender').hasError('required')\" class=\"alert alert-danger\">Sexe requis</div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-4 form-control-label\" for=\"password-input\">Date de naissance <span class=\"required\">*</span></label>\n          <div class=\"col-md-8\">\n            <div class=\"input-group  ab-datepicker\">\n              <input class=\"form-control form-bes\" placeholder=\"yyyy-mm-dd\" formControlName=\"birthday\" ngbDatepicker #birthdayD=\"ngbDatepicker\">\n              <span class=\"input-group-addon input-group-addon-bes\" (click)=\"birthdayD.toggle()\"><i class=\"fa fa-calendar\"></i></span>\n            </div>\n\n            <div *ngIf=\"form.get('birthday').touched && form.get('birthday').hasError('required')\" class=\"alert alert-danger\">Date de naissance requise</div>\n            <div *ngIf=\"form.get('birthday').touched && form.get('birthday').hasError('validateBirthday')\" class=\"alert alert-danger\">18 ans, c'est l'âge minimum requis</div>\n\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-4 form-control-label\" for=\"text-input\">Lieu de naissance <span class=\"required\">*</span></label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control form-bes\" formControlName=\"birthplace\" type=\"text\" value=\"\" id=\"example-date-input\">\n            <div *ngIf=\"form.get('birthplace').touched && form.get('birthplace').hasError('required')\" class=\"alert alert-danger\">Lieu de naissance requis</div>\n          </div>\n\n        </div>\n        <div class=\"row\">\n          <label class=\"col-form-legend col-sm-4\">Pièce d'identité <span class=\"required\">*</span></label>\n            <div class=\"col-md-8\">\n              <label class=\"custom-control custom-radio\"  id=\"Sradio\">\n                <input  formControlName=\"identityDocument\"  value=\"Carte nationale\" type=\"radio\"  class=\"custom-control-input\">\n                  <span class=\"custom-control-indicator\"></span>\n                    <span class=\"custom-control-description\">Carte nationale</span>\n                      </label>\n                      <label class=\"custom-control custom-radio\">\n                        <input  formControlName=\"identityDocument\" value=\"Passeport\" type=\"radio\"  class=\"custom-control-input\">\n                          <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description\">Passeport</span>\n                              </label>\n            </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-md-4 form-control-label\" for=\"text-input\">N° de pièce d'identité <span class=\"required\">*</span></label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control form-bes\" formControlName=\"identityNumber\" type=\"text\" value=\"\" id=\"example-date-input\">\n          <div *ngIf=\"form.get('identityNumber').touched && form.get('identityNumber').hasError('required')\" class=\"alert alert-danger\">Numéro de pièce d'identité requis</div>\n        </div>\n\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-md-4 form-control-label\" for=\"password-input\">Date de Délivrance <span class=\"required\">*</span></label>\n        <div class=\"col-md-8\">\n          <div class=\"input-group  ab-datepicker\">\n            <input class=\"form-control form-bes\" placeholder=\"yyyy-mm-dd\" formControlName=\"dateOfIssue\" placeholder=\"yyyy-mm-dd\" ngbDatepicker\n              #dateOfIssueD=\"ngbDatepicker\">\n            <span class=\"input-group-addon input-group-addon-bes\" (click)=\"dateOfIssueD.toggle()\"><i class=\"fa fa-calendar\"></i></span>\n          </div>\n          <div *ngIf=\"form.get('dateOfIssue').touched && form.get('dateOfIssue').hasError('required')\" class=\"alert alert-danger\">Date de Délivrance requise</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-md-4 form-control-label\" for=\"text-input\">Lieu de délivrance <span class=\"required\">*</span></label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control form-bes\" type=\"text\" formControlName=\"placeOfIssue\" id=\"example-date-input\">\n          <div *ngIf=\"form.get('placeOfIssue').touched && form.get('placeOfIssue').hasError('required')\" class=\"alert alert-danger\">Lieu de délivrance requis</div>\n        </div>\n\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-md-4 form-control-label\" for=\"password-input\">Date d'expiration <span class=\"required\">*</span></label>\n        <div class=\"col-md-8\">\n          <div class=\"input-group  ab-datepicker\">\n            <input class=\"form-control form-bes\" placeholder=\"yyyy-mm-dd\" formControlName=\"expirDate\" placeholder=\"yyyy-mm-dd\" ngbDatepicker\n              #expirDateD=\"ngbDatepicker\">\n            <span class=\"input-group-addon input-group-addon-bes\" (click)=\"expirDateD.toggle()\"><i class=\"fa fa-calendar\"></i></span>\n          </div>\n          <div *ngIf=\"form.get('expirDate').touched && form.get('expirDate').hasError('required')\" class=\"alert alert-danger\">Date d'expiration requis</div>\n          <div *ngIf=\"form.get('expirDate').touched && form.get('expirDate').hasError('validateDate')\" class=\"alert alert-danger\">Date d'expiration non valide</div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <button type=\"button\" class=\"btn btn-primary btn-bmce\" (click)=\"back()\">Précédent</button>\n        </div>\n        <div class=\"col-6 text-right\">\n          <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary btn-bmce\">Suivant</button>\n        </div>\n      </div>\n      </form>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n\n"

/***/ }),
/* 607 */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row app-bes align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card-block text-center card-bes card-bes-green\">\r\n          <h4 class=\"mb-3\">Opération réussie </h4>\r\n            <div class=\"form-group row card card-inverse card-success mb-3 text-center\"   name=\"success\">\r\n              <p> Un message de bienvenue contenant votre mot de passe de connexion vous a été envoyé sur votre boîte email\r\n                {{email}}.</p>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n          <button type=\"button\" style=\"background: #c1c1c1;\" class=\"btn btn-primary btn-bmce\" (click)=\"backToHome()\">Ok</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),
/* 608 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row\" [formGroup]=\"form\">\r\n    <label class=\"col-md-4 form-control-label\" for=\"text-input\">{{label}} <span class=\"required\">*</span></label>\r\n    <div class=\"col-md-8\">\r\n        <div class=\"input-group mb-3\">\r\n            <span class=\"input-group-addon  input-group-addon-bes\">011</span>\r\n            <input maxlength=\"21\" #account RibNumberFormatter type=\"text\" limit-input=\"21\" class=\"form-control form-bes\" formControlName=\"account\"\r\n                placeholder=\"000 000 000 000 000 000 000\">\r\n            <span *ngIf=\"form.get('account').dirty\" class=\"twitter-count mt-3 m-1\">{{account.value.length + 3}}/24</span>\r\n        </div>\r\n        <div *ngIf=\"form.get('account').touched && form.get('account').hasError('required')\" class=\"alert alert-danger\">Numéro RIB requis</div>\r\n        <div *ngIf=\"form.get('account').touched && form.get('account').hasError('pattern')\" class=\"alert alert-danger\">\r\n            Numero de compte non valide\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),
/* 609 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(41);
var queue_1 = __webpack_require__(504);
var Subscription_1 = __webpack_require__(49);
var observeOn_1 = __webpack_require__(180);
var ObjectUnsubscribedError_1 = __webpack_require__(106);
var SubjectSubscription_1 = __webpack_require__(183);
/**
 * @class ReplaySubject<T>
 */
var ReplaySubject = (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        _super.call(this);
        this.scheduler = scheduler;
        this._events = [];
        this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = windowTime < 1 ? 1 : windowTime;
    }
    ReplaySubject.prototype.next = function (value) {
        var now = this._getNow();
        this._events.push(new ReplayEvent(now, value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _events = this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var subscription;
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscription = Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscription = Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
        }
        var len = _events.length;
        for (var i = 0; i < len && !subscriber.closed; i++) {
            subscriber.next(_events[i].value);
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        // Trim events that fall out of the time window.
        // Start at the front of the list. Break early once
        // we encounter an event that falls within the window.
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject_1.Subject));
exports.ReplaySubject = ReplaySubject;
var ReplayEvent = (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map

/***/ }),
/* 610 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),
/* 611 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(3);
var catch_1 = __webpack_require__(185);
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ }),
/* 612 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var EmptyObservable_1 = __webpack_require__(50);
exports.empty = EmptyObservable_1.EmptyObservable.create;
//# sourceMappingURL=empty.js.map

/***/ }),
/* 613 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(11);
var tryCatch_1 = __webpack_require__(181);
var errorObject_1 = __webpack_require__(100);
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
}
exports.distinctUntilChanged = distinctUntilChanged;
var DistinctUntilChangedOperator = (function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctUntilChangedSubscriber = (function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.hasKey = false;
        if (typeof compare === 'function') {
            this.compare = compare;
        }
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var keySelector = this.keySelector;
        var key = value;
        if (keySelector) {
            key = tryCatch_1.tryCatch(this.keySelector)(value);
            if (key === errorObject_1.errorObject) {
                return this.destination.error(errorObject_1.errorObject.e);
            }
        }
        var result = false;
        if (this.hasKey) {
            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
            if (result === errorObject_1.errorObject) {
                return this.destination.error(errorObject_1.errorObject.e);
            }
        }
        else {
            this.hasKey = true;
        }
        if (Boolean(result) === false) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),
/* 614 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var map_1 = __webpack_require__(64);
/**
 * Maps each source value (an object) to its specified nested property.
 *
 * <span class="informal">Like {@link map}, but meant only for picking one of
 * the nested properties of every emitted object.</span>
 *
 * <img src="./img/pluck.png" width="100%">
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source
 * Observable. If a property can't be resolved, it will return `undefined` for
 * that value.
 *
 * @example <caption>Map every every click to the tagName of the clicked target element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var tagNames = clicks.pluck('target', 'tagName');
 * tagNames.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {...string} properties The nested properties to pluck from each source
 * value (an object).
 * @return {Observable} A new Observable of property values from the source values.
 * @method pluck
 * @owner Observable
 */
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i - 0] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return map_1.map.call(this, plucker(properties, length));
}
exports.pluck = pluck;
function plucker(props, length) {
    var mapper = function (x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
            var p = currentProp[props[i]];
            if (typeof p !== 'undefined') {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    };
    return mapper;
}
//# sourceMappingURL=pluck.js.map

/***/ }),
/* 615 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(11);
/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable.
 *
 * <img src="./img/skip.png" width="100%">
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
function skip(count) {
    return this.lift(new SkipOperator(count));
}
exports.skip = skip;
var SkipOperator = (function () {
    function SkipOperator(total) {
        this.total = total;
    }
    SkipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipSubscriber(subscriber, this.total));
    };
    return SkipOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipSubscriber = (function (_super) {
    __extends(SkipSubscriber, _super);
    function SkipSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    SkipSubscriber.prototype._next = function (x) {
        if (++this.count > this.total) {
            this.destination.next(x);
        }
    };
    return SkipSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=skip.js.map

/***/ }),
/* 616 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(39);
var subscribeToResult_1 = __webpack_require__(40);
/**
 * Emits the values emitted by the source Observable until a `notifier`
 * Observable emits a value.
 *
 * <span class="informal">Lets values pass until a second Observable,
 * `notifier`, emits something. Then, it completes.</span>
 *
 * <img src="./img/takeUntil.png" width="100%">
 *
 * `takeUntil` subscribes and begins mirroring the source Observable. It also
 * monitors a second Observable, `notifier` that you provide. If the `notifier`
 * emits a value or a complete notification, the output Observable stops
 * mirroring the source Observable and completes.
 *
 * @example <caption>Tick every second until the first click happens</caption>
 * var interval = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = interval.takeUntil(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @param {Observable} notifier The Observable whose first emitted value will
 * cause the output Observable of `takeUntil` to stop emitting values from the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable until such time as `notifier` emits its first value.
 * @method takeUntil
 * @owner Observable
 */
function takeUntil(notifier) {
    return this.lift(new TakeUntilOperator(notifier));
}
exports.takeUntil = takeUntil;
var TakeUntilOperator = (function () {
    function TakeUntilOperator(notifier) {
        this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeUntilSubscriber(subscriber, this.notifier));
    };
    return TakeUntilOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeUntilSubscriber = (function (_super) {
    __extends(TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination, notifier) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function () {
        // noop
    };
    return TakeUntilSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=takeUntil.js.map

/***/ }),
/* 617 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(49);
/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),
/* 618 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(27);
var Action_1 = __webpack_require__(617);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // clear the interval id
        return root_1.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.delay = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),
/* 619 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scheduler_1 = __webpack_require__(610);
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),
/* 620 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__(618);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Otherwise flush the scheduler starting with this action.
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
exports.QueueAction = QueueAction;
//# sourceMappingURL=QueueAction.js.map

/***/ }),
/* 621 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__(619);
var QueueScheduler = (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        _super.apply(this, arguments);
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.QueueScheduler = QueueScheduler;
//# sourceMappingURL=QueueScheduler.js.map

/***/ })
]));
//# sourceMappingURL=0.chunk.js.map