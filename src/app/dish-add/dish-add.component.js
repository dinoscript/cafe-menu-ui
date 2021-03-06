"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var dish_service_1 = require("../services/dish.service");
var DishAddComponent = (function () {
    function DishAddComponent(dishService, location, fb) {
        this.dishService = dishService;
        this.location = location;
        this.fb = fb;
        this.createForm();
    }
    DishAddComponent.prototype.ngOnInit = function () {
    };
    DishAddComponent.prototype.onSubmit = function (params) {
        var _this = this;
        params.name = params.name.trim();
        if (!params.name) {
            return;
        }
        this.dishService.create(params)
            .then(function (dish) {
            _this.goBack();
        });
    };
    DishAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    DishAddComponent.prototype.createForm = function () {
        this.currentDate = new Date;
        this.addForm = this.fb.group({
            name: [this.dishService.selectedDish ? this.dishService.selectedDish.params.name : '', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(50) /*, this.nameValidator*/]],
            price: [this.dishService.selectedDish ? this.dishService.selectedDish.params.price : '', [forms_1.Validators.required, this.priceValidator]],
            imgUrl: this.dishService.selectedDish ? this.dishService.selectedDish.params.imgUrl : '',
            dateFrom: this.setDateFrom(),
            dateTo: this.setDateTo(this.minDate)
        });
    };
    DishAddComponent.prototype.priceValidator = function (control) {
        if (control.value <= 0) {
            return { "badPrice": true };
        }
        return null;
    };
    DishAddComponent.prototype.setDateTo = function (minDate) {
        if (minDate) {
            this.maxDate = new Date;
            this.maxDate.setDate(minDate.getDate() + (7 - minDate.getDay()));
            return this.maxDate;
        }
    };
    DishAddComponent.prototype.setDateFrom = function () {
        this.minDate = new Date();
        return this.minDate;
    };
    DishAddComponent.prototype.onInput = function ($event) {
        this.minDate = $event.value;
        this.setDateTo(this.minDate);
        this.addForm.controls['dateTo'].setValue(this.maxDate);
    };
    return DishAddComponent;
}());
DishAddComponent = __decorate([
    core_1.Component({
        selector: 'dish-add',
        templateUrl: './dish-add.component.html',
        styleUrls: ['./dish-add.component.css']
    }),
    __metadata("design:paramtypes", [dish_service_1.DishService,
        common_1.Location,
        forms_1.FormBuilder])
], DishAddComponent);
exports.DishAddComponent = DishAddComponent;
//# sourceMappingURL=dish-add.component.js.map