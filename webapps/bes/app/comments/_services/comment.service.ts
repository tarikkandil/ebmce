/* * * ./app/comments/components/comment.service.ts * * */
// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Comment } from '../_model/index';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {
    // Resolve HTTP using the constructor
    user: any;
    constructor(private http: Http) {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
    // private instance variable to hold base url
    // private commentsUrl = 'http://localhost:3000/api/comments';
    private commentsUrl = 'http://awiki4.azurewebsites.net/wiki-project-web/api/v1/secure/ticket/comment/add';

    // Fetch all existing comments
    getComments(): Observable<Comment[]> {

        let headers = new Headers({ 'Content-Type': 'application/json', "Authorization": "Basic " + btoa(this.user.username + ":" + this.user.password) });
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
        headers.append("Content-Type", "application/json,application/x-www-form-urlencoded");
        // let headers = new Headers({ 'Accept': 'application/json' });
        // headers.append('Authorization', "Basic "  +  btoa("relamrani:sopra"));

        let options = new RequestOptions({ headers: headers });
        // ...using get request
        return this.http.get(this.commentsUrl, options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Add a new comment
    addComment(body: any, reference: string): Observable<Comment> {
        let addcommentUrl = "http://awiki4.azurewebsites.net/wiki-project-web/api/v1/tickets/" + reference + "/comments"
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json', "Authorization": "Basic " + btoa(this.user.username + ":" + this.user.password) });
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
        headers.append("Content-Type", "application/json,application/x-www-form-urlencoded");
        // let headers = new Headers({ 'Accept': 'application/json' });
        // headers.append('Authorization', "Basic "  +  btoa("relamrani:sopra"));

        let options = new RequestOptions({ headers: headers });
        body.reference = reference;
        return this.http.post(addcommentUrl, body, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    // Update a comment
    updateComment(body: Object): Observable<Comment> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json', "Authorization": "Basic " + btoa(this.user.username + ":" + this.user.password) });
        // let headers = new Headers({ 'Accept': 'application/json' });
        // headers.append('Authorization', "Basic "  +  btoa("relamrani:sopra"));

        let options = new RequestOptions({ headers: headers });

        return this.http.put(`${this.commentsUrl}/${body['id']}/`, body, options) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
    // Delete a comment
    removeComment(id: string): Observable<Comment[]> {
        return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
}
