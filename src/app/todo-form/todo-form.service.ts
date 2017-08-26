import { Injectable } from '@angular/core';
import {Todo} from "../todo.model";

@Injectable()
export class TodoFormService {
  tasks: Todo[] = [
    {task: 'Get Oil Change', isComplete: true},
    {task: 'Grocery Shopping', isComplete: false},
    {task: 'Create Angular 4 Demo', isComplete: false}
  ];

  constructor() { }

  getTasks(): Todo[] {
    return this.tasks;
  }
}
