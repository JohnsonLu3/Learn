import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpageShowcaseComponent } from './webpage-showcase.component';

describe('WebpageShowcaseComponent', () => {
  let component: WebpageShowcaseComponent;
  let fixture: ComponentFixture<WebpageShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpageShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebpageShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
