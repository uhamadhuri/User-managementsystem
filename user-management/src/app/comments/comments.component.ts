import { CommentsService } from './comments.service';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { PageChangedEvent } from 'ngx-bootstrap/pagination';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent  {

  public comments:any;
  userdata:any;
pnum:any;
size:any;

  
 
 
  
    
  
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
        pageChanged(event){
          this.pnum=event.page;
         //  console.log(pnum)
         if(this.pnum==1){
           this.size="_page=1&_limit=50"
         this.service.getCommentInfo(this.size).subscribe(
           (res)=>{
             this.comments=res
           }
         )}
         if(this.pnum==2){
           this.size="_page=2&_limit=50"
         this.service.getCommentInfo(this.size).subscribe(
           (res)=>{
             this.comments=res
           }
         )}
         if(this.pnum==3){
           this.size="_page=3&_limit=50"
         this.service.getCommentInfo(this.size).subscribe(
           (res)=>{
             this.comments=res
           }
         )} 
            if(this.pnum==4){
           this.size="_page=4&_limit=50"
         this.service.getCommentInfo(this.size).subscribe(
           (res)=>{
             this.comments=res
           }
         )}
         if(this.pnum==5){
           this.size="_page=5&_limit=50"
         this.service.getCommentInfo(this.size).subscribe(
           (res)=>{
             this.comments=res
           }
         )}
         if(this.pnum==6){
           this.size="_page=6&_limit=50"
         this.service.getCommentInfo(this.size).subscribe(
           (res)=>{
             this.comments=res
           }
         )}
         if(this.pnum==7){
           this.size="_page=7&_limit=50"
         this.service.getCommentInfo(this.size).subscribe(
           (res)=>{
             this.comments=res
           }
         )}
         if(this.pnum==8){
           this.size="_page=8&_limit=50"
         this.service.getCommentInfo(this.size).subscribe(
           (res)=>{
             this.comments=res
           }
         )}
         if(this.pnum==9){
           this.size="_page=9&_limit=50"
         this.service.getCommentInfo(this.size).subscribe(
           (res)=>{
             this.comments=res
           }
         )}
         if(this.pnum==10){
           this.size="_page=10&_limit=50"
         this.service.getCommentInfo(this.size).subscribe(
           (res)=>{
             this.comments=res
           }
         )} 
        }

      
      
      
}
