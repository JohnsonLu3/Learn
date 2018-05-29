import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloppyComponent } from './floppy.component';

describe('FloppyComponent', () => {
  let component: FloppyComponent;
  let fixture: ComponentFixture<FloppyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloppyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
