import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmasComponent } from './armas.component';

describe('ArmasComponent', () => {
  let component: ArmasComponent;
  let fixture: ComponentFixture<ArmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
