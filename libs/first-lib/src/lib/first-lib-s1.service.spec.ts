import { TestBed } from '@angular/core/testing';

import { FirstLibS1Service } from './first-lib-s1.service';

describe('FirstLibS1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstLibS1Service = TestBed.get(FirstLibS1Service);
    expect(service).toBeTruthy();
  });
});
