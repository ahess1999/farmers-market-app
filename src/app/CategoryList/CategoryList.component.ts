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

  categories: any[] = [
    {name: 'Produce'},
    {name: 'Other'},
    {name: 'Test'}
  ];


  ngOnInit(): void {
  }

}
