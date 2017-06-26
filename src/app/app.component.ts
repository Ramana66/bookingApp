	import { Component } from '@angular/core';
	import {SharedService} from 'app/shared.service';
	import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers:[SharedService]
})
export class AppComponent {
  title = 'app works!';
  loginNam:string;
  subscription:Subscription;

  constructor(private sharedservice:SharedService) { 
   sharedservice.space.subscribe((val) => {
     this.loginNam=val; 
    });
}

  ngOnInit() {
  	//this.loginName=this.sharedservice.nameupdated.subsrcgetLoginName();
  /*	this.sharedservice.nameUpdated.subscribe(
      (name) => {
        this.loginName = this.sharedservice.getLoginName();
      }
      );*/
      
  	  
      
      
      	
  	
  }
  
}
