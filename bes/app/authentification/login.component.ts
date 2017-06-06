import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../_services/index';
import { Config } from './../_helpers/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    providers: [AuthenticationService]
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    public title: String;
    public description: String;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) {
        this.title = Config.APP_TITLE;
        this.description = Config.APP_DESCRIPTION;
    }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    login() {
        this.loading = true;
        this.router.navigate(['/']);
        // if (this.authenticationService.login(this.model.username, this.model.password) === true) {
        //     this.router.navigate(['/']);
        // } else {
        //     this.error = 'Username or password is incorrect';
        //     this.loading = false;
        // }
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/']);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}