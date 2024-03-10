import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbTerminalComponent } from './mb-terminal.component';

describe('MbTerminalComponent', () => {
  let component: MbTerminalComponent;
  let fixture: ComponentFixture<MbTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbTerminalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
