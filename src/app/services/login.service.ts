import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { tokenName } from '@angular/compiler';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from './admin.service';
import { baseUrl } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  constructor( private http:HttpClient,private mat_snack:MatSnackBar,private router:Router,private admin :AdminService ) {}

  //generate token
  generateAndSaveToken(username:String,password:String)
  {
    return this.http.post(`${baseUrl}/token`,{username:username,password:password});
  }

  loginUser(token)
  {
    localStorage.setItem("token",token);
    return true;
  }

  isLoggedIn()
  {
    let token=localStorage.getItem('token');
    console.log(token);
    if(token===undefined || token==='' || token===null)
    {
      return false;
    }else{
      return true;
    }
 
 }

 logout()
 {
   localStorage.removeItem('token')
   localStorage.removeItem("user");
   return true;
 }


 getToken()
 {
   return localStorage.getItem("token");
 }

 //set user
 setUser(user)
 {
   localStorage.setItem("user",JSON.stringify(user))
 }
 //get the user
 getUser()
 {
   let user=localStorage.getItem("user");
   if(user!=null)
   {
     return JSON.parse(user);
   }
   return user;
 }

 getUserRole()
 {
   let user=this.getUser()
   return user.authorities[0].authority;
 }
}
