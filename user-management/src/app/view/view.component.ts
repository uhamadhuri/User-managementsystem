import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent  {

 
    public users:any;
    userdata:any;
    key:any;
    
    
      
    
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
    
}
