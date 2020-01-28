import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component implements OnInit {
  constructor(private pageService: PageService) {}

  onClickSubmit(patientId: number) {
    console.log('Entered TS');
    console.log(patientId);
    this.pageService.deletePatient(patientId).subscribe(
      data => {
        console.log('Patient Deletion successful' + data);
      },
      err => {
        console.log(err);
      }
    );
  }
  ngOnInit() {
  }

}
