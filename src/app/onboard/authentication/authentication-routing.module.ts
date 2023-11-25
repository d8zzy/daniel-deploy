import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoggedInAuthGuard } from 'src/app/services/login-auth-guard.guard';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    // canActivate: [LoggedInAuthGuard],
    children: [
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
