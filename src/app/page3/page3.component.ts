import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  constructor(private pageService: PageService) {}
  patient: Patient;
  ngOnInit() {}

  onClickSubmit(patientId, patientName, password, accountNumber, bankName, joiningDate) {
    console.log('Entered TS');
    console.log(this.patient);
    this.pageService.updatePatient({patientId, patientName, password, accountNumber, bankName, joiningDate} as Patient).subscribe(
      data => {
        console.log('Patient Updation successful' + data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
