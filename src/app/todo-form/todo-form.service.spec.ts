import { TestBed, inject } from '@angular/core/testing';

import { TodoFormService } from './todo-form.service';

describe('TodoFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoFormService]
    });
  });

  it('should be created', inject([TodoFormService], (service: TodoFormService) => {
    expect(service).toBeTruthy();
  }));

  it('should return task data', inject([TodoFormService], (service: TodoFormService) => {
    service.tasks = [
      {task: 'Get Oil Change', isComplete: true},
      {task: 'Grocery Shopping', isComplete: false},
      {task: 'Create Angular 4 Demo', isComplete: false}
    ];

    const actual = service.getTasks();

    expect(actual.length).toEqual(3);
    expect(actual[0].task).toEqual(service.tasks[0].task);
  }));
});
