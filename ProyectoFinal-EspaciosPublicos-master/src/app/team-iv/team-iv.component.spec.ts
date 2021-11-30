import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamIvComponent } from './team-iv.component';

describe('TeamIvComponent', () => {
  let component: TeamIvComponent;
  let fixture: ComponentFixture<TeamIvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamIvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
