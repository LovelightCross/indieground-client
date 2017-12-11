import { Component, OnInit, Input, ViewChild, ElementRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SoundcloudplayerComponent } from '../soundcloudplayer/soundcloudplayer.component';
import { DomSanitizer } from '@angular/platform-browser';
import { SpotifyplayerComponent } from '../spotifyplayer/spotifyplayer.component';

@Component({
  selector: 'app-dynamicplayer',
  templateUrl: './dynamicplayer.component.html',
  styleUrls: ['./dynamicplayer.component.css']
})
export class DynamicplayerComponent implements OnInit {
  @Input() artistId: string;
  loaded: boolean;
  @ViewChild("container", { read: ViewContainerRef }) container;
  constructor(
    private cfr: ComponentFactoryResolver,
    private vc: ViewContainerRef,
    private sanitize: DomSanitizer
  ) { }

  ngOnInit() {
    this.container.clear();
    const factory = this.cfr.resolveComponentFactory(SoundcloudplayerComponent);
    const comp: any = this.container.createComponent(factory);
    comp.instance.src = this.sanitize.bypassSecurityTrustResourceUrl(this.composeSoundCloudUrl(this.artistId));

  }
  composeSoundCloudUrl(id: string) {
    return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/${id}&amp;color=%232d4262&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true`;
  }
}
