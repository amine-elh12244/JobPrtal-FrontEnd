
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VilleServiceService {
  private apiUrl = 'http://localhost:8089/villes'; // replace with your API URL
   public host:String="http://localhost:8089"


  constructor(private http: HttpClient) { }

  createVille(ville: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/villes`, ville);
  }

  getVille(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${name}`);
  }

  public getVilles(){
    return this.http.get(this.host+"/villes");
  }

  // other methods to handle other operations can go here
}
