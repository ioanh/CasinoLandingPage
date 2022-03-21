import { Component, OnInit } from '@angular/core';
import { api } from '../services/api';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _api: api) { }

  games: any;
  games2: any;

  ngOnInit(): void {
    this._api.getapi().subscribe((data) => {
      this.games = Object.entries(data.game_list)
      // .filter(el => {
      //   el[1].vendor_code === "CTRGSECASINO"
      // })
    })
  }

}
