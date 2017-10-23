import { Injectable } from "@angular/core";
import { Http }	      from '@angular/http';
import { User }     	from './user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

	constructor(private http: Http){ }

  getUsers(): Promise<User[]> {
    return this.http
               .get("http://jsonplaceholder.typicode.com/users")
							 .toPromise()
							 .then(response => response.json() as User[])
							 .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
  	console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}