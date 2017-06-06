import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpModule, JsonpModule } from '@angular/http';
import { AuthGuard } from './../_guards/index';
import { ItemComponent } from './item/item.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { UserService, AuthenticationService } from './../_services/index';
import { ReadMoreComponent } from './../dashboard/read-more.component';
import { TimeAgoPipe } from 'time-ago-pipe'
import { GalleryComponent } from './../dashboard/gallery.component';

import { CommentModule } from './../comments/comment.module';
import { EmitterService } from './emitter.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    SimpleNotificationsModule.forRoot(),
    DashboardRoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    CommentModule

  ],
  declarations: [DashboardComponent, ReadMoreComponent, GalleryComponent, TimeAgoPipe, ItemComponent],
  providers: [
    EmitterService,
    AuthGuard,
    AuthenticationService,
    UserService
  ]
})
export class DashboardModule { }
