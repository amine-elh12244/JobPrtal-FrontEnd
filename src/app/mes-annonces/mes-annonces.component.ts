import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../Services/authentification.service";
import {Router} from "@angular/router";
import {ViewCountServiceService} from "../Services/view-count-service.service";
import {EmployeurService} from "../Services/employeur.service";

@Component({
  selector: 'app-mes-annonces',
  templateUrl: './mes-annonces.component.html',
  styleUrl: './mes-annonces.component.scss'
})
export class MesAnnoncesComponent implements OnInit{

  offers! : Array<any>;
  CurrentPage : number = 0;
  pageSize : number = 7;
  totalPages : number = 0;
  errorMessage!  : String;
  searchFormGroup! : FormGroup;
  CurrentAction : string = "all";



  constructor(private authService : AuthenticationService,private employeurService:EmployeurService,private  viewCountServiceService : ViewCountServiceService, private fb : FormBuilder
        , private router :Router) { }


    handleViewOffer(id: number): void {
        this.viewCountServiceService.incrementViewCount(id);
    }

    getViewCount(id: number): number {
        return this.viewCountServiceService.getViewCount(id);
    }

  ngOnInit(): void {

    this.handleGetAPageProcuts();

  }

  handleGetAPageProcuts(){
      const employerId =  Number(this.authService.authenticatedEmployerId)
      this.employeurService.getJobOffersByEmployerId(employerId).subscribe(
          data => {
              this.offers = data;
          },
          error => {
              console.error('Error:', error);
          }
      );
  }

  }



