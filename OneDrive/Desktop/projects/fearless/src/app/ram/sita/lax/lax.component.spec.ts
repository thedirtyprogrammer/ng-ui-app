import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaxComponent } from './lax.component';

describe('LaxComponent', () => {
  let component: LaxComponent;
  let fixture: ComponentFixture<LaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
