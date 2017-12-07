import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { IArtist } from '../models';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ArtistService {
    public api = 'http://localhost:3000/api/artists';

    constructor (public http: HttpClient) {
    }

    artists: Array<any> = [];

    getArtists(): Observable<any> {
        return this.http.get(this.api);
    }

    createArtist(): Observable<any> {
        return this.http.post(this.api, this.artists);
    }
}