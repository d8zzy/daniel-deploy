import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {
  checkForSpecialChars,
  hasNumber,
  validateCapital,
} from 'src/app/shared/_helperFunctions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animations: [
  //   trigger('inOutAnimation', [
  //     transition(':enter', [
  //       style({ height: 0, opacity: 0 }),
  //       animate('1s ease-out', style({ height: 300, opacity: 1 })),
  //     ]),
  //     transition(':leave', [
  //       style({ height: 300, opacity: 1 }),
  //       animate('1s ease-in', style({ height: 0, opacity: 0 })),
  //     ]),
  //   ]),
  // ],
})
export class LoginComponent implements OnInit {
  show: boolean = false;
  showSuccess: boolean = false;
  isRetrying: boolean = false;
  showOtp: boolean = false;
  newPassword: boolean = false;
  showForgotPassword: boolean = false;
  passwordVerify: boolean = false;
  showLogin: boolean = true;
  upperCaseChar: any;
  numberChar: any;
  validatePassword: any;
  specialChar: any;
  hidePanel: boolean = false;
  isCodeValid: boolean = false;
  otp!: number;
  matcher = new MyErrorStateMatcher();
  selectedType: string = 'vendor';

  public signUpForm: FormGroup = new FormGroup({});

  _validateCaps = validateCapital;
  _hasNumber = hasNumber;
  _checkForSpecialChars = checkForSpecialChars;

  constructor(
    private router: Router,
    private authServ: AuthenticationService,
    private fb: FormBuilder
  ) {
    this.signUpForm = this.fb.group(
      {
        email: [null, [Validators.email, Validators.required]],
        password: [null, Validators.required],
        password_confirmation: [null, Validators.required],
      },
      { validators: this.checkPasswordMatch }
    );
  }

  ngOnInit(): void {
    this.getVendors();
  }

  toggleRegister() {
    this.showLogin = !this.showLogin;
    // this.showForgotPassword = !this.showForgotPassword;
  }
  showLoginForm() {
    this.showLogin = true;
    this.showForgotPassword = !this.showForgotPassword;
  }
  verify() {
    // this.authServ.verifyEmail().subscribe({
    //   next(res) {
    //     console.log(res);
    //   },
    //   error(err) {},
    //   complete() {},
    // });

    if (this.passwordVerify) {
      null;
      // this.forgotPassword();
    } else {
      this.showOtp = !this.showOtp;
    }
  }

  selectType(type: string) {
    this.selectedType = type;
  }

  resendOtp() {}

  forgotPassword() {
    this.showForgotPassword = !this.showForgotPassword;
  }
  verifyPassword() {
    this.passwordVerify = true;
    this.showForgotPassword = false;
    this.showOtp = true;
    this.showLogin = false;
    // this.verify();
  }
  completePasswordReset() {
    this.showSuccess = !this.showSuccess;
  }
  toLogin() {
    // window.location.reload();
    this.showSuccess = false;
    this.showLogin = true;
    // this.router.navigateByUrl('/onboarding/login');
  }

  verified() {
    if (this.passwordVerify) {
      this.newPassword = !this.newPassword;
      this.showForgotPassword = false;
      this.showOtp = false;
      this.showLogin = false;
    } else {
      this.router.navigateByUrl('/onboarding/signup');
    }
  }

  onOtpChange(evt: any) {
    this.isCodeValid = false;
    if (evt.length == 5) {
      this.otp = evt;
      this.isCodeValid = true;
    } else {
      this.isCodeValid = false;
    }
  }

  password() {
    this.show = !this.show;
  }
  get passwordValue(): any {
    // return this.signupForm.controls['password'].value;
    return '';
  }
  checkPasswordMatch: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.get('password')!.value;
    let confirmPass = group.get('password_confirmation')!.value;
    return pass === confirmPass ? null : { notSame: true };
  };
  checkPassword(password: any) {
    this.validatePassword = password;
    this.upperCaseChar = this._validateCaps(password);
    this.numberChar = this._hasNumber(password);
    this.specialChar = this._checkForSpecialChars(password);
  }
  focusFunction() {
    this.hidePanel = true;
  }
  focusOutFunction() {
    this.hidePanel = false;
  }

  login() {
    this.router.navigateByUrl('/portal/dashboard');
  }

  getVendors() {
    this.authServ.getVendors().subscribe({
      next(res) {
        console.log(res);
      },
      error(err) {},
      complete() {},
    });
  }

  signUp() {
    this.authServ.getVendors().subscribe({
      next(res) {
        console.log(res);
      },
      error(err) {},
      complete() {},
    });
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl): boolean {
    const invalidCtrl = !!(control?.invalid && control?.parent?.dirty);
    const invalidParent = !!(
      control?.parent?.invalid && control?.parent?.dirty
    );

    return invalidCtrl || invalidParent;
  }
}
