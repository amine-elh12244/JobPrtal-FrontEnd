import { TestBed } from '@angular/core/testing';

import { ViewCountServiceService } from './view-count-service.service';

describe('ViewCountServiceService', () => {
  let service: ViewCountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
