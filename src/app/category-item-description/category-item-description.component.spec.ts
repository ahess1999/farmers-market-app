import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemDescriptionComponent } from './category-item-description.component';

describe('CategoryItemDescriptionComponent', () => {
  let component: CategoryItemDescriptionComponent;
  let fixture: ComponentFixture<CategoryItemDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryItemDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
