import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPerformananceComponent } from './student-performanance.component';

describe('StudentPerformananceComponent', () => {
  let component: StudentPerformananceComponent;
  let fixture: ComponentFixture<StudentPerformananceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentPerformananceComponent]
    });
    fixture = TestBed.createComponent(StudentPerformananceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
