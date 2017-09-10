import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { Location }                 from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import {MdDatepickerModule} from '@angular/material';

import { DishService } from '../services/dish.service';

@Component({
    selector: 'dish-add',
    templateUrl: './dish-add.component.html',
    styleUrls: ['./dish-add.component.css']
})
export class DishAddComponent implements OnInit {
    addForm:FormGroup;
    currentDate:Date;
    minDate:Date;
    maxDate:Date;

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
        this.currentDate = new Date;
        this.addForm = this.fb.group({
            name: [this.dishService.selectedDish ? this.dishService.selectedDish.params.name : '', [Validators.required, Validators.minLength(4), Validators.maxLength(50)/*, this.nameValidator*/]],
            price: [this.dishService.selectedDish ? this.dishService.selectedDish.params.price : '', [Validators.required, this.priceValidator]],
            imgUrl: this.dishService.selectedDish ? this.dishService.selectedDish.params.imgUrl : '',
            dateFrom: this.setDateFrom(),
            dateTo: this.setDateTo(this.minDate)
        });
    }

    priceValidator(control:FormControl):{[s:string]:boolean} {

        if (control.value <= 0) {
            return {"badPrice": true};

        }
        return null;
    }

    setDateTo(minDate) {
        this.maxDate = new Date;
        this.maxDate.setDate(minDate.getDate() + (7 - minDate.getDay()));
        return this.maxDate
    }

    setDateFrom():Date {
        this.minDate = new Date();
        return this.minDate;
    }

    onInput($event){
        this.minDate = $event.value;
        this.setDateTo(this.minDate);
        this.addForm.controls['dateTo'].setValue(this.maxDate);
    }
}