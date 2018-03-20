webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AggiungiPrestitoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_oggettoPrestato__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servizio_oggetti_prestati_servizio_oggetti_prestati__ = __webpack_require__(46);
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
 * Generated class for the AggiungiPrestitoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AggiungiPrestitoPage = /** @class */ (function () {
    function AggiungiPrestitoPage(navCtrl, navParams, servizioOggettiPrestati) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servizioOggettiPrestati = servizioOggettiPrestati;
        this.oggetto = new __WEBPACK_IMPORTED_MODULE_2__models_oggettoPrestato__["a" /* OggettoPrestato */]();
    }
    AggiungiPrestitoPage.prototype.ionViewDidLoad = function () {
    };
    AggiungiPrestitoPage.prototype.salvaNuovoPrestito = function () {
        this.servizioOggettiPrestati.aggiungiPrestito(this.oggetto);
        this.navCtrl.pop();
    };
    AggiungiPrestitoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aggiungi-prestito',template:/*ion-inline-start:"/Users/useracd10/Desktop/Academy/Settimana 6/Day 2/TestFinaleIonic/appiero/src/pages/aggiungi-prestito/aggiungi-prestito.html"*/'\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Aggiungi</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n      <ion-list>\n          <ion-list-header>Aggiungi oggetto</ion-list-header>\n        <ion-item>\n          <ion-label floating>Cosa?</ion-label>\n          <ion-input type="text" [(ngModel)]="oggetto.nome"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>A chi?</ion-label>\n          <ion-input type="text" [(ngModel)]="oggetto.aChi"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Quando?</ion-label>\n          <ion-datetime displayFormat="D/M/YYYY"></ion-datetime>\n        </ion-item>\n    \n        <ion-item class="togglePrestato">\n          <ion-label>Prestato</ion-label>\n          <ion-toggle [(ngModel)]="oggetto.ritornato"></ion-toggle>\n        </ion-item>\n      </ion-list>\n    \n      <div class="containerImmagine">\n        <ion-icon name="ios-add-circle" large></ion-icon>\n      </div>\n    \n      <div>\n        <button ion-button full (click)="salvaNuovoPrestito()">Salva</button>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/useracd10/Desktop/Academy/Settimana 6/Day 2/TestFinaleIonic/appiero/src/pages/aggiungi-prestito/aggiungi-prestito.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_servizio_oggetti_prestati_servizio_oggetti_prestati__["a" /* ServizioOggettiPrestatiProvider */]])
    ], AggiungiPrestitoPage);
    return AggiungiPrestitoPage;
}());

//# sourceMappingURL=aggiungi-prestito.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettaglioPrestitoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servizio_oggetti_prestati_servizio_oggetti_prestati__ = __webpack_require__(46);
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
 * Generated class for the DettaglioPrestitoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DettaglioPrestitoPage = /** @class */ (function () {
    function DettaglioPrestitoPage(navCtrl, navParams, servizioOggettiPrestati) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servizioOggettiPrestati = servizioOggettiPrestati;
        this.oggettoCondiviso = this.navParams.get('prestito');
        this.oggettoLocale = Object.assign({}, this.oggettoCondiviso); // Mi serve per fare una copia in locale del contenuto dell'oggetto che mi arriva dalla lista
    }
    DettaglioPrestitoPage.prototype.ionViewDidLoad = function () {
    };
    DettaglioPrestitoPage.prototype.salvaModifiche = function () {
        this.servizioOggettiPrestati.modificaPrestito(this.oggettoLocale.id, this.oggettoLocale);
        // Torno indietro alla home
        this.navCtrl.pop();
    };
    DettaglioPrestitoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dettaglio-prestito',template:/*ion-inline-start:"/Users/useracd10/Desktop/Academy/Settimana 6/Day 2/TestFinaleIonic/appiero/src/pages/dettaglio-prestito/dettaglio-prestito.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Modifica</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <ion-list-header>Modifica oggetto</ion-list-header>\n    <ion-item>\n      <ion-label floating>Cosa?</ion-label>\n      <ion-input type="text" [(ngModel)]="oggettoLocale.nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>A chi?</ion-label>\n      <ion-input type="text" [(ngModel)]="oggettoLocale.aChi"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Quando?</ion-label>\n      <ion-datetime displayFormat="D/M/YYYY" [(ngModel)]="oggettoLocale.quando"></ion-datetime>\n    </ion-item>\n\n    <ion-item class="togglePrestato">\n      <ion-label>Prestato</ion-label>\n      <ion-toggle [(ngModel)]="oggettoLocale.ritornato"></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n  <div class="containerImmagine">\n    <img src="{{oggettoLocale.fotografia}}">\n  </div>\n\n  <div>\n    <button ion-button full (click)="salvaModifiche()">Salva</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/useracd10/Desktop/Academy/Settimana 6/Day 2/TestFinaleIonic/appiero/src/pages/dettaglio-prestito/dettaglio-prestito.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_servizio_oggetti_prestati_servizio_oggetti_prestati__["a" /* ServizioOggettiPrestatiProvider */]])
    ], DettaglioPrestitoPage);
    return DettaglioPrestitoPage;
}());

