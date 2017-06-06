import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Declaration } from '../../_models/index';
import { EmitterService } from '../../dashboard/emitter.service';
import { DeclarationService } from './../../_services/index';

@Component({
  selector: 'item',
  templateUrl: 'item.component.html'
})
export class ItemComponent implements OnInit {
  public showComments: string;
  private baseuRL = "https://wikirepo.blob.core.windows.net/pictures/";
  public status: string;
  public hiddenPictures: string;
  closeResult: string;
  public itemStatus: any = [
    { id: "take", status: "prise en charge" },
    { id: "close", status: "traité" }
  ];

  pictureUrls: any = [];
  user:any;
  @Input() item: Declaration;
  constructor(private declarationService: DeclarationService) {
    this.showComments = '';
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }
  hidePictures(reference: string, event): void {
    event.preventDefault();
    if (this.hiddenPictures != reference) {
      this.hiddenPictures = reference;
    } else {
      this.hiddenPictures = '';
    }
  }

  ngOnInit(): void {
    if (this.item.status == "taken") {
      this.status = "take";
    } else if (this.item.status == "closed") {
      this.status = "close";
    }
    for (let picture of this.item.pictureList) {
      var i = {
          "path": this.baseuRL + picture.reference + ".jpg"
      };
      this.pictureUrls.push(i);
    }

    switch (this.item.floor) {
      case "FLOOR_1":
        this.item.floor = "1";
        break;
      case "FLOOR_2":
        this.item.floor = "2";
        break;
      case "FLOOR_3":
        this.item.floor = "3";
        break;
      case "FLOOR_4":
        this.item.floor = "4";
        break;
      case "FLOOR_5":
        this.item.floor = "5";
        break;
      case "FLOOR_6":
        this.item.floor = "6";
        break;
      case "FLOOR_7":
        this.item.floor = "7";
        break;
      case "FLOOR_PARK":
        this.item.floor = "-1";
        break;
      case "FLOOR_RJ":
        this.item.floor = "RJ";
        break;
    }

  }

  HandleclickComment(Id: string, event: Event) {
    event.preventDefault();
    this.toggleComment(Id);
  }

  changStatus(status: string, item: Declaration): void {

    this.declarationService.changeStatus(status, item.reference)
      .subscribe(declaration => {
        item.status = declaration.status;
      },
      err => {
        // Log errors if any
        // this.create(err,'please try again later')
      });
  }

  toggleComment(Id: string) {
    if (this.showComments === Id) {
      this.showComments = '';
    } else {
      this.showComments = Id;
    }
  }
}

