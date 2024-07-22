import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { ReconDodComponent } from './recon-dod/recon-dod.component';
import { ReconMaskComponent } from './recon-mask/recon-mask.component';


@NgModule({
  declarations: [
    ReconDodComponent,
    ReconMaskComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
