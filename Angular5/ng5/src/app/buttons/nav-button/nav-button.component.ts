import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss',]
})
export class NavButtonComponent implements OnInit {

  @Input() color: string;
  @Input() name: string;
  @Input() ico: string;
  @Input() ref: string;

  constructor() { }

  ngOnInit() {
  }

  scroll(){
    let el = document.getElementById(this.ref);
    console.log(el);
    el.scrollIntoView( {behavior:"smooth", block: "start"});
  }
}