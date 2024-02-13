import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudHomeComponent } from './stud-home.component';

describe('StudHomeComponent', () => {
  let component: StudHomeComponent;
  let fixture: ComponentFixture<StudHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudHomeComponent]
    });
    fixture = TestBed.createComponent(StudHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
