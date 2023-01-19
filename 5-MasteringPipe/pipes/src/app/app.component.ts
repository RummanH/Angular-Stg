import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name : string = "";
  date : string = "";
  amount:number = 0;
  height =0;
  miles = 0;
  miles2 =0;
  car ={
    make:"Toyota",
    model:"Camry",
    year:2000
  }
  onMilesChange(event:any){
    this.miles= event.target.value;
  }
  onMiles2Change(event:any){
    this.miles2= event.target.value;
  }
  onDateChange(event:any){
    this.date = event.target.value;
  }
  onNameChange(event: any){
    this.name = event.target.value
  }
  onAmountChange(event:any){
    this.amount = parseFloat(event.target.value)
  }
  onHeightChange(event:any){
    this.height = parseFloat(event.target.value)
  }
}
