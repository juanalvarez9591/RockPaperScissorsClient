import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetmovesService } from '../getmoves.service';
import { GamelogService } from '../gamelog.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  p1selected:any = {moveName: "Select an option: "}; 
  p2selected:any = {moveName: "Select an option: "};
  result:string = "";

  MoveList$!:Observable<any[]>;

  constructor(private moveservice:GetmovesService, private gamelogservice: GamelogService) { }

  public handleSelection(selection: any, pswitch: boolean): void {
    if (pswitch === true) {
      this.p1selected = selection;
    } else {
      this.p2selected = selection;
    }    
  }

  public handleSubmit(p1selection: any, p2selection: any): void {
    this.refreshMoves();
    this.generateResultString(p1selection, p2selection);
    
  }

  private generateResultString(p1selection: any, p2selection: any): void {
    const pn = this.gamelogservice.getNameData();

    if (p1selection.kills === p2selection.moveName) {
      this.result = pn[0]+" killed "+pn[1]+" "+p2selection.moveName+" with his "+p1selection.moveName
    } else if (p1selection.moveName === p2selection.kills) {
      this.result = pn[1]+" killed "+pn[0]+" "+p2selection.moveName+" with his "+p1selection.moveName
    } else {
      this.result = pn[0]+" and "+pn[1]+" tied!"
    }
  }

  private refreshMoves(): void{
    this.MoveList$ = this.moveservice.getMovesList();
  }

  ngOnInit(): void {
    this.MoveList$ = this.moveservice.getMovesList()
    
  }
}
