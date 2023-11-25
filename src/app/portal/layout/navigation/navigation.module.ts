import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@NgModule({
  declarations: [SideNavigationComponent, TopNavigationComponent],
  imports: [CommonModule, RouterModule, AngularMaterialModule],
  exports: [SideNavigationComponent, TopNavigationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavigationModule {}
