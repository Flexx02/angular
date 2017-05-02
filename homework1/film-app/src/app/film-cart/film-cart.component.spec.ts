import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCartComponent } from './film-cart.component';

describe('FilmCartComponent', () => {
  let component: FilmCartComponent;
  let fixture: ComponentFixture<FilmCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
