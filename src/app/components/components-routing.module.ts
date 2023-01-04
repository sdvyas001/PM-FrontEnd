import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'ToDo',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'projects',
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        data: {
          title: 'Projects',
        },
      },
      {
        path: 'offers',
        component: OffersComponent,
        data: {
          title: 'Offers',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
