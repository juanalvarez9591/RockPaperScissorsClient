import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetmovesService {

  readonly APIURL = "https://localhost:7029/api";

  constructor(private http:HttpClient) { }

  getMovesList():Observable<any[]> {
    return this.http.get<any>(this.APIURL+"/Moves");
  }

}
