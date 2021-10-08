import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Alpaca-generator';

  @Input() part: string = 'background';
  @Input() style: string = 'blue50.png';
}
