import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'category-item',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Category card names (large buttons in the middle of the screen)
  categoryitems: string[] = ["Broccoli", "Other"];
}
