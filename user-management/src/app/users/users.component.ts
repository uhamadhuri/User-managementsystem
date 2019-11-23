import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent  {
  
public users:any;
userdata:any;


  

  constructor(private router:Router,private service:UserService) { 
    this.getUsers();
  }
  getUsers(){
    this.service.fetchUsers().subscribe(
        (res)=>{
            this.service.userdata=res;
            this.users=res;
        }
      
    )
}
/*onSearch(event){
  this.events.push({users:'',value:$event})
var key=$event.target.value;
console.log(key)

  var searchkey=event.target.value;
  if(searchkey){
      this.users=this.users.filter(res=>{
          var name=res.name.toLowerCase();
          return name.indexOf(searchkey)!==-1
      });
     
      }
      else
          
          {
              this.users=this.service.userdata;
          }
      
}*/
onSearch($event) {
/*  this.events.push({ name: '(search)', value: $event });*/

}
}




  

