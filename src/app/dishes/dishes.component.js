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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dish_service_1 = require("../services/dish.service");
var DishesComponent = (function () {
    function DishesComponent(dishService, router) {
        this.dishService = dishService;
        this.router = router;
    }
    DishesComponent.prototype.getDishes = function () {
        var _this = this;
        this.dishService
            .getDishes()
            .then(function (dishes) { return _this.dishes = dishes; });
    };
    DishesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.dishService.create(name)
            .then(function (dish) {
            _this.dishes.push(dish);
            _this.selectedDish = null;
        });
    };
    DishesComponent.prototype.delete = function (dish) {
        var _this = this;
        this.dishService
            .delete(dish.id)
            .then(function () {
            _this.dishes = _this.dishes.filter(function (h) { return h !== dish; });
            if (_this.selectedDish === dish) {
                _this.selectedDish = null;
            }
        });
    };
    DishesComponent.prototype.ngOnInit = function () {
        this.getDishes();
    };
    DishesComponent.prototype.onSelect = function (dish) {
        this.dishService.selectDish(dish);
    };
    DishesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.dishService.selectedDish.id]);
    };
    DishesComponent.prototype.gotoAddNew = function () {
        this.router.navigate(['/add']);
    };
    return DishesComponent;
}());
DishesComponent = __decorate([
    core_1.Component({
        selector: 'my-dishes',
        templateUrl: './dishes.component.html'
    }),
    __metadata("design:paramtypes", [dish_service_1.DishService,
        router_1.Router])
], DishesComponent);
exports.DishesComponent = DishesComponent;
//# sourceMappingURL=dishes.component.js.map