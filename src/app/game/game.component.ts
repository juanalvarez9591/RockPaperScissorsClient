import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetmovesService } from '../getmoves.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  selected:string = "";


  MoveList$!:Observable<any[]>;

  constructor(private moveservice:GetmovesService) { }

  public play(action: string): void {
    console.log("Player one choosed: ", action)
  }

  ngOnInit(): void {
    this.MoveList$ = this.moveservice.getMovesList()
    
  }

}
