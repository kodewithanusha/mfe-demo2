import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconDodComponent } from './recon-dod.component';

describe('ReconDodComponent', () => {
  let component: ReconDodComponent;
  let fixture: ComponentFixture<ReconDodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReconDodComponent]
    });
    fixture = TestBed.createComponent(ReconDodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
