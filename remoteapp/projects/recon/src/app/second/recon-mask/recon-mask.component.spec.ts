import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconMaskComponent } from './recon-mask.component';

describe('ReconMaskComponent', () => {
  let component: ReconMaskComponent;
  let fixture: ComponentFixture<ReconMaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReconMaskComponent]
    });
    fixture = TestBed.createComponent(ReconMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
