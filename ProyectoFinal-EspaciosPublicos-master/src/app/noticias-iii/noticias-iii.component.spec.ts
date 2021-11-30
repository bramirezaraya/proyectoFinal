import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasIiiComponent } from './noticias-iii.component';

describe('NoticiasIiiComponent', () => {
  let component: NoticiasIiiComponent;
  let fixture: ComponentFixture<NoticiasIiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasIiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
