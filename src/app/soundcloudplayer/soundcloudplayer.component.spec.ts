import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundcloudplayerComponent } from './soundcloudplayer.component';

describe('SoundcloudplayerComponent', () => {
  let component: SoundcloudplayerComponent;
  let fixture: ComponentFixture<SoundcloudplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundcloudplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundcloudplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
