import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TabelComponent } from './tabel/tabel.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TabelComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ]
})
export class CollectionsModule { }
