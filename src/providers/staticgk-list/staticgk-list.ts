import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { StaticgkList } from '../../interfaces/staticgk-list';


@Injectable()
export class StaticgkListProvider {

  constructor(public http: Http) {
    console.log('Hello StaticgkListProvider Provider');  
  }
  load(): Observable<StaticgkList[]> {
    return this.http.get(`../../assets/data/staticgk-list.json`)
      .map(res => <StaticgkList[]>res.json());
  }

}
