import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {
  public toggle: boolean = true;


  constructor(private _router: Router) { }

  public handleClick() {
    this._router.navigateByUrl('/')
    
  }

  ngOnInit(): void {
  }

}
