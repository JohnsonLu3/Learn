import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('pop',[
      state('bottom', style({
        transform: 'scale(1) translateY(0)'
      })),
      state('top',style({
        transform: 'scale(1.2) translateY(-.5rem)'
      })),

      transition('bottom => top', animate('300ms ease-in')),
      transition('top => bottom', animate('300ms ease-in'))
    ]),
  ]
})


export class AppComponent {
  title = 'app';
  links = [];
  state = [];

  constructor(private _data: DataService){}

  ngOnInit(){
    this._data.links.subscribe(res => this.links = res);
    this.state = new Array(this.links.length).fill("bottom");
    console.log(this.state);
  }

  playAnim(i){
    console.log(i);
    this.state[i] = (this.state[i] === 'bottom' ? 'top' : 'bottom');
  }
}
