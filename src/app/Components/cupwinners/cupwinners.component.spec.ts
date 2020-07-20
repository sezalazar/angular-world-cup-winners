import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupwinnersComponent } from './cupwinners.component';

describe('CupwinnersComponent', () => {
  let component: CupwinnersComponent;
  let fixture: ComponentFixture<CupwinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupwinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupwinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
