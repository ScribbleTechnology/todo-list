import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo.model";

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
})

export class TodoFormComponent implements OnInit {
  tasks: Todo[];

  ngOnInit() {
    this.initTodoItems();
  }

  private initTodoItems() {
    this.tasks = [
      {id: 1, task: 'Get Oil Change'},
      {id: 2, task: 'Grocery Shopping'},
      {id: 3, task: 'Create Angular 4 Demo'}
    ];
  }

  onClick(item: string) {
    this.tasks.push({id: 4, task: item});
  }
}
