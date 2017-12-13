import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichardDanielComponent } from './richard-daniel.component';

describe('RichardDanielComponent', () => {
  let component: RichardDanielComponent;
  let fixture: ComponentFixture<RichardDanielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichardDanielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichardDanielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
