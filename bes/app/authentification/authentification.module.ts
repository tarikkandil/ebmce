import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthentificationRoutingModule } from './authentification-routing.module';
import { AuthenticationService, UserService } from './../_services/index';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [AuthentificationRoutingModule, HttpModule,
    FormsModule, CommonModule],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthenticationService,
    UserService
  ],
})
export class AuthentificationModule { }
