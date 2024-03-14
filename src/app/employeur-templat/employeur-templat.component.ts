import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import $ from "jquery";

@Component({
  selector: 'app-employeur-templat',
  templateUrl: './employeur-templat.component.html',
  styleUrl: './employeur-templat.component.scss'
})
export class EmployeurTemplatComponent implements OnInit {
  title = 'Job-Portal-Front';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      $("#btn").click(function () {
        $(".sidebar").toggleClass("open");
        menuBtnChange();
      });

      $(".bx-search").click(function () {
        $(".sidebar").toggleClass("open");
        menuBtnChange();
      });

      function menuBtnChange() {
        if ($(".sidebar").hasClass("open")) {
          $("#btn").removeClass("fa-bars").addClass("fa-ellipsis-v");
        } else {
          $("#btn").removeClass("fa-ellipsis-v").addClass("fa-bars");
        }
      }
    }
  }
}

