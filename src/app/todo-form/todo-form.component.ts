import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo.model";
import {TodoFormService} from "./todo-form.service";

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
})

export class TodoFormComponent implements OnInit {
  tasks: Todo[];

  constructor(private service: TodoFormService){ }

  ngOnInit() {
    this.tasks = this.service.getTasks();
  }

  onClick(task: string): void {
    this.tasks.push({task: task, isComplete: false});
  }
}
