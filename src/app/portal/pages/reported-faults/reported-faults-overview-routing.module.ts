import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportedFaultsComponent } from './components/reported-faults/reported-faults.component';
import { ReportedFaultsOverviewComponent } from './reported-faults-overview.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';

const routes: Routes = [
  {
    path: '',
    component: ReportedFaultsOverviewComponent,
    children: [
      {
        path: '',
        component: ReportedFaultsComponent,
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
export class ReportedFaultsRoutingModule {}
