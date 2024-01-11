import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAtendanceComponent } from './student-atendance.component';

describe('StudentAtendanceComponent', () => {
  let component: StudentAtendanceComponent;
  let fixture: ComponentFixture<StudentAtendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentAtendanceComponent]
    });
    fixture = TestBed.createComponent(StudentAtendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
