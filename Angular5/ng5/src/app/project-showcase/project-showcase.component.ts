import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.scss']
})
export class ProjectShowcaseComponent implements OnInit {

  projects = [];
  webappData = [];
  softwareData = [];
  gamesData = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.projects.subscribe(res => this.projects = res);  

    for(let proj of this.projects){
       switch(proj.Section){
         case "WEBAPP":
            if(proj.ShowCase){this.webappData.push(proj);}
         break;
         case "SOFTWARE":
            if(proj.ShowCase){this.softwareData.push(proj);}
         break;
         case "GAME":
            if(proj.ShowCase){this.gamesData.push(proj);}
         break;
       }
    }
  }

}
