import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  todoText: string = "";
  todoItems = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.todoItems.length;
  }

  addItem(){
    if(this.todoText != ""){
      console.log(this.todoText);
      this.todoItems.push(this.todoText);
      this.itemCount = this.todoItems.length;
      this.todoText = "";
    }
  }
}
