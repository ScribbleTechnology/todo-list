import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from "../todo.model";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
})

export class TodoListComponent {
  @Input() tasks: Todo[];
  @Output() task: EventEmitter<Todo> = new EventEmitter();

  updateTask(task: Todo) {
    task.isComplete = !task.isComplete;
    this.task.emit(task);
  }
}
