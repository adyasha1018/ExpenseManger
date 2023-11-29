import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFourComponent } from './category-four.component';

describe('CategoryFourComponent', () => {
  let component: CategoryFourComponent;
  let fixture: ComponentFixture<CategoryFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryFourComponent]
    });
    fixture = TestBed.createComponent(CategoryFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
