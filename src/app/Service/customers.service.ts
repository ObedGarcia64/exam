import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }
  public costumer = [

    {

      "id": 1,
      "name": "customer 1"

    },
    {

      "id": 2,
      "name": "customer 2"

    },
    {

      "id": 3,
      "name": "customer 3"

    }

  ]

getCustomers(){
  return this.  costumer;

}
}
