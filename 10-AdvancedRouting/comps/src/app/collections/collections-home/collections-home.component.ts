import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  partOfLink="partners";
  constructor() { }
  ngOnInit(): void {
  }

  data = [
    {name:"James", age:24, job:"Designer", employed:"Yes"},
    {name:"Rumman", age:25, job:"Developer", employed:"Yes"},
    {name:"Jahid", age:23, job:"Engineer", employed:"No"}
  ]
  headers = [
    {key:"employed", label:"Doing job"},
    {key:"name", label:"Name"},
    {key:"age", label:"Age"},
    {key:"job", label:"Job"},
  ]

}
