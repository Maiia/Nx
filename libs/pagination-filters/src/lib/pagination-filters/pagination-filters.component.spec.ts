import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationFiltersComponent } from './pagination-filters.component';

describe('PaginationFiltersComponent', () => {
  let component: PaginationFiltersComponent;
  let fixture: ComponentFixture<PaginationFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
