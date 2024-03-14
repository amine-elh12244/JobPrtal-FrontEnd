import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobOffersComponent} from "./job-offers/job-offers.component";
import {AddJobOfferComponent} from "./add-job-offer/add-job-offer.component";
import {LogInComponent} from "./auth/log-in/log-in.component";
import {JobOfferDetailComponent} from "./job-offer-detail/job-offer-detail.component";
import {EmployeurTemplatComponent} from "./employeur-templat/employeur-templat.component";
import {AuthenticationGuard} from "./guards/auth.guard";
import {MesAnnoncesComponent} from "./mes-annonces/mes-annonces.component";

const routes: Routes = [
  { path: 'LogIn',  component: LogInComponent },

  { path: '',  component: LogInComponent },



  { path: 'Employeur',  component: EmployeurTemplatComponent  , canActivate  : [AuthenticationGuard],

    children:[
      { path: 'JobOffers',  component: JobOffersComponent },
      { path: 'AddJobOffer',  component: AddJobOfferComponent },
      { path: 'JobOffers/:id', component: JobOfferDetailComponent },
      { path: 'MesAnnonces', component: MesAnnoncesComponent },






    ]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
