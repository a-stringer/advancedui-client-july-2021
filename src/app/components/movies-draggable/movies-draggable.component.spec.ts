import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDraggableComponent } from './movies-draggable.component';

describe('MoviesDraggableComponent', () => {
  let component: MoviesDraggableComponent;
  let fixture: ComponentFixture<MoviesDraggableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesDraggableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
