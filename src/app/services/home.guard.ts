import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor( private login:LoginService,private route:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.login.isLoggedIn())
      {
        return true;
      }
      
      if(this.login.isLoggedIn()&&this.login.getUserRole()=='ROLE_ADMIN')
      {
        this.route.navigate(["/dashboard"])
      }
      else if(this.login.isLoggedIn()&&this.login.getUserRole()=='ROLE_NORMAL')
      {
        this.route.navigate(["/user/0/all"])
      }

      return false;
  }
  
}
