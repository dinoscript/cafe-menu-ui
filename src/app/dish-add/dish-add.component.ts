import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Dish }        from '../classes/dish';
import { DishService } from '../services/dish.service';

@Component({
    selector: 'dish-add',
    templateUrl: './dish-add.component.html'
})
export class DishAddComponent implements OnInit {
    dish:Dish;

    constructor(private dishService:DishService,
                private route:ActivatedRoute,
                private location:Location) {
    }

    ngOnInit():void {
        this.dish = new Dish;
        if (this.dishService.selectedDish) {
            this.dish.params = {
                name: this.dishService.selectedDish.params.name,
                price: this.dishService.selectedDish.params.price,
                imgUrl: this.dishService.selectedDish.params.imgUrl,
                dateFrom: this.dishService.selectedDish.params.dateFrom,
                dateTo: this.dishService.selectedDish.params.dateTo
            }

        } else {
            this.dish.params = {
                name: '',
                price: 0,
                imgUrl: '',
                dateFrom: '',
                dateTo: ''
            }
        }
    }

    add(dish:Dish):void {
        dish.params.name = dish.params.name.trim();
        if (!dish.params.name) {
            return;
        }
        this.dishService.create(dish.params)
            .then(dish => {
                console.log(dish);
                this.goBack()
            });
    }

    goBack():void {
        this.location.back();
    }
}
