import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MatBottomSheetModule,
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTreeModule } from '@angular/material/tree';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatMenuModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatToolbarModule,
    MatBadgeModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatChipsModule,
    ScrollingModule,
    MatTreeModule,
    MatStepperModule,
  ],
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatMenuModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatToolbarModule,
    MatBadgeModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatChipsModule,
    ScrollingModule,
    MatTreeModule,
    MatStepperModule,
  ],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
  declarations: [],
})
export class AngularMaterialModule {}
