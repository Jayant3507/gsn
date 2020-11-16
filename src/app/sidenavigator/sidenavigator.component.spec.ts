import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavigatorComponent } from './sidenavigator.component';

describe('SidenavigatorComponent', () => {
  let component: SidenavigatorComponent;
  let fixture: ComponentFixture<SidenavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
