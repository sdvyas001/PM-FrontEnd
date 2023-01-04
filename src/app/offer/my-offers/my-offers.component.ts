import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';
import { Offer } from 'src/app/offer/offer.model'
import { OfferServiceService } from 'src/app/offer/offer-service.service'
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeFlattener, MatTreeNestedDataSource,MatTreeFlatDataSource} from '@angular/material/tree';
import {EditService, PageService, PageSettingsModel, ToolbarService, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

interface OfferData{
  id: any;
  name:string;
  description:any;
  sales_start_date:string;
  sales_end_date:string;
  children?:OfferData[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  description: any;
  sales_start_date:string;
  sales_end_date:string;
  level: number;
  id:any;
}

@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.scss'],
  providers: [EditService, ToolbarService, PageService],
})
export class MyOffersComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'count' ,'sales_start_date','sales_end_date','action'];

  responseData:any;

    private transformer = (node: OfferData, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      description: node.description,
      sales_start_date:node.sales_start_date,
      sales_end_date:node.sales_end_date,
      id:node.id,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, 
    node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  currentUser: any;
  token:any;
  isLoggedIn = false;
  roles: string[] = [];
  

  constructor(private storageService: StorageService,private offerService: OfferServiceService) { }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

 
  ngOnInit(): void {
    this.getAllProjects();
  }


  getAllProjects(): void {
    this.offerService.getAll()
      .subscribe({
        next: (result) => {
          this.responseData = result;
          this.dataSource.data = this.responseData;
        },
        error: (e) => console.error(e)
        
      })
           
  }

  editOffer(){}
  deleteOffer(id:any){
    this.offerService.delete(id).subscribe((result)=>{})
    window.location.reload();
  }
}
