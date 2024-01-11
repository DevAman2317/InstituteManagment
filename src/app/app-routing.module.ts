import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './MyComponent/home-page/home-page.component';
import { SignUpComponent } from './MyComponent/ContentComponents/sign-up/sign-up.component';
import { SignInComponent } from './MyComponent/ContentComponents/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component:HomePageComponent },
  { path: 'signIn', component:SignInComponent },
  { path: 'signUp', component:SignUpComponent },
  { path: 'homePage', component:HomePageComponent },
  { path: 'studHome', component:HomePageComponent },
  

  // Add more route configurations as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
