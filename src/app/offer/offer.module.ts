import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import { MyOffersComponent } from './my-offers/my-offers.component';
import { ViewOfferComponent } from './view-offer/view-offer.component';
import { OfferRoutingModule } from './offer-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { AvatarModule, BadgeModule, BreadcrumbModule, ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FooterModule, FormModule, GridModule, HeaderModule, ListGroupModule, NavModule, ProgressModule, SharedModule, SidebarModule, TableModule, TabsModule, ToastModule, UtilitiesModule } from '@coreui/angular';
import { AlertModule } from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
//import { MatDatepickerModule } from '@angular/material/datepicker/datepicker-module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatTreeModule} from '@angular/material/tree';
import { MatTableModule } from '@angular/material/table'  
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid';
import { NbTreeGridModule } from '@nebular/theme';
import { NbCardModule } from '@nebular/theme';
import { NbInputModule, NbIconModule,NbTagModule } from '@nebular/theme';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import { IconModule, IconSetService } from '@coreui/icons-angular';


@NgModule({
  declarations: [
    CreateOfferComponent,
    UpdateOfferComponent,
    MyOffersComponent,
    ViewOfferComponent
  ],
  imports: [
    IconModule,
    MatAutocompleteModule,
    NbTagModule,
    NbIconModule,
    NbCardModule,
    NbInputModule,
    NbTreeGridModule,
    TreeGridModule,
    MatTableModule,
    MatTreeModule,
    NgSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    OfferRoutingModule,
    MatIconModule,
    ButtonModule,
    FormModule,
    CardModule,
    GridModule,
    AvatarModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonGroupModule,
    DropdownModule,
    FooterModule,
    HeaderModule,
    ListGroupModule,
    NavModule,
    ProgressModule,
    SharedModule,
    SidebarModule,
    TabsModule,
    UtilitiesModule,
    AlertModule,
    TableModule,
    FormsModule,
    ToastModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateOfferComponent,
    UpdateOfferComponent,
    MyOffersComponent,
    ViewOfferComponent
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [PageService,
    SortService,
    FilterService,
    IconSetService,]
})
export class OfferModule { }
