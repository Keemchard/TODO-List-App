import { TestBed } from '@angular/core/testing';

import { TaskKoService } from './task-ko.service';

describe('TaskKoService', () => {
  let service: TaskKoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskKoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
