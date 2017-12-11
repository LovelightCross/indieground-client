import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-single-artist',
  templateUrl: './single-artist.component.html',
  styleUrls: ['./single-artist.component.css']
})
export class SingleArtistComponent implements OnInit {
  artist: any;
  constructor() { }

  ngOnInit() {
    this.artist = {
      soundcloudid: '4562420' 
    };
  }

}
