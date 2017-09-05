import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Dish }        from '../classes/dish';
import { DishService } from '../services/dish.service';

@Component({
    selector: 'dish-add',
    templateUrl: './dish-add.component.html'
})
export class DishAddComponent implements OnInit {
    dish:Dish;
    addForm: FormGroup;

    constructor(private dishService:DishService,
                private route:ActivatedRoute,
                private location:Location,
                private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit():void {
        this.dish = new Dish;
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

    createForm() {
        this.addForm = this.fb.group({
          name: this.dishService.selectedDish?this.dishService.selectedDish.params.name:'',
          price: this.dishService.selectedDish?this.dishService.selectedDish.params.price:0,
          imgUrl: this.dishService.selectedDish?this.dishService.selectedDish.params.imgUrl:'',
          dateFrom: this.dishService.selectedDish?this.dishService.selectedDish.params.dateFrom:'',
          dateTo: this.dishService.selectedDish?this.dishService.selectedDish.params.dateTo:''
        });
    }
}
