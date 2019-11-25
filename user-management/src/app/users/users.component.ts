import { UserService } from './../../services/user.service';
import { Component,TemplateRef} from '@angular/core';
import { Router } from "@angular/router";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers:[UserService]
})
export class UsersComponent  {
 
  modalRef: BsModalRef;
  config = {
    animated: true
  };
 
public users:any;
userdata:any;
key:any;


  

  constructor(private router:Router,private service:UserService,private modalService: BsModalService) { 
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

 /*change(event){ 

  var searchkey=event;
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
       change(event){
          var self=this;
         self.key=event;
        //console.log(self.key)
        if(self.key){
          self.users=self.service.userdata.filter(function(val,index){
            
            return val.id==self.key.id
          
          })
        }

        else{
          self.users=self.service.userdata;
        }
        

}

  
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
    
  }
  Modal(template1: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template1, this.config);
    
  }



}

  

