import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  public userOptions: any;

  ngOnInit(): void {

    this.userOptions = this.apiService.getUsers();
  }

}
