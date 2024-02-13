import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { UploadNotesComponent } from './upload-notes/upload-notes.component';


@NgModule({
  declarations: [
    StaffComponent,
    UploadNotesComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
