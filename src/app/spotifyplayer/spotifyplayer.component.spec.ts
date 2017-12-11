import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyplayerComponent } from './spotifyplayer.component';

describe('SpotifyplayerComponent', () => {
  let component: SpotifyplayerComponent;
  let fixture: ComponentFixture<SpotifyplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
