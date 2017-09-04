import { Component, OnInit } from '@angular/core';

import { Dish }        from '../classes/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  dishes: Dish[] = [];

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishService.getDishes()
      .then(dishes => this.dishes = dishes.slice(1, 5));
  }
}
