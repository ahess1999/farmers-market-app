import { Component, OnInit, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; 
import { NgModel } from '@angular/forms';


@Component({
  selector: 'category-item-description',
  templateUrl: './category-item-description.component.html',
  styleUrls: ['./category-item-description.component.css']
})

export class CategoryItemDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  wowyouclickedthis() {
    var favicon = document.getElementById(this.itemname);
    if(favicon.innerHTML === "favorite"){
      favicon.innerHTML = "favorite_border";
    }
    else {
      favicon.innerHTML = "favorite";
    }
  }

  @Input() itemname: string;
}
