import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanValidationComponent } from './loan-validation.component';

describe('LoanValidationComponent', () => {
  let component: LoanValidationComponent;
  let fixture: ComponentFixture<LoanValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
