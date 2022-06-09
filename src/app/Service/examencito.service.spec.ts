import { TestBed } from '@angular/core/testing';

import { ExamencitoService } from './examencito.service';

describe('ExamencitoService', () => {
  let service: ExamencitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamencitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
