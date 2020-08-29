import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() category: string;

}
