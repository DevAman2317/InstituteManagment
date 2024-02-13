import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ViewChild, TemplateRef } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartModule } from 'angular-highcharts';


@Component({
  selector: 'app-student-atendance',
  templateUrl: './student-atendance.component.html',
  styleUrls: ['./student-atendance.component.css']
})
export class StudentAtendanceComponent {

@Input() childvarName:any
@Input() absDayR:any
@Input() leavesR:any

@Output() data=new EventEmitter();

collectdata:string='' 
send(){
  this.data.emit(` ${this.collectdata} 'aman'`)
  // console.log(this.collectdata)
}




  constructor() {
    this.studentSide = {} as TemplateRef<any>; // You can initialize it with some default value if needed
   
  }
  @ViewChild('studentSide') studentSide: TemplateRef<any>;


  title='attendance chart'

  lineChart= new Chart({

  })

  pieChart=new Chart({
    chart:{
      type:'pie',
      plotShadow:false,
      height:'300'
    }, 
    credits:{
      enabled:false,
    },
    plotOptions:{
      pie:{
        innerSize:'80%',
        borderWidth:10,
        borderColor:'', 
        slicedOffset:10,
        dataLabels:{
          connectorWidth:0,
        }
      }
    },
    title:{
      verticalAlign:'middle',
      floating:true,
      text:'Attendance', 

    },
    legend:{
      enabled:false,
    },
    series:[
      {
      type:'pie',
      data:[
        {name:'Present',y:10,color:'lightgreen'},
        {name:'Apsent',y:2,color:'pink'},
        {name:'Leaves',y:3,color:'lightblue'},
      ],
    }, 
  ],
  })



}

