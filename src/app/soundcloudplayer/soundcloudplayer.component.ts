import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-soundcloudplayer',
  templateUrl: './soundcloudplayer.component.html',
  styleUrls: ['./soundcloudplayer.component.css']
})
export class SoundcloudplayerComponent implements OnInit {
  @Input() src: string;
  constructor() { }

  ngOnInit() {
  }

}
