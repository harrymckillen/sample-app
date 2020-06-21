import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourDetailsComponent } from './components/your-details/your-details.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  { path: '', redirectTo: '/details', pathMatch: 'full'  },
  { path: 'details', component: YourDetailsComponent },
  { path: 'create', component: CreateAccountComponent },
  { path: 'success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
