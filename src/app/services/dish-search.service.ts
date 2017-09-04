import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Dish }           from '../classes/dish';

@Injectable()
export class DishSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Dish[]> {
    return this.http
               .get(`api/dishes/?name=${term}`)
               .map(response => response.json().data as Dish[]);
  }
}
