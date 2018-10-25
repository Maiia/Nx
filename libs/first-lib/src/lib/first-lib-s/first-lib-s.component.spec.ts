import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLibSComponent } from './first-lib-s.component';

describe('FirstLibSComponent', () => {
  let component: FirstLibSComponent;
  let fixture: ComponentFixture<FirstLibSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstLibSComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLibSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
