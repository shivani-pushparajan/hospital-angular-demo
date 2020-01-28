import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private hospitalService:HospitalService) { }
 // username:String=this.hospitalService.username;
  
  ngOnInit() {
    
  }

}
