import { TestBed } from '@angular/core/testing';

import { LibreryServicesService } from './librery-services.service';

describe('LibreryServicesService', () => {
  let service: LibreryServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibreryServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
