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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var dish_1 = require("../classes/dish");
var dish_service_1 = require("../services/dish.service");
var DishAddComponent = (function () {
    function DishAddComponent(dishService, route, location) {
        this.dishService = dishService;
        this.route = route;
        this.location = location;
    }
    DishAddComponent.prototype.ngOnInit = function () {
        this.dish = new dish_1.Dish;
        if (this.dishService.selectedDish) {
            this.dish.params = {
                name: this.dishService.selectedDish.params.name,
                price: this.dishService.selectedDish.params.price,
                imgUrl: this.dishService.selectedDish.params.imgUrl,
                dateFrom: this.dishService.selectedDish.params.dateFrom,
                dateTo: this.dishService.selectedDish.params.dateTo
            };
        }
        else {
            this.dish.params = {
                name: '',
                price: 0,
                imgUrl: '',
                dateFrom: '',
                dateTo: ''
            };
        }
    };
    DishAddComponent.prototype.add = function (dish) {
        var _this = this;
        dish.params.name = dish.params.name.trim();
        if (!dish.params.name) {
            return;
        }
        this.dishService.create(dish.params)
            .then(function (dish) {
            console.log(dish);
            _this.goBack();
        });
    };
    DishAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    return DishAddComponent;
}());
DishAddComponent = __decorate([
    core_1.Component({
        selector: 'dish-add',
        templateUrl: './dish-add.component.html'
    }),
    __metadata("design:paramtypes", [dish_service_1.DishService,
        router_1.ActivatedRoute,
        common_1.Location])
], DishAddComponent);
exports.DishAddComponent = DishAddComponent;
//# sourceMappingURL=dish-add.component.js.map