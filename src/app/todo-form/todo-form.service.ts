import { Injectable } from '@angular/core';
import {Todo} from "../todo.model";

@Injectable()
export class TodoFormService {
  tasks: Todo[] = [
    {task: 'Get Oil Change'},
    {task: 'Grocery Shopping'},
    {task: 'Create Angular 4 Demo'}
  ];

  constructor() { }

  getTasks(): Todo[] {
    return this.tasks;
  }
}
