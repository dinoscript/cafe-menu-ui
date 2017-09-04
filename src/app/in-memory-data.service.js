"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var dishes = [
            { id: 0,
                params: {
                    name: 'Barbeque Chicken',
                    price: "$11.95",
                    imgUrl: "app/assets/img/barbeque_chicken.jpg",
                    dateFrom: "21.08.2017",
                    dateTo: "27.08.2017"
                }
            },
            { id: 1,
                params: {
                    name: 'The Super Salad',
                    price: "$15.95",
                    imgUrl: "app/assets/img/the_super_salad.jpg",
                    dateFrom: "22.08.2017",
                    dateTo: "27.08.2017"
                }
            },
            { id: 2,
                params: {
                    name: 'Beet and Arugula Salad',
                    price: "$8.85",
                    imgUrl: "app/assets/img/beet_and_arugula_salad.jpg",
                    dateFrom: "23.08.2017",
                    dateTo: "27.08.2017"
                }
            }
        ];
        return { dishes: dishes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map