import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingQuizComponent } from './on-going-quiz.component';

describe('OnGoingQuizComponent', () => {
  let component: OnGoingQuizComponent;
  let fixture: ComponentFixture<OnGoingQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnGoingQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnGoingQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
