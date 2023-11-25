import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AuthenticationComponent, SignupComponent, LoginComponent],

  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    // BrowserAnimationsModule,
    // HeaderModule,
    // FooterModule,
    FormsModule,
    // ToastrModule.forRoot({
    //   positionClass: 'toast-top-center',
    //   preventDuplicates: true,
    // }),
  ],
  // providers: [{ provide: ToastrService }],
  exports: [AuthenticationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthenticationModule {}
