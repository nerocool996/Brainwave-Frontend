import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpService} from '../../service/http.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {
  stocks$: string;
  history: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private http: HttpService
    ) { }

  ngOnInit() {
    this.stocks$ = this.route.snapshot.paramMap.get('stock');
    console.log(this.stocks$);
    this.http.httpGetHistory(this.stocks$).subscribe((value: any) => {
      this.history = value.reverse();
    });
  }

}
