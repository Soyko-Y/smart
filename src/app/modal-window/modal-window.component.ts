import { Component, OnInit }  from '@angular/core';
import { User }								from '../user/model/user.model';
import { UserService }				from '../user/service/user.service';
import { Observable }     	  from 'rxjs/Observable';

@Component({
  selector: 'modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})

export class ModalWindowComponent implements OnInit {
	public users: User[];
	public selectedUser: User;

	constructor(private userService: UserService) {}

	private onSelect(user: User): void {
  	this.selectedUser = user;
  }

  public ngOnInit(): void {
  	this.userService.getUsers().subscribe(users => this.users = users);
  }
}