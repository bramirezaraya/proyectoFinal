import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalIComponent } from './principal-i.component';

describe('PrincipalIComponent', () => {
  let component: PrincipalIComponent;
  let fixture: ComponentFixture<PrincipalIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
