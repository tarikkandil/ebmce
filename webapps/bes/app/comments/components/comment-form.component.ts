/* * * ./app/comments/components/comment-form.component.ts * * */
// Imports
import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CommentBoxComponent } from './comment-box.component'
import { CommentService } from '../_services/comment.service';
import { EmitterService } from '../../dashboard/emitter.service';
import { Comment } from '../_model/index'

// Component decorator
@Component({
    selector: 'comment-form',
    template: `
        <form  #createCommentForm="ngForm" >
            <div class="form-group comment-group">
                <br />
                <textarea autosize class="form-control comment-txt"  placeholder="Votre reponse ..." [(ngModel)]="model.content" name="text"></textarea>
                
                <button *ngIf="!editing" (click)="submitComment(); $event.preventDefault()" class="btn btn-comment-send"><i class="icon-action-redo icon-submit-comment"></i></button>
            </div>
        </form>
    `,
})
// <button *ngIf="!editing" type="submit" class="btn btn-primary btn-block">Add</button>
//                 <button *ngIf="editing" type="submit" class="btn btn-warning btn-block">Update</button>
// Component class
export class CommentFormComponent implements OnChanges {
    // Constructor with injected service
    constructor(
        private commentService: CommentService
    ) { }
    // Local properties
    public model = {
        
            "content": ""
        

    };
    public editing = false;

    // Input properties
    @Input() editId: string;
    @Input() listId: string;
    @Input() itemId: string;
    @Input() showList: string;
    @Output()
    onCommentAdded: EventEmitter<Comment> = new EventEmitter<Comment>();
    initComment() {
        this.model = {
          
                "content": ""
            
        };
    }

    submitComment(event: Event) {

        // Variable to hold a reference of addComment/updateComment
        let commentOperation: Observable<Comment>;

        if (!this.editing) {
            // Create a new comment
            commentOperation = this.commentService.addComment(this.model, this.itemId)
        } else {
            // Update an existing comment
            commentOperation = this.commentService.updateComment(this.model)
        }

        // Subscribe to observable
        commentOperation.subscribe(
            comment => {
                // this.pushComment.emit(comments);
                // Emit list event
                this.onCommentAdded.emit(comment);

                // Empty model
                this.initComment();
                // Switch editing status
                if (this.editing) this.editing = !this.editing;
            },
            err => {
                // Log errors if any
                console.log(err);
            });
    }
    ngOnChanges() {
        // Listen to the 'edit'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.editId).subscribe((comment: Comment) => {
            this.model = comment
            this.editing = true;
        });
    }

}
