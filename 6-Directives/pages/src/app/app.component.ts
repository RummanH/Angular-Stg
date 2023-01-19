import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  // getClass(){
  //    const classes = [];
  // based on some condition i can return string class or array of string class
  // }

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 5;
  }

  images =[
{
  title:"At the beach",
  url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
},
{
  title:"At the desert",
  url:"https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
},
{
  title:"At the moon",
  url:"https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
},
{ 
  title:"Ocean view from mountain",
  url:"https://plus.unsplash.com/premium_photo-1668098402695-b23c2cd266d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2NlYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{ 
  title:"Maybe venus is welcoming us",
  url:"https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmVudXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
},
{ 
  title:"Maybe venus is welcoming us",
  url:"https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmVudXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
},
{ 
  title:"Power of lava can melt anything",
  url:"https://images.unsplash.com/photo-1621423028742-e6f7256405d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGF2YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
},
{ 
  title:"Beautiful road view in Canada",
  url:"https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
},
{ 
  title:"Amazon forest",
  url:"https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
},
{ 
  title:"Beautiful desert",
  url:"https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{ 
  title:"Sea the beautiful sea",
  url:"https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
},
{ 
  title:"Lets shine with sun",
  url:"https://images.unsplash.com/photo-1575881875475-31023242e3f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{ 
  title:"See the beautiful moon",
  url:"https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
]
}
