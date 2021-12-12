import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  GetData():Observable<any[]>{
    return this.http.get<any[]>('https://reqres.in/api/users');
  }

  AddData(frmData:any):Observable<any>{
    return this.http.post<any>('https://reqres.in/api/users',frmData);
  }
}
