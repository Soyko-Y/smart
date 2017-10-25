import { Component, OnInit }  from '@angular/core';

import { UserService } from './service/user.service';
import { User }        from './model/user.model';
import { Observable }        from 'rxjs/Observable';


@Component({
  selector: 'my-users',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.css' ]
})
export class UserComponent implements OnInit {

  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) {}

  private onSelect(user: User): void {
    this.selectedUser = user;
  }

  public ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}