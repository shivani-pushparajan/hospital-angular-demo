import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../page.service';
import { Patient } from '../patient';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
 // name:String;
 patientId=0;
 show = false;
 patients: Patient[];
  constructor(private service: PageService) { }
  ngOnInit() {}
  getAllPatients() {
    this.show = true;
    console.log('Entered TS Component');
    this.service.getAllPatients().subscribe((data: Patient[]) => {
      this.patients = data;
      console.log(this.patients);
    });
  }

  deletePatient(patientId)   {
    console.log('Entered Delete TS');
    console.log(patientId);
    this.service.deletePatient(patientId).subscribe(
      data => {
        console.log('Patient Deletion successful' + data);
        this.fetchData();
      },
      err => {
        console.log(err);
      }
    );
  }

  fetchData()
  {
    this.service.getAllPatients().subscribe((data: Patient[]) => {
      this.patients = data;
      console.log(this.patients);
    })
  }

  updatePatient( patientId: number, patientName: string, password: string)
  {
    this.service.updatePatient({patientId, patientName, password} as Patient).subscribe(
      data =>       {
console.log(data);
      },
      err =>        {
console.log(err);
      }
    );
  }
}
