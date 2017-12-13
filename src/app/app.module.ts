import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgForOf } from '@angular/common';
import { FormBuilder } from '@angular/forms/src/form_builder';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { HomeComponent } from './home/home.component';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';




import { SingleArtistComponent } from './single-artist/single-artist.component';
import { ShowsComponent } from './shows/shows.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ArtistService } from './services/artist.sv';
import { DynamicplayerComponent } from './dynamicplayer/dynamicplayer.component';
import { SpotifyplayerComponent } from './spotifyplayer/spotifyplayer.component';
import { SoundcloudplayerComponent } from './soundcloudplayer/soundcloudplayer.component';
import { ShowsService } from './services/shows.sv';
import { VenuesService } from './services/venues.sv';
import { UserService } from './services/users.sv';
import { ClubAmComponent } from './profiles/club-am/club-am.component';
import { KennyLoftenComponent } from './profiles/kenny-loften/kenny-loften.component';
import { RichardDanielComponent } from './profiles/richard-daniel/richard-daniel.component';
import { GiMagusComponent } from './profiles/gi-magus/gi-magus.component';
import { LaurenMichelComponent } from './profiles/lauren-michel/lauren-michel.component';



const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'artists',
  component: ArtistsComponent
},

{
  path: 'single-artist',
  component: SingleArtistComponent
},
{
  path: 'shows',
  component: ShowsComponent
},
{
  path: 'contact-us',
  component: ContactUsComponent
},
{
  path: 'club-am',
  component: ClubAmComponent
},
{
  path: 'kenny-loften',
  component: KennyLoftenComponent
},
{
  path: 'richard-daniel',
  component: RichardDanielComponent
},
{
  path: 'gi-magus',
  component: GiMagusComponent
},
{
  path: 'lauren-michel',
  component: LaurenMichelComponent
}

];

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    HomeComponent,
    SingleArtistComponent,
    ShowsComponent,
    ContactUsComponent,
    DynamicplayerComponent,
    SpotifyplayerComponent,
    SoundcloudplayerComponent,
    ClubAmComponent,
    KennyLoftenComponent,
    RichardDanielComponent,
    GiMagusComponent,
    LaurenMichelComponent,
 

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    HttpClientModule,

    Ng4TwitterTimelineModule
  ],
  providers: [ArtistService, ShowsService, VenuesService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [
    SoundcloudplayerComponent
  ]
})
export class AppModule { }
