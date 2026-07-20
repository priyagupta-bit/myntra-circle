import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleNotes } from './style-notes';

describe('StyleNotes', () => {
  let component: StyleNotes;
  let fixture: ComponentFixture<StyleNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleNotes],
    }).compileComponents();

    fixture = TestBed.createComponent(StyleNotes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
