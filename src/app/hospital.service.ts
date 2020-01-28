import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private authenticateUrl: string;
  username: string;
  constructor(private httpClient: HttpClient) {
    this.authenticateUrl = 'http://localhost:8080/authenticate';
  }

  public setUsername(name: string) {
    this.username = name;
  }
 
  public authenticateUser(user: User): Observable<number> {
    return this.httpClient.post<number>(this.authenticateUrl, user);
  }
}
