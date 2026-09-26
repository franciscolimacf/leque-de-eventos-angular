import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardEvento } from './card-evento';
import { EVENTOS } from '../eventos.data';

describe('CardEvento', () => {
  let component: CardEvento;
  let fixture: ComponentFixture<CardEvento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEvento],
    }).compileComponents();

    fixture = TestBed.createComponent(CardEvento);
    component = fixture.componentInstance;
    // input.required: sem isto o componente nem nasce (NG0950)
    fixture.componentRef.setInput('evento', EVENTOS[0]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
