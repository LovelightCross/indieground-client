import { Component, OnInit } from '@angular/core';
import { IShow } from '../models';
import { ShowsService } from '../services/shows.sv';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  shows:any

  constructor(
    private showsService: ShowsService
  ) { }

  getShowInfo(): void {
    this.showsService.getShowInfo()
    .subscribe((Response) => this.shows = Response);
  }

  ngOnInit() {
    this.getShowInfo();
  }

}