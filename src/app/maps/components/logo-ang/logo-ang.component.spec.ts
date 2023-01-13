import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAngComponent } from './logo-ang.component';

describe('LogoAngComponent', () => {
  let component: LogoAngComponent;
  let fixture: ComponentFixture<LogoAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoAngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
