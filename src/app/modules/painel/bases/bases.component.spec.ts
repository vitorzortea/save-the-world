import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesComponent } from './bases.component';

describe('BasesComponent', () => {
  let component: BasesComponent;
  let fixture: ComponentFixture<BasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
