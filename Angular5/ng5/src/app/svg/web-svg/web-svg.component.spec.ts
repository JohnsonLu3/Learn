import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSvgComponent } from './web-svg.component';

describe('WebSvgComponent', () => {
  let component: WebSvgComponent;
  let fixture: ComponentFixture<WebSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
