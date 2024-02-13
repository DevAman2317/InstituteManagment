import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './MyComponent/home-page/home-page.component';
import { SideBarComponent } from './MyComponent/Sidebar/side-bar/side-bar.component';
import { HeaderComponent } from './MyComponent/header/header.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { SignUpComponent } from './MyComponent/ContentComponents/sign-up/sign-up.component';
import { SignInComponent } from './MyComponent/ContentComponents/sign-in/sign-in.component';
import { ChartModule } from 'angular-highcharts';

import { StudentAtendanceComponent } from './MyComponent/ContentComponents/student-atendance/student-atendance.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstPipePipe } from './myPipes/first-pipe.pipe';
import { UpdateAttendanceComponent } from './MyComponent/ContentComponents/update-attendance/update-attendance.component';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { Reactive2Component } from './reactive2/reactive2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ResultComponent } from './result/result.component';
import { ContactComponent } from './contact/contact.component';
import { OnlineExamComponent } from './online-exam/online-exam.component';
import { StudApplicationComponent } from './stud-application/stud-application.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { StudHomeComponent } from './stud-home/stud-home.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent,
    StudentAtendanceComponent,
    FirstPipePipe,
    UpdateAttendanceComponent,
    ReactiveFormExampleComponent,
    Reactive2Component,
    PageNotFoundComponent,
    AboutComponent,
    ResultComponent,
    ContactComponent,
    OnlineExamComponent,
    StudApplicationComponent,
    HomeContentComponent,
    StudHomeComponent,
    LeaveApplicationComponent,

    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule
  
    
  ],
  providers: [
    {
      provide:LocationStrategy,
      useClass:HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
