import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo.model";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  tasks: Todo[];

  constructor() { }

  ngOnInit() {
    this.initTodoItems();
  }

  private initTodoItems() {
    this.tasks = [
      {id: 1, task: 'first item'},
      {id: 2, task: 'second item'}
    ];
  }
}
