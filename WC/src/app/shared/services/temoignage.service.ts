import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Temoignage } from '../models/temoignage';

@Injectable({
  providedIn: 'root'
})
export class TemoignageService {

  constructor(private http: HttpClient) { }
  static URL = 'http://localhost:3000/temoignage';

  getAll(): Observable<Temoignage[]> {
    return this.http.get<Temoignage[]>(TemoignageService.URL);
  }
  getAllValidated(): Observable<Temoignage[]> {
    return this.http.get<Temoignage[]>(TemoignageService.URL + '/validated');
  }
  activate(data: Temoignage) {
    data.validated = 1;
    console.log(data);
    return this.http.put(TemoignageService.URL + `/update/${data.id}`, data);
  }
  desactivate(data: Temoignage) {
    data.validated = 0;
    return this.http.put(TemoignageService.URL + `/update/${data.id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(TemoignageService.URL + `/delete/${id}`);
  }
}
