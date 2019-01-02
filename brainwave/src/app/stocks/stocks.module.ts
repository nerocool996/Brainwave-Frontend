import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { StockListModule } from '../stock-list/stock-list.module';
import { MatInputModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import { StockViewComponent } from './stock-view/stock-view.component';

@NgModule({
  imports: [
    CommonModule,
    StocksRoutingModule,
    StockListModule,
    MatInputModule,
    FlexLayoutModule
  ],
  declarations: [ StockViewComponent]
})
export class StocksModule { }
