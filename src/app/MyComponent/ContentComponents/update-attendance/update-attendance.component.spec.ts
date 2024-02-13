import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAttendanceComponent } from './update-attendance.component';

describe('UpdateAttendanceComponent', () => {
  let component: UpdateAttendanceComponent;
  let fixture: ComponentFixture<UpdateAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAttendanceComponent]
    });
    fixture = TestBed.createComponent(UpdateAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
