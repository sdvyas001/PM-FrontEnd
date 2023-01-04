import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import { MyOffersComponent } from './my-offers/my-offers.component';
import { ViewOfferComponent } from './view-offer/view-offer.component';

const routes: Routes = [
  {
    path: '',
    component: MyOffersComponent,
    data: {
      title: `Offers`
    }
  },
  {
    path: 'create-offer',
    component: CreateOfferComponent,
    data: {
      title: `Create-Offer`
    }
  },
  {
    path: 'update-offer',
    component: UpdateOfferComponent,
    data: {
      title: `Update-Offer`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule {
}
