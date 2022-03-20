import { Component, OnInit } from '@angular/core';
import { api } from '../services/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _api: api) { }

  ngOnInit(): void {
    console.log(this._api.getapi().subscribe((data)=> {
      console.log(data);
    }));
  }

}
