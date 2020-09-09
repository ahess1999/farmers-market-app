import { Component, OnInit, } from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';

@Component({
  selector: 'app-card',
  templateUrl: 'CategoryList.component.html',
  styleUrls: ['./CategoryList.component.css']
})
export class CategoryList implements OnInit {
  constructor() {
  }
  //List of categories (large buttons on the homepage)
  categories: any[] = [
    {name: 'Produce'},
    {name: 'Other'},
    {name: 'Test'}
  ];
  //Stores favorites (doesn't do anything at the moment)
  favorites: string[] = [
    
  ];

  Broccoli: string = "Broccoli";
  ngOnInit(): void {
  }

}
