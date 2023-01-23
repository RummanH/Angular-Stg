import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats =[
    {value: 22, label: "# Number of users"},
    {value: 900, label: "Revenue"},
    {value: 50, label: "Reviews"}
  ]
  items =[
    {image:"https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", title:"Coach", description:"These are very comfortable coaches"},
    {image:"https://images.unsplash.com/photo-1609799545166-347a5ba518cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRyZXNzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", title:"Dresser", description:"These are very beautiful dressers"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
