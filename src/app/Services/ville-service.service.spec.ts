import { TestBed } from '@angular/core/testing';

import { VilleServiceService } from './ville-service.service';

describe('VilleServiceService', () => {
  let service: VilleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VilleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
