import { TestBed } from '@angular/core/testing';

import { AdminwebinarService } from './adminwebinar.service';

describe('AdminwebinarService', () => {
  let service: AdminwebinarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminwebinarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
