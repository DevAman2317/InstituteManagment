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


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent,
    StudentAtendanceComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
