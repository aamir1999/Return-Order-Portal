import { TestBed } from '@angular/core/testing';

import { ReqserviceService } from './reqservice.service';

describe('ReqserviceService', () => {
  let service: ReqserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
