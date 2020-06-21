import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from '../../shared/datatypes/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

/*
  TODO: Extrapolate out to Observable/Service to dynamically set
  the Steps based on the progress in the Flow, as opposed to overriding
  based on the User Path
*/

  breadcrumbs: Breadcrumb[];
  completeSteps: number;

  currentPath = window.location.pathname;

  constructor(
    private router: Router
  ) {
    this.breadcrumbs = [
      {
        number: 1,
        label: 'Your Details',
        complete: true,
        path: '/details'
      },
      {
        number: 2,
        label: 'Verification',
        complete: true,
        path: '/verify'
      },
      {
        number: 3,
        label: 'Create password',
        complete: false,
        path: '/create'
      }
    ]

  }

  ngOnInit(): void {
    if(this.currentPath === '/success'){
      this.breadcrumbs[2].complete = true;
    }
    this.countCompleteSteps();
  }

  countCompleteSteps(): void {
    const count = this.breadcrumbs.filter((obj) => obj.complete === true).length;
    this.completeSteps = count;
  }
}
