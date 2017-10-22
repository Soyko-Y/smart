import { Injectable } 		from "@angular/core";
import { User } 				 	from '../models/user';
import { Headers, Http }	from '@angular/http';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

	constructor(private http: Http){ }

  // getUsers(): Promise<User[]> {
  //   return this.http.get("http://jsonplaceholder.typicode.com/users")
		// 	.toPromise()
		// 	.then(response => response.json().data as User[])
  // }
}