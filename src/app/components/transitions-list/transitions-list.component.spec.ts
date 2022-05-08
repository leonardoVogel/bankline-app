import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionsListComponent } from './transitions-list.component';

describe('TransitionsListComponent', () => {
  let component: TransitionsListComponent;
  let fixture: ComponentFixture<TransitionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
