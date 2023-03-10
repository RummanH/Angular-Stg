import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term = '';
  onInput(term: any) {
    this.term = term.target.value;
  }
  onFormSubmit(e: any) {
    e.preventDefault();
    this.submitted.emit(this.term)
  }

  constructor() {}

  ngOnInit(): void {}
}
