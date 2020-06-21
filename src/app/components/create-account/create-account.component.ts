import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { User } from '../../shared/datatypes/user';
import { CustomValidator } from '../../shared/classes/validators';
import { CreateAccountService } from '../../services/create-account.service';
import { MessagingService } from '../../services/messaging.service';

@Component({
  selector: 'app-create',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  // injects necessary dependencies
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private createAccount: CreateAccountService,
    private messagingService: MessagingService
  ) {
    this.createPasswordForm = this.createForm();
  }

  /*
    TODO: email param to be replaced with Observable from
    previous step in flow
  */
  userEmail = 2; // by id

  currentUser: any;

  // creates the password form
  public createPasswordForm: FormGroup;

  // establishes the decorators for toggling the password visibility
  @ViewChild("passwordField") input: ElementRef;
  @ViewChild("toggleButton") toggle: ElementRef

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  /*
    At the moment, this is only triggering an alert.
    It would be replaced with a better flow, i.e. a dialog
    for informing the user a new verification code had
    been resent.
  */
  resendCode(): void {
    this.messagingService.success('Verification code has resent, please check the email account you\'ve provided to us.', false);
  }

  /*
    Function of type FormGroup, this defines the structure and validation
    for the form fields
  */
  createForm(): FormGroup {
    return this.fb.group(
      {
        verificationCode: [
          null,
          Validators.compose([
            Validators.required,
            CustomValidator.patternValidator(/^[0-9]*$/, {
              isNumeric: true
            }),
            Validators.minLength(6)
          ])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidator.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidator.patternValidator(/^(?=.*[a-z])(?=.*[A-Z]).*$/, {
              hasUppercaseAndLowercase: true
            }),
            // check whether the entered password has one of the special characters specified
            CustomValidator.patternValidator(
              /^(?=.*[&!@%£]).*$/, {
              hasSpecialCharacters: true
            }),
            // check overall password validity conforms to ruleset
            CustomValidator.patternValidator(
              /^[a-zA-Z0-9&!@%£]{8,}$/, {
              overallValidity: true
            }),
            Validators.minLength(8)
          ])
        ]
      }
    );
  }

  /*
    used purely for the password toggle
    Rationale: I had created an input field component for
    all input fields, however the configuration grew and the
    component became complex. In a larger system, I would using
    SRP, create a component per field types, i.e. simple field like
    pure text fields which have simple validation mechanisms, and a
    separate one for passwords for example. This is why I have left
    this as part of the Create Password component
  */
  toggleVisibility(): void {
    if(this.input.nativeElement.type === 'password'){

      this.input.nativeElement.type = 'text';
      this.toggle.nativeElement.classList.add('hide');
    } else {

      this.input.nativeElement.type = 'password';
      this.toggle.nativeElement.classList.remove('hide');
    }
  }

  private loadCurrentUser(){
    this.createAccount.getAccount(this.userEmail)
        .pipe(first())
        .subscribe(currentUser => this.currentUser = currentUser);
  }

  // Action for the Form Submission
  submitCreatePasswordForm(): void {

    this.messagingService.clearAllMessages();

    if(this.createPasswordForm.value.verificationCode === this.currentUser.code){
      // TODO: Another Service Call to complete the registration
      this.currentUser.verified = true;
      this.createAccount.completeRegistration(this.currentUser);
      this.router.navigate(['/success']);

    } else {
      this.messagingService.error('Sorry, the verification code does not match the one we\'ve sent you, please re-enter it, or resend a new one.', false);
    }
  }
}
