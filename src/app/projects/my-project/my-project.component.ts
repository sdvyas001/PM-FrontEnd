import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/_services/storage.service';
import { ProjectServiceService } from '../project-service.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.scss']
})
export class MyProjectComponent implements OnInit {
  projects: Project[] = [];
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  currentUser: any;
  token:any;
  constructor(private projectService: ProjectServiceService, public router: Router,private storageService: StorageService) { }
 
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.token=this.currentUser.accessToken;
    console.log("Token"+this.token)
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
       this.getAllProjects();
    
  }

  getAllProjects(): void {
    this.projectService.getAll()
      .subscribe({
        next: (data) => {
          this.projects = data;
          console.log(data);
        },
        error: (e) => console.error(e)
        
      })
           
  }

  editProject(project:any){
    localStorage.setItem('project',project);
    console.log("Project-Id"+project)
  }

  deleteProject(project:any){
    this.projectService.delete(project).subscribe((result)=>{
     
    })
    window.location.reload();
  }

}
