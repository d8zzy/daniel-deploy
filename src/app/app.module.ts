import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMaterialModule } from './shared/angular-material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './services/api-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    // { provide: ToastrService },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },

    // { provide: JWT_OPTIONs, useValue: JWT_OPTIONS },
    // JwtHelperService,
    // AuthGuard,
    // LoggedInAuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
