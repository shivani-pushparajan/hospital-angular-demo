import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../page.service';
import { Patient } from '../patient';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidatePassword } from '../validator/custom.validator';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  constructor(private pageService: PageService, private formBuilder: FormBuilder) {}

  patient: Patient;
  createPatientForm;
  submitted = false;
  // createPatientForm = new FormGroup({
  //   patientName: new FormControl(""),
  //   password: new FormControl(""),
  //   accountNumber: new FormControl(""),
  //   bankName: new FormControl(""),
  //   joiningDate: new FormControl("")
  // });

  ngOnInit() {
    this.createPatientForm = this.formBuilder.group({
      patientName: ['', Validators.required],
      password: ['', Validators.required, ValidatePassword],
      accountNumber: ['', Validators.required],
      bankName: ['', [Validators.required]],
      joiningDate: ['', [Validators.required]],
  });
  }

  onClickSubmit() {
    this.submitted = true;
    if (this.createPatientForm.invalid)    {
      return;
    }
    const patientId = 0;
    console.log('Entered TS');
    this.patient = this.createPatientForm.value as Patient;
    // this.patient.patientName = this.createPatientForm.get('patientName').value;
    
    console.log(this.patient);
    this.pageService.createPatient(this.patient).subscribe(
      data => {
        console.log('Patient Creation successful' + data);
      },
      err => {
        console.log(err);
      }
    );
  }
 accountNumberValidator(control: FormControl)
  {
    return null;
  }
}
