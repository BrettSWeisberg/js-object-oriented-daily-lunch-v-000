// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;

class Neighborhood {
    constructor(name) {
        this.name = name;
        this.id = ++neighborhoodId;
        store.neighborhoods.push(this);
      }

      deliveries() {
        return store.customers.filter(
          function(customer){
            return customer.neighborhoodId === this.id;
          }.bind(this)
        );
      }

      meals() {
        return this.neighborhoods().map(neighborhood => {
          return neighborhood.meal();
        })
      }
    }

let mealId = 0;

    class Meal {
        constructor(title,price) {
            this.title = title;
            this.price = price;
            this.id = ++mealId;
            store.meals.push(this);
          }
        }

let customerId = 0;

    class Customer {
        constructor(name, neighborhoodId) {
            this.name = name;
            this.neighborhoodId = neighborhoodId;
            this.id = ++customerId;
            store.customers.push(this);
          }
        }
