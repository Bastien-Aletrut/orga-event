import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getEvenement(){
    const url = 'http://localhost:3000/'
    return this.http.get(url);
  }
}
