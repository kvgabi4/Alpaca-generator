import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Alpaca } from 'src/app/model/alpaca';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {

  @Output() alpaca: Alpaca = {
    accessories: ['earings', 'flower', 'glasses', 'headphone'],
    backgrounds: ['blue50', 'blue60', 'blue70', 'darkblue30', 'darkblue50', 'darkblue70', 'green50', 'green60', 'green70', 'grey40', 'grey70', 'grey80', 'red50', 'red60', 'red70', 'yellow50', 'yellow60', 'yellow70'],
    ears: ['default', 'tilt-backward', 'tilt-forward'],
    eyes: ['angry', 'default', 'naughty', 'panda', 'smart', 'star'],
    hair: ['bang', 'curls', 'default', 'elegant', 'fancy', 'quiff', 'short'],
    leg: ['bubble-tea', 'cookie', 'default', 'game-console', 'tilt-backward', 'tilt-forward'],
    mouth: ['astonished', 'default', 'eating', 'laugh', 'tongue'],
    neck: ['bend-backward', 'bend-forward', 'default', 'thick'],
    nose: ['nose'],
  }
  parts: string[] = Object.keys(this.alpaca);

  @Output() choosenPart: string = 'accessories';
  @Output() choosenStyle: string = 'flower';
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
