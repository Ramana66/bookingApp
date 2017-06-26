import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

 @Injectable()
export class SharedService {
selectedData=[];

//private _navItemSource = new BehaviorSubject<string>("string");
public space: Subject<string> = new BehaviorSubject<string>("login");
  // Observable navItem stream
  
  // service command
  
	list=[{name:"telugu",data:['dhruva','nenulocal',"S3"]},
          {name:"hindi",data:['llb','kaabil','dangal']},
          {name:"english",data:['xxx returns','ff7']},
          {name:"cricket",data:['ind vs sl','ind vs rsa']},
          {name:"football",data:['laliga','UEFA']},
          {name:"hockey",data:['ind vs pak','ned vs aus']},
          {name:"sahas",data:['climbing','adventure']},
          {name:"exhibition",data:['wonderla']}];

categories=[{id:1,name:"movies",sub:['hindi','english','telugu']},
            {id:1,name:"sports",sub:['cricket','football','hockey']},
            {id:1,name:"plays",sub:['aaaa','bbbb','cccc']},
            {id:1,name:"events",sub:['sahas','4k run','exhibition']}];
  

saveData(name,value){

for(var i=0;i<this.list.length;i++){
	if(name===this.list[i].name){
		this.selectedData=this.list[i].data;
	}
}
console.log(this.selectedData);
}

getData(){
	return this.categories;
}
getSelectedData(){
	console.log(this.selectedData);
	return this.selectedData;
}
getList(){
	return this.list;
}
setLoginName(email){
  //this.loginName=email;
  alert(email)
  this.space.next(email);
//  this.nameUpdated.emit(this.loginName);

  alert("username set")
}
  
} 


