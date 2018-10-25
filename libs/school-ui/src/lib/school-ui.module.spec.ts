import { async, TestBed } from '@angular/core/testing';
import { SchoolUiModule } from './school-ui.module';

describe('SchoolUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SchoolUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SchoolUiModule).toBeDefined();
  });
});
