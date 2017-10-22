import { Component, OnInit }  from '@angular/core';
import { Http }               from '@angular/http';

// import { UserService }  from "./services/user-service";
import { User }         from "./models/user";

import "rxjs/add/operator/toPromise"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users: User[];
  selectedUser: User;

  constructor(private http: Http) {}

  ngOnInit(): void {
    this.http.get("http://jsonplaceholder.typicode.com/users")
      .toPromise()
      .then(res => {this.users = res.json();
    this.title = this.users[0].name;});
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
