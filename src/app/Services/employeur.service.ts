import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
<<<<<<< HEAD
import {JobOffer} from "../model/JobOffer";
=======
>>>>>>> origin/master

@Injectable({
  providedIn: 'root'
})
export class EmployeurService {
<<<<<<< HEAD
  private apiUrl = 'http://localhost:8089/employeurs/'; // Replace with your API URL
  private jobOffersUrl = 'http://localhost:8089/offres-emploi/'; // Replace with your job offers API URL

=======
  private apiUrl = 'http://localhost:8089/employeurs'; // Replace with your API URL
>>>>>>> origin/master

  constructor(private http: HttpClient) {}

  getJobOffersByEmployerId(id: number): Observable<any> {
<<<<<<< HEAD
    console.log('URL:', this.apiUrl+id); // Debugging log to check the URL
    return this.http.get(this.apiUrl+id);
  }

  getEmployeur(id: number): Observable<any> {
    return this.http.get(this.apiUrl + id);
  }

  deleteJobOffer(id: number): Observable<any> {
    return this.http.delete(this.jobOffersUrl + id);
  }

  updateJobOffer(jobOffer: JobOffer): Observable<void> {
    // replace with your actual API call
    if (!jobOffer || jobOffer.id === null || jobOffer.id === undefined) {
      throw new Error('Job offer or job offer id is undefined');
    }
    return this.http.put<void>(this.jobOffersUrl+`${jobOffer.id}`, jobOffer);
  }

  updateEmployeur(id: number, employeur: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}`, employeur);
  }


=======
    return this.http.get(`${this.apiUrl}/${id}`);
  }
>>>>>>> origin/master
}
