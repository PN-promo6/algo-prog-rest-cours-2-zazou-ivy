import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-services/data.service';
import { Subscription } from 'rxjs';
import { User } from '../models/user/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersSubscription: Subscription;
  public users: User[];
  user: User;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchUsers()
      .subscribe(
        res => {
          this.users = res;
        },
        error => {
          console.log(error);
        }
      )
      ;
    this.dataService.fetchUserById("5eaecda0d01513c7cbbcffa4")
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      )
  }
}
