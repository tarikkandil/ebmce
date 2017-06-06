import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Autosize } from 'angular2-autosize/angular2-autosize';
import { CommentBoxComponent } from './components/comment-box.component';
import { CommentListComponent } from './components/comment-list.component';
import { CommentFormComponent } from './components/comment-form.component';
import { CommentComponent } from './components/index';
import { CommonModule } from '@angular/common';
import { CommentService } from './_services/comment.service';
import { TimeAgoPipe } from 'time-ago-pipe'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule

  ],
  declarations: [
    CommentBoxComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentComponent,
    Autosize
  ],

  providers: [
    CommentService
  ],

  exports: [
    CommentBoxComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentComponent
  ]


})
export class CommentModule {
}

