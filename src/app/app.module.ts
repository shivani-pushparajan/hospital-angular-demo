import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageService } from './page.service';
import { LoginComponent } from './login/login.component';
import { HospitalService } from './hospital.service';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    LoginComponent,
    HeaderComponent,
    NavigationComponent,
    PatientComponent,
    DoctorComponent,
    Page3Component,
    Page4Component
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule, HttpClientModule, BrowserAnimationsModule, ReactiveFormsModule],
  providers: [PageService, HospitalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
