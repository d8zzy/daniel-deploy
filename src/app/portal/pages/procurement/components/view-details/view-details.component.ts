import { SelectionModel } from '@angular/cdk/collections';
import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
})
export class ViewDetailsComponent implements OnInit {
  @ViewChild('closebtn1') closebtn1: any;
  isFetching: boolean = false;

  constructor(private _location: Location, private router: Router) {}

  ngOnInit(): void {}

  complete() {
    this._location.back();
  }

  close() {
    this.closebtn1._elementRef.nativeElement.click();
  }
}
