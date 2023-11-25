import { SideNavigation } from './navigation/model';

export const adminNavConfig: SideNavigation[] = [
  {
    name: 'Dashboard',
    url: '/portal/dashboard',
    iconUrl: '/assets/imgs/dashboard-icon.svg',
  },
  {
    name: 'Reported Faults',
    url: '/portal/reported-faults',
    iconUrl: '/assets/imgs/reported-faults.svg',
  },
  {
    name: 'Procurement',
    url: '/portal/procurement',
    iconUrl: '/assets/imgs/procurement.svg',
  },
  // {
  //   name: 'Settings',
  //   url: '/portal/settings',
  //   iconUrl: '/assets/imgs/settings.svg',
  // },
  // {
  //   name: 'Logout',
  //   url: '/portal/logout',
  //   iconUrl: '/assets/imgs/logout.svg',
  // },
];

export const adminNavConfig2: SideNavigation[] = [
  {
    name: 'Settings',
    url: '/portal/settings',
    iconUrl: '/assets/imgs/settings.svg',
  },
  {
    name: 'Logout',
    url: '/onboarding/login',
    iconUrl: '/assets/imgs/logout.svg',
  },
];
