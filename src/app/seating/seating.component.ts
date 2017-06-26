import { Component, OnInit } from '@angular/core';
import {SeatingService} from 'app/seating.service';
import { Http } from '@angular/http';
import { PipeTransform, Pipe } from '@angular/core';
import {SharedService} from 'app/shared.service';
@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css'],
  providers:[SeatingService,SharedService],
  
})
export class SeatingComponent implements OnInit{
  email:string;
  password:string;
  seatingList:any[];
  loginName="login";

 keys=[];
 selectedcount=1;
 array1=[];
 array2=[];
 

  constructor(private seatingService:SeatingService,private sharedService:SharedService) {
     sharedService .space.subscribe((val) => {
      console.log(val,"--++="); 
    });

  }

  ngOnInit() {
  	this.seatingService.getSeats()
  	.subscribe
  	(data=>
    {   
    	this.seatingList=data;

    	console.log(this.seatingList,"-------");
    }
    ,error=>alert('error'));
  	
  }
 
 
  selectSeats(selection,index){
  		
    console.log(this.keys)
		console.log(selection.seat,index);
    
		if(this.selectedcount && !selection.seat.booked){
  		this.array1[this.array1.length]=selection;
    	this.array2[this.array2.length]=index;
    		if(selection.hall==='hall1'){
              console.log( this.seatingList['hall1'].seats[selection.rowindex][index].checked);
              this.seatingList['hall1'].seats[selection.rowindex][index].checked=true;

              this.selectedcount=this.selectedcount-1;

    		}
    		else{
    			 this.seatingList[selection.hall].seats[selection.rowindex][index].checked=true;
              this.selectedcount=this.selectedcount-1;
    		}
	  }
    else if(selection.seat.checked){
    		

    		 this.seatingList[selection.hall].seats[selection.rowindex][index].checked=false;

             this.selectedcount=this.selectedcount+1;
             for(var i=0;i<this.array2.length;i++){
             	if(this.array2[i]===index){
             		    this.array1.splice(i,1);
                    this.array2.splice(i,1);
                    console.log(this.array1,this.array2);
             	}
             
         }
    }
		       
  }
    book(){
    	
     this.seatingService.updateSeats(this.array1,this.array2);
    	for(var i=0;i<this.array2.length;i++){
    	  this.seatingList[this.array1[i].hall].seats[this.array1[i].rowindex][this.array2[i]].booked=true;
    	  this.seatingList[this.array1[i].hall].seats[this.array1[i].rowindex][this.array2[i]].checked=false;
        }
        
        this.selectedcount=2;
        this.array1.length=0;
        this.array2.length=0;

        console.log(this.seatingList);
        alert("successfully booked your ticket")


    }
    selectedOption(value){
      
     this.selectedcount=value;
     for(var i=0;i<this.array2.length;i++){
    
      this.seatingList[this.array1[i].hall].seats[this.array1[i].rowindex][this.array2[i]].checked=false;
        }
      
        this.array1.length=0;
        this.array2.length=0;

        console.log(this.seatingList);
    }
  

}


@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
       if(key!=='_id'){
        
         keys.push({key: key, value: value[key]});
       }
       
    }
    return keys;
  }
}

