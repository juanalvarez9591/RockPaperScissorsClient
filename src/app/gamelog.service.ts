import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamelogService {

  readonly APIURL = "https://localhost:7029/api";

  constructor(private http:HttpClient) { }

  postGame(data:any) {
    return this.http.post(this.APIURL+"/GameLogs", data)
  }
}
