import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Patient } from "./patient";
@Injectable({
  providedIn: "root"
})
export class PageService {
  patientId: number;
  private getUrl: string;
  private createUrl: string;
  private updateUrl: string;
  private deleteUrl: string;
  constructor(private httpClient: HttpClient) {
    this.getUrl = "http://localhost:8080/patients/view";
    this.createUrl = "http://localhost:8080/patients/create";
    this.updateUrl = "http://localhost:8080/patients/update";
    this.deleteUrl = "http://localhost:8080/patients/delete/";
  }

  public getAllPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.getUrl);
  }
  public createPatient(patient: Patient) {
    return this.httpClient.post(this.createUrl, patient, {responseType: 'text'});
  }
  public updatePatient(patient: Patient) {
    return this.httpClient.put(this.updateUrl, patient, {responseType: 'text'});
  }
  public deletePatient(patientId: number) {
    return this.httpClient.put(this.deleteUrl.concat(patientId.toString()), patientId, {responseType: 'text'});
  }
}
