import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCardComponent } from './painel-card.component';

describe('PainelCardComponent', () => {
  let component: PainelCardComponent;
  let fixture: ComponentFixture<PainelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
