import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualsRoutingModule } from './individuals-routing.module';
import { IndividualsHomeComponent } from './individuals-home/individuals-home.component';
import { StepsComponent } from './steps/steps.component';
import { SharedModule } from '../shared/shared.module';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';

@NgModule({
  declarations: [
    IndividualsHomeComponent,
    StepsComponent,
    BreadCrumbsComponent,
  ],
  imports: [CommonModule, IndividualsRoutingModule, SharedModule],
})
export class IndividualsModule {}
