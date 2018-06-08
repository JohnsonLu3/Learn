import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-webapp-page',
  templateUrl: './webapp-page.component.html',
  styleUrls: ['./webapp-page.component.scss']
})
export class WebappPageComponent implements OnInit {

  webpages = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
     this._data.webpages.subscribe(res => this.webpages = res);
  }

}
