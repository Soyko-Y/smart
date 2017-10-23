import { Component, OnInit }  from '@angular/core';

import { UserService } from './user.service';
import { User }        from './user';


@Component({
  selector: 'my-users',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.css' ]
})
export class UserComponent implements OnInit {

  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) {}

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
