import {Component, Input} from '@angular/core';
import {Todo} from "../todo.model";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
})

export class TodoListComponent {
  @Input() tasks: Todo[];
}
