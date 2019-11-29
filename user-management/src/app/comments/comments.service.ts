import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn:'root'
})
export class CommentsService{
    public userdata:any;
    comments:any;
    constructor(private http:HttpClient){}
    fetchUsers(){
        

        return  this.http.get("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=50 /")
        
    }
   
    getCommentInfo(id:any){
        return this.http.get("https://jsonplaceholder.typicode.com/comments?"+id)
    }
   

}