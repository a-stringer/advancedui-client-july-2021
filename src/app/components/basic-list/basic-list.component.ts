import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.css']
})
export class BasicListComponent implements OnInit {

  items!: TodoListItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 1, description: 'Learn Angular',
      },
      {
        id: 2, description: 'Learn TypeScript',
      },
      {
        id: 3, description: 'Learn Webpack'
      }
    ]
  }
}

interface TodoListItem {
  id: number;
  description: string;
}
