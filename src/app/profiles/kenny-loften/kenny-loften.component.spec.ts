import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KennyLoftenComponent } from './kenny-loften.component';

describe('KennyLoftenComponent', () => {
  let component: KennyLoftenComponent;
  let fixture: ComponentFixture<KennyLoftenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KennyLoftenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KennyLoftenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
