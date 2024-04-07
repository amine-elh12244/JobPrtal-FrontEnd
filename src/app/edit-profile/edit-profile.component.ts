import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../Services/authentification.service";
import {EmployeurService} from "../Services/employeur.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent    implements OnInit {

  public successMessage: string | null = null;

  utilisateur = {
    nom: '',
    prenom: '',
    username: '',
    email: '',
    role: '',
    telephone: '',
    password: ''
  };
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

  handleModification(): void {
    const id = Number(this.authService.authenticatedEmployerId);
    this.employeurService.updateEmployeur(id, this.utilisateur).subscribe(
      response => {
        console.log('User updated successfully:', response);
        this.successMessage = 'Employeur updated successfully';

        // Optionally, navigate to another page after successful update
        this.router.navigate(['//Employeur/Monprofile']);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
