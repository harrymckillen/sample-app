import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { YourDetailsComponent } from './components/your-details/your-details.component';
import { SuccessComponent } from './components/success/success.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcrumbStepComponent } from './components/breadcrumb-step/breadcrumb-step.component';
import { MessagesComponent } from './components/messages/messages.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService }  from './mock/fake-backend.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateAccountComponent,
    YourDetailsComponent,
    SuccessComponent,
    BreadcrumbStepComponent,
    BreadcrumbComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      FakeBackendService, { dataEncapsulation: false }
    )
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
