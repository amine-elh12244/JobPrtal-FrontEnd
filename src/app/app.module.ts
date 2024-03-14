import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobOffersComponent } from './job-offers/job-offers.component';
import {HttpClient, HttpClientModule, withFetch} from "@angular/common/http";
import { LogInComponent } from './auth/log-in/log-in.component';
import { AddJobOfferComponent } from './add-job-offer/add-job-offer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { JobOfferDetailComponent } from './job-offer-detail/job-offer-detail.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { EmployeurTemplatComponent } from './employeur-templat/employeur-templat.component';
import { MesAnnoncesComponent } from './mes-annonces/mes-annonces.component';


@NgModule({
  declarations: [
    AppComponent,
    JobOffersComponent,
    LogInComponent,
    AddJobOfferComponent,
    JobOfferDetailComponent,
    EmployeurTemplatComponent,
    MesAnnoncesComponent
  ],
  imports: [
   MatProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
      ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
