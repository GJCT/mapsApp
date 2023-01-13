import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLocationComponent } from './btn-location.component';

describe('BtnLocationComponent', () => {
  let component: BtnLocationComponent;
  let fixture: ComponentFixture<BtnLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
