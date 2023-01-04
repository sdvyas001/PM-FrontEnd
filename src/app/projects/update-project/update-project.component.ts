import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectServiceService } from '../project-service.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {

  visible:boolean = true;
    dismissible:boolean = true;
  successMsg: boolean=false;
  updatedData:any;
  pId:any;
  project:Project={
  id: '',
  name: '',
  description: '',
  status: ''
  }
  selected : any;
  submitted = false;

  constructor(private fb: FormBuilder,
    private projectService: ProjectServiceService,
    private route: ActivatedRoute,
    private router: Router) {
      this.project = this.createProjectForm(fb);
     }
     status:any;
     statusValues = [
      {id: 1, name: "Draft"},
      {id: 2, name: "Under Implementation"},
      {id: 3, name: "Live"},
      {id: 4, name: "Cancelled"},
   ];
   selectedValue = {id:'',name:''};
  

  ngOnInit(): void {
   this.updatedData= localStorage.getItem("project");
   this.pId=this.updatedData;
   console.log("Project-ID"+this.pId)
    this.projectService.get(this.pId).subscribe((result)=>{
      this.project=result;
      this.selectedValue={id:'',name:result.status};
    })
   
  }

  private createProjectForm(fb: FormBuilder): FormGroup {
    return fb.group({
      remarks: new FormControl(''),
    });
  }

  updateProject(){
    const data = {
      name: this.project.name,
      description: this.project.description,
      status: this.selectedValue.name
    };

    this.projectService.update(this.pId,data).subscribe((result)=>{
      this.successMsg = true;

    })

  }

}
