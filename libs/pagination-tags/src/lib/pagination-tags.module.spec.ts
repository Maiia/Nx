import { async, TestBed } from '@angular/core/testing';
import { PaginationTagsModule } from './pagination-tags.module';

describe('PaginationTagsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PaginationTagsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PaginationTagsModule).toBeDefined();
  });
});
