import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-details',
  templateUrl: './your-details.component.html',
  styleUrls: ['./your-details.component.scss']
})
export class YourDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitDetailsForm(form): void {
    this.router.navigate(['/create']);
  }
}
