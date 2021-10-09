import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alpaca } from 'src/app/model/alpaca';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {

  @Input() alpaca: Alpaca = {
    accessories: [],
    backgrounds: [],
    ears: [],
    eyes: [],
    hair: [],
    leg: [],
    mouth: [],
    neck: [],
    nose: [],
  }
  parts: string[] = Object.keys(this.alpaca);

  choosenPart: string = 'accessories';
  choosenStyle: string = 'flower';
  @Output() part: EventEmitter<any> = new EventEmitter();
  @Output() style: EventEmitter<any> = new EventEmitter();
  choosenPartArray: string[] = this.alpaca[this.choosenPart];

  constructor() { }

  ngOnInit(): void { }

  choosePart(part: string): void {
    this.choosenPart = part;
    this.choosenPartArray = this.alpaca[part]
    this.part.emit(part);
  }

  chooseStyle(style: string): void {
    this.choosenStyle = style;
    this.style.emit(style);
  }

}
