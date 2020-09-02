import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryList } from './CategoryList/CategoryList.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryItemsComponent } from './category-items/category-items.component';
import { CategoryItemDescriptionComponent } from './category-item-description/category-item-description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'; 
@NgModule({
  declarations: [
    AppComponent,
    CategoryList,
    CategoryCardComponent,
    CategoryItemsComponent,
    CategoryItemDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
