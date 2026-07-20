import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moodboard } from './moodboard';

describe('Moodboard', () => {
  let component: Moodboard;
  let fixture: ComponentFixture<Moodboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moodboard],
    }).compileComponents();

    fixture = TestBed.createComponent(Moodboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
