import { TestBed } from '@angular/core/testing';

import { AddJobOfferServiceService } from './add-job-offer-service.service';

describe('AddJobOfferServiceService', () => {
  let service: AddJobOfferServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddJobOfferServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
