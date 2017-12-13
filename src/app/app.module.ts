import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgForOf } from '@angular/common';

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
