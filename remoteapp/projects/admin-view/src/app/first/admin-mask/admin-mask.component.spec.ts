import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMaskComponent } from './admin-mask.component';

describe('AdminMaskComponent', () => {
  let component: AdminMaskComponent;
  let fixture: ComponentFixture<AdminMaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMaskComponent]
    });
    fixture = TestBed.createComponent(AdminMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
