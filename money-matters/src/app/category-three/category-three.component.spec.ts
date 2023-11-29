import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryThreeComponent } from './category-three.component';

describe('CategoryThreeComponent', () => {
  let component: CategoryThreeComponent;
  let fixture: ComponentFixture<CategoryThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryThreeComponent]
    });
    fixture = TestBed.createComponent(CategoryThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
