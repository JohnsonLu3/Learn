import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  profilePicPath : string;

  constructor() { 
    this.profilePicPath = "../../assets/img/me.png"
  }

  ngOnInit() {
  }

}
