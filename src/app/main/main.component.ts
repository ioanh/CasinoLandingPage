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

  ngOnInit(): void {
    this._api.getapi().subscribe((data) => {
      console.log(data.game_list)
      console.log(Object.entries(data.game_list))
      this.games = Object.entries(data.game_list);
      console.log(this.games[0][1])
    })
  }

}
