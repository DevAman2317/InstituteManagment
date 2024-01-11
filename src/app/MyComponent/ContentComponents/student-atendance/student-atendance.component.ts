import { Component } from '@angular/core';
import { ChartModule,Chart } from 'angular-highcharts';
import { ViewChild, TemplateRef } from '@angular/core';
import { SharedService } from '../../../services/shared.service';


@Component({
  selector: 'app-student-atendance',
  templateUrl: './student-atendance.component.html',
  styleUrls: ['./student-atendance.component.css']
})
export class StudentAtendanceComponent {

  constructor() {
    this.studentSide = {} as TemplateRef<any>; // You can initialize it with some default value if needed
  }
  @ViewChild('studentSide') studentSide: TemplateRef<any>;


  chart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Attendance Overview'
    },
    series: [{
      name: 'Attendance',
      data: [
        { name: 'Present', y: 80 },
        { name: 'Absent', y: 10 },
        { name: 'Leave', y: 5 }
      ]
    }]
  } as Highcharts.Options); // Specify the type explicitly
}
