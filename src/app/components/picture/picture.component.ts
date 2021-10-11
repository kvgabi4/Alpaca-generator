import { Component, Input, OnInit } from '@angular/core';
import { Alpaca } from 'src/app/model/alpaca';
import mergeImages from 'merge-images';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
  [x: string]: any;

  parts: string[] = [
    'backgrounds', 'neck', 'ears', 'nose',
    'leg', 'hair', 'accessories', 'eyes', 'mouth'];

  alpaca: Alpaca = {
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

  randomize() {
    for (let key in this.alpaca) {
      const randomIndex = Math.floor(Math.random() * (this.alpaca[key].length - 1));
      this.style = this.alpaca[key][randomIndex];
      this.part = key;
      this.styleChange(this.style);
    }
  }

  download(): void {
    this.imageNumber += 1;
    const myImages = document.querySelectorAll('img');
    const myImagesArray: any = [];
    for (let i = 0; i < myImages.length-1; i++) {
      myImagesArray[i] = myImages[i].src;
    }
    // const ok = document.querySelector('.ok') as HTMLImageElement;
    mergeImages(myImagesArray)
      .then((b64: string) => {
        saveAs(b64, `alpaca.png`)
      });
  }

}
