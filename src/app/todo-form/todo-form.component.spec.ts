import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormComponent } from './todo-form.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {TodoFormService} from "./todo-form.service";

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFormComponent ],
      providers: [ TodoFormService ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add new task to task list', () => {
    fixture.componentInstance.onClick('new item added');

    expect(fixture.componentInstance.tasks.length).toEqual(4);
  });

  it('should remove task from task list', () => {
    let tasks = [{task: 'first task', isComplete: false}, {task: 'second task', isComplete: false}];
    fixture.componentInstance.tasks = tasks;
    fixture.componentInstance.onDelete(tasks[0]);
    fixture.detectChanges();

    expect(component.tasks.length).toEqual(1);
  });
});
