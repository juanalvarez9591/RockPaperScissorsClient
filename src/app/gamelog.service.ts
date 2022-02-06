import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamelogService {

  readonly APIURL = "https://localhost:7029/api";

  public data = [
    {
      "id": 0,
      "player1": "string",
      "player2": "string",
      "winner": "string",
      "loser": "string",
      "totalRounds": 0
    }
  ]

  constructor(private http:HttpClient) { }

  postGameData() {
    return this.http.post(this.APIURL+"/GameLogs", this.data)
  }

  saveNameData(n1: string, n2: string) {
    this.data[0]["player1"] = n1;
    this.data[0]["player2"] = n2;

    console.log(this.data[0])
  }

  getNameData() {
    return [this.data[0]["player1"], this.data[0]["player2"]]
  }

  saveGameData(w: string, l: string, tr: number) {
    this.data[0]["winner"] = w;
    this.data[0]["loser"] = l;
    this.data[0]["totalRounds"] = tr;
  }
  
}
