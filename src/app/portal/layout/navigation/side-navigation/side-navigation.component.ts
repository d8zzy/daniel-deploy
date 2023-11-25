import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { SideNavigation } from '../model';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavigationComponent implements OnInit {
  @Input() navConfig!: SideNavigation[];
  @Input() navConfig2!: SideNavigation[];
  _isOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  toggleSnap() {
    this._isOpen = !this._isOpen;
  }
}
