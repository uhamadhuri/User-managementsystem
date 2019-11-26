import { UserService } from './../services/user.service';
import { LoginComponent } from './../login/login.component';
//import { UsersModule } from './users/users.module';
import { HeaderComponent } from './../header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { RouterModule,Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
//import { PostComponent } from './post/post.component';
//import { PostModule} from "./post/post.module";
//import { CommentsModule} from "./comments/comments.module";
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LoginGuard } from './../login/login.guard';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ViewComponent } from './view/view.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const App:any=[
  {path:'',
  pathMatch:"full",

  redirectTo:"login"},
  {
    path:"login",
    component:LoginComponent
  },
  
  {
    path:"users",
    loadChildren:"./users/users.module#UsersModule"
    
  
  },
  {
    path:"post",
  loadChildren:"./post/post.module#PostModule",
  CanActivate:[LoginGuard]

  },
  {
    path:"comments",
    loadChildren:"./comments/comments.module#CommentsModule",
    CanActivate:[LoginGuard]
  },
  {
    path:"view",
    component:ViewComponent 
  }
  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   NavbarComponent,
   LoginComponent,
   ViewComponent
   
    
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    

    
   
    RouterModule.forRoot(App),
    

    
   
    ModalModule.forRoot(),
    

    
   
    PaginationModule.forRoot(),
    

    
   
    TooltipModule.forRoot(),
    

    
   
    PopoverModule.forRoot(),
    

    
   
    AccordionModule.forRoot(),
    

    
   
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
