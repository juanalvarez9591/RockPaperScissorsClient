import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlescreen',
  templateUrl: './titlescreen.component.html',
  styleUrls: ['./titlescreen.component.css']
})
export class TitlescreenComponent implements OnInit {

  public i1: string = "";
  public i2: string = "";

  public handleSubmit(): void{
    console.log(this.i1, this.i2);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
