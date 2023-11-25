import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from 'src/app/services/auth-guard.guard';
import { LayoutComponent } from './layout.component';

const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../pages/dashboard/dashboard-overview.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'reported-faults',
        loadChildren: () =>
          import(
            '../pages/reported-faults/reported-faults-overview.module'
          ).then((m) => m.ReportedFaultsModule),
      },
      {
        path: 'procurement',
        loadChildren: () =>
          import('../pages/procurement/procurement-overview.module').then(
            (m) => m.ProcurementsModule
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
