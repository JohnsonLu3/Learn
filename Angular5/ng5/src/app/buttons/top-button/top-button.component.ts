import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.scss']
})
export class TopButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // When the user clicks on the button, scroll to the top of the document
  top() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
