import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionArtistasComponent } from './informacion-artistas.component';

describe('InformacionArtistasComponent', () => {
  let component: InformacionArtistasComponent;
  let fixture: ComponentFixture<InformacionArtistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionArtistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionArtistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
