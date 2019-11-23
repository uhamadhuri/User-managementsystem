import { RouterModule } from '@angular/router';
import { PostComponent } from './post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';


const rout:any=[
  {
    path:'',
    pathMatch:"full",
    redirectTo:"post"
  },
  {
    path:"post",
    component:PostComponent

  }
]
@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    RouterModule.forChild(rout)
  ]
})
export class PostModule { }
