import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './MyComponent/home-page/home-page.component';
import { SignUpComponent } from './MyComponent/ContentComponents/sign-up/sign-up.component';
import { SignInComponent } from './MyComponent/ContentComponents/sign-in/sign-in.component';
import { StudentPerformananceComponent } from './MyComponent/ContentComponents/student-performanance/student-performanance.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ResultComponent } from './result/result.component';
import { ContactComponent } from './contact/contact.component';
import { StudentAtendanceComponent } from './MyComponent/ContentComponents/student-atendance/student-atendance.component';
import { OnlineExamComponent } from './online-exam/online-exam.component';
import { StudApplicationComponent } from './stud-application/stud-application.component';
import { SideBarComponent } from './MyComponent/Sidebar/side-bar/side-bar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { StudHomeComponent } from './stud-home/stud-home.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { staffGuard } from './staff.guard';







const routes: Routes = [
  { path: '',component:HomePageComponent},
  {path:'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.adminModules)},
  { path: 'signIn', component:SignInComponent },
   
  {path:'studHome',component:StudHomeComponent,
  children:[
    {path:'',component:StudentAtendanceComponent},
    {path:'studPerformance/:id',component:StudentPerformananceComponent},
    {path:'online',component:OnlineExamComponent},
    {path:'application',component:LeaveApplicationComponent}
  ]


  },

  { path: 'homePage', component:HomePageComponent,
    children:[
      {path:'',component:HomeContentComponent}


    ]

  },
  
  {path:'about',component:AboutComponent},
  {path:'result',component:ResultComponent},
  {path:'contact',component:ContactComponent},
  { path: 'staff', loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule), canActivate:[staffGuard] },
  {path:'**',component:PageNotFoundComponent},

  

  // Add more route configurations as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
