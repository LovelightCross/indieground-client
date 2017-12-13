import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaurenMichelComponent } from './lauren-michel.component';

describe('LaurenMichelComponent', () => {
  let component: LaurenMichelComponent;
  let fixture: ComponentFixture<LaurenMichelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaurenMichelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaurenMichelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
