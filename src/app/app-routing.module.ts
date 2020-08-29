import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryList } from './CategoryList/CategoryList.component';
import { AppComponent } from './app.component';
import { CategoryCardComponent } from './category-card/category-card.component';

const routes: Routes = [
  {path: "", component: CategoryList},
  {path: "Produce", component: CategoryCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//Create a new component for each of the cards to display 
//whats in the card rather than using the card component