import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedIn=false;
  user:any;
  constructor(private login:LoginService) { }

  ngOnInit(): void {   
    this.loggedIn=this.login.isLoggedIn();
    this.user=this.login.isLoggedIn()?this.login.getUser():undefined;
  }

  

  logoutUser()
  {
   this.login.logout();
   location.reload()
  }
}
