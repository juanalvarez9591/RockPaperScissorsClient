import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetmovesService } from '../getmoves.service';
import { GamelogService } from '../gamelog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  p1selected:any = {moveName: "Select an option: "}; 
  p2selected:any = {moveName: "Select an option: "};
  result:any = [];
  score = {"p1": 0, "p2":0, "r": 0};

  MoveList$!:Observable<any[]>;
  pnames$!:any;

  public toggle:boolean = true;

  constructor(private moveservice:GetmovesService, private gamelogservice: GamelogService, private _router: Router) { }

  public handleSelection(selection: any, pswitch: boolean): void {
    if (pswitch === true) {
      this.p1selected = selection;
    } else {
      this.p2selected = selection;
    } 

  }

  public handleSubmit(p1selection: any, p2selection: any): void {
    this.refreshMoves();
    this.handleResult(p1selection, p2selection);
    
  }

  private handleResult(p1selection: any, p2selection: any): void {
    const pn = this.gamelogservice.getNameData();

    this.score["r"]++;

    if (p1selection.kills === p2selection.moveName) {
      this.result.push("Round "+this.score["r"]+": "+pn[0]+" killed "+pn[1]+"'s "+p2selection.moveName+" with his "+p1selection.moveName)
      this.score["p1"]++;
    } else if (p1selection.moveName === p2selection.kills) {
      this.result.push("Round "+this.score["r"]+": "+pn[1]+" killed "+pn[0]+"'s "+p2selection.moveName+" with his "+p1selection.moveName)
      this.score["p2"]++;
    } else {
      this.result.push("Round "+this.score["r"]+": "+pn[0]+" and "+pn[1]+" tied!")
    }

    if (this.score["p1"] + this.score["p2"] === 3) {
      if (this.score["p1"] > this.score["p2"]) {
        this.gamelogservice.saveGameData("Player 1", "Player 2", this.score["r"])
      } else {
        this.gamelogservice.saveGameData("Player 2", "Player 1", this.score["r"])
      }
    this.gamelogservice.postGameData().subscribe(res => res);
    this._router.navigateByUrl('/end')


    }
  }

  private refreshMoves(): void{
    this.MoveList$ = this.moveservice.getMovesList();
  }

  ngOnInit(): void {
    this.MoveList$ = this.moveservice.getMovesList()
    this.pnames$ = this.gamelogservice.getNameData()
  }
}
