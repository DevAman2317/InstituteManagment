import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './staff.component';
import { UploadNotesComponent } from './upload-notes/upload-notes.component';

const routes: Routes = [{ path: '', component: StaffComponent,
  children:[
    {path:'uploadNotes', component:UploadNotesComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
