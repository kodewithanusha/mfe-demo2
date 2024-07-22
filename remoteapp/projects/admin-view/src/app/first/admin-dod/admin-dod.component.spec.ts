import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDodComponent } from './admin-dod.component';

describe('AdminDodComponent', () => {
  let component: AdminDodComponent;
  let fixture: ComponentFixture<AdminDodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDodComponent]
    });
    fixture = TestBed.createComponent(AdminDodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
