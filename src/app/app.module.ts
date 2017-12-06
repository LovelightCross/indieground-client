import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';


const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'artists',
  component: ArtistsComponent
},
{ path: 'artist',
  component: ArtistComponent
},
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    HomeComponent,
    ArtistComponent
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
