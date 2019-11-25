//import { LoginGuard } from './../../login/login.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './../../services/user.service';

import { Router,RouterModule } from "@angular/router";
import { UsersComponent } from './users.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LoginGuard } from "src/login/login.guard";
import { PopoverModule } from 'ngx-bootstrap/popover';




const Route:any=[
  {
    path:'',
    pathMatch:"full",
    redirectTo:"users"
  },
 
  {
    path:"users",
    component: UsersComponent,
    CanActivate:[LoginGuard]
  }
  
]

@NgModule({
  declarations: [  UsersComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    ModalModule ,
    TooltipModule ,
    PopoverModule,
    
    RouterModule.forChild(Route)
  ],

})
export class UsersModule { 
 /* public users:any;
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
}*/

}
