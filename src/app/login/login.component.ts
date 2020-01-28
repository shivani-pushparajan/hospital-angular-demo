import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalService } from '../hospital.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  roleId: number;
  constructor(
    private router: Router,
    private hospitalService: HospitalService
  ) {}
  Login(username, password) {
    this.hospitalService
      .authenticateUser({ username, password } as User)
      .subscribe((data: number) => {
        this.roleId = data;
        console.log('Role ID ' + this.roleId);
      });
    if (this.roleId === 1) {
      console.log('navigation');
      this.hospitalService.setUsername(username);
      this.router.navigate(['/patient']);
    } else if (this.roleId === 2) {
      console.log('navigation');
      this.hospitalService.setUsername(username);
      this.router.navigate(['/doctor']);
    }
  }
  ngOnInit() {}
}
