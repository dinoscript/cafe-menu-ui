import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { Location }                 from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DishService } from '../services/dish.service';

@Component({
    selector: 'dish-add',
    templateUrl: './dish-add.component.html',
    styleUrls: ['./dish-add.component.css']
})
export class DishAddComponent implements OnInit {
    addForm:FormGroup;

    constructor(private dishService:DishService,
                private location:Location,
                private fb:FormBuilder) {
        this.createForm();
    }

    ngOnInit():void {
    }

    add(params:any):void {
        params.name = params.name.trim();
        if (!params.name) {
            console.log(this.addForm);
            return;
        }
        this.dishService.create(params)
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
            name: [this.dishService.selectedDish ? this.dishService.selectedDish.params.name : '',
                [Validators.required, Validators.minLength(4), this.nameValidator, this.forbiddenNameValidator(/bob/i)]
            ],
            price: this.dishService.selectedDish ? this.dishService.selectedDish.params.price : '',
            imgUrl: this.dishService.selectedDish ? this.dishService.selectedDish.params.imgUrl : '',
            dateFrom: this.dishService.selectedDish ? this.dishService.selectedDish.params.dateFrom : '',
            dateTo: this.dishService.selectedDish ? this.dishService.selectedDish.params.dateTo : ''
        });
    }

    nameValidator(control:FormControl):{[s:string]:boolean} {

        if (control.value === "nonono") {
            return {"userName": true};
        }
        return null;
    }

    forbiddenNameValidator(nameRe:RegExp):ValidatorFn {
        return (control:AbstractControl):{[key: string]: any} => {
            const forbidden = nameRe.test(control.value);
            return forbidden ? {'forbiddenName': {value: control.value}} : null;
        };
    }
}