import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  static URL = 'http://localhost:3000/message';

  getAll() {
    return this.http.get(ContactService.URL);
  }

postMessage(message: Message) {
  return this.http.post(ContactService.URL + '/post', message);
}

delete(id: number): Observable<any> {
  return this.http.delete(ContactService.URL + `/delete/${id}`);
}
}
