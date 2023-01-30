import { Component } from '@angular/core';
import { WikipediaService } from './services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  results = [];
  constructor(private wikipedia: WikipediaService) {}
  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((data:any) => {
      this.results = data.query.search
    });
  }
}

// https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space
