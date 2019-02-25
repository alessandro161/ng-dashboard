import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatianaComponent } from './datiana.component';

describe('DatianaComponent', () => {
  let component: DatianaComponent;
  let fixture: ComponentFixture<DatianaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatianaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
