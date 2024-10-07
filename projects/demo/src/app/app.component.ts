import {Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public testPromises = [];
  renderIt = false;

  constructor(private ngZone: NgZone) {

  }

  go() {
    this.renderIt = true;
    this.ngZone.runOutsideAngular(() => {
      for (let i = 0; i < 100; i++) {
        this.testPromises.push(new Promise((resolve) => {
          setTimeout(() => {
              resolve(i);
          }, i * 10);
        }));
      }
    });
  }
}
