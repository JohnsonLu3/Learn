import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
   animations: [
    trigger('slide',[
      state('right', style({
        transform: 'translateX(120%)'
      })), 
      state('center', style({
        transform: 'translateX(0)'
      })),
      state('left', style({
        transform: 'translateX(-120%)'
      })),

      transition('right => center', animate('300ms ease-in')),
      transition('left => center', animate('300ms ease-in'))
    ]),
  ]
})

export class HomeComponent implements OnInit {

  ngOnInit() {
  }

}
