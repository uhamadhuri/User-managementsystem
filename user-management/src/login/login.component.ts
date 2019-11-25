import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:"app-login",
    templateUrl:"login.component.html",
    styleUrls:["login.component.scss"]
})
export class LoginComponent{
  public data:any;
    username:any;
    password:any;

 
    constructor(private route:Router){}
  /*  signin(username,password){
       // alert("ok")
       if(username.data.length<=0||password.data.length<=0){
        debugger
           return false
           
       }
       else if(username.data.length>=1||password.data.length>=1){
           
          // console.log("this is my project")
           return this.route.navigate(['home'])
       }
    }*/
   signin(){
        if(this.username=="uha"&&this.password=="madhuri")
        {
            localStorage.setItem("token","uha123");
            this.route.navigate(["users"])
        }
        else{
            alert("enter validate info")
        }
       }

}


