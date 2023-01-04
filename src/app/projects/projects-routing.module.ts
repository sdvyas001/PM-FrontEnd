import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';



const routes: Routes = [
  {
    path: '',
    component: MyProjectComponent,
    data: {
      title: `Projects`
    }
  },
  {
    path: 'create-project',
    component: CreateProjectComponent,
    data: {
      title: `Create-Project`
    }
  },
  {
    path: 'update-project',
    component: UpdateProjectComponent,
    data: {
      title: `Update-Project`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {
}
