import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getEvenements(){
    const url = 'http://localhost:3000/getEvenements'
    return this.http.get(url);
  }

  postEvenement(data:any){
    const url = 'http://localhost:3000/postEvenement';
    return this.http.post(url, data);
  }

  deleteEvenement(id:number){
    const url = "http://localhost:3000/deleteEvenement/"+id;
    return this.http.delete(url);
  }
}
