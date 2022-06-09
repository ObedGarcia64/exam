import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../Service/customers.service';
import { ApiService } from '../Service/user.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public costumerOptions: any;

  constructor(public apiService: CustomersService) { }

  ngOnInit(): void {

    this.costumerOptions = this.apiService.getCustomers();
  }

}
