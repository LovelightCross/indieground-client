import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
{
  path: '',
  component: LoginComponent
},
{
  path: 'homepage',
  component: HomepageComponent
},
{
  path: 'artists',
  component: ArtistsComponent
},
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    HomepageComponent,
    LoginComponent
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
