import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-online-exam',
  templateUrl: './online-exam.component.html',
  styleUrls: ['./online-exam.component.css']
})
export class OnlineExamComponent {
  mob:any;
  email:any;
  constructor(private routes:ActivatedRoute){
    this.routes.queryParams.subscribe(data=>{this.mob=data['mob'], this.email=data['email']})
    console.log(this.mob,this.email)
  }
}
