import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { AjaxResponse } from 'rxjs/ajax';
@Component({
  selector: 'app-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrls: ['./stock-view.component.css']
})
export class StockViewComponent implements OnInit {
  stocks = [];
  topStocks = [];
  otherStocks = [];
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.httpGetLatest('./latest').subscribe((value: any) => {
      this.stocks = value;
      this.stocks = this.stocks.sort( (a, b) => {
        return ( (parseFloat(b.close) - parseFloat(b.open)) - (parseFloat(a.close) - parseFloat(a.open)) );
      });
      this.topStocks = this.stocks.slice(0, 10);
      this.otherStocks = this.stocks.slice(10);
      console.log(this.topStocks);
    });
  }
  searchStock(e) {
    if (e.target.value === '') {
      this.otherStocks = this.stocks.slice(10);
    } else {
      const result = e.target.value;
      this.otherStocks = this.stocks.filter((element) => {
        console.log(element.symbol.search(result));
        return element.symbol.search(result) >= 0;
      });
    }
  }
}
