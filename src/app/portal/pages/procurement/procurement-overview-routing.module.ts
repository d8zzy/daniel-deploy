import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcurementOverviewComponent } from './procurement-overview.component';
import { ProcurementsComponent } from './components/procurement/procurement.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProcurementOverviewComponent,
    children: [
      {
        path: '',
        component: ProcurementsComponent,
      },
      {
        path: 'view-details/:id',
        component: ViewDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcurementsRoutingModule {}