//# sourceMappingURL=dettaglio-prestito.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aggiungi-prestito/aggiungi-prestito.module": [
		279,
		1
	],
	"../pages/dettaglio-prestito/dettaglio-prestito.module": [
		280,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servizio_oggetti_prestati_servizio_oggetti_prestati__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dettaglio_prestito_dettaglio_prestito__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aggiungi_prestito_aggiungi_prestito__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, serviceObjectOnLoan) {
        this.navCtrl = navCtrl;
        this.serviceObjectOnLoan = serviceObjectOnLoan;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.serviceObjectOnLoan.getOggettiPrestati().subscribe(function (oggetti) { return _this.listaOggettiPrestati = oggetti; });
    };
    HomePage.prototype.vaiDettaglioPrestito = function (oggetto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dettaglio_prestito_dettaglio_prestito__["a" /* DettaglioPrestitoPage */], {
            prestito: oggetto
        });
    };
    HomePage.prototype.cambiaStatoRestituzione = function (oggetto) {
        oggetto.ritornato = !oggetto.ritornato;
    };
    HomePage.prototype.eliminaItem = function (oggetto) {
        alert(oggetto.id);
        this.serviceObjectOnLoan.deleteOggettoPrestato(oggetto.id);
    };
    HomePage.prototype.aggiungiPrestito = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__aggiungi_prestito_aggiungi_prestito__["a" /* AggiungiPrestitoPage */], {});
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/useracd10/Desktop/Academy/Settimana 6/Day 2/TestFinaleIonic/appiero/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n\n    <ion-icon name="ios-add-circle-outline" (click)="aggiungiPrestito()"></ion-icon>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Oggetti Prestati</ion-list-header>\n    <ion-item *ngFor="let itemOggetto of listaOggettiPrestati">\n\n      <div class="informazioniItem" (click)="vaiDettaglioPrestito(itemOggetto)">\n        <ion-avatar item-start>\n          <img src="{{itemOggetto.fotografia}}">\n        </ion-avatar>\n\n        <div class="divTesto">\n          <div class="divTitolo">{{itemOggetto.nome}}</div>\n          <div class="divSottotitolo">prestato a {{itemOggetto.aChi}}, in data {{itemOggetto.quando | date: \'EEEE, dd/MM/yyyy\'}}</div>\n        </div>\n      </div>\n      <!-- C\'è anche item-sliding se c\'è tempo che puoi provare a fare -->\n      <div item-end class="containerBottoni">\n        <button ion-button color="danger" *ngIf="!itemOggetto.ritornato" (click)="cambiaStatoRestituzione(itemOggetto)">\n          <ion-icon name="ios-remove"></ion-icon>\n        </button>\n        <button ion-button color="secondary" *ngIf="itemOggetto.ritornato" (click)="cambiaStatoRestituzione(itemOggetto)">\n          <ion-icon name="ios-add"></ion-icon>\n        </button>\n        <ion-icon name="ios-close-circle" color="dark" (click)="eliminaItem(itemOggetto)"></ion-icon>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/useracd10/Desktop/Academy/Settimana 6/Day 2/TestFinaleIonic/appiero/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_servizio_oggetti_prestati_servizio_oggetti_prestati__["a" /* ServizioOggettiPrestatiProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_servizio_oggetti_prestati_servizio_oggetti_prestati__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dettaglio_prestito_dettaglio_prestito__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_aggiungi_prestito_aggiungi_prestito__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dettaglio_prestito_dettaglio_prestito__["a" /* DettaglioPrestitoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_aggiungi_prestito_aggiungi_prestito__["a" /* AggiungiPrestitoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aggiungi-prestito/aggiungi-prestito.module#AggiungiPrestitoPageModule', name: 'AggiungiPrestitoPage', segment: 'aggiungi-prestito', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dettaglio-prestito/dettaglio-prestito.module#DettaglioPrestitoPageModule', name: 'DettaglioPrestitoPage', segment: 'dettaglio-prestito', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dettaglio_prestito_dettaglio_prestito__["a" /* DettaglioPrestitoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_aggiungi_prestito_aggiungi_prestito__["a" /* AggiungiPrestitoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_servizio_oggetti_prestati_servizio_oggetti_prestati__["a" /* ServizioOggettiPrestatiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OggettoPrestato; });
var OggettoPrestato = /** @class */ (function () {
    function OggettoPrestato() {
    }
    return OggettoPrestato;
}());

//# sourceMappingURL=oggettoPrestato.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/useracd10/Desktop/Academy/Settimana 6/Day 2/TestFinaleIonic/appiero/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/useracd10/Desktop/Academy/Settimana 6/Day 2/TestFinaleIonic/appiero/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServizioOggettiPrestatiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Questo servizio si occuperà di andare a fornire gli oggetti prestati ai richiedenti,
  nonché anche inserire nuovi oggettiPrestati / modifiche.
*/
var ServizioOggettiPrestatiProvider = /** @class */ (function () {
    function ServizioOggettiPrestatiProvider(http) {
        this.http = http;
        this.oggettiPrestati = [];
        this.nomiOggetti = ["Album", "Telefono", "Computer"];
        this.nomiPersone = ["Marco", "Giovanni", "Paolo"];
        this.quandoPrestito = ["2018-03-19", "2017-02-21", "2017-04-15"];
        this.fotografie = ["../../assets/imgs/album.png", "../../assets/imgs/telefono.jpeg", "../../assets/imgs/computer.jpg"];
        this.statoPrestito = [true, false, false];
        for (var i = 0; i < 3; i++) {
            this.oggettiPrestati.push({
                id: i,
                nome: this.nomiOggetti[i],
                aChi: this.nomiPersone[i],
                quando: this.quandoPrestito[i],
                fotografia: this.fotografie[i],
                ritornato: this.statoPrestito[i]
            });
        }
    }
    ServizioOggettiPrestatiProvider.prototype.getOggettiPrestati = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(this.oggettiPrestati);
    };
    ServizioOggettiPrestatiProvider.prototype.deleteOggettoPrestato = function (idOggetto) {
        var i = 0;
        while ((this.oggettiPrestati[i].id !== idOggetto) && (i < this.oggettiPrestati.length)) {
            i++;
        }
        if (i <= this.oggettiPrestati.length) {
            this.oggettiPrestati.splice(i, 1);
        }
    };
    ServizioOggettiPrestatiProvider.prototype.aggiungiPrestito = function (oggetto) {
        this.oggettiPrestati.push(oggetto);
    };
    ServizioOggettiPrestatiProvider.prototype.modificaPrestito = function (idOggetto, modificheOggetto) {
        var i = 0;
        while ((this.oggettiPrestati[i].id !== idOggetto) && (i < this.oggettiPrestati.length)) {
            i++;
        }
        this.oggettiPrestati[i].id = modificheOggetto.id;
        this.oggettiPrestati[i].nome = modificheOggetto.nome;
        this.oggettiPrestati[i].quando = modificheOggetto.quando;
        this.oggettiPrestati[i].aChi = modificheOggetto.aChi;
        this.oggettiPrestati[i].fotografia = modificheOggetto.fotografia;
        this.oggettiPrestati[i].ritornato = modificheOggetto.ritornato;
    };
    ServizioOggettiPrestatiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServizioOggettiPrestatiProvider);
    return ServizioOggettiPrestatiProvider;
}());

//# sourceMappingURL=servizio-oggetti-prestati.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map