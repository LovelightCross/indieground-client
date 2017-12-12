import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { IVenue } from '../models';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class VenuesService {
    public api = 'http://localhost:3000/api/venues';

    constructor (public http: HttpClient) {
    }

    venues: Array<any> = [];

    getVenues(): Observable<any> {
        return this.http.get(this.api);
    }

    createVenues(): Observable<any> {
        return this.http.post(this.api, this.venues);
    }
}