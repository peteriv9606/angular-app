import { Component } from '@angular/core';

import data from './data.json';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  dataList: {
    itemNo: Number;
    itemName: String;
    regPrice: Number;
    newPrice?: Number;
    rating: Number;
    description: String;
  }[] = data;
  constructor() {}
}
