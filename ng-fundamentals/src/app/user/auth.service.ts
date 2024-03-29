import { Injectable } from "@angular/core";
import { IUser } from "./user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs";


@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {}

	currentUser: IUser
  
	loginUser(userName: string, password: string) {

    let loginInfo = { username: userName, password: password }
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    
    return this.httpClient.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <IUser>data['user']
      }))
      .pipe(catchError(err => {
        return of(false)
      }))
	}

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.httpClient.get('/api/currentIdentity')
      .pipe(tap(data => {
        if(data instanceof Object) {
          this.currentUser = <IUser>data
        }
      }))
      .subscribe()
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName

    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

    return this.httpClient.put(`/api/users/${this.currentUser.id}`, this.currentUser, options)
  }

  logout() {
    this.currentUser = undefined;

    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

    return this.httpClient.post('/api/logout', {}, options)
  }
}