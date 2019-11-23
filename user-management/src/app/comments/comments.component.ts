import { CommentsService } from './comments.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent  {

  public comments:any;
  userdata:any;
  
  
    
  
    constructor(private router:Router,private service:CommentsService) { 
      this.getUsers();
    }
    getUsers(){
      this.service.fetchUsers().subscribe(
          (res)=>{
              this.service.userdata=res;
              this.comments=res;
          }
        
      )
  }

  

}
