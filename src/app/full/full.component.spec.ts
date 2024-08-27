import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FULLComponent } from './full.component';

describe('FULLComponent', () => {
  let component: FULLComponent;
  let fixture: ComponentFixture<FULLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FULLComponent]
    });
    fixture = TestBed.createComponent(FULLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
