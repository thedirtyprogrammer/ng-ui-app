import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaranComponent } from './karan.component';

describe('KaranComponent', () => {
  let component: KaranComponent;
  let fixture: ComponentFixture<KaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
