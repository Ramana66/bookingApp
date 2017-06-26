import { Component, OnInit,Directive, Output, EventEmitter, Input, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {SharedService} from 'app/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[SharedService]
})
export class HomeComponent implements OnInit {
  
  categories=[];
  data:any[];
  specifiedName:string;
  categoryName:string;

  constructor(public router: Router,private sharedservice:SharedService) { }

  ngOnInit() {
  	this.categories=this.sharedservice.getData();
  	console.log(this.categories);


  }
  showTickets(){
  	 
  	 this.router.navigate(['list'],{queryParams: { page: this.categoryName,pagecategory:this.specifiedName}});
  }
  selectedOption(name,value){
    console.log(name,value);
    this.categoryName=name;
    this.specifiedName=value.name;
  		
  }

}
