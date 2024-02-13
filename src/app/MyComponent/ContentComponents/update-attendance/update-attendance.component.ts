import { Component, Input } from '@angular/core';
import{FormsModule, NgForm,NgModel} from '@angular/forms';
import { secondService } from 'src/app/services/secondservice';
@Component({
  selector: 'app-update-attendance',
  templateUrl: './update-attendance.component.html',
  styleUrls: ['./update-attendance.component.css']
})
export class UpdateAttendanceComponent {
constructor(private secondServ:secondService){
  
}
 printtext=this.secondServ.showText()

 
parentvarName:string =''
absDay:string=''
leaves:string=''
recieveName:string=''
getName(name:any){
  this.recieveName=name;
  console.log(name)
}




getFormsData(FormData:NgForm){
  console.log(FormData.value )
}
resetData(FormData:NgForm){
  FormData.reset()
}
updateFormData(data:NgForm){
   let updataValue={
    id : 'Career Infotech',
    name: 'Aman ' ,
    presentDays:23,
    absentDays:21,
  }
  data.setValue(updataValue)


  
}

}

