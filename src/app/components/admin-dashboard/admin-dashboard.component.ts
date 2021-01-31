import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private loader:LoaderService) { }

  ngOnInit(): void {
  }
  showLoader()
  {
    console.log("show loader button");
    
    this.loader.changeLoader(true);
  }

}
