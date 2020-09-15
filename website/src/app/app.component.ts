import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
  finished = ["webscraper", "smash", "android"];
  unfinished = ["quantum", "unity", "website"]
}
