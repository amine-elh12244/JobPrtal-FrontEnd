
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomaineServiceService {
  private apiUrl1 = 'http://localhost:8089/domaines'; // replace with your API URL
  private apiUrl = 'http://localhost:8089'; // replace with your API URL


  constructor(private http: HttpClient) { }

  createDomaine(domaine: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/domaines`, domaine);
  }

  getDomaine(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl1}/${name}`);
  }

  public getDomaines(){
    return this.http.get(this.apiUrl+"/domaines");
  }

  // other methods to handle other operations can go here
}
