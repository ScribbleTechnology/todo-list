import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should bind list of todo tasks', () => {
    let tasks = [{id: 1, task: 'first task'}, {id: 2, task: 'second task'}];
    fixture.componentInstance.tasks = tasks;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[name=tasks] li:nth-child(1)').textContent.trim()).toEqual(tasks[0].task);
    expect(fixture.nativeElement.querySelector('[name=tasks] li:nth-child(2)').textContent.trim()).toEqual(tasks[1].task);
  });
});
