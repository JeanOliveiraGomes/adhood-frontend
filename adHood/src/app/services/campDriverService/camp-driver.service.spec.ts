import { TestBed } from '@angular/core/testing';

import { CampDriverService } from './camp-driver.service';

describe('CampDriverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampDriverService = TestBed.get(CampDriverService);
    expect(service).toBeTruthy();
  });
});
