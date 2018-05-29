import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.skills.subscribe(res => this.skills = res);
  }

}
