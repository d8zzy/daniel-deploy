import { SelectionModel } from '@angular/cdk/collections';
import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-procurement',
  templateUrl: './procurement.component.html',
  styleUrls: ['./procurement.component.scss'],
})
export class ProcurementsComponent implements OnInit {
  isFetching: boolean = false;
  isExporting: boolean = false;
  currentPage = 0;
  pageSize: number = 50;
  filterValue!: string;
  selectedIndex!: number;
  public displayedColumns!: string[];

  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public selection = new SelectionModel<any>(true, []);

  constructor(private _location: Location, private router: Router) {}

  column = [
    'order id',
    'date created',
    'no of items',
    'amount (ngn)',
    'status',
    'action',
  ];

  dummyData = [
    {
      order: 1223301,
      date: '20/09/2023  11:15pm',
      number: 6,
      amount: 13500,
      'date reported': '20/09/2023   11:15pm',
      status: 'Open',
    },
    {
      order: 1223301,
      date: '20/09/2023  11:15pm',
      number: 4,
      amount: 13500,
      'date reported': '20/09/2023   11:15pm',
      status: 'Completed',
    },
    {
      order: 1223301,
      date: '20/09/2023  11:15pm',
      number: 3,
      amount: 13500,
      'date reported': '20/09/2023   11:15pm',
      status: 'Rejected',
    },
    {
      order: 1223301,
      date: '20/09/2023  11:15pm',
      number: 3,
      amount: 13500,
      'date reported': '20/09/2023   11:15pm',
      status: 'Pending',
    },
  ];

  ngOnInit(): void {
    this.displayedColumns = this.column;
    this.dataSource = new MatTableDataSource(this.dummyData);
  }

  gotoBack() {
    this._location.back();
  }
  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    // this.fetchOrders();
  }
  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }
  isAllSelected() {
    let filtered = this.dataSource.data.filter((x) => x.role !== 'admin');
    const numSelected = this.selection.selected.length;
    const numRows = filtered.length;
    return numSelected === numRows;
  }
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    let filtered = this.dataSource.data.filter((x) => x.role !== 'admin');
    this.selection.select(...filtered);
  }

  concatColumnString(colString: string) {
    let strtext = colString;
    const myArray = strtext.split(' ');
    return myArray.join('');
  }

  viewDetails() {
    this.router.navigateByUrl(`/portal/procurement/view-details/${0}`);
  }
}
