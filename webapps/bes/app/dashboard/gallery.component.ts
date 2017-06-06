import {Component, Input} from '@angular/core';
 
@Component({
  selector: 'gallery',
  template: `
	<div class="modal fade" id="selectedImageModal"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-body">
	         <img *ngIf="selectedImage" src="{{selectedImage.path}}" >
	      </div>
	    </div>
	  </div>
	</div>
  	<ul id="thumbnailsList">
  	   <li *ngFor="let image of datasource" >
  	      <img src="{{image.path}}" class="tn"
  		  width="185" height="140"  
  		  data-toggle="modal" data-target="#selectedImageModal"
                  (click)=setSelectedImage(image)>
  	   </li>
  	</ul>
  `,
  styles: [`
  	ul { padding:0; margin:20px auto}
  	li { display:inline;}
        .tn{ 
	   margin:2px 0px;
	   box-shadow:#999 1px 1px 3px 1px; 
	   cursor: pointer 
        }
  	.modal-content {
	    width: 670px !important;
	}
  `]
})
export class GalleryComponent { 
 
   @Input() datasource;
   selectedImage;
 
   setSelectedImage(image) {
      this.selectedImage= image;	
   }
}