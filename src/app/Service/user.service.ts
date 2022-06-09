import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { } 
  public users = [

    {

      "id": 1,
      "name": "Luis"

    },
    {

      "id": 2,
      "name": "Paco"

    },
    {

      "id": 3,
      "name": "Jose"

    }

  ]

getUsers(){
  return this.  users;
}

}
