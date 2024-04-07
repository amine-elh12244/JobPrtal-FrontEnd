import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../Services/authentification.service";
import {EmployeurService} from "../Services/employeur.service";

@Component({
  selector: 'app-monprofile',
  templateUrl: './monprofile.component.html',
  styleUrl: './monprofile.component.scss'
})
export class MonprofileComponent  implements OnInit {
  utilisateur: any = {};
  showPassword = false;

  constructor(private router: Router,private authService : AuthenticationService,private employeurService:EmployeurService) { }

  ngOnInit(): void {
    const id = Number(this.authService.authenticatedEmployerId) ;
    this.employeurService.getEmployeur(id).subscribe(
      employeur => {
        this.utilisateur = employeur;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  modifierProfil(): void {
    this.router.navigate(['/Employeur/Monprofile/Edit']);
  }
}
