import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryList } from './CategoryList/CategoryList.component';
import { AppComponent } from './app.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryItemsComponent } from './category-items/category-items.component';

const routes: Routes = [
  {path: "", component: CategoryList},
  {path: "Produce", component: CategoryItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }