import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
posts = [
  {title:"Neat tree", userName:"Rumman", content:"Saw this awesome tree", imgUrl: "assets/img3.jpeg"},
  {title:"Neat tree", userName:"Rumman", content:"Saw this awesome tree", imgUrl: "assets/img3.jpeg"},
  {title:"Snow mountain adventure", userName:"Hasan", content:"Here is a pictuSnow mountain adventure", imgUrl: "assets/img1.jpeg"},
  {title:"Snow mountain adventure", userName:"Hasan", content:"Here is a pictuSnow mountain adventure", imgUrl: "assets/img1.jpeg"},
  {title:"Biking", userName:"Jahid", content:"I ride a bike today", imgUrl: "assets/img2.jpeg"},
  {title:"Biking", userName:"Jahid", content:"I ride a bike today", imgUrl: "assets/img2.jpeg"},
  {title:"Neat tree", userName:"Rumman", content:"Saw this awesome tree", imgUrl: "assets/img3.jpeg"},
  {title:"Neat tree", userName:"Rumman", content:"Saw this awesome tree", imgUrl: "assets/img3.jpeg"},
  {title:"Snow mountain adventure", userName:"Hasan", content:"Here is a pictuSnow mountain adventure", imgUrl: "assets/img1.jpeg"},
  {title:"Snow mountain adventure", userName:"Hasan", content:"Here is a pictuSnow mountain adventure", imgUrl: "assets/img1.jpeg"},
  {title:"Biking", userName:"Jahid", content:"I ride a bike today", imgUrl: "assets/img2.jpeg"},
  {title:"Biking", userName:"Jahid", content:"I ride a bike today", imgUrl: "assets/img2.jpeg"}
];
getPosts(){
  return this.posts;
}

}
