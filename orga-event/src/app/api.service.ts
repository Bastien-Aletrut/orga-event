import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getAllEvenements(){
    const url = 'http://localhost:3000/getAllEvenements';
    return this.http.get(url);
  }

  getCurrentEvenements(){
    const url = 'http://localhost:3000/getCurrentEvenements';
    return this.http.get(url)
  }

  getOneEvenement(id:number){
    const url = 'http://localhost:3000/getOneEvenement/'+id;
    return this.http.get(url);
  }

  postEvenement(data:any){
    const url = 'http://localhost:3000/postEvenement';
    return this.http.post(url, data);
  }

  postMember(data:any){
    const url = "http://localhost:3000/postMember"
    return this.http.post(url, data);
  }

  deleteEvenement(id:number){
    const url = "http://localhost:3000/deleteEvenement/"+id;
    return this.http.delete(url);
  }
}
