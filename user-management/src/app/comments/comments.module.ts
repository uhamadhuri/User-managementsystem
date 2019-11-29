import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { PaginationModule } from 'ngx-bootstrap/pagination';
const App:any=[
  {
    path:'',
    pathMatch:"full",
    redirectTo:"comments"
  },
  {
    path:"comments",
    component:CommentsComponent
  }
]

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    PaginationModule,
    FormsModule,
    RouterModule.forChild(App)
  ]
})
export class CommentsModule { }
