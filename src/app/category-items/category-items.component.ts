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

  categoryitems: string[] = ["Broccoli", "Other"];
}
