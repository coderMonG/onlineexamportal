import { LoginService } from './../../../services/login.service';
import { AdminService } from 'src/app/services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private admin:AdminService,private login:LoginService) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.login.logout()
    location.reload()
  }

}
