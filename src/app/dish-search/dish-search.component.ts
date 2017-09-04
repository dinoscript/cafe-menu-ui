import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { DishSearchService } from '../services/dish-search.service';
import { Dish } from '../classes/dish';

@Component({
  selector: 'dish-search',
  templateUrl: './dish-search.component.html',
  styleUrls: [ './dish-search.component.css' ],
  providers: [DishSearchService]
})
export class DishSearchComponent implements OnInit {
  dishes: Observable<Dish[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private dishSearchService: DishSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.dishes = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.dishSearchService.search(term)
        // or the observable of empty dishes if there was no search term
        : Observable.of<Dish[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Dish[]>([]);
      });
  }

  gotoDetail(dish: Dish): void {
    let link = ['/detail', dish.id];
    this.router.navigate(link);
  }
}
