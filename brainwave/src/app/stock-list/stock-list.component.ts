import { Component, OnInit, Input } from '@angular/core';
import {PageEvent} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})


export class StockListComponent implements OnInit {
  private _stocks: any[];
  stocksToDisplay: any[];
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @Input()
  set stocks (data: any) {
    this._stocks = data;
    this.stocksToDisplay = this._stocks.slice(0, 10);
    this.length = this._stocks.length;
  }
  @Input('type')
  type: string;
  constructor(private router: Router) {
  }

  goToStock(stock: string): void {
    setTimeout(() => {
      this.router.navigate([`/history/${stock}`]);
    }, 100);
  }
  updatePage(event: PageEvent) {
    console.log(event);
    this.stocksToDisplay = this._stocks.slice(event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize);
  }
  ngOnInit() {
  }

}
