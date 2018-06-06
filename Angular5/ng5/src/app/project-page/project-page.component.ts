import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  animations: [
      trigger('shift',[
        state('right', style({
          transform: 'translateX(0)'
        })),
        state('left',style({
          transform: 'translateX(-1rem)'
        })),

        transition('right => left', animate('400ms ease-in')),
        transition('left => right', animate('400ms ease-in'))
      ]),
    ]
})
export class ProjectPageComponent implements OnInit {

  proj = [];
  webapp = [];
  software = [];
  games = [];
  state = ['right','right','right','right'];

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

  playAnim(i){
    this.state[i] = (this.state[i] === 'left' ? 'right' : 'left');
  }

}
