import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  URL_AUTH: 'http://localhost:3000/auth';
  constructor(private http: HttpClient) { }

postNewUser(user: User): Observable <User> {
    return this.http.post<User>('http://localhost:3000/auth/signup', user);
  }
}
