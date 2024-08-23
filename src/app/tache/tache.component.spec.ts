import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TACHEComponent } from './tache.component';

describe('TacheComponent', () => {
  let component: TACHEComponent;
  let fixture: ComponentFixture<TACHEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TACHEComponent]
    });
    fixture = TestBed.createComponent(TACHEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
