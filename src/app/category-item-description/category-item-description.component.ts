import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'category-item-description',
  templateUrl: './category-item-description.component.html',
  styleUrls: ['./category-item-description.component.css']
})
export class CategoryItemDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() itemname: string;
}
