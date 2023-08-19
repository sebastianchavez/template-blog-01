import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideCategoriesComponent } from './aside-categories.component';

describe('AsideCategoriesComponent', () => {
  let component: AsideCategoriesComponent;
  let fixture: ComponentFixture<AsideCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideCategoriesComponent]
    });
    fixture = TestBed.createComponent(AsideCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
