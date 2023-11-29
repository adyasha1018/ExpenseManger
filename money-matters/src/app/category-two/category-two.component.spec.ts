import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTwoComponent } from './category-two.component';

describe('CategoryTwoComponent', () => {
  let component: CategoryTwoComponent;
  let fixture: ComponentFixture<CategoryTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryTwoComponent]
    });
    fixture = TestBed.createComponent(CategoryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
