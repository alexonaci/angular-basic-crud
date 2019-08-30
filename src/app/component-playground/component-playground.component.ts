import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-playground',
  templateUrl: './component-playground.component.html',
  styleUrls: ['./component-playground.component.css']
})
export class ComponentPlaygroundComponent implements OnInit {

  constructor() { }

  public shouldBeRed = false;

  public objectToBeSent = {name: 'Cosmin'};

  ngOnInit() {
  }

  changeBackgroundColor(event) {
    console.log(event);
    this.shouldBeRed = !this.shouldBeRed;
  }

}
