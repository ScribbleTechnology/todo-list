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
      {id: 1, task: 'Get Oil Change'},
      {id: 2, task: 'Grocery Shopping'},
      {id: 3, task: 'Create Angular 4 Demo'}
    ];

    const actual = service.getTasks();

    expect(actual.length).toEqual(3);
    expect(actual[0].id).toEqual(service.tasks[0].id);
    expect(actual[0].task).toEqual(service.tasks[0].task);
  }));
});
