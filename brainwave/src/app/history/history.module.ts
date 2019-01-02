import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListModule } from '../stock-list/stock-list.module';
import { MatIconModule, MatRippleModule } from '@angular/material';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryListComponent } from './history-list/history-list.component';

@NgModule({
  imports: [
    CommonModule,
    HistoryRoutingModule,
    StockListModule,
    MatIconModule,
    MatRippleModule
  ],
  declarations: [HistoryListComponent]
})
export class HistoryModule { }
