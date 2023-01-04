import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { OffersComponent } from './offers/offers.component';
import { ExternalOffersComponent } from './external-offers/external-offers.component';
import { UsagesComponent } from './usages/usages.component';
import { DiscountAndBundlesComponent } from './discount-and-bundles/discount-and-bundles.component';
import { RevenueSharesComponent } from './revenue-shares/revenue-shares.component';
import { UserAndRolesComponent } from './user-and-roles/user-and-roles.component';
import { ReportsComponent } from './reports/reports.component';
import {ComponentsRoutingModule} from './components-routing.module'


@NgModule({
  declarations: [
    ProjectsComponent,
    OffersComponent,
    ExternalOffersComponent,
    UsagesComponent,
    DiscountAndBundlesComponent,
    RevenueSharesComponent,
    UserAndRolesComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    ProjectsComponent,
    OffersComponent,
    ExternalOffersComponent,
    UsagesComponent,
    DiscountAndBundlesComponent,
    RevenueSharesComponent,
    UserAndRolesComponent,
    ReportsComponent
  ]
})
export class ComponentsModule { }
