import { Component, ElementRef } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'gallery-app',
  templateUrl: 'gallery.component.html',
})
export class GalleryComponent { name = 'Angular'; 
    imageArray: Array<File> = [];
    constructor(private element: ElementRef) {}

    changeListner(event: any) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); //reads file content & when it's done reading file, .onloadend is triggered.
        
        reader.onloadend = (e) => {
            this.imageArray.push(reader.result);
        };
    }

    viewImage(index: number){
        var image = this.element.nativeElement.querySelector('.displayImage');
        image.style.display = "block";
        image.style.pointerEvents = "auto";
        image.src = this.imageArray[index]

        var imageBackground = this.element.nativeElement.querySelector('.displayImageBackground');
        imageBackground.style.opacity = 0.7;
        imageBackground.style.pointerEvents = "auto";
    }

    closeImage(){
        var image = this.element.nativeElement.querySelector('.displayImage');
        image.style.display = "none";
        image.style.pointerEvents = "none";

        var imageBackground = this.element.nativeElement.querySelector('.displayImageBackground');
        imageBackground.style.opacity = 0;
        imageBackground.style.pointerEvents = "none";
    }
}


