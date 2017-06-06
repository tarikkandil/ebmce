import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class AppRequestOptions extends BaseRequestOptions {
    merge(options?: RequestOptionsArgs): RequestOptions {
        options.url = 'http://localhost:1111' + options.url;
        return super.merge(options);
    }
}