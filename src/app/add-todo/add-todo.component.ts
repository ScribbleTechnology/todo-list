import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
})

export class AddTodoComponent implements OnInit {
  task: string;

  @Output() newTask: EventEmitter<string> = new EventEmitter();

  ngOnInit() { }

  public addTask(): void {
    this.newTask.emit(this.task);
    this.clearText();
  }

  private clearText(): void {
    this.task = '';
  }
}
