import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudApplicationComponent } from './stud-application.component';

describe('StudApplicationComponent', () => {
  let component: StudApplicationComponent;
  let fixture: ComponentFixture<StudApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudApplicationComponent]
    });
    fixture = TestBed.createComponent(StudApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
