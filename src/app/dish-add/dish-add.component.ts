import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { Location }                 from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { DishService } from '../services/dish.service';

@Component({
    selector: 'dish-add',
    templateUrl: './dish-add.component.html',
    styleUrls: ['./dish-add.component.css']
})
export class DishAddComponent implements OnInit {
    addForm:FormGroup;
    dateTo:Date;

    constructor(private dishService:DishService,
                private location:Location,
                private fb:FormBuilder) {
        this.createForm();
    }

    ngOnInit():void {
    }

    onSubmit(params:any):void {
        params.name = params.name.trim();
        if (!params.name) {
            return;
        }
        this.dishService.create(params)
            .then(dish => {
                this.goBack()
            });
    }

    goBack():void {
        this.location.back();
    }

    createForm() {
        this.dateTo = new Date;
        console.log (this.dateTo);
        console.log (this.dateTo);
        this.addForm = this.fb.group({
            name: [this.dishService.selectedDish ? this.dishService.selectedDish.params.name : '', [Validators.required, Validators.minLength(4), Validators.maxLength(50)/*, this.nameValidator*/]],
            price: [this.dishService.selectedDish ? this.dishService.selectedDish.params.price : '', [Validators.required, this.priceValidator]],
            imgUrl: this.dishService.selectedDish ? this.dishService.selectedDish.params.imgUrl : '',
            dateFrom: this.dishService.selectedDish ? this.dishService.selectedDish.params.dateFrom : '',
            dateTo: this.dishService.selectedDish ? this.dishService.selectedDish.params.dateTo : ''
        });
    }

    /*
    nameValidator(control:FormControl):{[s:string]:boolean} {

        if (control.value === "nonono") {
            return {"badName": true};
        }
        return null;
    }
    */

    priceValidator(control:FormControl):{[s:string]:boolean} {

        if (control.value <= 0) {
            return {"badPrice": true};

        }
        return null;
    }

    /*
    forbiddenNameValidator(nameRe:RegExp):ValidatorFn {
        return (control:AbstractControl):{[key: string]: any} => {
            const forbidden = nameRe.test(control.value);
            return forbidden ? {'forbiddenName': {value: control.value}} : null;
        };
    }
    */
}