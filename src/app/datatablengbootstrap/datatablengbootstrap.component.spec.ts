import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablengbootstrapComponent } from './datatablengbootstrap.component';

describe('DatatablengbootstrapComponent', () => {
  let component: DatatablengbootstrapComponent;
  let fixture: ComponentFixture<DatatablengbootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatablengbootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablengbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
