import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'http://localhost:8089'; // replace with your API URL

  constructor(private http: HttpClient) { }



  createImage(image: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/images`, image);
  }

  // other methods to handle other operations can go here
}
