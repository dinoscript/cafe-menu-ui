import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Dish }                from '../classes/dish';
import { DishService }         from '../services/dish.service';

@Component({
  selector: 'my-dishes',
  templateUrl: './dishes.component.html'
})
export class DishesComponent implements OnInit {
  dishes: Dish[];
  selectedDish: Dish;

  constructor(
    private dishService: DishService,
    private router: Router) { }

  getDishes(): void {
    this.dishService
        .getDishes()
        .then(dishes => this.dishes = dishes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.dishService.create(name)
      .then(dish => {
        this.dishes.push(dish);
        this.selectedDish = null;
      });
  }

  delete(dish: Dish): void {
    this.dishService
        .delete(dish.id)
        .then(() => {
          this.dishes = this.dishes.filter(h => h !== dish);
          if (this.selectedDish === dish) { this.selectedDish = null; }
        });
  }

  ngOnInit(): void {
    this.getDishes();
  }

  onSelect(dish: Dish): void {
    this.dishService.selectDish(dish);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.dishService.selectedDish.id]);
  }

  gotoAddNew(): void {
    this.router.navigate(['/add']);
  }
}
