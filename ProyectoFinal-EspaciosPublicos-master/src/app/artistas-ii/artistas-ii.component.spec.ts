import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasIiComponent } from '../artistas-ii/artistas-ii.component';

describe('ArtistasIiComponent', () => {
  let component: ArtistasIiComponent;
  let fixture: ComponentFixture<ArtistasIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistasIiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistasIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
