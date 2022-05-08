import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransitionComponent } from './new-transition.component';

describe('NewTransitionComponent', () => {
  let component: NewTransitionComponent;
  let fixture: ComponentFixture<NewTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTransitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
