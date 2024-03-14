import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeurService {
  private apiUrl = 'http://localhost:8089/employeurs'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getJobOffersByEmployerId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
