import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockListComponent } from './stock-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRippleModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatRippleModule
  ],
  declarations: [ StockListComponent],
  exports: [StockListComponent]
})
export class StockListModule { }
