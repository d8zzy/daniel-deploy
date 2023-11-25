import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { NavigationModule } from '../../layout/navigation/navigation.module';
import { ReportedFaultsOverviewComponent } from './reported-faults-overview.component';
import { ReportedFaultsRoutingModule } from './reported-faults-overview-routing.module';
import { ReportedFaultsComponent } from './components/reported-faults/reported-faults.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';

@NgModule({
  declarations: [
    ReportedFaultsComponent,
    ReportedFaultsOverviewComponent,
    ViewDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReportedFaultsRoutingModule,
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
  exports: [ReportedFaultsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // providers: [{ provide: ToastrService }],
})
export class ReportedFaultsModule {}
