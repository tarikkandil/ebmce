import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Declaration, User } from '../_models/index';
import { UserService, DeclarationService } from './../_services/index';
import { NotificationsService } from 'angular2-notifications';
@Component({
  templateUrl: 'dashboard.component.html',
  providers: [DeclarationService, UserService]
})
export class DashboardComponent implements OnInit {
  public collection = {};
  public declarationList: Declaration[];
  users: User[] = [];
  public options = {
    position: ["top", "right"],
    timeOut: 2000,
    lastOnBottom: true,
    showProgressBar: true

  }


  public pictureHidden: Boolean;

  constructor(private declarationService: DeclarationService, private userService: UserService, private _service: NotificationsService) {
    this.pictureHidden = true;

  }

  create(title : string, description : string) {
    this._service.error(
       title,
      description,
      {
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 10
      }
    )
  }
  getDeclarations(): void {
    this.declarationService.getDeclarations()
      .subscribe(declarations => {
        this.collection = declarations;
        this.declarationList = declarations.content;
      },
      err => {
        // Log errors if any
        this.create(err,'please try again later')
  
      });
  }

  ngOnInit(): void {
    this.getDeclarations();
  }

  hidePictures(): void {
    this.pictureHidden = !this.pictureHidden;
  }
}

