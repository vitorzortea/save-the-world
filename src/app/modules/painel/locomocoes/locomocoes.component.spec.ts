import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocomocoesComponent } from './locomocoes.component';

describe('LocomocoesComponent', () => {
  let component: LocomocoesComponent;
  let fixture: ComponentFixture<LocomocoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocomocoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocomocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
