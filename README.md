# Sample App

Sample ng9 app, using a reactive form.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Test Data

In `create-account.component.ts` you can set the `userEmail` variable. For testing, I've set this to `2`.

User ID | Validation Code
------------ | -------------
1 | 123456
2 | 789101

## Requirements

```
Design an application which allows a user to create a new password for their account.

The user should have a verification code that is valid, as well as only allowing to click 'create account' once the password has met all the validation criteria.

The password page should follow the designs attached, and use the assets provided.

It should be a responsive page, for desktop and mobile, screenshots of both pages have been provided.

In the screenshots, this is part of a 3 part user flow. The user flow details and graphic can be ignored.

Use angular 8 or 9 as a framework for developing the application. There should be unit tests to cover the data layer and validation of the app.

 

As a user, I can enter a validation code

As a user, I can enter a new password

As a user, I see grey tick boxes beside each acceptance critera until that critera is met

As a user, as each acceptace critera is fulfilled, the tick turns green to show that I have met it

As a user, I must enter

- at least 8 characters

- at least one upper and one lower case letter

- at least one number

- at least one special character

As a user, Create Account is not active until all the acceptance criteria for a password is met

As a user, I will be shown an error though a red textbox highlight and message if my verification code is invalid after I click Create Account

As a user, when the verification code and password is valid, I am taken to a new screen that says success.

 

The task will be looked at for

- Use of Angular

- Splitting of concerns in the project (UI, service, data layers etc)

- Unit tests

- CSS

- Responsivness

- Artist license on showing errors to the user

- Coding standards, naming conventions etc

- Git commit history

```

