/* * * ./app/comments/components/index.ts * * */
// Imports
import { Component, Input } from '@angular/core';
import { EmitterService } from '../../dashboard/emitter.service';

@Component({
    selector: 'comment-widget',
    template: `
        <div class="comment-container">
            <comment-form  [showList]="showList" (onCommentAdded) = onCommentAdded($event)  [itemId]="itemId" [listId]="listId" [editId]="editId"></comment-form>
            <comment-list  [hidden]="showList != itemId" [listId]="listId"  [commentList]="commentList" [editId]="editId"></comment-list>
        </div>
    `,
})
export class CommentComponent {
    // Event tracking properties
    public listId = 'COMMENT_COMPONENT_LIST';
    public editId = 'COMMENT_COMPONENT_EDIT';
    @Input() commentList: Comment[];
    @Input() showList: string;
    @Input() itemId: string;  

    

    onCommentAdded(comment) {
        this.commentList.push(comment);
    }

}
