/* * * ./app/comments/components/comment-list.component.ts * * */
// Imports
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CommentBoxComponent } from './comment-box.component';
import { Comment } from '../_model/index';
import { CommentService } from '../_services/comment.service';
import { EmitterService } from '../../dashboard/emitter.service';

// Component decorator
@Component({
    selector: 'comment-list',
    template: `
        <comment-box [editId]="editId" [listId]="listId" *ngFor="let comment of commentList" [comment]="comment"></comment-box>
    `,
})
// Component class
export class CommentListComponent implements OnInit, OnChanges {
    // Constructor with injected service
    constructor(
        private commentService: CommentService
    ) { }
    // Local properties
    comments: Comment[];
    // Input properties
    @Input() listId: string;
    @Input() editId: string;
    @Input() commentList: Comment[];
    loadComments() {

    }

    ngOnInit() {
        // Load comments
        this.loadComments()
    }

    ngOnChanges(changes: any) {
        // Listen to the 'list'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.listId).subscribe((comment: Comment) => { this.loadComments() });
    }

}
