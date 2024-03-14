import { TestBed } from '@angular/core/testing';

import { DomaineServiceService } from './domaine-service.service';

describe('DomaineServiceService', () => {
  let service: DomaineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomaineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
