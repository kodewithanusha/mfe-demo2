import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { AdminDodComponent } from './admin-dod/admin-dod.component';
import { AdminMaskComponent } from './admin-mask/admin-mask.component';


@NgModule({
  declarations: [
    AdminDodComponent,
    AdminMaskComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
