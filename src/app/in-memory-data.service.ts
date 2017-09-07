import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const dishes = [
            {id: 0,
                params: {
                    name: 'Barbeque Chicken',
                    price: 11.95,
                    imgUrl: "app/assets/img/barbeque_chicken.jpg",
                    dateFrom: "2014-11-30T12:00:00.000Z",
                    dateTo: "2014-11-29T12:00:00.000Z"
                }
            },
            {id: 1,
                params: {
                    name: 'The Super Salad',
                    price: 15.95,
                    imgUrl: "app/assets/img/the_super_salad.jpg",
                    dateFrom: "2014-11-28T12:00:00.000Z",
                    dateTo: "2014-11-27T12:00:00.000Z"
                }
            },
            {id: 2,
                params: {
                    name: 'Beet and Arugula Salad',
                    price: 8.85,
                    imgUrl: "app/assets/img/beet_and_arugula_salad.jpg",
                    dateFrom: "2014-11-26T12:00:00.000Z",
                    dateTo: "2014-11-25T12:00:00.000Z"
                }
            }
        ];
        return {dishes};
    }
}
