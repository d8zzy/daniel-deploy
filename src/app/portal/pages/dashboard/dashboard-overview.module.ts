import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardOverviewComponent } from './dashboard-overview.component';
import { DashboardRoutingModule } from './dashboard-overview-routing.module';
import { NavigationModule } from '../../layout/navigation/navigation.module';

@NgModule({
  declarations: [DashboardComponent, DashboardOverviewComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule,
    NavigationModule,
    // EmptyStateModule,
    // LoadingRollerModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // ToastrModule.forRoot({
    //   positionClass: 'toast-top-center',
    //   preventDuplicates: true,
    // }),
  ],
  exports: [DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // providers: [{ provide: ToastrService }],
})
export class DashboardModule {}
