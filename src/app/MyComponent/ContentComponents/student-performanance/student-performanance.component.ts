import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-performanance',
  templateUrl: './student-performanance.component.html',
  styleUrls: ['./student-performanance.component.css']
})
export class StudentPerformananceComponent {
  studid:any 
constructor(private router:ActivatedRoute){
  router.params.subscribe((res)=>this.studid=res['id'])
}
}
