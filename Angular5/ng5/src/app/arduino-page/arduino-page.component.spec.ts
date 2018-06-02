import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArduinoPageComponent } from './arduino-page.component';

describe('ArduinoPageComponent', () => {
  let component: ArduinoPageComponent;
  let fixture: ComponentFixture<ArduinoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArduinoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArduinoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
