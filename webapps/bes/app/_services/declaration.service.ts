import { Injectable } from '@angular/core';
import { Declaration } from '../_models/index';
import { Declarations } from './mock-declarations';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class DeclarationService {
    baseurl: string = "http://awiki4.azurewebsites.net/wiki-project-web";
    headers: Headers;
    options: RequestOptions;
    user: any;
    constructor(private http: Http) {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        // this.headers  =  new  Headers();
        // this.headers.append("Authorization",  "Basic "  +  btoa("relamrani:sopra"));
        // this.headers.append("ContentType",  "application/json");
        // this.options  =  new  RequestOptions({ headers:  this.headers });
    }

    getDeclarations(): Observable<{ content }> {
        // add authorization header with jwt token

        let headers = new Headers({ 'Content-Type': 'application/json', "Authorization": "Basic " + btoa(this.user.username + ":" + this.user.password) });
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
        headers.append("Content-Type", "application/json,application/x-www-form-urlencoded");
        // let headers = new Headers({ 'Accept': 'application/json' });
        // headers.append('Authorization', "Basic "  +  btoa("relamrani:sopra"));

        let options = new RequestOptions({ headers: headers });

        // get declarations from api
        return this.http.get(this.baseurl+'/api/v1/tickets', options)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json().error));

    }
    changeStatus(status, reference): Observable<Declaration> {
        let putCommentUrl = this.baseurl+ "/api/v1/tickets/" + reference + "/" + status;
        let headers = new Headers({ 'Content-Type': 'application/json', "Authorization": "Basic " + btoa(this.user.username + ":" + this.user.password) });
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
        headers.append("Content-Type", "application/json,application/x-www-form-urlencoded");
        // let headers = new Headers({ 'Accept': 'application/json' });
        // headers.append('Authorization', "Basic "  +  btoa("relamrani:sopra"));

        let options = new RequestOptions({ headers: headers });
        return this.http.put(putCommentUrl, '', options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
    getMockDeclarations(): Declaration[] {
        return Declarations;
    }
}