import {Component, OnInit} from '@angular/core';
import {JobOffersService} from "../Services/job-offers.service";
import {DomaineServiceService} from "../Services/domaine-service.service";
import {VilleServiceService} from "../Services/ville-service.service";
import { MatProgressSpinnerModule }  from '@angular/material/progress-spinner';
import {ViewCountServiceService} from "../Services/view-count-service.service";


@Component({
    selector: 'app-job-offers',
    templateUrl: './job-offers.component.html',
    styleUrls: ['./job-offers.component.scss']
})



export class JobOffersComponent implements OnInit {
    public JobOffers!: any;
    public villes!: any;
    public domaines!: any;
    yourListOfNiveau: string[] = ['Pas important ', 'Niveau Bac', 'Bac +2','Bac +3' ,'Bac +4','Bac +5'];

    // Add properties to bind to the search inputs
    ville = '';
    niveauEtude = '';
    domaine = '';
    keyName = '';
    isLoading = false;


    constructor(private  JobOffersService:JobOffersService,
                private domaineService: DomaineServiceService,
                private villeService: VilleServiceService,
                private  viewCountServiceService : ViewCountServiceService) {
    }

    ngOnInit(): void {
        this.OnDomaines();
        this.OnVilles();
        this.chercher();
    }

    OnVilles(): void {
        this.villeService.getVilles()
            .subscribe(data=>{
                    this.villes=data;
                },
                err=>{
                    console.log(err);
                })
    }

    OnDomaines(): void {
        this.domaineService.getDomaines()
            .subscribe(data=>{
                    this.domaines=data;
                },
                err=>{
                    console.log(err);
                })
    }

    OnGetOffers(v: any) {
        this.JobOffersService.getOffers()
            .subscribe(data=>{
                    this.JobOffers=data;
                },
                err=>{
                    console.log(err);
                })
    }

    // Add a method to call the search method from your service
    chercher() {
        this.isLoading = true;
        if (this.ville || this.niveauEtude || this.domaine || this.keyName) {
            this.JobOffersService.searchOffresEmploi(this.ville, this.niveauEtude, this.domaine, this.keyName).subscribe(JobOffers => {
                this.JobOffers = JobOffers;
                this.isLoading = false;
            });
        } else {
            this.JobOffersService.getOffers().subscribe(JobOffers => {
                this.JobOffers = JobOffers;
                this.isLoading = false;
            });
        }
    }

    incrementViewCount(id: number): void {
        this.viewCountServiceService.incrementViewCount(id);
    }
}
