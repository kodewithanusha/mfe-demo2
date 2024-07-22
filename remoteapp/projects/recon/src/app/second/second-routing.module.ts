import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReconDodComponent } from './recon-dod/recon-dod.component';
import { ReconMaskComponent } from './recon-mask/recon-mask.component';

const routes: Routes = [
  { path: 'recon-dod', component: ReconDodComponent },
  { path: 'recon-mask', component: ReconMaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondRoutingModule {}
