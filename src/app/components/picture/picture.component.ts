import { parseTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Alpaca } from 'src/app/model/alpaca';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  background: string = '../assets/alpaca/backgrounds/blue50.png'
  picture: Alpaca = {
    accessories: [],
    backgrounds: [],
    ears: [],
    eyes: [],
    hair: [],
    leg: [],
    mouth: [],
    neck: [],
    nose: []};
  // parts: string[] = Object.keys(this.picture);
  parts: string[] = [
    'backgrounds', 'neck', 'ears', 'nose',
    'leg', 'hair', 'accessories', 'eyes', 'mouth'];

  @Input() part: string = '';
  @Input() style: string = '';

  source: string[] = this.parts.map(part => {
    if (part === 'accessories') {
      this.style = 'headphone';
    } else if (part === 'backgrounds') {
      this.style = 'blue50';
    } else if (part === 'nose') {
      this.style = 'nose';
    } else {
      this.style = 'default';
    };
    return `../assets/alpaca/${part}/${this.style}.png`
  });

  constructor() { }

  ngOnInit(): void { }

  partChange(event: string) {
    this.part = event;
  }

  styleChange(event: string) {
    this.style = event;
    const index = this.parts.indexOf(this.part)
    this.source[index] = `../assets/alpaca/${this.part}/${this.style}.png`
  }

}
