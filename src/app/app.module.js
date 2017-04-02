"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var aboutme_component_1 = require("./aboutme/aboutme.component");
var register_component_1 = require("./register/register.component");
var gallery_component_1 = require("./gallery/gallery.component");
var auth_service_1 = require("./guard/auth.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'register', component: register_component_1.RegisterComponent },
                { path: 'aboutme', component: aboutme_component_1.AboutmeComponent, canActivate: [auth_service_1.AuthService] },
                { path: 'gallery', component: gallery_component_1.GalleryComponent, canActivate: [auth_service_1.AuthService] },
            ])],
        declarations: [app_component_1.AppComponent,
            login_component_1.LoginComponent,
            aboutme_component_1.AboutmeComponent,
            register_component_1.RegisterComponent,
            gallery_component_1.GalleryComponent,],
        providers: [auth_service_1.AuthService],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map