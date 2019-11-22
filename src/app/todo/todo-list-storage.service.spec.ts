import { TestBed } from '@angular/core/testing';

import { TodoListStorageService } from './todo-list-storage.service';

describe('TodoListStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoListStorageService = TestBed.get(TodoListStorageService);
    expect(service).toBeTruthy();
  });
});
