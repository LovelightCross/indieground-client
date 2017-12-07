import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IArtist } from '../models';
import { ArtistService } from '../services/artist.sv';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  // artist: models.IArtist;
  artists:any;

  constructor(
    private artistService: ArtistService
  ) { }

  getArtist(): void {
    this.artistService.getArtists()
    .subscribe((Response) => this.artists = Response);
  }

  ngOnInit() {
    this.getArtist();
  }

}
