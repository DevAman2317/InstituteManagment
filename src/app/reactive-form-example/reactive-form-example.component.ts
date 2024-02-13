import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css']
})
export class ReactiveFormExampleComponent {
  reactiveForm=new FormGroup({
    FName:new FormControl(''),
    contact:new FormControl('')
  })

  getdata(){
      console.log(this.reactiveForm.value)
  }
  resetData(data:FormGroup){
      data.reset()
  }
}
