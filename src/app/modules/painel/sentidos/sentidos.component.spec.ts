import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentidosComponent } from './sentidos.component';

describe('SentidosComponent', () => {
  let component: SentidosComponent;
  let fixture: ComponentFixture<SentidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
