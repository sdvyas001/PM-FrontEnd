import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project/create-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { AvatarModule, BadgeModule, BreadcrumbModule, ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FooterModule, FormModule, GridModule, HeaderModule, ListGroupModule, NavModule, ProgressModule, SharedModule, SidebarModule, TableModule, TabsModule, ToastModule, UtilitiesModule } from '@coreui/angular';
import { AlertModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CreateProjectComponent,
    UpdateProjectComponent,
    ViewProjectComponent,
    MyProjectComponent
  ],
  imports: [
    //BrowserAnimationsModule,
    MatIconModule,
    CommonModule,
    ProjectsRoutingModule,
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
    ToastModule
  ],
  exports: [
    CreateProjectComponent,
    UpdateProjectComponent,
    ViewProjectComponent,
    MyProjectComponent
  ]
})
export class ProjectsModule { }
