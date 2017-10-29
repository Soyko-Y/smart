import { Injectable } from "@angular/core";
import { Http }	      from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User }     	from '../model/user.model';

import 'rxjs/add/operator/map'

@Injectable()
export class UserService {

	constructor(private http: Http){ }

  getUsers(): Observable<User[]> {
    return this.http
               .get("http://jsonplaceholder.typicode.com/users")
               .map(response => response.json() as User[]);
  }
}