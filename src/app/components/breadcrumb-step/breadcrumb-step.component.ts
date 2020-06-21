import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-step',
  templateUrl: './breadcrumb-step.component.html',
  styleUrls: ['./breadcrumb-step.component.scss']
})
export class BreadcrumbStepComponent implements OnInit {


  @Input() number: String;
  @Input() label: String;
  @Input() complete: Boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
