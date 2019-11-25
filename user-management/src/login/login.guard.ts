import { Injectable } from "@angular/core";
import { CanActivate,Router } from '@angular/router';

@Injectable({
    providedIn:'root'
})
/*export class LoginGuard implements  CanActivate{
    CanActivate(){

    }
}*/
export class LoginGuard implements CanActivate{
    constructor(private route:Router){}
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        throw new Error("Method not implemented.");
    }

  /*  CanActivate(){
        if(localStorage.getItem("token"))
        return true;
        else
        return this.route.navigate(['login']);
    }*/

    CanActivate(){
        if(localStorage.getItem("token")=="uha123")
        return true;
        else
        return false;
    }
}

