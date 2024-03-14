

// job-offer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddJobOfferServiceService {
  private apiUrl = 'http://localhost:8089/offres-emploi';  // URL to your backend API

  constructor(private http: HttpClient) { }

  addJobOffer(jobOffer: any): Observable<any> {
    return this.http.post(this.apiUrl, jobOffer);
  }
}
