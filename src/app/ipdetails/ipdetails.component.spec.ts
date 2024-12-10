import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDetailsComponent } from './ipdetails.component';

describe('IPDetailsComponent', () => {
  let component: IPDetailsComponent;
  let fixture: ComponentFixture<IPDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IPDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IPDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
