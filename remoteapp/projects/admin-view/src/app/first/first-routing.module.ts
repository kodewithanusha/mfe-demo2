import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDodComponent } from './admin-dod/admin-dod.component';
import { AdminMaskComponent } from './admin-mask/admin-mask.component';

const routes: Routes = [
  { path: 'admin-dod', component: AdminDodComponent },
  { path: 'admin-mask', component: AdminMaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstRoutingModule {}
