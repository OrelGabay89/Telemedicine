import { Component } from '@angular/core';
import { Global } from './_helpers/common/global.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fewa-web';
  constructor(private global: Global) {
    var p = location.pathname.split('/');
    this.global.currentPractice = p[1];
    this.global.currentProvider = p[2];
  }

  selectTheme(type) {
    if (type == 'blue') {
      let body = document.getElementsByTagName('body')[0];
      body.classList.add("blueTheme");
      body.classList.remove("greenTheme");
    } else if (type == 'red') {
      let body = document.getElementsByTagName('body')[0];
      body.classList.add("greenTheme");
      body.classList.remove("blueTheme");
    }
  }
}
