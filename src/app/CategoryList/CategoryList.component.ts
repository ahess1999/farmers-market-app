import { Component, OnInit, HostListener } from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';

@Component({
  selector: 'app-card',
  templateUrl: 'CategoryList.component.html',
  styles: [`
  :host {
    display: block;
    padding: 32px;
    background-color: white;
  }
  `]
})
export class CategoryList implements OnInit {

  constructor() { }

  @HostListener("click") onClick(){
    
  }

  name: string = "test";
  ngOnInit(): void {
  }

}
