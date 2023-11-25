import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TopNavigationComponent implements OnInit {
  @Input() userData: any;
  profileImg: any;
  avatarLogo: any;
  isFetching: boolean = false;
  s3BaseUrl = 'https://oms-s3-dev.s3.af-south-1.amazonaws.com/';
  notifications: boolean = false;
  notificationsData: any[] = [];

  constructor(
    private router: Router,
    private authServ: AuthenticationService
  ) {}

  ngOnInit(): void {}
}
