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
export class JobOffersService {

  public host:String="http://localhost:8089"


  constructor(private http:HttpClient) { }



  public getVilles(){
    console.log('URL:', this.host+"/villes"); // Debugging log to check the URL
    return this.http.get(this.host+"/villes");
  }

    public getOffers(){
        console.log('URL:', this.host+"/offres-emploi"); // Debugging log to check the URL
        return this.http.get(this.host+"/offres-emploi");
    }

  public getOffer(id: any){
    console.log('URL:', this.host+"/offres-emploi/"+id); // Debugging log to check the URL
<<<<<<< HEAD
    return this.http.get<JobOffer>(this.host+"/offres-emploi/"+id);
=======
    return this.http.get(this.host+"/offres-emploi/"+id);
>>>>>>> origin/master
  }

    searchOffresEmploi(ville: string, niveauEtude: string, domaine: string, keyName: string)   {
        let url = `${this.host}/offres-emploi/search`;

        if (ville && niveauEtude && domaine && keyName) {
            url += `/ville-niveauEtude-domaine-keyName?ville=${ville}&niveauEtude=${niveauEtude}&domaine=${domaine}&keyName=${keyName}`;
        } else if (ville && niveauEtude && domaine) {
            url += `/ville-niveauEtude-domaine?ville=${ville}&niveauEtude=${niveauEtude}&domaine=${domaine}`;
        } else if (ville && domaine && keyName) {
            url += `/ville-domaine-keyName?ville=${ville}&domaine=${domaine}&keyName=${keyName}`;
        } else if (ville) {
            url += `/ville?ville=${ville}`;
        } else if (niveauEtude) {
            url += `/niveauEtude?niveauEtude=${niveauEtude}`;
        } else if (domaine) {
            url += `/domaine?domaine=${domaine}`;
        } else if (keyName) {
            url += `/keyName?keyName=${keyName}`;
        }

        return this.http.get(url);
    }
}
