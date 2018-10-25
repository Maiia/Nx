import { TestBed } from '@angular/core/testing';

import { FirstLibSService } from './first-lib-s.service';

describe('FirstLibSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstLibSService = TestBed.get(FirstLibSService);
    expect(service).toBeTruthy();
  });
});
