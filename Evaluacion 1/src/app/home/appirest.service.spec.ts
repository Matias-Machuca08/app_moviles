import { TestBed } from '@angular/core/testing';

import { AppirestService } from './appirest.service';

describe('AppirestService', () => {
  let service: AppirestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppirestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
