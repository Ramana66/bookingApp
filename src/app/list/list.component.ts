import { Component,Input , OnInit } from '@angular/core';

import {HomeComponent} from '../home/home.component';
import {SharedService} from 'app/shared.service';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {SeatingComponent} from 'app/seating/seating.component';
import {SeatingService} from 'app/seating.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	@Input('selectedValue') selecteddata: string;
	@Input('selectedcategory') selectedcat: string;
	
list=[];	
user=[{email:"ramana@gmail.com",password:"qwert",wallet:200}];
sub: any;
loginName:string;
page :any;
currentList:any[];
constructor(private route: ActivatedRoute,public router: Router,private sharedservice:SharedService,private seatingService:SeatingService) { 
  	this.list=sharedservice.getList();
    sharedservice .space.subscribe((val) =>{   
      this.loginName=val;
    });
  }

  ngOnInit() {
       this.sub = this.route
      .queryParams
      .subscribe(params => { 
       this.page = params;
       for (var i=0;i<this.list.length;i++){
         if(this.list[i].name===this.page.page){
           this.currentList=this.list[i].data;
           console.log(this.currentList);
           console.log(this.page);

         }
       }
      });

  }
  submit(){
    
    this.router.navigate(['seating']);
  }
login(email,password){

//this.seatingService.authorizing();
//alert("came");
if(email===this.user[0].email && password===this.user[0].password){
this.sharedservice.setLoginName(email);
 this.router.navigate(['seating']);
}
else{
  alert("password wrong");
}
  }
}
}
