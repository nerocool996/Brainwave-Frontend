import { Injectable } from '@angular/core';
import {ajax, AjaxResponse} from 'rxjs/ajax';
import {map} from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpGetLatest (url: string): Observable <AjaxResponse> {
    const result = ajax(url).pipe(map((value: AjaxResponse) => {
      value.response = value.response.map((val: any) => {
        val.date = new Date(val.date);
        return val;
      });
      return value.response;
    }));

    return result;
  }
  httpGetHistory (stock: string): Observable <AjaxResponse> {
    const result = ajax(`./stocks/${stock}`).pipe(map((value: AjaxResponse) => {
      value.response = value.response.map((val: any) => {
        val.date = new Date(val.date);
        return val;
      });
      return value.response;
    }));
    return result;
  }
  constructor() { }
}
