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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var DishService = (function () {
    function DishService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.dishesUrl = 'api/dishes'; // URL to web api
    }
    DishService.prototype.selectDish = function (dish) {
        this.selectedDish = dish;
        console.log(this.selectedDish);
    };
    DishService.prototype.getDishes = function () {
        return this.http.get(this.dishesUrl)
            .toPromise()
            .then(function (response) {
            console.log(response.json().data.map(function (dish) { dish.params.dateFrom = new Date(dish.params.dateFrom); return dish; }));
            return response.json().data.map(function (dish) { dish.params.dateFrom = new Date(dish.params.dateFrom); dish.params.dateTo = new Date(dish.params.dateTo); return dish; });
        })
            .catch(this.handleError);
    };
    DishService.prototype.getDish = function (id) {
        var url = this.dishesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DishService.prototype.delete = function (id) {
        var url = this.dishesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    DishService.prototype.create = function (dishParams) {
        return this.http
            .post(this.dishesUrl, JSON.stringify({ params: dishParams }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    DishService.prototype.update = function (dish) {
        var url = this.dishesUrl + "/" + dish.id;
        return this.http
            .put(url, JSON.stringify(dish), { headers: this.headers })
            .toPromise()
            .then(function () { return dish; })
            .catch(this.handleError);
    };
    DishService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return DishService;
}());
DishService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DishService);
exports.DishService = DishService;
//# sourceMappingURL=dish.service.js.map