import { async, TestBed } from '@angular/core/testing';
import { PaginationFiltersModule } from './pagination-filters.module';

describe('PaginationFiltersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PaginationFiltersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PaginationFiltersModule).toBeDefined();
  });
});
