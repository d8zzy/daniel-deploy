import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationModule } from './navigation/navigation.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, LayoutRoutingModule, NavigationModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
