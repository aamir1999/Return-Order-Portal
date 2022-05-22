import { TestBed } from '@angular/core/testing';

import { ConfserviceService } from './confservice.service';

describe('ConfserviceService', () => {
  let service: ConfserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
