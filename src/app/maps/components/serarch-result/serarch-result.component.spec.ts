import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerarchResultComponent } from './serarch-result.component';

describe('SerarchResultComponent', () => {
  let component: SerarchResultComponent;
  let fixture: ComponentFixture<SerarchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerarchResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerarchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
