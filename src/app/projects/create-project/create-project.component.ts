import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Project} from 'src/app/projects/project.model';
import {ProjectServiceService} from 'src/app/projects/project-service.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  visible:boolean = true;
    dismissible:boolean = true;
  successMsg: boolean=false;
  project:Project={
    id: '',
    name: '',
    description: '',
    status: '',
  }
  selected : any;
  submitted = false;

  constructor(private fb: FormBuilder,
    private projectService: ProjectServiceService,
    private route: ActivatedRoute,
    private router: Router) {
    this.project = this.createProjectForm(fb);
  }
  //project: FormGroup;
  
  statusValues = [
    {id: 1, name: "Draft"},
    {id: 2, name: "Under Implementation"},
    {id: 3, name: "Live"},
    {id: 4, name: "Cancelled"},
 ];
 selectedValue = {id:'',name:''};

  ngOnInit(): void {
  }

  private createProjectForm(fb: FormBuilder): FormGroup {
    return fb.group({
      remarks: new FormControl(''),
    });
  }

  createProject(){
    this.successMsg=true;
      this.visible = true;
    this.dismissible = true;
    const data = {
     // id: this.project.id,
      name: this.project.name,
      description: this.project.description,
      status: this.selectedValue.name
    };

    this.projectService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });


  }

}
