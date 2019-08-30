import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

interface Player {
  name: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  private _content: Player;

  @Input() set content(content) {
    this._content = content;
    if (content.name === 'Cosmin') {
      this.status = 'Winner';
    }
  }

  get content() {
    return this._content;
  }

  public status = '';

  @Output() backgroundRed = new EventEmitter<boolean>();

  ngOnInit() {
    console.log(this.content);
  }

  triggerChange() {
    this.backgroundRed.emit(true);
  }

}
