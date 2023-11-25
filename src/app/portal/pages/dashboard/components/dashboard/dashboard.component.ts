import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  selectedFilter = 'This month';
  constructor() {}

  ngOnInit(): void {}

  filters = ['Yesterday', 'Today', 'This week', 'This month'];
  activites = [
    {
      info: 'You have a new fault report from Akinwale Dare (Property manager)',
      time: '2:12 pm   19/09/2023',
      type: 'Fault Report',
    },
    {
      info: 'You have a new fault report from Akinwale Dare (Property manager)',
      time: '2:12 pm   19/09/2023',
      type: 'Fault Report',
    },
    {
      info: 'You have a new fault report from Akinwale Dare (Property manager)',
      time: '2:12 pm   19/09/2023',
      type: 'Fault Report',
    },
  ];

  filterer(value: string) {
    this.selectedFilter = value;
  }
}
