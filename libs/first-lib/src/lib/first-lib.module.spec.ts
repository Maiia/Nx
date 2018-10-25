import { async, TestBed } from '@angular/core/testing';
import { FirstLibModule } from './first-lib.module';

describe('FirstLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FirstLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FirstLibModule).toBeDefined();
  });
});
