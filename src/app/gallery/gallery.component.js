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
var core_1 = require("@angular/core");
var GalleryComponent = (function () {
    function GalleryComponent(element) {
        this.element = element;
        this.name = 'Angular';
        this.imageArray = [];
    }
    GalleryComponent.prototype.changeListner = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]); //reads file content & when it's done reading file, .onloadend is triggered.
        reader.onloadend = function (e) {
            _this.imageArray.push(reader.result);
        };
    };
    GalleryComponent.prototype.viewImage = function (index) {
        var image = this.element.nativeElement.querySelector('.displayImage');
        image.style.display = "block";
        image.style.pointerEvents = "auto";
        image.src = this.imageArray[index];
        var imageBackground = this.element.nativeElement.querySelector('.displayImageBackground');
        imageBackground.style.opacity = 0.7;
        imageBackground.style.pointerEvents = "auto";
    };
    GalleryComponent.prototype.closeImage = function () {
        var image = this.element.nativeElement.querySelector('.displayImage');
        image.style.display = "none";
        image.style.pointerEvents = "none";
        var imageBackground = this.element.nativeElement.querySelector('.displayImageBackground');
        imageBackground.style.opacity = 0;
        imageBackground.style.pointerEvents = "none";
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'gallery-app',
        templateUrl: 'gallery.component.html',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], GalleryComponent);
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map