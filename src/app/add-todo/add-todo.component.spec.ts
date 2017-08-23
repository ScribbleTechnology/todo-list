import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddTodoComponent} from './add-todo.component';
import {FormsModule} from "@angular/forms";

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodoComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should clear input field on button click', async(() => {
    fixture.componentInstance.task = 'Creating a new task';
    fixture.nativeElement.querySelector('[name=add-task]').click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(fixture.debugElement.nativeElement.querySelector('[name=description]').value).toEqual('');
    });
  }));

  it('should emit new task', () => {
    spyOn(component.newTask, 'emit');

    fixture.componentInstance.task = 'Creating a new task';
    fixture.nativeElement.querySelector('[name=add-task]').click();
    fixture.detectChanges();

    expect(component.newTask.emit).toHaveBeenCalledWith('Creating a new task');
  });
});
