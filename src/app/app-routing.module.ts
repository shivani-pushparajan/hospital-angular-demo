import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

const routes: Routes = [
  { path: 'page1', component: Page1Component, pathMatch: 'full' },
  { path: 'page2', component: Page2Component, pathMatch: 'full' },
  { path: 'page3', component: Page3Component, pathMatch: 'full' },
  { path: 'page4', component: Page4Component, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'patient', component: PatientComponent, pathMatch: 'full' },
  { path: 'doctor', component: DoctorComponent, pathMatch: 'full' },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
