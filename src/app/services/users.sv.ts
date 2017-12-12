import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { IUser } from '../models';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {
    public api = 'http://localhost:3000/api/users';

    constructor (public http: HttpClient) {
    }

    Users: Array<any> = [];

    getUsers(): Observable<any> {
        return this.http.get(this.api);
    }

    createUser(): Observable<any> {
        return this.http.post(this.api, this.Users);
    }
}