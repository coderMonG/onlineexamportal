import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  show=false

  constructor(private loader:LoaderService) { }

  ngOnInit(): void {
    this.loader.subsVar=this.loader.event.subscribe((value:boolean)=>{
      this.show=value
    })
  }




}
