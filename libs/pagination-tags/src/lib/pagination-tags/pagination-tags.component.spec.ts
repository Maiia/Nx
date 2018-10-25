import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationTagsComponent } from './pagination-tags.component';

describe('PaginationTagsComponent', () => {
  let component: PaginationTagsComponent;
  let fixture: ComponentFixture<PaginationTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationTagsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
