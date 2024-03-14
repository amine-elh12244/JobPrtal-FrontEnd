import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {JobOffersService} from "../Services/job-offers.service";


@Component({
  selector: 'app-job-offer-detail',
  templateUrl: './job-offer-detail.component.html',
  styleUrls: ['./job-offer-detail.component.scss']
})
export class JobOfferDetailComponent implements OnInit {
  id!: any;
  jobOffer: any;

  constructor(
      private route: ActivatedRoute,
      private jobOfferService: JobOffersService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.jobOfferService.getOffer(this.id).subscribe(jobOffer => {
      this.jobOffer = jobOffer;
    });
  }
}
