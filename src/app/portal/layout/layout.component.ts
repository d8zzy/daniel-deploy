import { Component, OnInit } from '@angular/core';
import { SideNavigation } from './navigation/model';
import { adminNavConfig, adminNavConfig2 } from './layout.constants';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  userData: any;
  navConfig: SideNavigation[] = adminNavConfig;
  navConfig2: SideNavigation[] = adminNavConfig2;
  profileImg: any;
  avatarLogo: any;
  isFetching: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
