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
var dish_service_1 = require("../services/dish.service");
var DishDetailComponent = (function () {
    function DishDetailComponent(dishService, route, location) {
        this.dishService = dishService;
        this.route = route;
        this.location = location;
    }
    DishDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.dishService.getDish(+params.get('id')); })
            .subscribe(function (dish) { return _this.dish = dish; });
    };
    DishDetailComponent.prototype.save = function () {
        var _this = this;
        this.dishService.update(this.dish)
            .then(function () { return _this.goBack(); });
    };
    DishDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return DishDetailComponent;
}());
DishDetailComponent = __decorate([
    core_1.Component({
        selector: 'dish-detail',
        templateUrl: './dish-detail.component.html'
    }),
    __metadata("design:paramtypes", [dish_service_1.DishService,
        router_1.ActivatedRoute,
        common_1.Location])
], DishDetailComponent);
exports.DishDetailComponent = DishDetailComponent;
//# sourceMappingURL=dish-detail.component.js.map