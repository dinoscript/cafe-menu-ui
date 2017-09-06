import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Dish } from '../classes/dish';

@Injectable()
export class DishService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private dishesUrl = 'api/dishes';  // URL to web api
    selectedDish:Dish;

    constructor(private http:Http) {
    }

    selectDish(dish:Dish):void {
        this.selectedDish = dish;
        console.log(this.selectedDish)
    }

    getDishes():Promise<Dish[]> {
        return this.http.get(this.dishesUrl)
            .toPromise()
            //.then(response => response.json().data as Dish[])
            .then(function(response) {
                            console.log(response.json().data.JSON);
                            return response.json().data as Dish[];
                    })
            .catch(this.handleError);
    }


    getDish(id:number):Promise<Dish> {
        const url = `${this.dishesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Dish)
            .catch(this.handleError);
    }

    delete(id:number):Promise<void> {
        const url = `${this.dishesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(dishParams:any):Promise<Dish> {
        return this.http
            .post(this.dishesUrl, JSON.stringify({params: dishParams}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Dish)
            .catch(this.handleError);
    }

    update(dish:Dish):Promise<Dish> {
        const url = `${this.dishesUrl}/${dish.id}`;
        return this.http
            .put(url, JSON.stringify(dish), {headers: this.headers})
            .toPromise()
            .then(() => dish)
            .catch(this.handleError);
    }

    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

