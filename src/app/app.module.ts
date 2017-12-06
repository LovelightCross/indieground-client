import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { HomeComponent } from './home/home.component';
import { SingleArtistComponent } from './single-artist/single-artist.component';
import { MusicComponent } from './music/music.component';
import { ShowsComponent } from './shows/shows.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


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
}
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    HomeComponent,
    SingleArtistComponent,
    MusicComponent,
    ShowsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
