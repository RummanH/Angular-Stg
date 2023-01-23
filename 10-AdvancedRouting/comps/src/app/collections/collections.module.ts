import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TabelComponent } from './tabel/tabel.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsComponent } from './tabs/tabs.component';
import { BredcrumpsComponent } from './bredcrumps/bredcrumps.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TabelComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent,
    TabsComponent,
    BredcrumpsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ]
})
export class CollectionsModule { }
