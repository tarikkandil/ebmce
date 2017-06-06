/* * * ./app/comments/components/comment-box.component.ts * * */
// Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../_model/comment'
import { EmitterService } from '../../dashboard/emitter.service';
import { CommentService } from '../_services/comment.service';

// Component decorator
@Component({
    selector: 'comment-box',
    template: ` 
     <div id="container">
        <ul id="comments">
            <li class="cmmnt">
                <div class="avatar"><a href="javascript:void(0);"><img src="assets/img/avatars/avatar-agent.png" width="55" height="55" alt="DarkCubes photo avatar"></a></div>
                <div class="cmmnt-content">
                <header><a href="javascript:void(0);" class="userlink">{{comment.createdBy}}</a></header>
                <p>{{comment.content}}</p>
                </div>
            </li>
        </ul>
    </div>`
    // No providers here because they are passed down from the parent component
})
// Component class
export class CommentBoxComponent {
    // Constructor
    constructor(
        private commentService: CommentService
    ) { }
    // Define input properties
    @Input() comment: Comment;
    @Input() listId: string;
    @Input() editId: string;

    editComment() {
        // Emit edit event
        EmitterService.get(this.editId).emit(this.comment);
    }

    deleteComment(id: string) {
        // Call removeComment() from CommentService to delete comment
        this.commentService.removeComment(id).subscribe(
            comments => {
                // Emit list event
                EmitterService.get(this.listId).emit(comments);
            },
            err => {
                // Log errors if any
                console.log(err);
            });
    }
}
