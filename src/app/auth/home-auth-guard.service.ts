import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

import { Observable } from "rxjs";

import { LoginService } from "../services/login.service";

@Injectable({
    providedIn: 'root'
})
export class HomeAuthGuard implements CanActivate {
    constructor(private _loginService: LoginService, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        if(this._loginService.isUserAuthenticated()) {
            return true;
        } else {
            this._router.navigate([''], {
                fragment: 'notAuthenticated'
            });
            return false;
        }
    }
}