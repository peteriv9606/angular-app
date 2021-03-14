import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModalContentComponent } from './card-modal-content.component';

describe('CardModalContentComponent', () => {
  let component: CardModalContentComponent;
  let fixture: ComponentFixture<CardModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
