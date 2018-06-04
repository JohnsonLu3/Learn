import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  proj = [];
  webapp = [];
  software = [];
  games = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.projects.subscribe(res => this.proj = res);

    for(let p of this.proj){
      switch(p.Section){
        case "WEBAPP":
          this.webapp.push(p);
          break;
        case "SOFTWARE":
          this.software.push(p);
          break;
        case "GAME":
          this.games.push(p);
          break;
        default:
          break;
      }
    }
  }

}
