import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  // @Input() backgroundColor! : string;
  constructor(private element: ElementRef) { 
    // never do this
    // setTimeout(()=>{
    //   this.element.nativeElement.style.color = this.backgroundColor
    // },1000)
  }
  @Input("appClass") set className(classObj : any){
   for(let key in classObj){
    if(classObj[key]){
      this.element.nativeElement.classList.add(key)
    }else{
      this.element.nativeElement.classList.remove(key)
    }
   }
  }
}
