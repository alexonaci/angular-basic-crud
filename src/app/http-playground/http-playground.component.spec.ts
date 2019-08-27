import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPlaygroundComponent } from './http-playground.component';

describe('HttpPlaygroundComponent', () => {
  let component: HttpPlaygroundComponent;
  let fixture: ComponentFixture<HttpPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
