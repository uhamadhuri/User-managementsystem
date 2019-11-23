import { UsersModule } from './users/users.module';
import { HeaderComponent } from './../header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { RouterModule,Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
//import { PostComponent } from './post/post.component';
import { PostModule} from "./post/post.module";
import { CommentsModule} from "./comments/comments.module"


const App:any=[
  {path:'',
  pathMatch:"full",
  redirectTo:"users"},
  {
    path:"users",
    loadChildren:"./users/users.module#UsersModule"
  },
  {
    path:"post",
  loadChildren:"./post/post.module#PostModule"

  },
  {
    path:"comments",
    loadChildren:"./comments/comments.module#CommentsModule"
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent
   
    
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    

    
   
    RouterModule.forRoot(App)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
