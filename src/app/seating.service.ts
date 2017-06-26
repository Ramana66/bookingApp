import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx"

@Injectable()
export class SeatingService {
 person=[];

 baseUrl="http://localhost:3000/getseats";
  
	constructor(private http: Http) { }
	
	getSeats(){
   /* return this.http.get(this.baseUrl)
     .map((res: Response) => res.json())
     .subscribe((res: any) => {
       this.persons = res;
       console.log(this.persons);
     });*/
		return this.http.get(this.baseUrl)
        .map(res =>res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        });
		/*let result=Promise.resolve(EMPLOYEES);
	    console.log(result);
		return result;*/
	}
	updateSeats(input1,input2){
	
	for(var i=0;i<input2.length;i++){
     this.person[i] ={"object":input1[i],"index":input2[i]};
   
    }
   // this.headers = new Headers();
   // this.headers.append('Content-Type', 'application/json');  
	this.http.post('http://localhost:3000/updateseat',
      this.person)
      .subscribe(err => console.log(err));

}
authorizing(){
  return this.http.get('http://localhost:3000/login')
        .map((res) =>console.log(res))
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        });

}
}

