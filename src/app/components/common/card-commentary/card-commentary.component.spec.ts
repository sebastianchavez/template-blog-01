import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCommentaryComponent } from './card-commentary.component';

describe('CardCommentaryComponent', () => {
  let component: CardCommentaryComponent;
  let fixture: ComponentFixture<CardCommentaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCommentaryComponent]
    });
    fixture = TestBed.createComponent(CardCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
