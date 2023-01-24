import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualsHomeComponent } from './individuals-home/individuals-home.component';

const routes: Routes = [{ path: '', component: IndividualsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividualsRoutingModule {}
