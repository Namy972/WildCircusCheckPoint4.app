import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../models/user';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  static URL = 'http://localhost:3000';


  user: User;
  token: string;

  public getMe() {
    return this.http.get(UserService.URL + '/auth/me').pipe(
      tap((user: User) => {
        this.user = user;

      })
    );
  }
  public isLogged( ) {
    return this.getMe().pipe(
      map((user: User) => {
        return (user != null);
      }
    ));
  }
  public connexion(user: User) {
    return this.http.post(UserService.URL + '/auth/signin', user, {observe: 'response'}).pipe(
      tap((response: HttpResponse<any>) => {
        const token = response.headers.get('JWT-TOKEN');
        localStorage.setItem('JWT-TOKEN', token);
        this.user = response.body;
        return response.body;
      }));
    }

}
