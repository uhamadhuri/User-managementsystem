import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn:'root'
})
export class PostService{
    public userdata:any;
    posts:any;
    constructor(private http:HttpClient){}
    fetchUsers1(){
        

        return this.http.get("https://jsonplaceholder.typicode.com/posts")
    }
    getuserInfo(id:any){
        return this.http.get("https://jsonplaceholder.typicode.com/posts/"+id)
    }
}