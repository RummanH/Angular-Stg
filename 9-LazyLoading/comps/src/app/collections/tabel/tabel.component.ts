import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css']
})
export class TabelComponent implements OnInit {
  @Input() data : any =[];
  @Input() headers : any =[]
  @Input("class") className = "";

  constructor() { }

  ngOnInit(): void {
  }

}
