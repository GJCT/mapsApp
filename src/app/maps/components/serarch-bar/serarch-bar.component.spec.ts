import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerarchBarComponent } from './serarch-bar.component';

describe('SerarchBarComponent', () => {
  let component: SerarchBarComponent;
  let fixture: ComponentFixture<SerarchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerarchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerarchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
