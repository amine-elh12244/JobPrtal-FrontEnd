import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {AddJobOfferServiceService} from "../Services/add-job-offer-service.service";
import {ImageService} from "../Services/image.service";
import {DomaineServiceService} from "../Services/domaine-service.service";
import {VilleServiceService} from "../Services/ville-service.service";
import {AuthenticationService} from "../Services/authentification.service";
import {JobOffersService} from "../Services/job-offers.service";
import {JobOffer} from "../model/JobOffer";
import {EmployeurService} from "../Services/employeur.service";

@Component({
  selector: 'app-edit-job-offer',
  templateUrl: './edit-job-offer.component.html',
  styleUrl: './edit-job-offer.component.scss'
})

export class EditJobOfferComponent {

  public villes!: any  ;
  public domaines!: any;
  public successMessage: string | null = null;




    jobOffer: JobOffer = {
        id :   null,
        employeur: { id: null },
        domaine: { id: null },
        contrat: '',
        entreprise: '',
        Site_web: '',
        salaire: '',
        niveauEtude: '',
        titre: '',
        description: '',
        status: '',
        ville: { id: null },
        image: null
    };

  yourListOfContrats: string[] = ['CDI', 'CDD', 'Stage','Interim' ,'A discuter' /* ...other domaines... */];
  yourListOfNiveau: string[] = ['Pas important ', 'Niveau Bac', 'Bac +2','Bac +3' ,'Bac +4','Bac +5' /* ...other domaines... */];


  constructor(private jobOfferService: AddJobOfferServiceService ,
              private JobOffersService : JobOffersService ,
              private imageService : ImageService ,
              private domaineService: DomaineServiceService,
              private villeService: VilleServiceService,
              private authService : AuthenticationService,
              private route: ActivatedRoute,
              private EmployeurService : EmployeurService) { }

  ngOnInit(): void {

      const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.JobOffersService.getOffer(id).subscribe(
        jobOffer => {
           this.jobOffer = jobOffer;
           this.OnDomaines();
           this.OnVilles();
        },
        error => {
          console.error('Error:', error);

        }
      );
    }
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

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;

    if (target.files && target.files.length) {
      const file = target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        // Convert base64 string to a blob
        const base64Data = reader.result as string;
        const byteCharacters = atob(base64Data.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: file.type });

        // Append the blob to a FormData object
        const formData = new FormData();
        formData.append('file', blob, file.name);

        this.imageService.createImage(formData).subscribe(response => {
          console.log(response);
          // handle successful response here
        }, error => {
          console.error(error);
          // handle error here
        });
      };

      reader.readAsDataURL(file);
    }
  }

  onVilleChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedVilleName = target.options[target.selectedIndex].text;

    const selectedVille = this.villes.find((ville: any) => ville.nom === selectedVilleName);
    if (selectedVille) {
      this.jobOffer.ville = { id: selectedVille.id };
      console.log('Stored Ville ID:', this.jobOffer.ville);
    }
  }

  onDomaineChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedDomaineName = target.options[target.selectedIndex].text;

    const selectedDomaine = this.domaines.find((domaine: any) => domaine.nom === selectedDomaineName);
    if (selectedDomaine) {
      this.jobOffer.domaine = { id: selectedDomaine.id };
      console.log('Stored Domaine ID:', this.jobOffer.domaine);
    }
  }

  onSubmit(): void {
    if (!this.jobOffer) {
      console.error('Job offer is undefined');
      return;
    }

    if (!this.jobOffer.employeur) {
      this.jobOffer.employeur = { id: null };
    }

    this.jobOffer.employeur.id = Number(this.authService.authenticatedEmployerId);

    console.log('ID'+this.authService.authenticatedEmployerId)

    this.EmployeurService.updateJobOffer(this.jobOffer).subscribe(
      () => {
        console.log('Job offer updated successfully');
        this.successMessage = 'Job offer updated successfully';
      },
      error => {
        console.error('Error while updating job offer', error);
      }
    );
  }


}
