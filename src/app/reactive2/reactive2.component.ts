import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive2',
  templateUrl: './reactive2.component.html',
  styleUrls: ['./reactive2.component.css']
})
export class Reactive2Component {
registrationForm=new FormGroup({
  userName: new FormControl('',[Validators.required, 
                                Validators.pattern('[A-Z a-z 0-9]+$')]), 

  emailId: new FormControl('',Validators.required), 
  
  password:new FormControl('',[Validators.required,
                              Validators.pattern('[A-Z a-z 0-9 @ #]+$'),
                              Validators.minLength(4),
                              Validators.maxLength(12)])
})

getdata(){
  console.log(this.registrationForm.value) 
}


}
