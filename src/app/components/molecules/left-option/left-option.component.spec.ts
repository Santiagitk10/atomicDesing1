import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftOptionComponent } from './left-option.component';

describe('LeftOptionComponent', () => {
  let component: LeftOptionComponent;
  let fixture: ComponentFixture<LeftOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
