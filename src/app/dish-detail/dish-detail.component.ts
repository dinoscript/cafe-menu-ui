import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Dish }        from '../classes/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'dish-detail',
  templateUrl: './dish-detail.component.html'
})
export class DishDetailComponent implements OnInit {
  dish: Dish;

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.dishService.getDish(+params.get('id')))
      .subscribe(dish => this.dish = dish);
  }

  save(): void {
    this.dishService.update(this.dish)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
