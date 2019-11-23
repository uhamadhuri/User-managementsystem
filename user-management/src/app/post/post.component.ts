import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.scss']
})
export class PostComponent {
  public posts:any;
  userdata:any;

  constructor(private router:Router, private service:PostService) { 
    this.getUsers1();
  }
  getUsers1(){
    this.service.fetchUsers1().subscribe(
        (res)=>{
            this.service.userdata=res;
            this.posts=res;
        }
      
    )
}


 

}
