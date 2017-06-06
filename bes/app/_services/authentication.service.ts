import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;
    // baseurl: string = "http://awiki4.azurewebsites.net/wiki-project-web";
    baseurl: string = "";

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
     login(username: string, password: string): Observable<boolean> {
        var headers =  {authorization : "Basic "+ btoa(username + ":" + password)} ;
    // login(username: string, password: string): boolean {
        return this.http.get(this.baseurl + '/api/v1/user', headers)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                // let token = response.json() && response.json().token;
                // if (token) {
                if (response) {
                //     // set token property
                //     this.token = token;

                //     // store username and jwt token in local storage to keep user logged in between page refreshes
                //     localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
        // if ((username === "flepora" && password === "sopra") || (username === "tkandil" && password === "sopra") || (username === "relamrani" && password === "sopra") || (username === "hlayachi" && password === "sopra")) {
        //     localStorage.setItem('currentUser', JSON.stringify({ username: username, password: password }));
        //     return true;
        // } else {
        //     return false;
        // }
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}