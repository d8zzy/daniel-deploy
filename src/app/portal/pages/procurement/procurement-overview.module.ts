import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { NavigationModule } from '../../layout/navigation/navigation.module';
import { ProcurementsComponent } from './components/procurement/procurement.component';
import { ProcurementsRoutingModule } from './procurement-overview-routing.module';
import { ProcurementOverviewComponent } from './procurement-overview.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';

@NgModule({
  declarations: [
    ProcurementsComponent,
    ProcurementOverviewComponent,
    ViewDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProcurementsRoutingModule,
    NavigationModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ProcurementsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // providers: [{ provide: ToastrService }],
})
export class ProcurementsModule {}
