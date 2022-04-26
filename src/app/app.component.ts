import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dark-mode-in-angular';
  isDarkTheme = false;
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
